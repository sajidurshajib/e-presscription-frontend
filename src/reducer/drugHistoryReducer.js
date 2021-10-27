import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const drugHistoryState = EpDefStorage('drugHistory', { drug: '' })

export const drugHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('drugHistory', { drug: action.payload })
            return JSON.parse(EpGetStorage('drugHistory'))
        case 'remove':
            EpDefStorage('drugHistory', { drug: '' })
            return JSON.parse(EpGetStorage('drugHistory'))
        default:
            return state
    }
}
