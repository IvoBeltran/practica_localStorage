const usuarioCreado = document.getElementById('usuario_creado')

document.addEventListener('DOMContentLoaded', () => {

    const userCreated = localStorage.getItem('usuario');
    if (userCreated) {
        usuarioCreado.textContent = 'Bienvenido de nuevo ' + userCreated;
    }


});