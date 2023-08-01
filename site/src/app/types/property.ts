export interface Property {
    city: string,
    phone: string,
    area: string,
    photo: string,
    price: string,
    description: string,
    id: string | undefined,
    userId: string | undefined
    comments: Comment[]
}