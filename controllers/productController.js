const Product = require('../models/product');

//  create a new product
async function createProduct(req, res)
{
    try
    {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(err)
    {
        res.status(500).json({error:err.message})
    }
}
async function getAllProducts(req, res)
{
    try
    {
        const products = await Products.find();
        res.json(products);
    }
    catch (error)
    {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createProduct,
    getAllProducts,
};
