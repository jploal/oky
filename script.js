const imagenes = [
    "img/imagen1.jpg",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
    "img/imagen4.jpg",
    "img/imagen5.jpg",
    "img/imagen6.jpg",
    "img/imagen7.jpg",
    "img/imagen8.jpg",
    "img/imagen9.jpg",
    "img/imagen10.jpg",
    "img/imagen11.jpg",
    "img/imagen12.jpg",
    "img/imagen13.jpg",
    "img/imagen14.jpg",
];

let indice = 0;

const img = document.getElementById("miImagen");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Función actualizar imagen
function actualizarImagen() {
    img.classList.add("fade");

    setTimeout(() => {
        img.src = imagenes[indice];
        img.classList.remove("fade");
    }, 200);
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    actualizarImagen();

    nextBtn.classList.add("active");
    setTimeout(() => nextBtn.classList.remove("active"), 200);
});

// Botón anterior
prevBtn.addEventListener("click", () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();

    prevBtn.classList.add("active");
    setTimeout(() => prevBtn.classList.remove("active"), 200);
});
const flowerBg = document.querySelector(".flower-bg");
const flowerEmojis = ["🌸","🌺","🌷","🌹","🌼","🌻"];
const numFlowers = 40;

for(let i = 0; i < numFlowers; i++){
    const span = document.createElement("span");
    span.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = (10 + Math.random()*30) + "px";
    span.style.animationDuration = (5 + Math.random()*10) + "s";
    span.style.opacity = Math.random() * 0.3 + 0.1;
    flowerBg.appendChild(span);
}
