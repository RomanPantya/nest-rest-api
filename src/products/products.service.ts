import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    private products = []

    getAll() {
        return this.products
    }

    getById(id: string) {
        return this.products.find(p => p.id === id)
    }

    create(productDto: CreateProductDto) {
        const a = {
            ...productDto,
            id: Date.now().toString()           
        }
        this.products.push(a)
        return a
    }

    delete(id: string) {
        const a = this.products.find(p => p.id === id)
        const c = this.products.findIndex(p => p.id === id)
        const b = this.products.slice(0, c).concat(this.products.slice(c + 1))
        this.products = b
        return a
    }

    update(id: string, productDto: UpdateProductDto) {
        const a = this.products.findIndex(p => p.id === id)
        this.products[a] = { ...productDto, id }
        return this.products[a]
    }
}
