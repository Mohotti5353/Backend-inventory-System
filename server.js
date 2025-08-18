import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";

dotenv.config();


connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/inventory", inventoryRoutes);


app.get("/", (req, res) => {
  res.send(" Fuel Inventory API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
