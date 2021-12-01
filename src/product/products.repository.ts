import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProductDto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  public createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { name, description, price, features, inTheBox, type } =
      createProductDto;

    return this.save({
      name,
      type,
      price,
      features,
      description,
      inTheBox: inTheBox,
    });
  }
}
