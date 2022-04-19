import { EpDefStorage, EpGetStorage, EpSetStorage } from '../utils/EpLocalStorage'

export const userState = EpDefStorage('user', { info: {} })

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            EpSetStorage('user', { info: state.info })
            return JSON.parse(EpGetStorage('user'))
        case 'set':
            EpSetStorage('user', { info: action.payload })
            return JSON.parse(EpGetStorage('user'))
        case 'remove':
            EpSetStorage('user', { info: {} })
            return JSON.parse(EpGetStorage('user'))
        default:
            return state
    }
}
