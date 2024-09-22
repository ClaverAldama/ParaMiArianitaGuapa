// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "HOLA SOY CLAVER", time: 3 },
  { text: "ESTOY PRACTICANDO", time: 7 },
  { text: "PARA DARLE UN DETALLE", time: 10 },
  { text: "A MI ARIANITA", time: 13 },
  { text: "HOY", time: 16 },
  { text: "21 DE SEPTIEMBRE", time: 19 },
  { text: "LE DEDIDCO GIRASOLES VIRTUALES", time: 22 },
  { text: "A MI ARIANITA", time: 26 },
  { text: "HERMOSA", time: 29 },
  { text: "GUAPA", time: 31 },
  { text: "LAS FLORES SE MARCHITAN", time: 34 },
  { text: "ESTE LINK DURARA TODA LA VIDA EN INTERNET", time: 37 },
  { text: "ESPERO QUE TE HAYA GUSTADO MI ARIANITA JIJI", time: 41 },
  { text: "YA APRENDERE A HACER MEJORES COSAS", time: 44 },
  { text: "CHAU.", time: 47 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);