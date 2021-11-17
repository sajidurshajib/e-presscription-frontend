import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const investigationState = EpDefStorage('investigation', { inv: [] })

export const investigationReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('investigation', { inv: action.payload })
            return JSON.parse(EpGetStorage('investigation'))
        case 'remove':
            EpSetStorage('investigation', { inv: [] })
            return JSON.parse(EpGetStorage('investigation'))
        default:
            return state
    }
}
