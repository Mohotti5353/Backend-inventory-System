import express from "express";
import {
  getAllFuelItems,
  createFuelItem,
  
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getAllFuelItems);
router.post("/", createFuelItem);



export default router;
