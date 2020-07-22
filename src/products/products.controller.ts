import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

//    /products
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    // getting data from body by this in next
    @Body('title') prodTitle: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): any {
    const genrateID = this.productsService.insertProduct(
      prodTitle,
      description,
      price,
    );
    return { id: genrateID };
  }
}
