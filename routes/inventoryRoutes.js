import express from "express";
import {
  getAllFuelItems,
  createFuelItem,
   updateFuelItem,
  deleteFuelItem,

  
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getAllFuelItems);
router.post("/", createFuelItem);
router.put("/:id", updateFuelItem);
router.delete("/:id", deleteFuelItem);



export default router;
