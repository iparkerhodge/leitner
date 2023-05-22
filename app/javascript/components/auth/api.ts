import http from '../../http-common.js'

interface IUser {
    user: {
        email: string
        password: string
    }
}

export const login = (user: IUser) => {
    return http.post<IUser>('/login', user)
}