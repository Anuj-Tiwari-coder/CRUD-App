import express from "express";
import { create, Delete, getAll, getOne, Update } from "../controller/userController.js";

const route = express.Router()

route.post("/create", create)
route.get("/getall", getAll)
route.get("/getone/:id", getOne)
route.put("/update/:id", Update)
route.delete("/delete/:id", Delete)
export default route