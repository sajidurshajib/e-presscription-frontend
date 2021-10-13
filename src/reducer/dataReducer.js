export const dataState = { data: [] }

export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            return { data: '' }
        case 'post':
            return { data: '' }
        default:
            return state
    }
}
