const compradosTitulo = document.querySelector('.comprados-titulo');
const compradosHr = document.querySelector('.comprados-hr');

export function verificarListaComprados(lista) {
    if (lista.querySelectorAll("li").length > 0) {
        compradosTitulo.style.display = "block";
        compradosHr.style.display = "block";
    } else {
        compradosTitulo.style.display = "none";
        compradosHr.style.display = "none";
    }
}