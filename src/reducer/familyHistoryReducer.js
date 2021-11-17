import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const familyHistoryState = EpDefStorage('familyHistory', { family: '' })

export const familyHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('familyHistory', { family: action.payload })
            return JSON.parse(EpGetStorage('familyHistory'))
        case 'remove':
            EpSetStorage('familyHistory', { family: '' })
            return JSON.parse(EpGetStorage('familyHistory'))
        default:
            return state
    }
}
