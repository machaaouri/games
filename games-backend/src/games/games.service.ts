import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Game, Publisher } from '../interfaces/interface';
import { CreateGameDTO } from '../dto/dto';

@Injectable()
export class GameService {

    constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) { }

    async getGames(): Promise<Game[]> {
        const games = await this.gameModel.find().exec();
        return games;
    }

    async getGame(GameId): Promise<Game> {
        const game = await this.gameModel
            .findById(GameId)
            .exec();
        return game;
    }

    async addGame(createGameDTO: CreateGameDTO): Promise<Game> {
        const newGame = await this.gameModel.create(createGameDTO);
        return newGame.save();
    }

    async editGame(GameId, createGameDTO: CreateGameDTO): Promise<Game> {
        const editedGame = await this.gameModel
            .findByIdAndUpdate(GameId, createGameDTO, { new: true });
        return editedGame;
    }

    async deleteGame(GameId): Promise<any> {
        const deletedGame = await this.gameModel
            .findByIdAndRemove(GameId);
        return deletedGame;
    }

    async process() : Promise<Game[]> {
        const today = new Date();

        const daysToDeletion = 547 // 18 months
        const deletionDate = new Date();
        deletionDate.setDate(today.getDate() - daysToDeletion);

        const daysToApplyDiscount = 365 // 1 year (you don't say !)
        const discountLimitDate = new Date();
        discountLimitDate.setDate(today.getDate() - daysToApplyDiscount);

        await this.gameModel.remove({releaseDate : {$lt : deletionDate}});

        await this.gameModel.find({releaseDate :{
            $gte: deletionDate,
            $lt : discountLimitDate}},function (err, games) {
                games.map(game => {
                    game.price *= 0.8;
                    game.save();
                });
        })
        return await this.gameModel.find({});
    }

    async getPublisher(GameId) : Promise<any> {
        const game = await this.gameModel
        .findById(GameId)
        .exec();

        return game && game.publisher;
    }

}