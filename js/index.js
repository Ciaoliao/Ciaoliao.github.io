/****************************************发现页面************************************************/
var content = document.getElementById("content");
var ul = content.querySelector(".list");
var li = ul.querySelectorAll("li");
var c = content.querySelectorAll(".close");

/***********header导航变色***************/
//选项
var t_list = document.getElementById("top_list");
var head_li = t_list.querySelectorAll("li");

//隐藏页面
var main = document.getElementById("main");
var div = main.querySelectorAll(".page");

var x;
for (var i = 0; i < head_li.length; i++) {//排他思想
    head_li[i].setAttribute('index', i);//设置索引
    head_li[i].onclick = function () {
        var index = this.getAttribute("index");
        x = index;
        for (var g = 0; g < head_li.length; g++) {
            head_li[g].className = "";
        }
        this.className = "cur";
        for (var j = 0; j < div.length; j++) {
            div[j].style.display = "none";
        }

        div[index].style.display = "block";
    }
}
/****************************************发现页面************************************************/
/****************************************实习页面***********************************************/
/********************实习页面顶部导航 *******************/
//实习页面变量
var snav2 = document.getElementsByClassName("snav2")[0];
var snav2_li = snav2.querySelectorAll("li");
var add = snav2.getElementsByClassName("add")[0];
var top2 = document.getElementsByClassName("top2")[0];
var content2 = document.getElementById("content2");
var c2_ul = content2.querySelector(".list");
//兼职页面变量
var content3 = document.getElementById("content3");
var c3_ul = content3.querySelector(".list");
var c3_li = c3_ul.querySelectorAll("li");
var top3 = document.getElementsByClassName("top3")[0];

window.onscroll = function () {
    var st = document.documentElement.scrollTop;
    if (st > header.offsetHeight) {
        if (x == 1) {
            header.style.position="static";
            header.style.hight="0";


            add.style.color = "#fff";
            snav2.style.position = "fixed";
            c2_ul.style.marginTop = "150px";

            for (var i = 1; i < snav2_li.length; i++) {
                snav2_li[0].style.color = "#fff";
                snav2_li[i].style.color = "#9de7e9";
            }
            snav2.style.backgroundColor = "rgb(23,178,180)";

            top2.style.position = "fixed";
        } else if (x == 2) {
           header.style.position="static";
            header.style.hight="0";


            c3_ul.style.marginTop = "100px";
            top3.style.position = "fixed";
        }
    } else {
       header.style.position="fixed";
        header.style.hight="50px";
        snav2.style.position = "static";

        for (var i = 1; i < snav2_li.length; i++) {
            snav2_li[0].style.color = "#000";
            snav2_li[i].style.color = "rgb(94,94,94)";
        }

        snav2.style.backgroundColor = "#fff";
        add.style.color = "#000";
        top2.style.position = "static";
        c2_ul.style.marginTop = "0px";

        top3.style.position = "static";
        c3_ul.style.marginTop = "0px";

    }
}
var c2_li = c2_ul.querySelectorAll("li");

for (let i = 0; i < c2_li.length; i++) {
    c2_li[i].onclick = function () {
        c2_ul.removeChild(c2_li[i]);
        //只有用let定义的i才可以在函数体内用，否则使用this。
    }
}

for (let i = 0; i < c3_li.length; i++) {
    c3_li[i].onclick = function () {
        c3_ul.removeChild(c3_li[i]);
    }
}

//JOSN
var jarr = [{
    work: "前端工程师",
    salary: "9-12k/月",
    require: "北京字节跳动 D轮及以上 1000人及以上",
    span1: "5天/周",
    span2: "3个月",
    span3: "本科",
    span4: "DOM",
    img: "./img/people.png",
    people: " 薛先生 • hr",
    address: "闵行区 虹梅路 ",
    dot: "×"
}, {
    work: "ikun应援团",
    salary: "200-300元/天",
    require: "ikun集团 D轮及以上 100人及以上 ",
    span1: "5天/周",
    span2: "博士后",
    span3: "真爱坤",
    span4: "小黑子勿入",
    img: "./img/ikun.png",
    people: " 坤先生 • hr",
    address: "辽宁 大连 ",
    dot: "×"
}, {
    work: "ikun保安团",
    salary: "300-400元/天",
    require: "ikun集团 100人及以上 ",
    span1: "5天/周",
    span2: "3个月",
    span3: "本科",
    span4: "真爱坤",
    img: "./img/ikun5.png",
    people: "坤先生 • hr",
    address: "闵行区 虹梅路",
    dot: "×"
}, {
    work: "ikun骑士团",
    salary: "6-9k/月",
    require: "ikun集团 D轮及以上 10000人及以上 ",
    span1: "7天/周",
    span2: "3个月",
    span3: "本科",
    span4: "太极拳",
    img: "./img/ikun1.png",
    people: "鸡先生 • hr",
    address: "闵行区 虹梅路",
    dot: "×"
}, {
    work: "ikun开发师",
    salary: "9-12k/月",
    require: "ikun集团 D轮及以上 1000人及以上",
    span1: "5天/周",
    span2: "3个月",
    span3: "本科",
    span4: "HTML5",
    img: "./img/ikun2.png",
    people: "鸡先生 • hr",
    address: "闵行区 虹梅路",
    dot: "×"
}];

jarr.forEach((v, i) => {
    var nli = document.createElement("li");
    nli.innerHTML = `
    <div class="top">
        <i>${v.work}</i> <i>${v.salary}</i>
    </div>

    <div class="middle1">
        <p>${v.require}</p>
    </div>
    <div class="middle2">
        <span>${v.span1}</span> <span>${v.span2}</span> <span>${v.span3}</span> <span>${v.span4}</span>
    </div>

    <div class="bottom">

        <i><img src="${v.img}"> ${v.people}</i>
        <i>${v.address}<span class="close">${v.dot}</span></i>
    </div>
`;
    ul.appendChild(nli);
})



