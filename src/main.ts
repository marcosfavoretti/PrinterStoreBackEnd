import { NestFactory,  } from '@nestjs/core';
import { AppModule} from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {IP} = process.env
  const {user} = process.env

  await app.listen(3000, IP);
}
bootstrap();
