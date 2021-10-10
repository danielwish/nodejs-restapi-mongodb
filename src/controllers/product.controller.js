import Product from "../models/product";

export const selectProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

export const selectProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
}

export const insertProduct = async (req, res) => {
    const { name, category, price, imgURL } = req.body;
    const newProduct = new Product({name, category, price, imgURL});
    const productSave = await newProduct.save();
    res.status(201).json(productSave);
}

export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new : true });
    res.status(200).json(updatedProduct);
}

export const deleteProductById = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json();
}