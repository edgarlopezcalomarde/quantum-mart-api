import { ProductEntity } from './product.entity';

export interface ProductRepository {
  getProducts(): Promise<Array<ProductEntity> | null>;
  getProduct(id: string): Promise<ProductEntity | null>;
  patchProduct(
    id: string,
    product: ProductEntity,
  ): Promise<ProductEntity | null>;
  insertProduct(product: ProductEntity): Promise<ProductEntity | null>;
  deleteProduct(id: string): Promise<null>;
}
