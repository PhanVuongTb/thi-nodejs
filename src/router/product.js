import express from "express";
import { chiTiet, list, post, put, xoa } from "../controlles/product";

const router = express.Router();

router.get("/products", list)
router.get("/products/:id", chiTiet)
router.delete("/products/:id", xoa)
router.put("/products/:id", put)
router.post("/products", post)


export default router;