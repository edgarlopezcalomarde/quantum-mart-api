import { Router } from 'express';
import { MYSQLRepository } from './repository/mysql.repository';
import { ProductUseCase } from '../application/product.usecase';
import { ProductController } from './product.controller';

const router = Router();

const productRepo = new MYSQLRepository();
const productUseCase = new ProductUseCase(productRepo);
const productController = new ProductController(productUseCase);

router.post('/product', productController.insertProduct);
router.get('/product', productController.getProducts);
router.get('/product/:id', productController.getProduct);
router.delete('/product/:id', productController.deleteProduct);
router.patch('/product/:id', productController.patchProduct);

export default router;
