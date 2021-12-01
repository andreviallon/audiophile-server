import { IsEnum, IsNotEmpty } from 'class-validator';
import { InTheBox, ProductTypeEnum } from '../product.entity';

export class CreateProductDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsEnum(ProductTypeEnum)
  public type: ProductTypeEnum;

  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public features: string;

  @IsNotEmpty()
  public inTheBox: InTheBox[];
}
