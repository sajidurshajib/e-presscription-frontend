import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const medicalHistoryState = EpDefStorage('medicalHistory', { medical: '' })

export const medicalHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('medicalHistory', { medical: action.payload })
            return JSON.parse(EpGetStorage('medicalHistory'))
        case 'remove':
            EpSetStorage('medicalHistory', { medical: '' })
            return JSON.parse(EpGetStorage('medicalHistory'))
        default:
            return state
    }
}
