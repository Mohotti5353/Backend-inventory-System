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
export const updateFuelItem = async (req, res) => {
  try {
    const updated = await FuelItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Fuel item not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteFuelItem = async (req, res) => {
  try {
    const item = await FuelItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Fuel item not found" });
    await item.deleteOne();
    res.json({ message: "Fuel item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
