// function() {
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

        function validarNombre(){
            if(nombre.value == '' || nombre.value == null) {
                console.log('Por favor digite el nombre');
                e.preventDefault();
            }
        }
        formulario.addEventListener('submit', validarNombre);
//}())