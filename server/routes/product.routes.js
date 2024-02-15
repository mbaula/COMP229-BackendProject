import express from 'express';
import productCtrl from '../controllers/product.controller.js';

const router = express.Router();

router.param('productId', productCtrl.productByID);

router.get('/products', productCtrl.list);
router.get('/products/:productId', productCtrl.read);
router.get('/products/search', productCtrl.findByName);

router.post('/products', productCtrl.create);

router.put('/products/:productId', productCtrl.update);

router.delete('/products/:productId', productCtrl.remove);
router.delete('/products', productCtrl.removeAll);

export default router;