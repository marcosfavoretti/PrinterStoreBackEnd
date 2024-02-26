import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Products } from 'src/products/entities/product.entity';

@Injectable()
export class ComprasService {
  constructor(@InjectRepository(Shop) private shop: Repository<Shop>,){}

  async create(produto: any, user: User) {
    console.log(produto)
    //valida se tudo existe antes de colocar no carrinho 
    return await this.shop.insert(
      {
        iduser: user,
        idproduto: {...produto},
        unid: produto.unid
      }
    )
  }

  async getShopCar(user: User) {
    return await this.shop.createQueryBuilder('shop')
    .leftJoinAndSelect('shop.idproduto', 'product') // Substitua 'products' pelo nome correto do relacionamento
    .where('shop.iduser = :userid', { userid: user.iduser })
    .getMany();
    }
  

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    return `This action updates a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
