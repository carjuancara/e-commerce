
const { Products } = require('../db');




const handleProductsAll = async (req, res) => {
  const { name } = req.query
 
}


const handleProductById = async (req, res) => {
  const { idProduct } = req.params;
  
}




module.exports = {
  handleProductsAll,
  handleProductById,

}