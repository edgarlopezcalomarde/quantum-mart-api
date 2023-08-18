import { ProductEntity } from './product.entity';
import { v4 as uuid } from 'uuid';

export class ProductValue implements ProductEntity {
  id: string;
  name: string;
  price: number;
  stock: number;
  visible: boolean;
  img: Buffer;

  constructor({
    name,
    price,
    stock,
    visible,
    img,
  }: {
    name: string;
    price: number;
    stock: number;
    visible: boolean;
    img: Buffer;
  }) {
    this.id = uuid();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.visible = visible;
    this.img = img;
  }
}
