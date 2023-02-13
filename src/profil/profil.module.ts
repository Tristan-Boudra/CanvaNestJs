import { Module } from '@nestjs/common';
import { ProfilController } from './profil.controller';

@Module({
  controllers: [ProfilController],
  providers: []
})
export class ProfilModule {}
