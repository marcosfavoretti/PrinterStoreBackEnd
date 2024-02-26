import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TokenServiceService } from '../middleware/token-service/token-service.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, TokenServiceService],
  imports: [TypeOrmModule.forFeature([User])],

})
export class UsersModule {}
