import { createPool } from 'mysql2/promise';
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from '../config.js';

const db = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

const getAllProducts = async () => {
    const [result] = await db.query("SELECT * FROM products ORDER BY title;");
    return result;
}

const getProductById = async (id) => {
    const [result] = await db.query(`SELECT * FROM products WHERE id = "${id}"`);
    return result;
}

const getImageNameById = async (id) => {
    const [result] = await db.query(`SELECT images FROM products WHERE id = "${id}"`);
    return result;
}

const createProduct = async (product) => {
    const [result] = await db.query(`INSERT INTO products(id, stock, title, price, shortDescription, longDescription, brand, category, images, createdAt, updatedAt) VALUES ("${product.id}", ${product.stock},"${product.title}", ${product.price}, "${product.shortDescription}", "${product.longDescription}", "${product.brand}", "${product.category}", "${product.images}", "${product.createdAt}", "${product.updatedAt}");`);
    return result;
}

const updateProductById = async (id, product) => {
    const [result] = await db.query(`UPDATE products SET stock=stock-${change} WHERE id="${id}"`);
    return result;
}

const updateProductValueById = async (id, column, value) => {
    const [result] = await db.query(`UPDATE products SET ${column}="${value}" WHERE id="${id}"`);
    return result;
}

export default {
    getAllProducts,
    getProductById,
    getImageNameById,
    createProduct,
    updateProductById,
    updateProductValueById
}