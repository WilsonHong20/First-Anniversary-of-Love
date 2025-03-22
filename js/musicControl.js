// 获取音频元素
const backgroundMusic = document.getElementById("backgroundMusic");

function togglePlay() {
    const isPlaying = !backgroundMusic.paused;
    
    // 控制音乐状态
    if (isPlaying) {
      backgroundMusic.pause();
      clearInterval(showImageInterval); // 停止图片轮播
    } else {
      if (backgroundMusic.muted) backgroundMusic.muted = false;
      backgroundMusic.play().catch(() => alert("请点击页面重试播放！"));
      showImageInterval = setInterval(showImage, 2500); // 启动图片轮播
    }
  
    // 同步按钮状态
    const button = document.getElementById("button");
    button.textContent = isPlaying ? "播放" : "暂停";
    
    // 控制界面元素的显示（合并原play()中的逻辑）
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
  }

  document.addEventListener('DOMContentLoaded', () => {
    // 初始静音预加载
    backgroundMusic.muted = true;
    backgroundMusic.play().catch(() => {});
    
    // 初始化图片轮播（避免首次点击前无内容）
    showImageInterval = setInterval(showImage, 2500);
    clearInterval(showImageInterval); // 初始暂停
  });
