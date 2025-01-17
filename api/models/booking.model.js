import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pickupAddress: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now },
  items: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    quantity: { type: Number, default: 1 }
  }],
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed'],
    default: 'pending'
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;

