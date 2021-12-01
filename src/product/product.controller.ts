import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createTask(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }
}
