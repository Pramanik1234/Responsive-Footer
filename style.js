let col = document.querySelectorAll(".col");
let icon = document.querySelectorAll(".fa-sharp");
let ul = document.querySelectorAll("ul");
let nav_icon=document.querySelectorAll(".nav-icon");
for(let i=0;i<icon.length;i++){
    icon[i].addEventListener('click',function(){
        if( ul[i].style.display=="block"){
            ul[i].style.display="none";
            icon[i].style.transform='rotate(0deg)';   
        }
        else{
            ul[i].style.display="block";
            icon[i].style.transform='rotate(-180deg)';
        }
})
}
