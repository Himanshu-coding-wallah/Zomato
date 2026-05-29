import FoodPartner from "../model/foodPartner.model.js";
import jwt from "jsonwebtoken"

async function authFoodPartnerMiddleware(req, res, next){
    const token = req.cookies?.token

    if(!token){
        return res.status(400).json({
            message: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const foodPartner = await FoodPartner.findById(decoded._id)
        req.foodPartner = foodPartner
        next()

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }

}

export default authFoodPartnerMiddleware