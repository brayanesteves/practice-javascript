/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

console.log("********** Elementos del Documento **********");
console.log(window.document);                         // Output: #document
console.log(document);                                // Output: #document
console.log(document.head);                           // Output: <head>...</head>
console.log(document.body);                           // Output: <body>...</body>
console.log(document.html);                           // Output: undefined
console.log(document.body);                           // Output: <html>...</html>
console.log(document.doctype);                        // Output: <!DOCTYPE html>
console.log(document.chrset);                         // Output: UTF-8
console.log(document.title);                          // Output: Document Object Model (Introduction to the DOM) [Modelo de Objeto del Documento (Introducción al DOM)]
console.log(document.links);                          // Output: HTMLCollection []
console.log(document.images);                         // Output: HTMLCollection []
console.log(document.forms);                          // Output: HTMLCollection []
console.log(document.styleSheets);                    // Output: StyleSheetList {}
console.log(document.scripts);                        // Output: HTMLCollection [script]
console.log(document.getSelection().toString());      // Output:
setTimeout(() => {
    console.log(document.getSelection().toString()); // Output: Document Object Model (Introduction to the DOM) [Modelo de Objeto del Documento (Introducción al DOM)]
}, 3000);
document.write("<h2>Hola Mundo desde el DOM</h2>");  // Output: Hello World from document.write