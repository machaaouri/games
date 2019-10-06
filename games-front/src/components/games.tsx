import * as React from "react"
import { GameDTO } from "../dto/dto"
import { PublisherComponent } from "./publisher"

export const Games = ( p:{
                update:(game :GameDTO) => void,
                remove:(id: string) => void,
                games: GameDTO[]
            }) => {

    const headers = () => {
        return (
            <div className="row truncate font-weight-bold game">
                <div className="col-1">id</div>
                <div className="col-2">title</div>
                <div className="col-1">price</div>
                <div className="col-2">tags</div>
                <div className="col-2">release date</div>
                <div className="col-2">publisher</div>
            </div>
        )
    }

    const tags = (t: string[]) => {
        return <>
            {t && t.map((tag,i) => {
                return <span key={i} className="badge badge-info tag">{tag}</span>
            })}
        </>
    }

    const game = (g: GameDTO) => {
        return (
            <div key={g._id} className="row truncate game">
                <div className="col-1">{g._id}</div>
                <div className="col-2">{g.title}</div>
                <div className="col-1">{g.price}</div>
                <div className="col-2">{tags(g.tags)}</div>
                <div className="col-2">{new Date(g.releaseDate).toISOString().split('T')[0]}</div>
                <PublisherComponent publisher={g.publisher}/>
                <div className="col-2 buttons">
                    <button type="button" className="btn btn-light btn-sm"
                            onClick={() =>p.remove(g._id)}>Remove</button>
                    <button type="button" className="btn btn-light btn-sm"
                             onClick={() => p.update(g)}>Update</button>
                </div>
            </div>
        )
    }

    return <>
        {headers()}
        {p.games.map(game)}
    </>
}