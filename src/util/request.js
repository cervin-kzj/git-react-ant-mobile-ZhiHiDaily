import axios from "axios"

/**
 * 响应拦截器
 */
axios.interceptors.response.use((res) => {
    console.log("响应拦截器", res);
    return res;
});

/**
 * 请求拦截器
 */
axios.interceptors.request.use(res => {
    console.log("请求拦截器", res);
    return res;
});

const baseUrl = "/api";

/**
 * 文章详情
 * @param {*} id 
 * demo:https://news-at.zhihu.com/api/4/story/9728229
 */
export const requestNewsDetail = id => (
    axios({
        url: `${baseUrl}/4/story/${id}`,
        method: "get",
        params: {}
    })
)

/**
 * 文章长评
 * @param {*} id
 * demo:https://news-at.zhihu.com/api/4/story/9712509/long-comments 
 */
export const requestLongComments = id => {
    return axios({
        url: `${baseUrl}/4/story/${id}/long-comments`,
        method: "get",
        params: {}
    })
};

/**
 * 文章短评
 * @param {*} id
 * demo:https://news-at.zhihu.com/api/4/story/9712509/short-comments
 */
export const requestShortComments = id => {
    return axios({
        url: `${baseUrl}/4/story/${id}/short-comments`,
        method: "get",
        params: {}
    })
};

/**
 * 最新新闻 
 * demo:https://news-at.zhihu.com/api/4/stories/latest
 */
export const requestLatest = () => {
    return axios({
        url: `${baseUrl}/4/stories/latest`,
        method: "get",
        params: {}
    })
}

/**
 * 之前的消息
 * @param {*} date 
 * demo:https://news-at.zhihu.com/api/4/stories/before/20190613
 */
export const requestBefore = date => (
    axios({
        url: `${baseUrl}/4/stories/before/${date}`,
        method: "get",
        params: {}
    })
)