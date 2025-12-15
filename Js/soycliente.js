// Vamos a identificar con un id al formulario, a los campos (email y pass)
//tambien al boton ingresar
//vamos a extraer los datos de los campos email y psw
//crear funcion que permita comparar email y psw con los datos validos

//utilizamos email y psw hardcodeados

//si los datos son validos ingresa a web bienvenida, si son incorrectos mostrar alerta con error.

function validarForm() {

    const emailValido = "admin@admin.com";
    const pswValido = "admin123";

    const usrEmail = document.getElementById('id_email').value;
    const usrpass = document.getElementById('id_pass').value;

    let esValido = true;

    // Validar email vacío
    if (usrEmail.length < 1) {
        mostrarError('empty_email', 'El email no puede estar vacío');  
        esValido = false;
    } else {
        ocultarError('empty_email');
    }

    // Validar pass vacío
    if (usrpass.length < 1) {
        mostrarError('empty_pass', 'El password no puede estar vacío');  
        esValido = false;
    } else {
        ocultarError('empty_pass');
    }

    return esValido;
}

function mostrarError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = "❌ " + message;
    errorElement.style.display = 'block';
}

function ocultarError(fieldId) {
    const errorElement = document.getElementById(fieldId);
    errorElement.style.display = 'none';
}

// Listener
const btnIngresar = document.getElementById('btn_login');
btnIngresar.addEventListener('click', function(event) {
    event.preventDefault();

    if (validarForm()) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1";
    }
});
