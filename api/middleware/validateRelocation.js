const validateRelocation = (req, res, next) => {
  const { locationType, sourceLocation, destinationLocation, mobileNumber } = req.body;
  console.log(req.body);

  if (!locationType || !sourceLocation || !destinationLocation || !mobileNumber) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  if (!['within', 'between', 'truck'].includes(locationType)) {
    return res.status(400).json({ success: false, error: 'Invalid location type' });
  }

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobileNumber)) {
    return res.status(400).json({ success: false, error: 'Invalid mobile number format' });
  }

  next();
};

export default validateRelocation;
  