import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const professionalHistoryState = EpDefStorage('professionalHistory', { professional: '' })

export const professionalHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('professionalHistory', { professional: action.payload })
            return JSON.parse(EpGetStorage('professionalHistory'))
        case 'remove':
            EpDefStorage('professionalHistory', { professional: '' })
            return JSON.parse(EpGetStorage('professionalHistory'))
        default:
            return state
    }
}
