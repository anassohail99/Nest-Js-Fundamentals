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
    const product = this.findProduct(productID)[0];

    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }

    this.products[index] = updatedProduct;
  }

  private findProduct(id: string): [Products, number] {
    const productIndex = this.products.findIndex(prod => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Product Could not be found');
    }
    return [product, productIndex];
  }
}
