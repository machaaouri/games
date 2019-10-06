import { Module } from '@nestjs/common';
import { GameService } from './games.service';
import { GameController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from '../schemas/schema';

@Module({
  imports: [
        MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])
  ],
  providers: [GameService],
  controllers: [GameController]
})
export class GameModule {}
