//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("button").addEventListener("click", function (e) {
        validarFormulario(e);

        function validarFormulario(evento) {
           
            var usuario = document.getElementById('usuario').value;
            if (usuario.length == 0) {
                alert('No has escrito nada en el usuario');
                return;
            }
            var clave = document.getElementById('clave').value;
            if (clave.length == 0) {
                alert('La clave no es válida');
                return;

            }
            else {
                window.location.href = "./home.html";
            }
        }




    });
});

