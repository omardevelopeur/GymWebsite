var  bar=document.getElementById("bar");
var nav=document.getElementById("item");

nav.style.right="-300px";
bar.onclick=function(){
    if(nav.style.right == "-300px"){
        nav.style.right="0";
    }else{
        nav.style.right="-300px";
    }
}