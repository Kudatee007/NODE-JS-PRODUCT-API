const router = require('express').Router();
const uploadImage = require('../controllers/uploadController');
const { getProducts, createProduct } = require('../controllers/productController')

router.route('/').get(getProducts).post(createProduct);
router.post('/upload', uploadImage);



module.exports = router;