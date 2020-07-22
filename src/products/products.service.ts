import { Injectable } from '@nestjs/common';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  private products: Products[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodID = new Date().toString();
    const newProduct = new Products(prodID, title, description, price);
    this.products.push(newProduct);
    return prodID;
  }
}
