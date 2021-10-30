import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const patientState = EpDefStorage('patient', { patient: '' })

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('patient', { patient: action.payload })
            return JSON.parse(EpGetStorage('patient'))
        case 'remove':
            EpDefStorage('patient', { patient: '' })
            return JSON.parse(EpGetStorage('patient'))
        default:
            return state
    }
}
