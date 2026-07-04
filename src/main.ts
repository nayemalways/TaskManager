import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envConfig from './config/env.config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(envConfig.PORT || 3003);
}

bootstrap();
