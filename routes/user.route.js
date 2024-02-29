import express from "express";
import {
  getCurrentUser,
  getUserFriends,
} from "../controllers/user.controller.js";
import { checkAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/get-current-user", checkAuth, getCurrentUser);
router.get("/get-user-friends", checkAuth, getUserFriends);

export default router;
