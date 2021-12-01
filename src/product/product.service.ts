import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/createProductDto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  public async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsRepository.createProduct(createProductDto);
  }
}
