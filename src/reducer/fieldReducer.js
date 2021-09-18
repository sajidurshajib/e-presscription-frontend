export const fieldState = { field: 'none' }

export const fieldReducer = (state, action) => {
    switch (action.type) {
        case 'chief':
            return { field: 'chief' }
        case 'history':
            return { field: 'history' }
        case 'onexam':
            return { field: 'onexam' }
        case 'investigation':
            return { field: 'investigation' }
        case 'diagnosis':
            return { field: 'diagnosis' }
        case 'medicine':
            return { field: 'medicine' }
        case 'advice':
            return { field: 'advice' }
        case 'next':
            return { field: 'next' }
        case 'template':
            return { field: 'template' }
        default:
            return state
    }
}
