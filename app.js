const btnMensaje = document.getElementById('btnMensaje');
const mensajeClase = document.getElementById('mensajeClase');

let contadordeclics = 1;

btnMensaje.addEventListener('click', () => {
  //  mensajeClase.textContent = "¡Hola! Este es un mensaje de alerta.";
    mensajeClase.textContent = "el texto que quisimos mostrar" + contadordeclics;
    contadordeclics = contadordeclics + 1;

    
});