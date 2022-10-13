import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const consultationState = EpDefStorage('consultation', { consultation: '' })

export const consultationReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('consultation', { consultation: action.payload })
            return JSON.parse(EpGetStorage('consultation'))
        case 'remove':
            EpSetStorage('consultation', { consultation: '' })
            return JSON.parse(EpGetStorage('consultation'))
        default:
            return state
    }
}
