const circleContainer = document.querySelector('.circle-container');
const lista = [1, 2, 3, 4];
let currentIndex = 0;
const btn = document.getElementById("anterior-btn");
const btn2 = document.getElementById("siguiente-btn");

function aumentar() {
    Array.from(circleContainer.children).forEach((child) => {
    });

    if (currentIndex >= lista.length - 1) {
        btn2.style.backgroundColor = "gray";
        btn2.style.cursor = "not-allowed";
    } else{
        currentIndex++;
        btn.style.backgroundColor ="#3498db";
        btn.style.cursor = "pointer";
        
    }
    
    circleContainer.children[currentIndex * 2].classList.add("active");
    circleContainer.children[currentIndex * 2 - 1].classList.add("barra-activada");
}


function disminuir() {
    if (currentIndex < 0) {
        console.log("ENTRO")
        currentIndex = lista.length - 1;
    } else {
        currentIndex--;
    }
    switch(currentIndex){
        case 2:
            if (circleContainer.children[currentIndex * 3 - 1]) {
                circleContainer.children[currentIndex * 3 - 1].classList.remove("barra-activada");
            }
            console.log("Se eliminó la barra 3");
            if (circleContainer.children[currentIndex * 3]) {
                circleContainer.children[currentIndex * 3].classList.remove("active");
            }
            console.log("Se eliminó el círculo 4");
            break;
        case 1:
            if (circleContainer.children[currentIndex * 4 - 1]) {
                circleContainer.children[currentIndex * 4 - 1].classList.remove("barra-activada");
            }
            console.log("Se eliminó la barra 2");
            if (circleContainer.children[currentIndex * 4]) {
                circleContainer.children[currentIndex * 4].classList.remove("active");
            }
            console.log("Se eliminó el círculo 3");
            break;
        case 0:
            if (circleContainer.children[currentIndex * 4]) {
                circleContainer.children[1].classList.remove("barra-activada");
        console.log("Se eliminó la barra 1");
            }
            console.log("Se eliminó la barra 1");
            if (circleContainer.children[currentIndex * 2]) {
                circleContainer.children[currentIndex * 2 + 2].classList.remove("active");
            }            
            console.log("Se eliminó el círculo 2");
            break;
    }
    
    if (currentIndex == 0) {
        btn.disabled = true;
        btn.style.backgroundColor = "grey";
        btn.style.cursor = "not-allowed";
        console.log("Boton deshabilitado")
        btn2.style.cursor = "pointer";
        btn2.style.backgroundColor = "#3498db";
    }
}


lista.forEach((num, index) => {
    let span = document.createElement("span");
    span.className = "circle";
    if (index !== 0) {
        var barra = document.createElement("span");
        barra.classList.add("barra");
        circleContainer.appendChild(barra);
    }
    span.innerText = `${num}`;
    if (index === 0) {
        span.classList.add("active");
    }
    circleContainer.appendChild(span);
});

const siguienteBtn = document.getElementById("siguiente-btn");
const disminuirBtn = document.getElementById("anterior-btn");
siguienteBtn.addEventListener("click", aumentar);
disminuirBtn.addEventListener("click", disminuir);
