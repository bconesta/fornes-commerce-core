import products from "../db/products.js";
import { v4 as uuid } from "uuid";

const getAllProducts = () => {
    const allProducts = products.getAllProducts();
    return allProducts;
};
const getProductById = (id) => {
    const product = products.getProductById(id);
    return product;
};
const getImageNameById = (id) => {
    const imageName = products.getImageNameById(id);
    return imageName;
}
const createProduct = (newProduct) => {
    const productToInsert = {
        id: uuid(),
        ...newProduct,
        createdAt : new Date().toLocaleString("es-AR"),
        updatedAt : new Date().toLocaleString("es-AR")
    }
    const createdProduct = products.createProduct(productToInsert);
    return createdProduct;
};
const updateProductById = () => {
    return;
};
const deleteProductById = () => {
    return;
};

export default {
    getAllProducts,
    getProductById,
    getImageNameById,
    createProduct,
    updateProductById,
    deleteProductById
};