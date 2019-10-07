import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './games/games.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/games', { useNewUrlParser: true, useFindAndModify: false}),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
