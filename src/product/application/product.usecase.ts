import { NotFoundError } from '../../exceptions/notfound.error';
import { ProductRepository } from '../domain/product.repository';
import { ProductValue } from '../domain/product.value';

export class ProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async insertProduct({
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
    const productValue = new ProductValue({ name, price, stock, visible, img });
    const productInserted = await this.productRepository.insertProduct(
      productValue,
    );

    return productInserted;
  }

  public async getProducts() {
    const products = await this.productRepository.getProducts();
    const productsWithImageData = products?.map((product) => {
      if (!product.img) {
        return product;
      }
      const base64Image = product.img.toString('base64');
      const dataUrl = `data:image/jpeg;base64,${base64Image}`;
      return { ...product, img: dataUrl };
    });
    return productsWithImageData;
  }

  public async getProduct(id: string) {
    const product = await this.productRepository.getProduct(id);

    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const base64Image = product!.img!.toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64Image}`;
    return { ...product, img: dataUrl };
  }

  public async patchProduct(
    id: string,
    {
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
    },
  ) {
    const productValue = new ProductValue({ name, price, stock, visible, img });
    const pacthRepo = this.productRepository.patchProduct(id, productValue);
    return pacthRepo;
  }

  public async deleteProduct(id: string) {
    const deletedProduct = this.productRepository.deleteProduct(id);
    return deletedProduct;
  }
}
