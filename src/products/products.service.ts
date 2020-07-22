import { Injectable } from '@nestjs/common';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  products: Products[] = [];

  insertProduct(title: string, description: string, price: number) {
    const newProduct = new Products(
      Math.floor(Math.random()).toString(),
      title,
      description,
      price,
    );
    this.products.push(newProduct);
  }
}
