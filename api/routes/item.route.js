import express from 'express';
import { getItems, getItemsBySubcategory}from '../controllers/item.controller.js';


const router = express.Router();

router.get('/items', getItems);
router.get('/items/:subcategory', getItemsBySubcategory);

export default router;