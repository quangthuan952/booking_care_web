import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                genders: action.data
            }
        case actionTypes.FETCH_GENDER_FAILED:
            return {
                ...state,
                genders: []
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                roles: action.data
            }
        case actionTypes.FETCH_ROLE_FAILED:
            return {
                ...state,
                roles: []
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            return {
                ...state,
                positions: action.data
            }
        case actionTypes.FETCH_POSITION_FAILED:
            return {
                ...state,
                positions: []
            }
        default:
            return state;
    }
}

export default adminReducer;