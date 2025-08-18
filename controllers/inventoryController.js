import FuelItem from "../models/FuelItem.js";


export const getAllFuelItems = async (req, res) => {
  try {
    const items = await FuelItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createFuelItem = async (req, res) => {
  try {
    const item = new FuelItem(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
