export const sidebarState = { expand: true }

export const sidebarReducer = (state, action) => {
    switch (action.type) {
        case 'hide':
            return { expand: false }
        case 'unhide':
            return { expand: true }
        default:
            return state
    }
}
