import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routeProducts from "./router/product"
import routeAuth from "./router/auth"

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

app.use("/api", routeProducts);
app.use("/api", routeAuth);


// connnect database
mongoose.connect('mongodb://127.0.0.1:27017/baithi1')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})