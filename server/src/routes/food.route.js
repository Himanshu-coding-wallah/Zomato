import express from "express"
import { createFood } from "../controller/food.controller.js"
import authFoodPartnerMiddleware from "../middleware/authFoodPartner.middleware.js"

const foodRouter = express.Router()

foodRouter.route("/").post(authFoodPartnerMiddleware, createFood)

export default foodRouter