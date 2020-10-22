import { Category } from "./Category";

export interface Book {
    _id?: string,
    title?: string,
    authors?: string,
    average_rating?: number,
    language_code?: string,
    ratings_count?: number,
    category?: Category,
    publisher?: string,
    publication_date?: string,
    price?: number
}