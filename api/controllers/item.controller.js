import Item from '../models/item.model.js';

export const getItems = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const items = await Item.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItemsBySubcategory = async (req, res) => {
  try {
    const items = await Item.find({ subcategory: req.params.subcategory });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

