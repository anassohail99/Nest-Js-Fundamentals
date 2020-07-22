import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  private products: Products[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodID = Math.random().toString();
    const newProduct = new Products(prodID, title, description, price);
    this.products.push(newProduct);
    return prodID;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productID: string) {
    const product = this.products.find(prod => prod.id === productID);
    if (!product) {
      throw new NotFoundException('Product Could not be found');
    }
    return { ...product };
  }

//   updateProduct(product){

  }
}
