function Licencias(){
    alert("Cargando Licencias...");
    window.location.href = "Licencias.html";
}
function agregarFila() {
    alert("cargando nuevas filas, podra modificar el texto...");
    var tabla = document.getElementById("ejemploLicencias");

    var nuevaFila = tabla.insertRow(-1);

    var nuevaCelda1 = nuevaFila.insertCell(0);
    var nuevaCelda2 = nuevaFila.insertCell(1);
    var nuevaCelda3 = nuevaFila.insertCell(2);
    var nuevaCelda4 = nuevaFila.insertCell(3);

    nuevaCelda1.innerHTML = "Nueva Licencia";
    nuevaCelda1.contentEditable = "true";
    nuevaCelda2.innerHTML = "Descripción de la nueva licencia.";
    nuevaCelda2.contentEditable = "true";
    nuevaCelda3.innerHTML = "Ejemplos de programas.";
    nuevaCelda3.contentEditable = "true";
    nuevaCelda4.innerHTML = "Clasificación";
    nuevaCelda4.contentEditable = "true";
}

