const d = document;
let x   = 0;
let y   = 0;

export function moveBall(e, ball, stage) {
    const $ball  = d.querySelector(ball);
    const $stage = d.querySelector(stage);

    const limitsBall  = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();

    // console.log(e.type);    // For Example. Output: keydown
    // console.log(e.keyCode); // For Example. Output: 38
    // console.log(e.key);     // For Example. Output: ArrowDown

    // console.log(limitsBall, limitsStage); // For Example. Output: DOMRect {x, 341, y:213.0625, width: 64, height: 64, top: 213.0625, ...} DOMRect {x: 32, y: 90.8125, width: 682, height: 308.5, top: 90.8125, ...}

    const move = (direction) => {
        $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
    
    switch(e.keyCode) {
        // Left (Izquierda)
        case 37:
            // move("left");
            // e.preventDefault();
            // if(limitsBall.left > limitsStage.left) x--;
            if(limitsBall.left > limitsStage.left) { 
                e.preventDefault();
                x--;
            }
            // x--;
            break;
        case 39:
            // move("up");
            // e.preventDefault();
            // if(limitsBall.top > limitsStage.top) y--;
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            // y--;
            break;
        case 38:
            // move("right");
            // e.preventDefault();
            // if(limitsBall.right < limitsStage.right) x++;
            if(limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            // x++;
            break;
        case 40:
            // move("down");
            // e.preventDefault();
            // if(limitsBall.bottom < limitsStage.bottom) y++;
            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            // y++;
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

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