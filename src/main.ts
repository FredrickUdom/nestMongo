import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PROJECT_PORT  || 8000;
  await app.listen(port, ()=>console.log(`port ${port}`));
}
bootstrap();
