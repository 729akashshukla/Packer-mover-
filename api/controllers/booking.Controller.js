import Booking from '../models/booking.model.js';

export const yourBooking = async (req, res) => {
  try {
    const { pickupAddress, deliveryAddress, items } = req.body;
    const booking = new Booking({
      pickupAddress,
      deliveryAddress,
      items
    });
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



