import express from "express";
import { getUserDate, registerUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/getUser", getUserDate);

export default userRouter;