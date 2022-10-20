import { Controller } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    getAll() {
        return 'getAll';
    }
}
