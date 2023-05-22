import http from '../../http-common.js'

interface IUser {
    user: {
        email: string
        password: string
        password_confirmation?: string
    }
}

export const login = (user: IUser) => {
    return http.post<IUser>('/login', user)
}

export const signup = (user: IUser) => {
    return http.post<IUser>('/signup', user)
}