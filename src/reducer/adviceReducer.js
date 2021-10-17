export const adviceState = { adv: '' }

export const adviceReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return { adv: action.payload }
        case 'remove':
            return { adv: '' }
        default:
            return state
    }
}
