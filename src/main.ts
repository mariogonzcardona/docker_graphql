import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
    })
  );

  await app.listen(3000);
  console.log('Bienvenido a la aplicacion de GraphQL 2024');
  console.log('Aplicación corriendo en puerto: ', 3000 );
  // Direccion de la aplicacion
  console.log('http://localhost:3000/graphql');
}
bootstrap();
