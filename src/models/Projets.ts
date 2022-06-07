export interface Projets
{
    id: number,
    name: string,
    slug: string,
    visuel: string,
    description: string,
    link: string,
    perso: boolean,
    tags: [
        string
    ]
    categories : [
        id : number,
        label : string
    ]
}