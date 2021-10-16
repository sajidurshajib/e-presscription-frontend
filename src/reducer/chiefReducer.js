export const chiefState = { cc: '' }

export const chiefReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return { cc: action.payload }
        case 'remove':
            return { cc: '' }
        default:
            return state
    }
}
