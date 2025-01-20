export interface Offer {
    id: number
    attributes: OfferAttributes
}

export interface OfferAttributes {
    OfferID: string
    OfferUID: string
    EndingOn: string
    Name: string
    Description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}
