let login = document.getElementById("login");

login.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    if(nombre == ""){
        mensaje.innerHTML = "Ingrese su usuario";
    }
    else if(clave == ""){
        mensaje.innerHTML = "Ingrese su contraseña";
    }
    else{
        mensaje.innerHTML = "Datos ingresados correctamente";
    }

});