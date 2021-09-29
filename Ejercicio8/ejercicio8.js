var form = document.querySelector("form")
var usuario = document.getElementById("usuario")
var clave = document.getElementById("clave")
var submit = document.querySelector("button")

form.onsubmit = function(e){
    if(usuario.value === "" || clave.value === ""){
        e.preventDefault(e);
        alert ("Completa ambos datos!");
    }
}

// El correo electronico sera validado automaticamente mediante el input por tener type="email"

