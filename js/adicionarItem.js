import { criarItemDaLista } from "./criarItemDaLista.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(e) {
    e.preventDefault();

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
}