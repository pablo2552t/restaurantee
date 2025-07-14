export function mostrarSeccion(seccionId) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('section');
  secciones.forEach(seccion => {
    seccion.classList.remove('active');
  });

  // Mostrar la sección seleccionada
  const seccionActiva = document.getElementById(seccionId);
  if (seccionActiva) {
    seccionActiva.classList.add('active');
  }
}
