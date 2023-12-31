import { Module , NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ProductsModule } from './products/products.module';
import { Products } from './products/entities/product.entity';
import { TokenValidMiddlewareMiddleware } from './middleware/token-valid-middleware/token-valid-middleware.middleware';
import { TokenServiceService } from './middleware/token-service/token-service.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersService } from './users/users.service';
import { join } from 'path';
import { Products_photo } from './products/entities/product_photo.entity';

@Module({
  imports: [ 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'products_store'),
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.user,
    password: process.env.pass,
    database: 'printerStore',
    entities: [User, Products, Products_photo],
    synchronize: false,
  }), ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, TokenServiceService,],
})

export class AppModule implements NestModule{
  constructor(private dataSource: DataSource) { }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenValidMiddlewareMiddleware).forRoutes({ path: 'products', method: RequestMethod.GET })
  }
}


