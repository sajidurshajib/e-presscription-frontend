import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const medicineState = EpDefStorage('medicine', { medicine: [] })

export const medicineReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('medicine', { medicine: action.payload })
            return JSON.parse(EpGetStorage('medicine'))
        case 'remove':
            EpSetStorage('medicine', { medicine: [] })
            return JSON.parse(EpGetStorage('medicine'))
        default:
            return state
    }
}
