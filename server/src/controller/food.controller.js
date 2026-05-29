import Food from "../model/food.model.js";

async function createFood(req, res){
    const {name, description} = req.body
    const video = req.file
}

export {createFood}