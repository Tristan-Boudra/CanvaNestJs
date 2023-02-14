import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtelierController } from './atelier/atelier.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'superAdmin',
      password: 'adminsuper',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AtelierController,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
