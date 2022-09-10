import actionTypes from './actionTypes';
import {getAllCodeService} from "../../services/userService";

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        const res = await getAllCodeService("GENDER")
        if (res && res.errCode === 0) {
            dispatch(fetchGenderSuccess(res.data))
        } else {
            dispatch(fetchGenderFailed())
        }
    }
}
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        const res = await getAllCodeService("ROLE")
        if (res && res.errCode === 0) {
            dispatch(fetchRoleSuccess(res.data))
        } else {
            dispatch(fetchRoleFailed())
        }
    }
}
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        const res = await getAllCodeService("POSITION")
        if (res && res.errCode === 0) {
            dispatch(fetchPositionSuccess(res.data))
        } else {
            dispatch(fetchPositionFailed())
        }
    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

