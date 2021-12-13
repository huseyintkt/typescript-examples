import { ProductService } from './ProductService';
import { Product } from './Product';
let _productService = new ProductService();

let result;

/**
 * getProductList
 */
result = _productService.getProductList();

/**
 * getProductById
 */
// result = _productService.getProductById(3);

/**
 * addProduct
 */
// let product = new Product();
// product.name = 'Samsung S20';
// product.category = 'phone';
// product.price = 1900;

// _productService.addProduct(product);
// result = _productService.getProductList();

/**
 * updateProduct
 */
// let product = new Product();
// product.id = 5;
// product.name = 'Samsung S55';
// product.category = 'phone';
// product.price = 1955;

//  _productService.updateProduct(product);
// result = _productService.getProductList();

/**
 * deleteProduct
 */
// result = _productService.getProductById(4);
// _productService.deleteProduct(result);
// result = _productService.getProductList();

console.log(result);
