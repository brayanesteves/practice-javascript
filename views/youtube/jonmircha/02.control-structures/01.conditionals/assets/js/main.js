/* if - else */
let edad = 17;

if(edad > 17) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad."); // Pasa por aquí.
}

edad = 35;
if(edad > 17) {
    console.log("Eres mayor de edad."); // Pasa por aquí.
} else {
    console.log("Eres menor de edad.");
}

edad = 17;
if(edad >= 17) {
    console.log("Eres mayor de edad."); // Pasa por aquí.
} else {
    console.log("Eres menor de edad.");
}

if(edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad."); // Pasa por aquí.
}

if(edad < 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad."); // Pasa por aquí.
}

if(edad <= 17) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad."); // Pasa por aquí.
}

/* if - else if - else */
// Dejame Dormir - 0hrs - 5hrs
// Buenos días 6hrs - 11hrs
// Buenas tardes 12hrs - 18hrs
// Buenas noches 19hrs - 23hrs
let hora = 5;
if(hora >= 0 && hora <= 5) {
    console.log("Dejame Dormir."); // Pasa por aquí.
} else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días.");
} else if(hora >= 12 && hora <= 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}

hora = 3;
if(hora >= 0 && hora <= 5) {
    console.log("Dejame Dormir.");
} else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días."); // Pasa por aquí.
} else if(hora >= 12 && hora <= 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}

hora = 15;
if(hora >= 0 && hora <= 5) {
    console.log("Dejame Dormir.");
} else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días.");
} else if(hora >= 12 && hora <= 18) {
    console.log("Buenas tardes."); // Pasa por aquí.
} else {
    console.log("Buenas noches.");
}

hora = 20;
if(hora >= 0 && hora <= 5) {
    console.log("Dejame Dormir.");
} else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días.");
} else if(hora >= 12 && hora <= 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches."); // Pasa por aquí.
}

if(hora > 0 && hora < 6) {
    console.log("Dejame Dormir.");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días.");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches."); // Pasa por aquí.
}

if(hora < 6) {
    console.log("Dejame Dormir.");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días.");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches."); // Pasa por aquí.
}

hora = 0;
if(hora < 6) {
    console.log("Dejame Dormir."); // Pasa por aquí.
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días.");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}

hora = 11;
if(hora < 6) {
    console.log("Dejame Dormir.");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días."); // Pasa por aquí.
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}

hora = 12;
if(hora < 6) {
    console.log("Dejame Dormir.");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días.");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes."); // Pasa por aquí.
} else {
    console.log("Buenas noches.");
}

hora = 19;
if(hora < 6) {
    console.log("Dejame Dormir.");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días.");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches."); // Pasa por aquí.
}

hora = 23;
if(hora < 6) {
    console.log("Dejame Dormir.");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días.");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches."); // Pasa por aquí.
}

/* Operador ternario -> (condición) ? verdadero : falso */
console.log("Operador Ternario.");
edad = 17;
let eresMayor = (edad >= 18) ? "Eres mayor de Edad." : "Eres menor de Edad.";
console.log(eresMayor); // Eres menor de Edad.

edad = 19;
eresMayor = (edad >= 18) ? "Eres mayor de Edad." : "Eres menor de Edad.";
console.log(eresMayor); // Eres mayor de Edad.

edad = 9;
eresMayor = (edad >= 18) ? "Eres mayor de Edad." : "Eres menor de Edad.";
console.log(eresMayor); // Eres menor de Edad.

/* switch - case */
/**
 * Domingo - 0
 * Lunes - 1
 * Martes - 2
 * Miércoles - 3
 * Jueves - 4
 * Viernes - 5
 * Sábado - 6
 */
let dia = 2;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes"); // Pasa por aquí.
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 6;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado"); // Pasa por aquí.
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 6;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes"); // Pasa por aquí.
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 4;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves"); // Pasa por aquí.
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 3;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles"); // Pasa por aquí.
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 1;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes"); // Pasa por aquí.
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 0;
switch(dia) {
   case 0:
    console.log("Domingo"); // Pasa por aquí.
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe.");
        break;
}

dia = 20;
switch(dia) {
   case 0:
    console.log("Domingo");
    break;

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe."); // Pasa por aquí.
        break;
}