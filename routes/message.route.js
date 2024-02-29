import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/get-messages/:friendId", checkAuth, getMessages);

export default router;
