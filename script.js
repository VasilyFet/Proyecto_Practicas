document.addEventListener("DOMContentLoaded", function() {
    console.log("¡El script se ha conectado correctamente!");

    const imagenesViñetas = document.querySelectorAll(".img-viñeta");
    console.log("He encontrado estas imágenes:", imagenesViñetas.length); // Nos dirá cuántas viñetas ve

    const modal = document.getElementById("modalImagen");
    const modalImg = document.getElementById("imgAmpliada");
    const spanCerrar = document.querySelector(".cerrar");

    imagenesViñetas.forEach(function(img) {
        img.addEventListener("click", function() {
            console.log("¡Has hecho clic en una imagen!");
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    if (modal) {
        modal.addEventListener("click", function(evento) {
            if (evento.target === modal || evento.target === spanCerrar) {
                modal.style.display = "none";
            }
        });
    }
});