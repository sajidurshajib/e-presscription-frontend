import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const nextState = EpDefStorage('next', { nxt: '' })

export const nextReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('next', { nxt: action.payload })
            return JSON.parse(EpGetStorage('next'))
        case 'remove':
            EpDefStorage('next', { nxt: '' })
            return JSON.parse(EpDefStorage('next'))
        default:
            return state
    }
}
