export interface ProductEntity {
  id: string;
  name: string;
  price: number;
  stock: number;
  visible: boolean;
  img?: Buffer;
  createdat?: string;
}
