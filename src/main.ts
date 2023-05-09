import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './core/adapters/redis-io.adapter'
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  if(config.redis.enbled){
    app.useWebSocketAdapter(new RedisIoAdapter({
      host: config.redis.host,
      port: config.redis.port
    }))
  }

  await app.listen(config.serverPort);
  console.info(`SERVER CORRIENDO EN ${config.serverPort}`)
}
bootstrap();
