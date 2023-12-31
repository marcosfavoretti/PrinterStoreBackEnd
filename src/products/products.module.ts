import { Module, NestModule,RequestMethod, MiddlewareConsumer} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TokenServiceService } from 'src/middleware/token-service/token-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Products_photo } from './entities/product_photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Products_photo])],
  controllers: [ProductsController],
  providers: [ProductsService, TokenServiceService],
})
export class ProductsModule{}
