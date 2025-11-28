/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

console.log(window); // Output: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
console.log(document); // Output: #document

/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 * Probar en Mozilla Firefox para ver la API de síntesis de voz en acción.
 */
let texto    = "Hola, soy tu amigo y docente digital... Jonatahn MirCha.";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);