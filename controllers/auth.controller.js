import { conn } from "../server.js";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken.js";
import "dotenv/config.js";
import bcrypt from "bcrypt";

export function signup(req, res) {
  const { name, username, email, password } = req.body;
  const profilePic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScY-fYDvwUurI-QAFjm7WP3_EFpcozxr28v3dg6kKt0g&s";

  //confirm input
  if (!name || !username || !email || !password) {
    return res.status(400).json({ error: "Please fill all input fields" });
  }

  //find duplicate username and email
  const findDupSql = "select * from users where username = ? or email = ?";
  const findDupSqlValues = [username, email];

  conn.query(findDupSql, findDupSqlValues, (err, result) => {
    if (err) throw err;

    const isDuplicate = result.length > 0;

    if (isDuplicate) {
      return res
        .status(400)
        .json({ error: "username or email already registered" });
    }
  });

  //hash password and insert to DB
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql =
    "insert into users (name, username, email, password, profilePic) values(?, ?, ?, ?, ?)";
  const values = [name, username, email, hashedPassword, profilePic];

  conn.query(sql, values, (err, result) => {
    if (err) throw err;

    res.status(201).json({ message: "user created" });
  });
}

export function login(req, res) {
  const { email, password } = req.body;

  //confirm input
  if (!password || !email) {
    return res.status(400).json({ error: "Please fill all input fields" });
  }

  // find user and compare password
  const sql = "select * from users where email = ?";
  const values = [email];

  let user;

  conn.query(sql, values, (err, result) => {
    user = result[0];

    const isPasswordCorrect = bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "email or password incorrect" });
    }

    user.password = undefined;

    // generate jwt token and send via cookie
    const token = generateToken(user.id);

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60,
      httpOnly: true,
    });

    return res.json({ user: result[0] });
  });
}

export function checkAuth(req, res, next) {
  const token = req.cookies["jwt"];

  if (!token) {
    return res.redirect("http://localhost:3000/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    return next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
}

export function logout(req, res) {
  if (req.userId) {
    return res.status(400).json({ error: "user already logged out" });
  }

  res.clearCookie("jwt");

  return res.status(200).json({ message: "user logged out" });
}
