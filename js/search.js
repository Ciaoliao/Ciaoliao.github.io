var jarr = [{
    content: "招商java"
},{
    content: "全栈node"
},{
    content: "go语言"
},{
    content: "electron"
},{
    content: "node全栈工程师"
},{
    content: "前端全栈工程师"
},{
    content: "react前端开发"
},{
    content: "go全栈"
},{
    content: "前端node"
},{
    content: "node后端"
},{
    content: "vue全栈"
},{
    content: "react前端开发工程师"
}];

var jlist=document.querySelector(".list")

jarr.forEach((v,i)=>{
    var nli=document.createElement("li");
    nli.innerHTML=`<li>${v.content}</li>`;
    jlist.appendChild(nli);
})











