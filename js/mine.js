window.onscroll=function(){
    var st=document.documentElement.scrollTop;
    console.log(st);
    if(st>(header.offsetHeight+snav.offsetHeight)){
        block.style.display="block";
    }
    else{
        block.style.display="none";
    }
}