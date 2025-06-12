function completarModulo(num) {
    localStorage.setItem(`modulo${num}`, "completado");
    document.getElementById(`modulo${num}`).classList.add("completed");
}

function generarCertificado() {
    if (localStorage.getItem("modulo1") && localStorage.getItem("modulo2")) {
        document.getElementById("certificadoMsg").innerText = "¡Felicitaciones! Has completado el curso.";
    } else {
        document.getElementById("certificadoMsg").innerText = "Completa todos los módulos para obtener el certificado.";
    }
}