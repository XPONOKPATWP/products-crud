// routes/product.route.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Επιστροφή όλων των προϊόντων
router.get('/api/products', productController.findAll);

// Επιστροφή ενός προϊόντος με βάση το ID
router.get('/api/products/:id', productController.findOne);

// Δημιουργία νέου προϊόντος
router.post('/api/products', productController.create);

// Ενημέρωση προϊόντος με βάση το ID
router.patch('/api/products/:id', productController.update);

// Διαγραφή προϊόντος με βάση το ID
router.delete('/api/products/:id', productController.delete);

module.exports = router;
