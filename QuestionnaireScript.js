document.getElementById("health-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener las respuestas
    const horasSentado = parseInt(document.getElementById("horas-sentado").value);
    const edad = parseInt(document.getElementById("edad").value);
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const horasSueno = parseInt(document.getElementById("horas-sueno").value);
    const estres = document.getElementById("estres").value;
    const agua = document.getElementById("agua").value;
    const actividadFisica = document.getElementById("actividad-fisica").value;
    const doloresMusculares = document.getElementById("dolores-musculares").value;
    const postura = document.getElementById("postura").value;
    const ansiedad = document.getElementById("ansiedad").value;
    const pausas = document.getElementById("pausas").value;
    const interaccionSocial = document.getElementById("interaccion-social").value;
    const fatiga = document.getElementById("fatiga").value;
    const concentracion = document.getElementById("concentracion").value;

    // Almacenar respuestas en localStorage
    localStorage.setItem("respuestas", JSON.stringify({
        horasSentado,
        edad,
        peso,
        altura,
        horasSueno,
        estres,
        agua,
        actividadFisica,
        doloresMusculares,
        postura,
        ansiedad,
        pausas,
        interaccionSocial,
        fatiga,
        concentracion
    }));

    // Redirigir a la página de consejos
    window.location.href = "consejos_personalizados.html";
});