import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilModule } from './profil/profil.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3000,
    username: 'superadmin',
    password: 'superadmin',
    database: 'mydb',
    autoLoadEntities: true,
    synchronize: true,
  }),
  ProfilModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
