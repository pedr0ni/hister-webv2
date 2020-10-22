import { Book } from '../models/Book'
import Service, { BaseService } from './Service'

class BookService extends BaseService {

    constructor() {
        super()
    }

    listAll() {
        return Service.getWithDelay('/book')
    }

    create(body: Book) {
        return Service.postWithDelay('/book', body)
    }

}

export default new BookService()