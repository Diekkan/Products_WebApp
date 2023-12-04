import axios from "axios";
import { Product } from "../Models/Product";

export class ProductService{

    urlBase : string = "http://127.0.0.1:3000/products";

    getAllProducts(): Promise<Product[]> {
        return axios.get<Product[]>(this.urlBase)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                return []; 
            });
    }

    createProduct(product: any): Promise<Product> {
        return axios.post<Product>(this.urlBase, product)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                return new Product();
            })
    }

    getProductById(productId: number): Promise<Product> {
        return axios.get<Product>(`${this.urlBase}/${productId}`)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            return new Product();
        })
    }
}