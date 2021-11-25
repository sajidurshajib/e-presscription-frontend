import { EpDefStorage, EpGetStorage, EpSetStorage } from '../utils/EpLocalStorage'

export const authState = EpDefStorage('auth', { auth: false, token: '' })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            EpSetStorage('auth', { auth: true, token: state.token })
            return JSON.parse(EpGetStorage('auth'))
        case 'token':
            EpSetStorage('auth', { auth: true, token: action.payload })
            return JSON.parse(EpGetStorage('auth'))
        case 'remove':
            EpSetStorage('auth', { auth: false, token: '' })
            return JSON.parse(EpGetStorage('auth'))
        default:
            return state
    }
}
