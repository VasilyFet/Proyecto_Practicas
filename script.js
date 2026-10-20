document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const modal = document.getElementById('modalImagen');
    const imgAmpliada = document.getElementById('imgAmpliada');
    const btnCerrar = document.querySelector('.cerrar');
    const imagenesViñetas = document.querySelectorAll('.img-viñeta');

    // Al hacer clic en cualquier imagen de la galería, se abre en el modal
    imagenesViñetas.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            imgAmpliada.src = img.src;
            imgAmpliada.alt = img.alt;
        });
    });

    // Función para cerrar el modal
    const cerrarModal = () => {
        modal.style.display = 'none';
    };

    // Eventos para cerrar el modal
    btnCerrar.addEventListener('click', cerrarModal);

    // Cerrar al hacer clic fuera de la imagen (en el fondo oscuro)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar presionado la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            cerrarModal();
        }
    });
});
