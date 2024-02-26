const barras = document.getElementById("close");
const equis = document.getElementById("open");
const principal = document.getElementById("principal");

const circle = document.getElementById("circle");

barras.addEventListener("click",()=>{
    circle.style.rotate = "-90deg";
    circle.style.transition = "all 1s ease";
    principal.style.transformOrigin = "top left";
    principal.style.rotate = "-15deg";
    principal.style.transition = "all 1s ease";
})

equis.addEventListener("click",()=>{
    circle.style.rotate = "0deg";
    circle.style.transition = "all 1s";
    principal.style.rotate = "0deg";
    principal.style.transition = "all 1s";
    
})