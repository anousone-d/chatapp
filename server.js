import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql";
import cookieParser from "cookie-parser";

import { checkAuth } from "./controllers/auth.controller.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const currentDir = path.resolve(__dirname);

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(currentDir, "public")));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);

app.get("/", checkAuth, (req, res) => {
  const htmlFilePath = path.join(currentDir, "public", "html", "chat.html");
  res.sendFile(htmlFilePath);
});

app.get("/login", (req, res) => {
  const isAuthenticated = req.cookies["jwt"];

  if (isAuthenticated) {
    return res.redirect("http://localhost:3000/chat");
  }

  const htmlFilePath = path.join(currentDir, "public", "html", "login.html");
  res.sendFile(htmlFilePath);
});

app.get("/signup", (req, res) => {
  const isAuthenticated = req.cookies["jwt"];

  if (isAuthenticated) {
    return res.redirect("http://localhost:3000/chat");
  }

  const htmlFilePath = path.join(currentDir, "public", "html", "signup.html");
  res.sendFile(htmlFilePath);
});

app.get("/chat", checkAuth, (req, res) => {
  const htmlFilePath = path.join(currentDir, "public", "html", "chat.html");

  res.sendFile(htmlFilePath);
});

export const conn = mysql.createConnection({
  host: "localhost",
  user: "chatapp",
  password: "chatapp",
  database: "chatapp",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("DB connected!");

  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});

// Start the server
