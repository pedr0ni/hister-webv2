import { Book } from '../models/Book'
import Service, { BaseService } from './Service'

class DashboardService extends BaseService {

    constructor() {
        super()
    }

    async get() {
        return Service.getWithDelay('/dashboard')
    }

}

export default new DashboardService()