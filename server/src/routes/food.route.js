import express from "express"
import { createFood } from "../controller/food.controller.js"
import authFoodPartnerMiddleware from "../middleware/authFoodPartner.middleware.js"
import upload from "../middleware/multer.middleware.js"

const foodRouter = express.Router()

// protected route
foodRouter.route("/").post(authFoodPartnerMiddleware, upload.single("video"), createFood)

export default foodRouter