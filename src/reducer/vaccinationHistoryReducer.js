import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const vaccinationHistoryState = EpDefStorage('vaccinationHistory', { vaccination: '' })

export const vaccinationHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('vaccinationHistory', { vaccination: action.payload })
            return JSON.parse(EpGetStorage('vaccinationHistory'))
        case 'remove':
            EpSetStorage('vaccinationHistory', { vaccination: '' })
            return JSON.parse(EpGetStorage('vaccinationHistory'))
        default:
            return state
    }
}
