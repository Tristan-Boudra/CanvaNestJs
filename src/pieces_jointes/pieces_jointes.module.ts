import { Module } from '@nestjs/common';
import { PiecesJointesController } from './pieces_jointes.controller';

@Module({
  controllers: [PiecesJointesController],
  providers: []
})
export class PiecesJointesModule {}