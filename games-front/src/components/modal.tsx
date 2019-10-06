import * as React from "react"
import { GameDTO, GameInit } from "../dto/dto"
import { useState, useEffect } from "react";

export const GameModal = (p: {
        title: "Add new game" | "Update game",
        close:() => void,
        save: (game: GameDTO) => void
        game?: GameDTO}) => {

    const [localGame, setLocalGame] = useState<GameDTO>(p.game || GameInit());
    const [tags, setTags] = useState(p.game ? p.game.tags.join(' ') : "");

    const onChangeGame = (event) => {
        setLocalGame({...localGame, [event.target.name]: event.target.value});
    }

    const onChangeTags = (event) => {
        setTags(event.target.value);
    }
    const onChangePublisher = (event) => {
        const publisher = {...localGame.publisher,[event.target.name]: event.target.value}
        setLocalGame({...localGame, publisher});
    }

    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title">{p.title}</h5>
            </div>
            <div className="modal-body">
            <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="game-title">Game title</label>
                            <input type="text" 
                                   className="form-control form-control-sm" 
                                   id="game-title"
                                   name="title"
                                   onChange={onChangeGame}
                                   value={localGame.title}
                                   placeholder="Title" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="game-price">Game price</label>
                            <input type="number" 
                                   className="form-control form-control-sm" 
                                   id="game-price" 
                                   name="price"
                                   onChange={onChangeGame}
                                   value={localGame.price}
                                   placeholder="price" />
                        </div>
                        <div className="col-md-5 mb-4">
                            <label htmlFor="release-date">Release date</label>
                            <input type="date" 
                                   className="form-control form-control-sm" 
                                   id="release-date" 
                                   name="releaseDate"
                                   onChange={onChangeGame}
                                   value={localGame.releaseDate && new Date(localGame.releaseDate).toISOString().split('T')[0]}
                                   placeholder="release date"/>
                        </div>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="tags">Tags (space-separated format)</label>
                            <input type="text" 
                                   className="form-control form-control-sm" 
                                   id="tags" 
                                   onChange={onChangeTags}
                                   name="tags"
                                   value={tags}
                                   placeholder="Action Strategy"/>
                        </div>
                    </div>

                    {/* Publisher */}
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="publisher">Publisher</label>
                            <input type="text" 
                                   className="form-control form-control-sm" 
                                   id="publisher" 
                                   name="name"
                                   onChange={onChangePublisher}
                                   value={localGame.publisher && localGame.publisher.name}
                                   placeholder="Publisher name" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="siret">Siret</label>
                            <input type="text" 
                                   className="form-control form-control-sm" 
                                   id="siret" 
                                   name="siret"
                                   onChange={onChangePublisher}
                                   value={localGame.publisher && localGame.publisher.siret}
                                   placeholder="siret" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label htmlFor="phone">Publisher phone</label>
                            <input type="text" 
                                   className="form-control form-control-sm" 
                                   id="phone" 
                                   name="phone"
                                   onChange={onChangePublisher}
                                   value={localGame.publisher && localGame.publisher.phone}
                                   placeholder="phone"/>
                        </div>
                    </div>
            </div>
            <div className="modal-footer">
                <button type="button" 
                        className="btn btn-primary" 
                        onClick={() => p.save({...localGame,tags: tags.split(' ')})}>Save and Close</button>
                <button type="button" className="btn btn-secondary" onClick={p.close}>Cancel</button>
            </div>
        </>
    )
}