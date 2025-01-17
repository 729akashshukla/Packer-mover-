import express from 'express';
const router = express.Router();

import { yourBooking } from '../controllers/booking.Controller.js';


router.post('/yourBookings', yourBooking);

export default router;
