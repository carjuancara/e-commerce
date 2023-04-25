const { Router } = require('express');
const productsRouter = Router();
const { handleProductssAll, handleProductsById, handleProductsCreate } = require('../handlers/ProductsHandler')


productsRouter.get('/', handleProductssAll)
productsRouter.get('/:productsId', handleProductsById)
productsRouter.post('/', handleProductsCreate)

module.exports = productsRouter