//侧导航栏

var lnav=document.querySelector(".lnav");
var lnav_ul=lnav.querySelector("ul");
var lnav_li=lnav_ul.querySelectorAll("li");

var main=document.getElementById("main");
var page=main.querySelectorAll(".page");

var lnav_cur1=lnav_ul.querySelectorAll(".lnav_cur1");

console.log(lnav_cur1);

var x;
/*for(var i=0;i<li.length;i++){
    li[i].setAttribute('index',i);
    li[i].onclick=function(){
        var index=this.getAttribute("index");
        console.log(index);
        for(var g=0;g<one.length;g++){
        one[g].style.display="block";
    }
        one[index].style.display="none";
    }
} 
*/
for(var i=0;i<lnav_li.length;i++){//排他思想
    lnav_li[i].setAttribute('index',i);//设置索引
    lnav_li[i].onclick=function(){
        var index=this.getAttribute("index");
        x=index;
        for(var g=0;g<lnav_li.length;g++){
            lnav_li[g].className="";
        }
        this.className="lnav_cur";
        for(var j=0;j<page.length;j++){
            page[j].style.display="none";
            lnav_cur1[j].style.display="none";
        }
        lnav_cur1[index].style.display="block";
        page[index].style.display="block";
    }
}














