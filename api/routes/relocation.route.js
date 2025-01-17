import express from 'express';
import { createRelocationRequest } from '../controllers/relocation.controller.js';
import validateRelocation from '../middleware/validateRelocation.js';

const router = express.Router();

router.post("/relocation", validateRelocation, createRelocationRequest);

export default router;