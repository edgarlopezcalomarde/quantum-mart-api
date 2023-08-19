import { pool } from '../../../config/db.mysql';
import { ProductEntity } from '../../domain/product.entity';
import { ProductRepository } from '../../domain/product.repository';

export class MYSQLRepository implements ProductRepository {
  async deleteProduct(id: string): Promise<null> {
    const [result] = await pool.query('DELETE FROM products WHERE id = ? ', [
      id,
    ]);

    return null;
  }

  async patchProduct(
    id: string,
    product: ProductEntity,
  ): Promise<ProductEntity | null> {
    const { name, price, stock, visible, img } = product;
    const patchQuery = await pool.query(
      'UPDATE products SET name = IFNULL(?, name), price = IFNULL(?, price),stock = IFNULL(?, stock),visible = IFNULL(?, visible),img = IFNULL(?, img) WHERE id = ? ',
      [name, price, stock, visible, img, id],
    );

    const [products] = await pool.query(
      'SELECT * FROM products WHERE id = ?  LIMIT 1',
      [id],
    );
    const productsFound = products as Array<ProductEntity>;
    return productsFound[0];
  }

  async getProducts(): Promise<Array<ProductEntity> | null> {
    const [products] = await pool.query('SELECT * FROM products');
    const productsFound = products as Array<ProductEntity>;
    return productsFound;
  }

  async getProduct(id: string): Promise<ProductEntity | null> {
    const [products] = await pool.query(
      'SELECT * FROM products WHERE id = ?  LIMIT 1',
      [id],
    );
    const productsFound = products as Array<ProductEntity>;
    return productsFound[0];
  }

  async insertProduct(product: ProductEntity): Promise<ProductEntity | null> {
    const [request] = await pool.query(
      'INSERT INTO products (name, price, stock, visible, img) VALUES (?,?,?,?,?)',
      [
        product.name,
        product.price,
        product.stock,
        product.visible,
        product.img,
      ],
    );

    const { insertId } = request as { insertId: number };

    const [productFound] = await pool.query(
      'SELECT * FROM products WHERE id = ? LIMIT 1',
      [insertId],
    );

    return (productFound as Array<ProductEntity>)[0];
  }
}
