import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const diagnosisState = EpDefStorage('diagnosis', { probable: '', confirmatory: '' })

export const diagnosisReducer = (state, action) => {
    switch (action.type) {
        case 'prbl':
            EpSetStorage('diagnosis', { probable: action.payload, confirmatory: state.confirmatory })
            return JSON.parse(EpGetStorage('diagnosis'))
        case 'cnf':
            EpSetStorage('diagnosis', { probable: state.probable, confirmatory: action.payload })
            return JSON.parse(EpGetStorage('diagnosis'))
        case 'remove':
            EpDefStorage('diagnosis', { probable: '', confirmatory: '' })
            return JSON.parse(EpGetStorage('diagnosis'))
        default:
            return state
    }
}
