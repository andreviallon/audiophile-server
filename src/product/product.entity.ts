import { IsEnum } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ProductTypeEnum {
  HEADPHONES = 'headphones',
  SPEAKER = 'speaker',
  EARPHONES = 'earphones',
}

export interface InTheBox {
  quantity: number;
  name: string;
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @IsEnum(ProductTypeEnum)
  type: ProductTypeEnum;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  features: string;

  @Column('jsonb')
  inTheBox: InTheBox[];
}
