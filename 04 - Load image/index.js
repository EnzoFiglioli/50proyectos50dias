const bg = document.getElementById("bg");
const count = document.getElementById("contador");
var contador = 0;

function quitarFilter() {
    bg.style.filter = "none";
    bg.style.transition = "all 9s";
}

setTimeout(() => {
    quitarFilter();
    const interval = setInterval(() => {
        contadorPorcentaje(contador);
        contador++;
        if (contador > 100) {
            clearInterval(interval);
        }
        if (contador == 100){
            count.remove(count);
        }
    }, 40);
}, 500);

function contadorPorcentaje(contador) {
    count.innerText = `${contador}%`;
}
