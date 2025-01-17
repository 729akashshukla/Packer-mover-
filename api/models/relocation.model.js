import mongoose from 'mongoose';

const relocationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  locationType: {
    type: String,
    enum: ['within', 'between', 'truck'],
    required: true
  },
  selectedCity: {
    type: String,
    required: function() {
      return this.locationType === 'within' || this.locationType === 'truck';
    }
  },
  sourceLocation: {
    type: String,
    required: true
  },
  destinationLocation: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  estimatedPrice: {
    type: Number
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Relocation = mongoose.model('Relocation', relocationSchema);
export default  Relocation;