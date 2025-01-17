import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  relocationDetails: {
    baseAmount: { type: Number, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookingItem' }]
  },
  addOns: [{
    type: { type: String, enum: ['Cartons', 'Carpentry'] },
    quantity: Number,
    price: Number
  }],
  payment: {
    bookingAmount: Number,
    pickupAmount: Number,
    unloadingAmount: Number,
    totalAmount: Number,
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed'],
      default: 'pending'
    }
  },
  extras: {
    cartons: { quantity: Number, price: Number },
    isMember: { type: Boolean, default: false }
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;

