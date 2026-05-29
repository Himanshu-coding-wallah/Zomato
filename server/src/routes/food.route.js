import express from "express"
import { createFood, getFoodItems } from "../controller/food.controller.js"
import authFoodPartnerMiddleware from "../middleware/authFoodPartner.middleware.js"
import upload from "../middleware/multer.middleware.js"
import userAuthMiddleware from "../middleware/authUser.middleware.js"

const foodRouter = express.Router()

// protected route
foodRouter.route("/").post(authFoodPartnerMiddleware, upload.single("video"), createFood)
foodRouter.route("/").get(userAuthMiddleware, getFoodItems)

export default foodRouter