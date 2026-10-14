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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalImagen");
    const imgAmpliada = document.getElementById("imgAmpliada");
    const spanCerrar = document.querySelector(".modal .cerrar");

    // 1. Seleccionamos todas las imágenes de las viñetas
    const imagenesViñetas = document.querySelectorAll(".img-viñeta");

    // 2. Al hacer clic en cualquier viñeta, se abre el modal con transición
    imagenesViñetas.forEach(img => {
        img.addEventListener("click", () => {
            modal.classList.add("activo"); // Activa la clase que dispara la animación CSS
            imgAmpliada.src = img.src;     // Pasa la ruta de la imagen clickeada
        });
    });

    // 3. Función para cerrar el modal suavemente
    function cerrarModal() {
        modal.classList.remove("activo"); // Quita la clase y la transición la desvanece
    }

    // Cerrar al hacer clic en la "X"
    if (spanCerrar) {
        spanCerrar.addEventListener("click", cerrarModal);
    }

    // Cerrar también si hacen clic fuera de la foto (en el fondo oscuro)
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
});
