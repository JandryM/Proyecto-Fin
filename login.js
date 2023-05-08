const usuario = document.getElementById("user");
const password = document.getElementById("passw");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const listinput = document.querySelectorAll(".botons");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let condicion = validar();
    if(condicion){
        return location.href = "inicio.html";
    }

function validar(){
    let condicion = true;
    listinput.forEach((element) => {
        element.firstElementChild.innerHTML = "";
    });
    if(usuario.value.length <1 || usuario.value.trim() == ""){
        mjserror("correo", "Correo no valido");
        condicion = false;
    }
    if(password.value.length <6 || password.value.trim() == ""){
        mjserror("pass", "Contrase&ntilde;a no valida");
        condicion = false;
    }
        return condicion;
}
})
function mjserror(classboton, mensaje){
    let elemento = document.querySelector(`.${classboton}`);
    elemento.firstElementChild.innerHTML =mensaje;
}