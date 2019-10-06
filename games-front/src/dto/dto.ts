export interface Publisher {
    readonly _id?: string
    readonly name: string;
    readonly siret: string;
    readonly phone: string;
}

export interface GameDTO {
    readonly _id?: string,
    readonly title: string;
    readonly price: number;
    readonly publisher: Publisher;
    readonly tags: string[];
    readonly releaseDate: string;
}

export const GameInit = () : GameDTO => {
    return {
        title:"",
        price:0,
        publisher: {
            name:"",
            siret:"",
            phone:"",
        },
        releaseDate:"",
        tags:[]
    }
}