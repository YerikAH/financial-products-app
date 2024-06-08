const products = require("../data/products");

const getProducts = (req, res) => {
  res.status(200).json({ data: products });
};

const createProduct = (req, res) => {
  const { id, name, description, logo, date_release, date_revision } = req.body;

  if (!id || id.length < 3 || id.length > 10) {
    return res.status(400).json({ message: "Invalid id" });
  }

  if (products.find((product) => product.id === id)) {
    return res
      .status(400)
      .json({ message: "Product with this id already exists" });
  }

  if (!name || name.length < 5 || name.length > 100) {
    return res.status(400).json({ message: "Invalid name" });
  }

  if (!description || description.length < 10 || description.length > 200) {
    return res.status(400).json({ message: "Invalid description" });
  }

  if (!logo) {
    return res.status(400).json({ message: "Logo is required" });
  }

  const releaseDate = new Date(date_release);
  const revisionDate = new Date(date_revision);

  if (isNaN(releaseDate) || releaseDate < new Date()) {
    return res.status(400).json({ message: "Invalid release date" });
  }

  if (
    isNaN(revisionDate) ||
    revisionDate.getFullYear() !== releaseDate.getFullYear() + 1
  ) {
    return res.status(400).json({ message: "Invalid revision date" });
  }

  const newProduct = {
    id,
    name,
    description,
    logo,
    date_release,
    date_revision,
  };
  products.push(newProduct);
  res
    .status(200)
    .json({ message: "Product added successfully", data: newProduct });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, logo, date_release, date_revision } = req.body;

  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (name && (name.length < 5 || name.length > 100)) {
    return res.status(400).json({ message: "Invalid name" });
  }

  if (description && (description.length < 10 || description.length > 200)) {
    return res.status(400).json({ message: "Invalid description" });
  }

  if (logo && !logo) {
    return res.status(400).json({ message: "Logo is required" });
  }

  const releaseDate = new Date(date_release);
  const revisionDate = new Date(date_revision);

  if (date_release && (isNaN(releaseDate) || releaseDate < new Date())) {
    return res.status(400).json({ message: "Invalid release date" });
  }

  if (
    date_revision &&
    (isNaN(revisionDate) ||
      revisionDate.getFullYear() !== releaseDate.getFullYear() + 1)
  ) {
    return res.status(400).json({ message: "Invalid revision date" });
  }

  if (name) product.name = name;
  if (description) product.description = description;
  if (logo) product.logo = logo;
  if (date_release) product.date_release = date_release;
  if (date_revision) product.date_revision = date_revision;

  res
    .status(200)
    .json({ message: "Product updated successfully", data: product });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(productIndex, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
