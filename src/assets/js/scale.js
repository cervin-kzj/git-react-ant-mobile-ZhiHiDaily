//当页面加载进来，窗口大小发生变化的时候
window.onload = window.onresize = function () {
  // document.documentElement
  // client客户区 可视区   width 宽度
  let deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 720) {
    document.documentElement.style.fontSize = 100 + "px"
  } else {
    //             html    style="font-size"
    document.documentElement.style.fontSize = deviceWidth / 720 * 100 + "px";
  }
}

// 640是设计稿尺寸，根据设计稿尺寸调整