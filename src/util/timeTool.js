/**
 * 返回指定格式的日期
 * @param {*} timestamp 时间戳
 * @param {*} format 格式
 */
export const formattime = (timestamp, format) => {
    let time = new Date(timestamp * 1000);
    switch (format) {
        case "m-d":
            return `${((time.getMonth() + 1) + "").padStart(2, "0")}-${(time.getDate() + "").padStart(2, "0")}`;
            break;
        case "h:i":
            return `${(time.getHours() + "").padStart(2, "0")}:${(time.getMinutes() + "").padStart(2, "0")}`;
            break;
        default:
            return timestamp;
    }
}

/**
 * 返回n天前的日期
 * @param {*} n n天前 
 */
export const getTime = (n) => {
    var showDate = new Date(new Date().getTime() - n * 24 * 60 * 60 * 1000);//展示的时间对象
    var paramsDate = new Date(new Date().getTime() - (n - 1) * 24 * 60 * 60 * 1000);//发起请求的参数时间对象
    var showM = (showDate.getMonth() + 1 + "").padStart(2, '0')
    var showD = (showDate.getDate() + "").padStart(2, '0')
    var showTime = showM + "月" + showD + "日";
    var paramsY = paramsDate.getFullYear()
    var paramsM = (paramsDate.getMonth() + 1 + "").padStart(2, '0')
    var paramsD = (paramsDate.getDate() + "").padStart(2, '0')
    var paramsTime = paramsY + paramsM + paramsD

    return {
        show: showTime,
        params: paramsTime
    }
}