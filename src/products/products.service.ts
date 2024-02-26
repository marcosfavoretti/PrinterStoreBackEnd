import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products_photo } from './entities/product_photo.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Products) private product: Repository<Products>, @InjectRepository(Products_photo) private ft: Repository<Products_photo>){}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    const products = await this.product.find();
    const productsWithPhotos = await Promise.all(
      products.map(async (product) => {
        product['photo'] = (await this.findImages(product)).filter(filt=>{
          if(filt.isMain) return filt //retorno so se for o principal a img
        });
        return product;
      })
    );
    return productsWithPhotos;
  }
  
  async getImages(id: number){
      const product = await this.getProdutct(id)
      return await this.findImages(product)
  }
  
  async getProdutct(id: number){
    const product =  await this.product.findOne({
      where:{
        idproduct: id
      },
    })
    if(!product) throw new HttpException("problema para achar o item especificado", 404)
    return product
}
  private async findImages(produto: Products) {
    return await this.ft.createQueryBuilder('ft')
        .where('ft.idproduct = :productId', { productId: produto.idproduct })
        .getMany();
}

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
