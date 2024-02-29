import { conn } from "../server.js";

export function getCurrentUser(req, res) {
  if (!req.userId) {
    return res.redirect("http://localhost:3000/login");
  }

  const userId = req.userId;

  const sql = "select * from users where id = ?";
  const values = [userId];

  conn.query(sql, values, (err, result) => {
    if (result.length === 0) {
      return res.status(400).json({ error: "user not found" });
    }

    const user = result[0];

    user.password = undefined;

    res.status(200).json({ user });
  });
}

export function getUserFriends(req, res) {
  const userId = req.userId;

  const sql =
    "SELECT users.id, users.name, users.username, users.email, users.profilePic FROM friendships JOIN users ON friendships.friendId = users.id WHERE friendships.userId = ?;";
  const values = [userId];

  conn.query(sql, values, (err, result) => {
    if (err) throw err;

    return res.status(200).json(result);
  });
}
