import Food from "../model/food.model.js";
import uploadToImageKit from "../utils/uploadToImageKit.util.js";
import {v4 as uuidv4 } from "uuid"

async function createFood(req, res){

    const {name, description} = req.body

    if(!name || !description){
        return res.status(400).json({
            message: "please send the name and details of the video"
        })
    }

    const buffer = req.file?.buffer?.toString("base64")

    if(!buffer){
        return res.status(400).json({
            message: "please upload the video"
        })
    }

    const uploadedFile = await uploadToImageKit(buffer, uuidv4())

    const foodItem = await Food.create({
        name,
        description,
        video: uploadedFile?.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "food item created",
        foodItem
    })
}

async function getFoodItems(req, res){
    const foodItems = await Food.find()
    return res.status(200).json({
        message: "food item fetched successfully",
        foodItems
    })
}

export {createFood, getFoodItems}