import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
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

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodID: string) {
    return this.productsService.getSingleProduct(prodID);
  }

  // put is used to replace
  //   patch is used to merge
  @Patch(':id')
  updateProduct(
    @Param('id') prodID: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(
      prodID,
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodID: string) {
    this.productsService.deleteProduct(prodID);
    return null;
  }
}
