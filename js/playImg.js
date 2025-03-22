var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage() {
    var backgroundContainer = document.querySelector('canvas'); // 获取背景容器
    var containerWidth = backgroundContainer.offsetWidth || window.innerWidth; // 容器宽度
    var containerHeight = backgroundContainer.offsetHeight || window.innerHeight; // 容器高度

    // 设置图片为背景
    myImage.style.background = "url(" + imageArray[imageIndex] + ") no-repeat center center";
    myImage.style.backgroundSize = "contain"; // 保持图片比例完整性

    // 动态调整图片大小
    myImage.style.width = containerWidth + "px";
    myImage.style.height = containerHeight + "px";

    // 设置文字
    myTxt.innerHTML = txtArray[txtIndex];

    // 更新图片索引
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }

	txtIndex++;
    if (txtIndex >= txt_len) {
        txtIndex = 0;
    }
}

function play(){
	if(t == 0){
		myImage.setAttribute("src", "");
		myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		//setTimeout(showImage, 1000);
		setInterval(showImage, 7500);
	}
	t++;
}

function preshowImage() {
    document.getElementById("imgTxt").style.opacity = 0; // 隐藏当前图片
    myImage.style.backgroundImage = "url(" + imageArray[imageIndex] + ")";
    myImage.style.backgroundSize = "contain"; // 保持图片比例完整性
    myTxt.innerHTML = txtArray[imageIndex]; // 更新文字
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();

window.addEventListener('resize', function () {
    var backgroundContainer = document.querySelector('canvas');
    var containerWidth = backgroundContainer.offsetWidth || window.innerWidth;
    var containerHeight = backgroundContainer.offsetHeight || window.innerHeight;

    myImage.style.maxWidth = containerWidth + "px";
    myImage.style.maxHeight = containerHeight + "px";
});
