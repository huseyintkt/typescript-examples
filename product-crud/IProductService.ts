import { Product } from './Product';

export interface IProductService {
    getProductById(id: number): Product;
    getProductList(): Product[];
    addProduct(product: Product): void;
    updateProduct(product: Product): void;
    deleteProduct(product: Product): void;
}
