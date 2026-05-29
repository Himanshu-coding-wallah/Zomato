import Food from "../model/food.model.js";
import uploadToImageKit from "../utils/uploadToImageKit.util.js";

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

    const uploadedFile = await uploadToImageKit(buffer)

    const foodItem = await Food.create({
        name,
        description,
        video: uploadedFile?.url
    })

    res.status(201).json({
        message: "food item created",
        foodItem: uploadedFile
    })
}

export {createFood}