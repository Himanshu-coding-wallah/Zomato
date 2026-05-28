import User from "../model/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


async function register(req, res){
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({
            message: "please enter details"
        })
    }

   try {
        const isExist = await User.findOne({email})

        if(isExist){
            return res.status(400).json({
                message: "user already exist"
            })
        }
 
        const hashPass = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashPass
        })

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET
        )

        res.cookie("token", token)

        res.status(201).json({
            message: "user created successfully",
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    }catch (error) {
        return res.status(400).json({
            error: error.message
        })
   }

}

async function login(req, res){
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message: "please enter details"
        })
    }

   try {
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message: "user does not exist"
            })
        }
        
        const passVerify = bcrypt.compare(password, user.password)

        if(!passVerify){
            return res.status(400).json(
                {message: "password is incorrect"}
            )
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET
        )

        res.cookie("token", token)

        res.status(201).json({
            message: "logged in successfully",
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        })

    }catch (error) {
        return res.status(400).json({
            error: error.message
        })
   }

}

async function logout(req, res){
    
}

export {register, login, logout}