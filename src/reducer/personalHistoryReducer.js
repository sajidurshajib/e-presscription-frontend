import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const personalHistoryState = EpDefStorage('presonalHistory', { personal: '' })

export const personalHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('presonalHistory', { personal: action.payload })
            return JSON.parse(EpGetStorage('presonalHistory'))
        case 'remove':
            EpDefStorage('presonalHistory', { personal: '' })
            return JSON.parse(EpGetStorage('presonalHistory'))
        default:
            return state
    }
}
