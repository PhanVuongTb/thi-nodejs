import mongoose from "mongoose";

const products = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 32,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model("product", products)