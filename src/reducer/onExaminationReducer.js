import { EpGetStorage, EpSetStorage, EpDefStorage } from '../utils/EpLocalStorage'

//Set state as default storage value
export const onExaminationState = EpDefStorage('onExamination', { onexam: '' })

export const onExaminationReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            EpSetStorage('onexam', { onexam: action.payload })
            return JSON.parse(EpGetStorage('onexam'))
        case 'remove':
            EpDefStorage('onexam', { onexam: '' })
            return JSON.parse(EpGetStorage('onexam'))
        default:
            return state
    }
}
