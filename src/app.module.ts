import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
// import postgres from 'postgres'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    

    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: [],
      synchronize: true,
    }),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
