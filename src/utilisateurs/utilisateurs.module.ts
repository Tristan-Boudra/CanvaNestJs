import { Module } from '@nestjs/common';
import { UtilisateursController } from './utilisateurs.controller';

@Module({
  controllers: [UtilisateursController],
  providers: []
})
export class UtilisateursModule {}
