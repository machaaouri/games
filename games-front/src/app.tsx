import * as React from 'react'
import { Top } from './components/top'
import { Games } from './components/games'
import { useState, useEffect } from 'react';
import { GameDTO } from './dto/dto';
import { Modal } from 'reactstrap';
import { GameModal } from './components/modal';
import { base } from './env';

type ModalProps ={
    show: boolean,
    game?: GameDTO,
    method?: "POST" | "PUT";
    title?: "Add new game" | "Update game"
}

export const App = ()  => {
    const [games, setGames] = useState<GameDTO[]>([]);
    const [modal, setModal] = useState<ModalProps>({show: false, method:"POST", title: "Add new game" });

    useEffect(() => {
        fetch(base + "games")
        .then(r => r.json().then(games => setGames(games)))
        .catch(err => console.log(err))
    },[])

    const Save = (payload: GameDTO) => {
        let baseUrl = modal.method == "POST" ? base + "games" : base + "games/" + payload._id;
        fetch(baseUrl,{
            method: modal.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)}
        )
        .then(r => r.json())
        .then(game => {
            if(modal.method == "POST")
            {
                let arr = [...games];
                arr.push(game[Object.keys(game)[0]])
                setGames(arr);
                setModal({show:false})
            }
            else {
                let arr = [...games];
                let index = arr.findIndex(g => g._id == payload._id);
                arr[index] = game[Object.keys(game)[0]];
                setGames(arr);
                setModal({show:false})
            }
        })
    }

    const remove = (id: string) => {
        fetch(base + id,{method:"DELETE"})
        .then(() => {
            let arr = games.filter(game => game._id != id);
            setGames(arr);
        })
    }

    // To trigger a process which will automatically remove the games having a release date older than 18
    // ...months and apply a discount of 20% to all games having a release date between 12 and 18 months.
    const trigger = () => {
        fetch(base + "process")
        .then(games => games.json())
        .then(games => {
            let arr  = Object.keys(games).map(game => games[game]);
            setGames(arr)
        })
        .catch(err => console.log(err));
            

    }
    
    return <div className="games">
             <Top 
                showModal={() => setModal({show:true,title:"Add new game", method:"POST"})}
                trigger={() => trigger()} 
              />

             <Games games={games} 
                    update={(game: GameDTO) => setModal({show:true,method:"PUT",title:"Update game",game})}
                    remove={remove}/>

             <Modal isOpen={modal.show} fade toggle={() => setModal({show:false})}>
                <GameModal title={modal.title} 
                    save={Save} game={modal.game} 
                    close={() => setModal({show:false})} />
            </Modal>
          </div>
}