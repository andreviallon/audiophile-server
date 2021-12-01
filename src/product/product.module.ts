import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductsRepository } from './products.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsRepository])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
