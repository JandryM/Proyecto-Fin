const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const cita = document.getElementById("cita");
const nombre = document.getElementById('nombe');
const dat = document.getElementById("fecha");
const hour = document.getElementById("hora");
const propo = document.getElementById("proposito");
const listcita = document.querySelectorAll(".botons");

cita.addEventListener("submit", e=> {
    e.preventDefault();
    let condicion = validacita();
    if (condicion){
        alert("datos enviados");
        cita.reset();
    }

    function validacita(){
        let condicion = true;
        listcita.forEach((element) => {
            element.firstElementChild.innerHTML = "";
        });
        if (nombre.value.length < 1 || nombre.value.trim() == ""){
            smjerror("nombe", "Contrase&ntilde;a no valida*");
            condicion = false;
        }
        if (dat.value.length <1 || dat.value.trim() == ""){
            smjerror("fecha", "Fecha no valida*");
            condicion = false;
        }
        if (hour.value.length <1 || hour.value.trim() == ""){
            smjerror("hora", "Hora no valida*");
            condicion = false;
        }
        if (propo.value.length <20 || propo.value.trim() == ""){
            smjerror("proposito", "Debe especificar un proposito*");
            condicion = false;
        }
        return condicion;
    }
})
function smjerror(classbuton, mensaje){
    let elemento = document.querySelector(`.${classbuton}`);
    elemento.firstElementChild.innerHTML =mensaje;
}

openModal.addEventListener("click", function() {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});
