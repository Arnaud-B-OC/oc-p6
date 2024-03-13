
export interface LogementData {
    cover: string
    description: string
    equipments: string[]
    host: {
        name: string
        picture: string
    }
    id: string
    location: string
    pictures: string[]
    rating: number
    tags: string[]
    title: string
}

export interface AboutData {
    title: string
    text: string
}
