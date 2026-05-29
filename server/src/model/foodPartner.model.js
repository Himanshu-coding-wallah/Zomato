import mongoose from "mongoose";
import { stringify } from "uuid";

const foodPartnerSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
    },
    contactName: {
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const FoodPartner = mongoose.model("FoodPartner", foodPartnerSchema)
export default FoodPartner