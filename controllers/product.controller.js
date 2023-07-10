import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const doc = await Product.find();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const doc = await Product.find({ categoryID: req.params.categoryID });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    let doc = new Product(req.body);
    let result = await doc.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    let doc = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
