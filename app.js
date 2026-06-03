const btnMensaje = document.getElementById('btnMensaje');
const mensajeClase = document.getElementById('mensajeClase');
const botonesPerfil = document.querySelectorAll('.btnPerfil');
const detallePerfil = document.getElementById('detallePerfil');

let contadordeclics = 0;

btnMensaje.addEventListener('click', () => {
   // mensajeClase.textContent = "¡Hola! Este es un mensaje de alerta.";
    mensajeClase.textContent = "el texto que quisimos mostrar" + contadordeclics;
    contadordeclics = contadordeclics + 1;

    
});

botonesPerfil.forEach((boton) => {
  boton.addEventListener('click', () => {
    const perfil = boton.getAttribute('data-perfil');
    // Changed "Perfil" to "perfil" to match the variable declaration
    detallePerfil.textContent = `informacion detallada del perfil: ${perfil}`;
  });
});
  