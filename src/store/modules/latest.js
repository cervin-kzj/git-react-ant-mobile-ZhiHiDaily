import { requestLatest, requestBefore } from "../../util/request"
import { getTime } from "../../util/timeTool"
// [
//     {
//         time: "今日新闻",
//         arr: [
//             {},
//             {}
//         ]
//     },
//     {
//         time: "昨日新闻",
//         arr: [
//             {},
//             {}
//         ]
//     }
// ]

/**
 * initState
 */
const initState = {
    stories: [],
    top_stories: [],
    n: 0,
    isLoad: true
}

/**
 * action creater
 */
const setStoriesAction = (arr) => {
    return {
        type: "setStoriesAction",
        arr: arr
    }
}
const setTopStoriesAction = (arr) => {
    return {
        type: "setTopStoriesAction",
        arr: arr
    }
}
const setIsLoadAction = (isLoad) => {
    return {
        type: "setIsLoadAction",
        isLoad: isLoad
    }
}
export const setNAction = () => {
    return {
        type: "setNAction",
    }
}
export const requestTopStoriesAction = () => {
    return (dispatch, getState) => {
        try {
            requestLatest().then((reslove) => {
                dispatch(setTopStoriesAction(reslove.data.top_stories))
                dispatch(setStoriesAction({
                    time: "今日新闻",
                    arr: reslove.data.stories
                }))
            })
        }
        catch (e) {
            console.error(e);
        }
    }
}

export const requestBeforeAction = () => {
    return (dispatch, getState) => {
        try {
            // isLoad改为false
            dispatch(setIsLoadAction(false));
            let { n: n } = getState().latest;
            requestBefore(getTime(n).params).then(resolve => {
                let { stories } = resolve.data;
                dispatch(setStoriesAction({
                    time: getTime(n).show,
                    arr: stories
                }));
                // isLoad改为true
                dispatch(setIsLoadAction(true));
            })
        }
        catch (e) {
            console.log(e);
        }
    }
}

/**
 * reducer
 * @param {*} state 
 * @param {*} action 
 */
export const reducerLatest = (state = initState, action) => {
    switch (action.type) {
        case "setTopStoriesAction":
            let obj = Object.assign({}, state, { top_stories: action.arr });
            return obj;
            break;
        case "setStoriesAction":
            return {
                ...state,
                stories: [...state.stories, action.arr]// push
            }
            break;
        case "setNAction":
            return {
                ...state,
                n: state.n + 1
            }
            break;
        case "setIsLoadAction":
            return {
                ...state,
                isLoad: action.isLoad
            }
            break;
        default:
            return state;
    }
}

/**
 * reselector
 */
export const getStoriesAction = (state) => {
    return state.latest.stories;
}
export const getTopStoriesAction = (state) => {
    return state.latest.top_stories;
}
export const getNAction = (state) => {
    return state.latest.n;
}
export const getIsLoadAction = (state) => {
    return state.latest.isLoad;
}

