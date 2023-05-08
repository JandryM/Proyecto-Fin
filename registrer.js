const nombre = document.getElementById("name");
const id = document.getElementById("cedu");
const email = document.getElementById("correo");
const telefono = document.getElementById("celular");
const celurepre = document.getElementById("phonerepre");
const ubica = document.getElementById("dire");
const pass = document.getElementById("contraseña");
const contra = document.getElementById("repcontra");
const select = document.getElementById("text1");
const select2 =document.getElementById("text2");
const sexo = document.getElementById("tipgenero");
const terminos = document.getElementById("terminosycondiciones");
const form = document.getElementById("form");
const listinput = document.querySelectorAll(".botons");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let condicion = validacion();
    if(condicion){
        return location.href = "index.html";
    }
    verificargenero();

function validacion(){
    let condicion = true;
    listinput.forEach((element) => {
        element.firstElementChild.innerHTML = "";
    });

    if(nombre.value.length <1 || nombre.value.trim() == ""){
        mjserror("name","Nombre no valido");
        condicion = false;
    }
    if(id.value.length != 10 || id.value.trim() == "" || isNaN(id.value)){
        mjserror("cedu", "C&eacutedula no valida");
        condicion = false;
    }
    if(email.value.length <1 || email.value.trim() == ""){
        mjserror("correo", "Correo no valido");
        condicion = false;
    }
    if(telefono.value.length != 10 || telefono.value.trim() == "" || isNaN(telefono.value)){
        mjserror("celular", "Celular no valido");
        condicion = false;
    }
    if(celurepre.value.length != 10 || celurepre.value.trim() == "" || isNaN(celurepre.value)){
        mjserror("phonerepre", "Celular no valido");
        condicion = false;
    }
    if(ubica.value.length <3 || ubica.value.trim() == ""){
        mjserror("dire","Direcci&oacuten No Valida");
        condicion = false;
    }
    if (select.value == 0 || select.value == ""){
        mjserror("text1", "Elija un Tipo*");
        condicion = false;
    }
    if (select2.value == 0 || select2.value == ""){
        mjserror("text2", "Elija un Grado*");
        condicion = false;
    }
    if(pass.value.length <6 || pass.value.trim() == ""){
        mjserror("pass", "Ingrese una Contrase&ntilde;a de almenos 6 carácteres");
        condicion = false;
    }
    if( contra.value != pass.value){
        mjserror("contra", "Las Contrase&ntilde;as no Coinciden");
        condicion = false;
    }
    if (!terminos.checked){
        mjserror("terminosycondiciones", "Acepte*");
        condicion = false;
    }
    return condicion;
}
})
function mjserror(classboton, mensaje){
    let elemento = document.querySelector(`.${classboton}`);
    elemento.firstElementChild.innerHTML =mensaje;
}
function verificargenero(){
    if(document.getElementById("tipe1").checked){

    }else if(document.getElementById("tipe2").checked){

    }else if(document.getElementById("tipe3").checked){

    }else{
        mjserror("tipgenero","Elija un G&eacutenero");
        condicion = false;
    }
}