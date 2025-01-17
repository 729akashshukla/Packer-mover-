import Order from '../models/Order';

export const createOrder = async ({ body }, res) => {
  try {
    const { relocationDetails, addOns, payment } = body;

    const order = new Order({
      relocationDetails,
      addOns,
      payment: {
        ...payment,
        bookingAmount: payment.totalAmount * 0.15,
        pickupAmount: payment.totalAmount * 0.70,
        unloadingAmount: payment.totalAmount * 0.15,
      },
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
