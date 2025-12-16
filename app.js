const filmes = document.querySelectorAll(".filme");
const modal = document.getElementById("modal");

const titulo = document.getElementById("modal-titulo");
const sinopse = document.getElementById("modal-sinopse");
const extra = document.getElementById("modal-extra");

const fechar = document.getElementById("fechar");

filmes.forEach(filme => {
    filme.addEventListener("click", () => {
        titulo.textContent = filme.dataset.titulo;
        sinopse.textContent = filme.dataset.sinopse;
        extra.textContent = filme.dataset.extra;
        modal.style.display = "block";
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
