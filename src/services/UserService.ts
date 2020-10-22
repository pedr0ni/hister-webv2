import { User } from '../models/User'
import Service, { BaseService } from './Service'

class UserService extends BaseService {

    constructor() {
        super()
        this.loadToken()
    }

    loadToken() {
        const token = this.getToken()

        console.log(token)
        if (token)
            Service.axios.defaults.headers = {
                Authorization: `Bearer ${token}`
            }
    }

    create(body: User) {
        return Service.postWithDelay('/user/register', body)
    }

    listAll() {
        return Service.getWithDelay('/user')
    }

    authenticate(body: User) {
        return Service.postWithDelay('/user/authenticate', body)
    }

    info () {
        return Service.getWithDelay('/user/info')
    }

    infoById(id: string) {
        return Service.getWithDelay(`/user/findById/${id}`)
    }

    setToken(token: string) {
        localStorage.setItem('Authorization', token)
        Service.axios.defaults.headers = {
            Authorization: `Bearer ${token}`
        }
    }

    logout() {
        localStorage.removeItem('Authorization')
    }

    getToken() : string | null {
        const value = localStorage.getItem('Authorization')
        
        return value
    }

}

export default new UserService()