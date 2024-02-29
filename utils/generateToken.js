import jwt from "jsonwebtoken";
import "dotenv/config";

export function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}
