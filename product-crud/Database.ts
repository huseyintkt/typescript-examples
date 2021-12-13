import { Product } from './Product';

export class Database {
    private productList: Product[];

    constructor() {
        this.productList = new Array<Product>(
            new Product(1, 'Samsung S3', 'Phone', 1200),
            new Product(2, 'Samsung S4', 'Phone', 1300),
            new Product(3, 'Samsung S5', 'Phone', 1400),
            new Product(4, 'Samsung S6', 'Phone', 1500),
            new Product(5, 'Samsung S7', 'Phone', 1600)
        );
    }

    getProductList(): Product[] {
        return this.productList;
    }
}
