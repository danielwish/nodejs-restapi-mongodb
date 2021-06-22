import product from "../models/product";

export const selectProducts = async (req, res) => {
    const products = await product.find();
    res.json(products)
}

export const selectProductById = (req, res) => {
    
}

export const insertProduct = async (req, res) => {
    const { name, category, price, imgURL } = req.body

    const newProduct = new product({name, category, price, imgURL});

    const productSave = await newProduct.save()

    res.status(201).json(productSave)
}

export const updateProductById = (req, res) => {
    
}

export const deleteProductById = (req, res) => {
    
}