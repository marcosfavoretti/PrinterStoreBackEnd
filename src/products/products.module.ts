import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TokenServiceService } from 'src/users/token-service/token-service.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, TokenServiceService],
})
export class ProductsModule {}
