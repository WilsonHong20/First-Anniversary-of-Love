// 获取音频元素
const backgroundMusic = document.getElementById("backgroundMusic");

// 播放/暂停切换函数
function togglePlay() {
  if (backgroundMusic.paused) {
    // 首次播放需要处理静音限制
    if (backgroundMusic.muted) {
      backgroundMusic.muted = false;
    }
    backgroundMusic.play().catch(error => {
      alert("请点击页面任意位置后重试播放！");
    });
  } else {
    backgroundMusic.pause();
  }
  
  // 可选：添加按钮状态反馈（如修改文字/样式）
  const button = document.getElementById("button");
  button.textContent = backgroundMusic.paused ? "play" : "pause";
}

// 初始化静音状态（可选）
document.addEventListener('DOMContentLoaded', () => {
  backgroundMusic.muted = true; // 初始静音防止自动播放被阻止
  backgroundMusic.play().catch(() => {}); // 尝试预加载
});