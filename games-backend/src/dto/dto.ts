

export class PublisherDTO {
    readonly name: String;
    readonly siret: Number;
    readonly phone: String;
}

export class CreateGameDTO {
    readonly title: String;
    readonly price: Number;
    readonly publisher: PublisherDTO;
    readonly tags: string[];
    readonly releaseDate: Date;
}