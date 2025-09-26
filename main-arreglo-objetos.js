const form = document.getElementById('formulario-curso')
const inputCurso = document.getElementById('curso')
const inputPrecio = document.getElementById('precio')
const inputProfesor = document.getElementById('profesor')
const inputCuidad = document.getElementById('ciudad')
const inputCupo = document.getElementById('cupo')
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

    // capturamos un arreglo existente  en el localStorage  o lo creamos vacio si no existe previamente 
    const cursosGuardados = JSON.parse (localStorage.getItem('cursos')) || [];


    // Agregamos el arreglo []a cursoGuardado [] newCurso  
    cursosGuardados.push(newCurso)

    localStorage.setItem('cursos' , JSON.stringify(cursosGuardados));

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

btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('cursos');
    msjCurso.textContent = 'No hay cursos cargados'
    });

