const form = document.getElementById('formulario-curso')
const inputCurso = document.getElementById('curso')
const inputPrecio = document.getElementById('precio')
const inputProfesor = document.getElementById('profesor')
const inputCuidad = document.getElementById('ciudad')
const inputCupo = document.getElementById('precio')
const btnBorrar = document.getElementById('borrar')
const msjCurso = document.getElementById('mensaje-curso')



form.addEventListener('submit', (e) => {

    e.preventDefault();
    const curso = inputCurso.value.trim();
    const precio = inputPrecio.value.trim();
    const profesor = inputProfesor.value.trim();
    const ciudad = inputCuidad.value.trim();
    const cupo = inputCupo.value.trim();

    if (curso =="" || precio == ""||  profesor == "" || ciudad == "" || cupo == "") {
        alert ('llene todos los campos ');
        return;
    }
    const newCurso = {

        curso: curso, 
        precio: precio , 
        profesor: profesor,
        ciudad: ciudad ,
        cupo: cupo , 
    }

    localStorage.setItem('curso' , JSON.stringify(newCurso));
    form.reset ();
     })

    document.addEventListener ('DOMContentLoaded' , ()=>{
        const cursoCreado = localStorage.getItem ('curso');
        if (cursoCreado){

            //
            const objetoCurso = JSON.parse(cursoCreado)
            msjCurso.style.whiteSpace = 'pre-line';
            msjCurso.textContent = ' Curso: ' + objetoCurso.curso + '\n Profesor: ' + objetoCurso.profesor  + '\n Precio: ' + objetoCurso.precio + ' \n Cuidad: ' +objetoCurso.ciudad + ' \n Cupo: ' + objetoCurso.cupo;

        } 

        



   
})


