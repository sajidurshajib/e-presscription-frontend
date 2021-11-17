import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const onExaminationState = EpDefStorage('onexam', { onexam: '' })

export const onExaminationReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('onexam', { onexam: action.payload })
            return JSON.parse(EpGetStorage('onexam'))
        case 'remove':
            EpSetStorage('onexam', { onexam: '' })
            return JSON.parse(EpGetStorage('onexam'))
        default:
            return state
    }
}
