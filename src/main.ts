import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { IP } = process.env;

  app.enableCors({
    origin: 'http://192.168.100.10:4200', // Especifique a origem desejada
    credentials: true, // Permita credenciais
  });

  app.use(cookieParser(process.env.authSegredo));

  await app.listen(3000, IP);
}

bootstrap();
