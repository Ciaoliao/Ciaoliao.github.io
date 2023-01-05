//JOSN
var jarr = [{
    icon: "#icon-jiahao",
    title: "上海人大科...发布了新职位",
    content: "44位Boss新发布",
    time: "09:44"
}, {
    icon: "#icon-qunfengtongzhigonggao",
    title: "通知",
    content: "让附近的boss找到你",
    time: "12月4日"
}, {
    icon: "#icon-zhibo",
    title: "直播招聘",
    content: "上海地区校招，你还有多少惊喜是朕不知道的？每天...",
    time: "11月30日"
}, {
    icon: "#icon-kecheng",
    title: "直课堂",
    content: "",
    time: "10月15日"
},
];
var jlist = document.querySelector(".list");

jarr.forEach((v, i) => {
    var nli = document.createElement("li");
    nli.innerHTML = `<div class="li_left">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="${v.icon}"></use>
    </svg>
</div>

<div class="li_right">
    <p>${v.title}</p>
    <span>${v.content}</span>
</div>
<div class="li_time">
    <span>${v.time}</span>
</div>`;
    jlist.appendChild(nli);
});










