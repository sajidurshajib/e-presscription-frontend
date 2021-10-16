export const investigationState = { inv: [] }

export const investigationReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return { inv: action.payload }
        case 'remove':
            return { inv: [] }
        default:
            return state
    }
}
