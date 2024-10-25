// Función para obtener los consejos basados en las respuestas del formulario
function mostrarConsejos() {
    // Obtener las respuestas del localStorage
    const respuestas = JSON.parse(localStorage.getItem("respuestas"));

    // Consejos de SALUD BÁSICA
    const consejosSaludBasica = document.getElementById("consejos-salud-basica");
    if (respuestas.horasSentado < 4) {
        consejosSaludBasica.innerHTML += "<li>¡Excelente! Mantén este hábito saludable. Recuerda hacer pausas activas cada hora.</li>";
    } else if (respuestas.horasSentado <= 6) {
        consejosSaludBasica.innerHTML += "<li>Estás dentro de un rango aceptable. Levántate cada 60 minutos.</li>";
    } else {
        consejosSaludBasica.innerHTML += "<li>Pasar muchas horas sentado puede afectar tu salud. Levántate cada 45 minutos.</li>";
    }

    // Edad
    if (respuestas.edad < 30) {
        consejosSaludBasica.innerHTML += "<li>Estás en una etapa óptima para mantener hábitos saludables.</li>";
    } else if (respuestas.edad <= 50) {
        consejosSaludBasica.innerHTML += "<li>Es un buen momento para prestar más atención a tu salud.</li>";
    } else {
        consejosSaludBasica.innerHTML += "<li>Mantén una rutina de ejercicio moderado y chequeos médicos regulares.</li>";
    }

    // Peso
    if (respuestas.peso === "ideal") {
        consejosSaludBasica.innerHTML += "<li>¡Muy bien! Mantener un peso adecuado es un indicador clave de buena salud.</li>";
    } else if (respuestas.peso === "ligeramente por encima") {
        consejosSaludBasica.innerHTML += "<li>Si tu peso está un poco por encima, considera aumentar tu actividad física.</li>";
    } else {
        consejosSaludBasica.innerHTML += "<li>El sobrepeso puede aumentar el riesgo de enfermedades. Incorpora más actividad física.</li>";
    }

    // Altura y postura
    if (respuestas.altura === "correcta") {
        consejosSaludBasica.innerHTML += "<li>¡Genial! Mantén tu estación de trabajo ajustada a tu altura.</li>";
    } else if (respuestas.altura === "pequeños problemas") {
        consejosSaludBasica.innerHTML += "<li>Ajusta tu silla y escritorio para que estén alineados con tu altura.</li>";
    } else {
        consejosSaludBasica.innerHTML += "<li>Si tienes problemas posturales, revisa tu espacio de trabajo.</li>";
    }

    // Consejos de ESTADO FÍSICO
    const consejosEstadoFisico = document.getElementById("consejos-estado-fisico");

    if (respuestas.estres === "bajo") {
        consejosEstadoFisico.innerHTML += "<li>¡Muy bien! Mantener un bajo nivel de estrés es clave.</li>";
    } else if (respuestas.estres === "moderado") {
        consejosEstadoFisico.innerHTML += "<li>Si sientes estrés moderado, toma pequeñas pausas a lo largo del día.</li>";
    } else {
        consejosEstadoFisico.innerHTML += "<li>Un alto nivel de estrés puede afectar seriamente tu salud mental. Considera hablar con un profesional.</li>";
    }

    // Horas de sueño
    if (respuestas.horasSueno > 7) {
        consejosEstadoFisico.innerHTML += "<li>¡Perfecto! Estás durmiendo lo necesario.</li>";
    } else if (respuestas.horasSueno >= 6) {
        consejosEstadoFisico.innerHTML += "<li>Considera mejorar la calidad de tu sueño.</li>";
    } else {
        consejosEstadoFisico.innerHTML += "<li>Intenta ajustar tu horario de sueño y asegúrate de que tu entorno sea cómodo.</li>";
    }

    // Consumo de agua
    if (respuestas.consumoAgua > 8) {
        consejosEstadoFisico.innerHTML += "<li>¡Fantástico! Mantener una buena hidratación es esencial.</li>";
    } else if (respuestas.consumoAgua >= 5) {
        consejosEstadoFisico.innerHTML += "<li>Intenta beber un vaso de agua al despertar y llevar siempre una botella contigo.</li>";
    } else {
        consejosEstadoFisico.innerHTML += "<li>Aumenta tu consumo de agua para evitar la deshidratación.</li>";
    }

    // Frecuencia de actividad física
    if (respuestas.frecuenciaActividad > 4) {
        consejosEstadoFisico.innerHTML += "<li>¡Muy bien! Mantener una rutina regular de ejercicio es beneficioso.</li>";
    } else if (respuestas.frecuenciaActividad >= 2) {
        consejosEstadoFisico.innerHTML += "<li>Podrías aumentar un poco tu frecuencia de ejercicio.</li>";
    } else {
        consejosEstadoFisico.innerHTML += "<li>Incorpora más actividad física en tu rutina.</li>";
    }

    // Dolores musculares
    if (respuestas.doloresMusculares === "sin molestias") {
        consejosEstadoFisico.innerHTML += "<li>¡Excelente! Mantén una postura adecuada y realiza ejercicios de estiramiento.</li>";
    } else if (respuestas.doloresMusculares === "leves") {
        consejosEstadoFisico.innerHTML += "<li>Ajusta tu postura y realiza ejercicios de estiramiento más frecuentes.</li>";
    } else {
        consejosEstadoFisico.innerHTML += "<li>Es fundamental que ajustes tu postura de inmediato.</li>";
    }

    // Postura
    if (respuestas.postura === "correcta") {
        consejosEstadoFisico.innerHTML += "<li>¡Perfecto! Mantener una buena postura previene dolores.</li>";
    } else if (respuestas.postura === "mejorable") {
        consejosEstadoFisico.innerHTML += "<li>Podrías hacer pequeños ajustes en tu espacio de trabajo.</li>";
    } else {
        consejosEstadoFisico.innerHTML += "<li>Es fundamental que ajustes tu postura de inmediato.</li>";
    }

    // Consejos de SALUD MENTAL
    const consejosSaludMental = document.getElementById("consejos-salud-mental");

    if (respuestas.ansiedad === "bajo") {
        consejosSaludMental.innerHTML += "<li>¡Sigue así! Mantener un bajo nivel de ansiedad es importante.</li>";
    } else if (respuestas.ansiedad === "moderada") {
        consejosSaludMental.innerHTML += "<li>Incorpora más pausas a lo largo del día para desconectarte.</li>";
    } else {
        consejosSaludMental.innerHTML += "<li>Es importante que busques actividades que te ayuden a relajarte.</li>";
    }

    // Frecuencia de pausas
    if (respuestas.pausas === "pocas") {
        consejosSaludMental.innerHTML += "<li>Toma pausas más frecuentes para mejorar tu concentración.</li>";
    } else if (respuestas.pausas === "moderadas") {
        consejosSaludMental.innerHTML += "<li>Intenta hacer pausas activas más a menudo.</li>";
    } else {
        consejosSaludMental.innerHTML += "<li>Tomar pocas pausas puede llevar a la fatiga mental.</li>";
    }

    // Interacción social
    if (respuestas.interaccion === "alta") {
        consejosSaludMental.innerHTML += "<li>¡Genial! Mantener un buen nivel de interacción social es clave.</li>";
    } else if (respuestas.interaccion === "moderada") {
        consejosSaludMental.innerHTML += "<li>Puedes aumentar tu interacción social para sentirte más conectado.</li>";
    } else {
        consejosSaludMental.innerHTML += "<li>La falta de interacción social puede afectar tu estado de ánimo.</li>";
    }

    // Fatiga mental
    if (respuestas.fatiga === "baja") {
        consejosSaludMental.innerHTML += "<li>¡Muy bien! Mantener el equilibrio entre el trabajo y el descanso es clave.</li>";
    } else if (respuestas.fatiga === "moderada") {
        consejosSaludMental.innerHTML += "<li>Es importante que hagas pausas activas más frecuentes.</li>";
    } else {
        consejosSaludMental.innerHTML += "<li>Sentir una alta fatiga mental es una señal de que necesitas descansar.</li>";
    }

    // Capacidad de concentración
    if (respuestas.concentracion === "alta") {
        consejosSaludMental.innerHTML += "<li>¡Muy bien! Mantenerse enfocado es crucial.</li>";
    } else if (respuestas.concentracion === "moderada") {
        consejosSaludMental.innerHTML += "<li>Podrías mejorar tu entorno de trabajo para reducir distracciones.</li>";
    } else {
        consejosSaludMental.innerHTML += "<li>Es fundamental que ajustes tu espacio de trabajo para ayudar a tu concentración.</li>";
    }
}

// Llama a la función para mostrar los consejos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarConsejos);