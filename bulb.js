var a=document.querySelector(".bulb");
var b=document.querySelector("button");
var flag=0;
b.addEventListener("click",function(){
    if(flag==0){
        a.style.backgroundColor="yellow";
        flag=1;
    }
    else{
        a.style.backgroundColor="transparent";
        flag=0;
    }
})
