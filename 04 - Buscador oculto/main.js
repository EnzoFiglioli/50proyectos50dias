const texto = document.getElementById("texto");
const buton = document.getElementById("btn");

buton.addEventListener("click",()=>{

    if(texto.style.display == "block"){
        texto.style.display = "none";
    }

});