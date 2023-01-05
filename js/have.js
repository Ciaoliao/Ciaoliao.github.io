

/****************直播页面*******************/
//选项
var snav = document.getElementById("snav");
var snav_ul = snav.querySelector(".snav_list");
var snav_li = snav_ul.querySelectorAll("li");



//隐藏页面
var main = document.getElementById("main");
var div = main.querySelectorAll(".page");

var x;
for (var i = 0; i < snav_li.length; i++) {//排他思想
  snav_li[i].setAttribute('index', i);//设置索引
  snav_li[i].onclick = function () {
    var index = this.getAttribute("index");
    x = index;
    for (var g = 0; g < snav_li.length; g++) {
      snav_li[g].className = "";
    }
    this.className = "snav_cur";
    for (var j = 0; j < div.length; j++) {
      div[j].style.display = "none";
    }
    div[index].style.display = "block";
  }
}



//轮播图
var slide = main.querySelector(".slide");
var slide_pic = slide.querySelector(".pic");
var slide_ul = slide_pic.querySelector("ul");
var cir_ul = main.querySelector(".circle");

//自动播放
var j = 0;
var timer = setInterval(function () {
  var pic_w = slide_pic.offsetWidth;
  j++;
  var x = -j * pic_w;
  slide_ul.style.transition = "all .5s";
  slide_ul.style.transform = 'translateX(' + x + 'px)';
}, 2000);

slide_ul.addEventListener("transitionend", function () {
  var pic_w = slide_pic.offsetWidth;
  if (j >= 3) {
    j = 0;
    var x = -j * pic_w;
    slide_ul.style.transition = "none";
    slide_ul.style.transform = 'translateX(' + x + 'px)';
  } else if (j < 0) {
    j = 2;
    var x = -j * pic_w;
    slide_ul.style.transition = "none";
    slide_ul.style.transform = 'translateX(' + x + 'px)';
  }

  //小圆点
  cir_ul.querySelector(".cir_cur").classList.remove("cir_cur");
  cir_ul.children[j].classList.add("cir_cur");
});

//手指滑动轮播图
var startX = 0;
var moveX = 0;
var flag=false;
slide_ul.addEventListener('touchstart', function (e) {
  startX = e.targetTouches[0].pageX;
  clearInterval(timer);//停止定时器
});

slide_ul.addEventListener('touchmove', function (e) {
  var pic_w = slide_pic.offsetWidth;
  moveX = e.targetTouches[0].pageX - startX;
  var x = -j * pic_w + moveX;

  slide_ul.style.transition = "none";
  slide_ul.style.transform = 'translateX(' + x + 'px)';
  flag=true;
  e.preventDefault();//阻止滚动屏幕
});

//轮播图回弹
slide_ul.addEventListener('touchend', function (e) {
  if(flag==true){
    var pic_w = slide_pic.offsetWidth;
  if (Math.abs(moveX) > 50) {
    if (moveX < 0) {
      j++;
    } else {
      j--;
    }
    var x = -j * pic_w;
    slide_ul.style.transition = "all .5s";
    slide_ul.style.transform = 'translateX(' + x + 'px)';
  }else{
    var pic_w = slide_pic.offsetWidth;
    var x = -j * pic_w;
    slide_ul.style.transition = "all .5s";
    slide_ul.style.transform = 'translateX(' + x + 'px)';
  }
  }
  clearInterval(timer);//开启定时器
  timer = setInterval(function () {
    var pic_w = slide_pic.offsetWidth;
    j++;
    var x = -j * pic_w;
    slide_ul.style.transition = "all .5s";
    slide_ul.style.transform = 'translateX(' + x + 'px)';
  }, 2000);
});




//add
var add = main.querySelector(".add");
var add_content = main.querySelector(".add_content");
var all = document.querySelector(".all");


add.onclick = function () {
  all.style.display = "block";
  add_content.style.height = "250px";
  add_content.style.padding = "15px";
}

all.onclick = function () {
  all.style.display = "none";
  add_content.style.height = "0";
  add_content.style.padding = "0";
}


















