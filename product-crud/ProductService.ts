import { Database } from './Database';
import { IProductService } from './IProductService';
import { Product } from './Product';

export class ProductService implements IProductService {
    private db: Database;
    private productList: Product[];

    constructor() {
        this.db = new Database();
        this.productList = new Array<Product>();
        this.db
            .getProductList()
            .forEach((product) => this.productList.push(product));
    }

    getProductById(id: number): Product {
        return this.productList.filter((product) => product.id === id)[0];
    }

    getProductList(): Product[] {
        return this.productList;
    }

    addProduct(product: Product): void {
        product.id = this.generateId();
        this.productList.push(product);
    }

    updateProduct(product: Product): void {
        let index = this.productList.indexOf(product);
        this.productList.splice(index, 1, product);
    }

    deleteProduct(product: Product): void {
        let index = this.productList.indexOf(product);
        if (index > 0) {
            this.productList.splice(index, 1);
        }
    }

    private generateId(): number {
        let key = 1;

        while (this.getProductById(key) != null) {
            key++;
        }
        return key;
    }
}
