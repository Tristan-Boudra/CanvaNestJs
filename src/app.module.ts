import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiecesJointesModule } from './pieces_jointes/pieces_jointes.module';

@Module({
  imports: [PiecesJointesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
