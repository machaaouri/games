import { Document } from 'mongoose';

export interface Publisher  extends Document {
    readonly name: string,
    readonly siret: number,
    readonly phone: string
}

export interface Game extends Document {
    readonly title: string,
    price: number,
    readonly publisher: Publisher,
    readonly tags: string[],
    readonly releaseDate: Date
}