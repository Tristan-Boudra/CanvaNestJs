import { Module } from '@nestjs/common';
import { AtelierController } from './atelier.controller';

@Module({
  controllers: [AtelierController],
  providers: [],
})
export class AtelierModule {}
