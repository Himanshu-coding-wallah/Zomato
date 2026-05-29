import express from "express"
import { register, login, logout, foodPartnerRegister, foodPartnerLogin, foodPartnerLogout } from "../controller/auth.controller.js"

const authRouter = express.Router()

// user routes
authRouter.route("/register").post(register)
authRouter.route("/login").post(login)
authRouter.route("/logout").post(logout)

// food partner routes
authRouter.route("/food-partner/register").post(foodPartnerRegister)
authRouter.route("/food-partner/login").post(foodPartnerLogin)
authRouter.route("/food-partner/logout").post(foodPartnerLogout)

export default authRouter