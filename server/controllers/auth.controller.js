import { conn } from "../server.js";

export function signup(req, res) {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ error: "Please fill all input fields" });
  }

  const sql = `insert into users (name, username, email, password) values (?, ?, ?, ?)`;
  const values = [name, username, email, password];

  conn.query(sql, values, function (err, result) {
    if (err) throw err;

    return res.status(201).json({ message: "User created" });
  });
}

export async function login(req, res) {
  c;
}
