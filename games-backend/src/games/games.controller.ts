import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Delete } from '@nestjs/common';
import { GameService } from './games.service';
import { CreateGameDTO } from '../dto/dto';
import { ValidateObjectId } from '../schemas/validate-id';



/*
    /games [GET] # Fetch a list of games
    /games/:id # Fetch a game by id 
    /games [POST] # Create new game
    /games/:id [PUT] # Update game
    /games/:id [DELETE] # remove game
*/

@Controller()
export class GameController {

    constructor(private gameService: GameService) { }

    @Get('games')
    async getGames(@Res() res) {
        const games = await this.gameService.getGames();
        return res.status(HttpStatus.OK).json(games);
    }

    @Get('games/:gameId')
    async getGame(@Res() res, @Param('gameId', new ValidateObjectId()) gameId) {
        const game = await this.gameService.getGame(gameId);
        if (!game) throw new NotFoundException('Game does not exist!');
        return res.status(HttpStatus.OK).json(game);

    }

    @Post('/games')
    async addGame(@Res() res, @Body() createGameDTO: CreateGameDTO) {
        const newGame = await this.gameService.addGame(createGameDTO);
        return res.status(HttpStatus.OK).json({
            newGame
        })
    }

    @Put('games/:gameId')
    async editGame(
        @Res() res, @Param('gameId', new ValidateObjectId()) gameId,
        @Body() createGameDTO: CreateGameDTO)
    {
        const editedGame = await this.gameService.editGame(gameId, createGameDTO);
        if (!editedGame) throw new NotFoundException('Game does not exist!');
        return res.status(HttpStatus.OK).json({
            editedGame
        })
    }


    @Delete('games/:gameId')
    async deleteGame(@Res() res, @Param('gameId', new ValidateObjectId()) gameId) {
        const deletedGame = await this.gameService.deleteGame(gameId);
        if (!deletedGame) throw new NotFoundException('Game does not exist!');
        return res.status(HttpStatus.OK).json({
            game: deletedGame
        })
    }

    @Get('process')
    async process(): Promise<any> {
      return this.gameService.process();
    }

    @Get('games/:gameId/publisher')
    async getPublisher(@Res() res, @Param('gameId', new ValidateObjectId()) gameId) {
        const publisher = await this.gameService.getPublisher(gameId);
        if (!publisher) throw new NotFoundException('Publisher not found');
        return res.status(HttpStatus.OK).json(publisher);
    }
}
