/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

window.addEventListener("resize", (e) => {
  console.clear();
  console.log("<Evento 'Resize'>");
  console.log(window.innerWidth);  // For Example. Output: 722
  console.log(window.innerHeight); // For Example. Output: 617
  console.log(window.outerWidth);  // For Example. Output: 1280
  console.log(window.outerHeight); // For Example. Output: 720  
  console.log(e);                  // Output: Event {isTrusted: true, type: "resize", target: Window, currentTarget: Window, eventPhase: 2, ...}
  console.log("<.Evento 'Resize'>");
});
console.log(window.innerWidth);  // For Example. Output: 722
console.log(window.innerHeight); // For Example. Output: 617
console.log(window.outerWidth);  // For Example. Output: 1280
console.log(window.outerHeight); // For Example. Output: 720

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("<Evento 'Scroll'>");
  console.log(window.scrollX); // For Example. Output: 0
  console.log(window.scrollY); // For Example. Output: 2041
  console.log(e);              // Output: Event {isTrusted: true, type: "scroll", target: document, currentTarget: Window, eventPhase: 3, ...}
  console.log("<.Evento 'Scroll'>");
});

window.addEventListener("load", (e) => {
  // console.clear();
  console.log("<Evento 'Load'>");
  console.log(window.screenX); // For Example. Output: -1280
  console.log(window.screenY); // For Example. Output: 0
  console.log(e);              // Output: Event {isTrusted: true, type: "load", target: document, currentTarget: Window, eventPhase: 2, ...}
  console.log("<.Evento 'Load'>");
});

/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 * Es mucho mas rápido, y es apropaido trabajarlo en lugar del evento 'load'
 */
document.addEventListener("DOMContentLoaded", (e) => {
  // console.clear();
  console.log("<Evento 'DOMContentLoaded'>");
  console.log(window.screenX); // For Example. Output: -1280
  console.log(window.screenY); // For Example. Output: 0
  console.log(e);              // Output: Event {isTrusted: true, type: "load", target: document, currentTarget: Window, eventPhase: 2, ...}
  console.log("<.Evento 'DOMContentLoaded'>");
});

/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 * Como se maneja en JQuery
 */
// $(window).load(function);
// $(document).ready(function);
// $(window).on("load", function);
// $(document).on("ready", function); // JQuery version 2