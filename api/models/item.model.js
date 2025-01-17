import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['furniture', 'appliances', 'kitchen', 'vehicle', 'miscellaneous'],
    required: true
  },
  subcategory: { type: String, required: true },
  basePrice: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;

