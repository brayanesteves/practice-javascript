const d = document;

export function shortcuts(e) {
    console.log(e.type);                 // For Example. Output: keydown
    console.log(e.key);                  // For Example. Output: Enter
    console.log(e.keyCode);              // For Example. Output: 13
    console.log(`ctrl: ${e.ctrlKey}`);   // For Example. Output: ctrl: false
    console.log(`alt: ${e.altKey}`);     // For Example. Output: alt: false
    console.log(`shift: ${e.shiftKey}`); // For Example. Output: shift: false
    console.log(e);                      // For Example. Output: KeyboardEvent {isTrusted: true, key: "Alt", code: "AltLEft", location: 1, ctrlKey: false, ...}

    if(e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado.");
    }

    if(e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con el teclado.");
    }

    if(e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado.");
    }
}