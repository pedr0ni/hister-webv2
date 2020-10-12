import axios, { AxiosError, AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.0.105:3000',
    timeout: 10000
})

const handleError = (error: AxiosError) => {
    // if (error.response) {
    //     Messager.show('❌', error.response.data.message, 5000, 'danger')
    // } else {
    //     Messager.show('❌', 'Ocorreu um erro de conexão.', 5000, 'danger')
    // }
}

const delay = 2000

export default {

    getWithDelay: (path: string) : Promise<AxiosResponse> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                instance.get(path)
                    .then(response => resolve(response))
                    .catch(error => {
                        handleError(error)
                        
                        resolve(undefined)
                    })
            }, delay)
        })
    },

    deleteWithDelay: (path: string) : Promise<AxiosResponse> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                instance.delete(path)
                    .then(response => resolve(response))
                    .catch(error => {
                        handleError(error)
                        
                        resolve(undefined)
                    })
            }, delay)
        })
    },

    postWithDelay: (path: string, body: object) : Promise<AxiosResponse> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                instance.post(path, body)
                    .then(response => resolve(response))
                    .catch(error => {
                        handleError(error)
                        
                        resolve(undefined)
                    })
            }, delay)
        })
    },

    axios: instance
}

export class BaseService {

    listAll() {}

}