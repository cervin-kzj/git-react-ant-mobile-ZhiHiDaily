import { requestLongComments, requestShortComments } from "../../util/request";

/**
 * initState
 */
const initState = {
    commentLong: [],
    commentShort: []
}

/**
 * action creater
 */
const setLongCommentsAction = (arr) => {
    return {
        type: "setLongCommentsAction",
        arr: arr
    }
}
const setShortCommentsAction = (arr) => {
    return {
        type: "setShortCommentsAction",
        arr: arr
    }
}
export const requestLongCommentsAction = (id) => {
    return (dispatch, getState) => {
        try {
            requestLongComments(id).then((resolve) => {
                dispatch(setLongCommentsAction(resolve.data.comments))
            })
        }
        catch (e) {
            console.log(e);
        }
    }
}
export const requestShortCommentsAction = id => (
    (dispatch, getState) => {
        try {
            requestShortComments(id).then(resolve => dispatch(setShortCommentsAction(resolve.data.comments)))
        }
        catch (e) {
            console.log(e);
        }
    }
)

/**
 * reducer
 * @param {*} state 
 * @param {*} action 
 */
export const reducerComment = (state = initState, action) => {
    switch (action.type) {
        case "setLongCommentsAction":
            return {
                ...state,
                commentLong: action.arr
            }
            break;
        case "setShortCommentsAction":
            return {
                ...state,
                commentShort: action.arr
            }
            break;
        default:
            return state;
    }
}

/**
 * reselector
 */
export const getLongCommentsAction = (state) => {
    return state.comment.commentLong;
}

export const getShortCommentsAction = (state) => {
    return state.comment.commentShort;
}