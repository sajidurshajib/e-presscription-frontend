import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const referState = EpDefStorage('refer', { detail: '' })

export const referReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('refer', { detail: action.payload })
            return JSON.parse(EpGetStorage('refer'))
        case 'remove':
            EpSetStorage('refer', { detail: '' })
            return JSON.parse(EpGetStorage('refer'))
        default:
            return state
    }
}
