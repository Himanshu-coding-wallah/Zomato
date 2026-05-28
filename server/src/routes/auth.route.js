import express from "express"
import { register, login, logout } from "../controller/auth.controller.js"

const authRouter = express.Router()

authRouter.route("/register").post(register)
authRouter.route("/login").post(login)
authRouter.route("/logout").post(logout)

export default authRouter