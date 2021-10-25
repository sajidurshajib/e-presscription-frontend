import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const chiefState = EpDefStorage('chiefcomplaints', { cc: '' })

export const chiefReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('chiefcomplaints', { cc: action.payload })
            return JSON.parse(EpGetStorage('chiefcomplaints'))
        case 'remove':
            EpDefStorage('chiefcomplaints', { cc: '' })
            return JSON.parse(EpGetStorage('chiefcomplaints'))
        default:
            return state
    }
}
