const title = document.querySelector(".hello h1");

console.dir(title);
function handleTitleClick(){
    title.style.color= "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is Gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor  = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS No wifi");
}

function handleWindowOnline(){
    alert("i'm Online, Good");
}
title.onclick = handleTitleClick;
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);