import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const adviceState = EpDefStorage('advice', { adv: '' })

export const adviceReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('advice', { adv: action.payload })
            return JSON.parse(EpGetStorage('advice'))
        case 'remove':
            EpDefStorage('advice', { adv: '' })
            return JSON.parse(EpGetStorage('advice'))
        default:
            return state
    }
}
