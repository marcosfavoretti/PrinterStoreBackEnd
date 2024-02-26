import { Module } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { Shop } from './entities/shop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenServiceService } from 'src/middleware/token-service/token-service.service';

@Module({
  controllers: [ComprasController],
  imports: [TypeOrmModule.forFeature([Shop])],
  providers: [ComprasService, TokenServiceService]
})
export class ComprasModule {}
