import { Order } from '../models/Order'
import Service, { BaseService } from './Service'

class OrderService extends BaseService {

    constructor() {
        super()
    }

    listAll() {
        return Service.getWithDelay('/order')
    }

    update(body: Order) {
        return Service.putWithDelay('/order', body)
    }

}

export default new OrderService()