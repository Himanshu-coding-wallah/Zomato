import User from "../model/user.model.js"
import jwt from "jsonwebtoken"

async function userAuthMiddleware(req, res, next){
    const token = req.cookies.token

    if(!token){
        return res.status(400).json({
            message: "please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.id)

        req.user = user
        next()
        
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export default userAuthMiddleware