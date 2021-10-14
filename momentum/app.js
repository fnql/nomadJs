const title = document.querySelector(".hello h1");

function handleTitle(){
    title.style.color= "blue";
}

title.addEventListener("click",handleTitle);