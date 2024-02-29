import { conn } from "../server.js";

export function getMessages(req, res) {
  const userId = req.userId;
  const { friendId } = req.params;

  const sql =
    "SELECT content FROM messages WHERE (senderId = ? and receiverId = ?) or (senderId = ? and receiverId = ?) order by createdAt Desc;";
  const values = [userId, friendId, friendId, userId];

  conn.query(sql, values, (err, result) => {
    if (err) throw err;

    res.status(200).json(result);
  });
}
