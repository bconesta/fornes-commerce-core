import productsService from "../services/productsService.js";
import path from "path"
//import Imagen from "../img/all.png"

const getAllProducts = async (req, res) => {
    const allProducts = await productsService.getAllProducts();
    res.send(allProducts);
};

const getProductById = async (req, res) => {
    const product = await productsService.getProductById(req.params.productId);
    res.send(product);
};

const getProductImageById = async (req, res) => {
    const imageName = await productsService.getImageNameById(req.params.productId);
    res.sendFile(imageName[0].images, {root: path.join("./src/img")});
}

const createProduct = async (req, res) => {
    const body = req.body;
    if(!body.title || !body.price){
        return;
    }
    const newProduct = {
        stock: body.stock || 0,
        title: body.title,
        price: body.price,
        shortDescription: body.shortDescription,
        longDescription: body.longDescription,
        brand: body.brand,
        category: body.category || "default",
        images: body.images,
    }
    const createdProduct = await productsService.createProduct(newProduct);
    res.send(createdProduct);
};

const updateProductById = (req, res) => {
    const updatedProduct = productsService.updateProductById(req.params.productId);
    res.send(`Update product ${req.params.productId}`);
};

const deleteProductById = (req, res) => {
    const deletedProduct = productsService.deleteProductById(req.params.productId);
    res.send(`Delete product ${req.params.productId}`)    
};

export default { 
    getAllProducts,
    getProductById,
    getProductImageById,
    createProduct,
    updateProductById,
    deleteProductById 
}