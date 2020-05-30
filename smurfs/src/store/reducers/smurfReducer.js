export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
};

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SMURF_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_SMURFS_SUCCESS':
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case 'FETCH_SMURFS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case 'ADD_NEW_SMURF':
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        default:
            return state;
    }
}