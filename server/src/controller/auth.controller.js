import User from "../model/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import FoodPartner from "../model/foodPartner.model.js"

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
    res.clearCookie("token")
    res.status(200).json({
        message: "user logged out successfully"
    })
}

// food partner
async function foodPartnerRegister(req, res){
    const {address, email, password, businessName, contactName, contact} = req.body

    if(
        [address, email, password, businessName, contactName, contact].some((field)=>field.trim() === '')
    ){
        return res.status(400).json({
            message: "please enter details"
        })
    }

   try {
        const isExist = await FoodPartner.findOne({email})

        if(isExist){
            return res.status(400).json({
                message: "Food partner already exist"
            })
        }
 
        const hashPass = await bcrypt.hash(password, 10)

        const foodPartner = await FoodPartner.create({
            businessName,
            contactName,
            contact,
            address,
            email,
            password: hashPass
        })

        const token = jwt.sign(
            {id: foodPartner._id},
            process.env.JWT_SECRET
        )

        res.cookie("token", token)

        res.status(201).json({
            message: "user created successfully",
            foodPartner:{
                id: foodPartner._id,
                businessName: foodPartner.businessName,
                contactName: foodPartner.contactName,
                contact: foodPartner.contact,
                email: foodPartner.email,
                address: foodPartner.address
            }
        })
    }catch (error) {
        return res.status(400).json({
            error: error.message
        })
   }

}

async function foodPartnerLogin(req, res){
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message: "please enter details"
        })
    }

   try {
        const foodPartner = await FoodPartner.findOne({email})

        if(!foodPartner){
            return res.status(400).json({
                message: "foodPartner does not exist"
            })
        }
        
        const passVerify = bcrypt.compare(password, foodPartner.password)

        if(!passVerify){
            return res.status(400).json(
                {message: "password is incorrect"}
            )
        }

        const token = jwt.sign(
            {id: foodPartner._id},
            process.env.JWT_SECRET
        )

        res.cookie("token", token)

        res.status(201).json({
            message: "logged in successfully",
            foodPartner:{
                id: foodPartner._id,
                businessName: foodPartner.businessName,
                contactName: foodPartner.contactName,
                contact: foodPartner.contact,
                email: foodPartner.email,
                address: foodPartner.address
            }
        })

    }catch (error) {
        return res.status(400).json({
            error: error.message
        })
   }

}

async function foodPartnerLogout(req, res){
    res.clearCookie("token")
    res.status(200).json({
        message: "foodPartner logged out successfully"
    })
}

export {
    register, 
    login, 
    logout,
    foodPartnerRegister,
    foodPartnerLogin,
    foodPartnerLogout
}
