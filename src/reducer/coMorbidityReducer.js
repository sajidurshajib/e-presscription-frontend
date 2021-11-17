import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const coMorbidityState = EpDefStorage('coMorbidity', { coMorbidity: [] })

export const coMorbidityReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('coMorbidity', { coMorbidity: action.payload })
            return JSON.parse(EpGetStorage('coMorbidity'))
        case 'remove':
            EpSetStorage('coMorbidity', { coMorbidity: '' })
            return JSON.parse(EpGetStorage('coMorbidity'))
        default:
            return state
    }
}
