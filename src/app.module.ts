import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricesController } from './prices/prices.controller';
import { PricesService } from './prices/prices.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'cryptomarketcap',
    models: [],
  }),],
  controllers: [AppController, PricesController],
  providers: [AppService, PricesService],
})
export class AppModule {}
