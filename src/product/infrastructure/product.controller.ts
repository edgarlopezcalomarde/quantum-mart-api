import { Request, Response } from 'express';
import { ProductUseCase } from '../application/product.usecase';
import { HttpResponse, HttpStatus } from '../../response/response.http';
import { BaseError } from '../../exceptions/base.error';

export class ProductController {
  constructor(private productUseCase: ProductUseCase) {}

  getProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.productUseCase.getProducts();

      HttpResponse.Ok(res, products);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const products = await this.productUseCase.getProduct(id);

      HttpResponse.Ok(res, products);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteProduct = async (req: Request, res: Response) => {};
  patchProduct = async (req: Request, res: Response) => {};

  insertProduct = async (req: Request, res: Response) => {
    const { name, price, stock, visible, img } = req.body;

    try {
      const insertedProduct = this.productUseCase.insertProduct({
        name,
        price,
        stock,
        visible,
        img,
      });

      HttpResponse.Ok(res, insertedProduct);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
}
