import { Book } from "./Book";
import { User } from "./User";

export namespace IOrderProps {
    export type Status = "PENDING" | "CANCELLED" | "COMPLETED"
}

export interface Order {
    _id: string,
    user: User,
    totalPrice: number,
    createdAt: string,
    status: IOrderProps.Status,
    books?: Array<Book>
}