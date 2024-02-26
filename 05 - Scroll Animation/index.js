const contenedor = document.getElementById("principal");
let ultimoDesplazamiento = 0;

window.addEventListener("scroll", () => {
    const umbral = 100;
    if (window.scrollY > ultimoDesplazamiento + umbral) {
        if (contenedor.children.length < 10) {
            const nuevoSpan = crearSpan();
            contenedor.appendChild(nuevoSpan);
            ultimoDesplazamiento = window.scrollY;
            if (contenedor.children.length > 1) {
                const spans = contenedor.children;
                const ultimoSpan = spans[spans.length - 1];
                aplicarTransicion(ultimoSpan);
            }
        }
    } else if (window.scrollY < ultimoDesplazamiento - umbral) {
        if (contenedor.children.length > 1) {
            contenedor.lastElementChild.remove();
            ultimoDesplazamiento = window.scrollY;
        }
    }
});

function crearSpan() {
    const span = document.createElement("span");
    span.innerText = "CONTENIDO";
    return span;
}

function aplicarTransicion(span) {
    if (contenedor.children.length % 2 === 0) {
        span.classList.add("par");
    } else {
        span.classList.add("impar");
    }
    // span.classList.add("entrando");
    span.addEventListener("transitionend", () => {
        span.classList.remove("entrando");
    });
}
