import product from "../models/product";

export const list = async (req, res) => {
    try {
        const products = await product.find().limit(20).sort({ createAt: -1 }).exec();
        res.json(products)
    } catch (error) {
        res.json({ message: "Khong thay data" })
    }
}
export const chiTiet = async (req, res) => {
    try {
        const products = await product.findOne({ _id: req.params.id }).exec();
        res.json(products)
    } catch (error) {
        res.json({ message: "Khong thay data" })
    }
}
export const put = async (req, res) => {
    try {
        const products = await product.find().findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        res.json(products)
    } catch (error) {
        res.json({ message: "Khong thay data" })
    }
}
export const post = async (req, res) => {
    try {
        const products = await product(req.body).save();
        res.json(products)
    } catch (error) {
        res.json({ message: "Khong thay data" })
    }
}
export const xoa = async (req, res) => {
    try {
        const products = await product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(products)
    } catch (error) {
        res.json({ message: "Khong thay data" })
    }
}