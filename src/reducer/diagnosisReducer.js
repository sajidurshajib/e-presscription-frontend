export const diagnosisState = { probable: '', confirmatory: '' }

export const diagnosisReducer = (state, action) => {
    switch (action.type) {
        case 'prbl':
            return { probable: action.payload, confirmatory: state.confirmatory }
        case 'cnf':
            return { probable: state.probable, confirmatory: action.payload }
        case 'remove':
            return { probable: '', confirmatory: '' }
        default:
            return state
    }
}
