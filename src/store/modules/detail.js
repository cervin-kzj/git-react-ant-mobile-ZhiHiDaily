import { requestNewsDetail } from "../../util/request";

/**
 * initState
 */
const initState = {
    detail: {}
}

/**
 * action creater
 */
export const requestNewsDetailAction = (id) => {
    return (dispatch, getState) => {
        try {
            requestNewsDetail(id).then((resolve) => {
                dispatch(setNewsDetailAction(resolve.data));
            })
        }
        catch (e) {
            console.error(e);
        }
    }
}
const setNewsDetailAction = (obj) => {
    return {
        type: "setNewsDetailAction",
        detail: obj
    }
}

/**
 * reducer
 * @param {*} state 
 * @param {*} action 
 */
export const reducerNewsDetail = (state = initState, action) => {
    switch (action.type) {
        case "setNewsDetailAction":
            // return {
            //     ...state,
            //     detail: action.detail
            // }
            return Object.assign({}, state, { detail: action.detail })
            break;
        default:
            return state;
    }
}

/**
 * reselector
 */
export const getNewsDetailAction = (state) => {
    return state.detail.detail
}
