import User from "../models/user.model.js";
import Relocation from "../models/relocation.model.js";
// import bcryptjs from "bcryptjs";


const calculateEstimatedPrice = (locationType, sourceLocation, destinationLocation) => {
  const basePrice = 1000;
  const pricePerKm = 50;
  const estimatedDistance = 10; // Replace with real distance calculation
  return basePrice + pricePerKm * estimatedDistance;
};

export const createRelocationRequest = async (req, res) => {
  try {
    const { locationType, selectedCity, sourceLocation, destinationLocation, mobileNumber } = req.body;
    console.log(req.body);

    let user = await User.findOne({ mobileNumber });
    if (!user) {
      user = await User.create({ mobileNumber });
      // hashedMobileno = bcryptjs.hashSync(mobileNumber, 10);
      // await User.updateOne(
      //   { _id: user._id },
      //   { $set: { mobileNumber: hashedMobileno } }
      // );
    }

    const estimatedPrice = calculateEstimatedPrice(locationType, sourceLocation, destinationLocation);

    const relocation = await Relocation.create({
      userId: user._id,
      locationType,
      selectedCity,
      sourceLocation,
      destinationLocation,
      estimatedPrice,
    });

    res.status(201).json({
      success: true,
      data: {
        relocationId: relocation._id,
        estimatedPrice,
        status: relocation.status,
      },
    });
  } catch (error) {
    console.error('Relocation request error:', error);
    res.status(500).json({ success: false, error: 'Error processing relocation request' });
  }
};