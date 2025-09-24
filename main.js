const formulario = document.getElementById('formulario')
const input = document.getElementById('nombre')
const saludo = document.getElementById('saludo')
const btnBorrar = document.getElementById('borrar')
const usuarioCreado = document.getElementById('usuario_creado')

document.addEventListener('DOMContentLoaded', () => {

    const userCreated = localStorage.getItem('usuario');
    if (userCreated) {
        usuarioCreado.textContent = 'Bienvenido de nuevo ' + userCreated;
    }


});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = input.value.trim();

    if (nombre == '') {
        alert('ingrese un nombre')
        return;
    }

    localStorage.setItem('usuario', nombre);
    saludo.textContent = 'Bienvenido ' + nombre
    input.value= "";



});



btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    saludo.textContent = 'Bienvenido Usurio Indefenido'

});


document.addEventListener('DOMContentLoaded', () => {

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        saludo.textContent = 'Bienvenido de nuevo ' + usuarioGuardado;
    }


});