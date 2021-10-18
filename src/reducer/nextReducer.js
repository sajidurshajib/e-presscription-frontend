export const nextState = { nxt: '' }

export const nextReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return { nxt: action.payload }
        case 'remove':
            return { nxt: '' }
        default:
            return state
    }
}
