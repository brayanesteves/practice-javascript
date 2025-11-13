/**
 * [ENGLISH]
 * 1) Program a function to convert numbers from binary to decimal and vice versa, for example. myFunction(100,2) will return 4 base 10.
 * 2) Program a function that returns the final amount after applying a discount to a given amount, for example. myFunction(1000, 20) will return 800.
 * 3) Program a function that given a valid date determines how many years have passed until today, for example. myFunction(new Date(1984,4,23)) will return 35 years (in 2020).
 * ==========
 * [SPANISH]
 * 1) Programa una función para convertir números de base binaria a decimal y viceversa, por ejemplo. miFuncion(100,2) devolverá 4 base 10.
 * 2) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, por ejemplo. miFuncion(1000, 20) devolverá 800.
 * 3) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, por ejemplo. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número a convertir.");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número.`);
    if (base === undefined) return console.warn("No ingresaste la base a convertir.");
    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un número.`);
    if (base !== 2 && base !== 10) return console.error(`El valor "${base}" ingresado, NO es un número.`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10.`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2.`);
    } else {
        return console.error("El tipo de base a convertir NO es válido.");
    }
};
convertirBinarioDecimal();           // Output: No ingresaste un número a convertir.
convertirBinarioDecimal("2");        // Output: El valor "2" ingresado, NO es un número.
convertirBinarioDecimal(100);        // Output: No ingresaste la base a convertir.
convertirBinarioDecimal(100, "2");   // Output: El valor "2" ingresado, NO es un número.
convertirBinarioDecimal(100, 2);     // Output: 100 base 2 = 4 base 10.
convertirBinarioDecimal(101, 2);     // Output: 101 base 2 = 5 base 10.
convertirBinarioDecimal(1110010, 2); // Output: 1110010 base 2 = 114 base 10.
convertirBinarioDecimal(4, 10);      // Output: 4 base 10 = 100 base 2.
convertirBinarioDecimal(114, 10);    // Output: 114 base 10 = 1110010 base 2.
convertirBinarioDecimal(114, 3);     // Output: El valor "3" ingresado, NO es un número.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste el monto.");
    if (typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número.`);
    if (monto === 0) return console.warn("El monto no puede ser 0.");
    if (Math.sign(monto) === -1) return console.warn("El monto no puede ser negativo.");
    
    if (descuento === undefined) return console.warn("No ingresaste el descuento.");
    if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número.`);
    if (Math.sign(descuento) === -1) return console.warn("El descuento no puede ser negativo.");
    
    return console.info(`$${monto} - ${descuento}% = $${monto - (monto * descuento) / 100}`);
};
aplicarDescuento();           // Output: No ingresaste el monto.
aplicarDescuento("200");      // Output: El valor "1000" ingresado, NO es un número.
aplicarDescuento(0);          // Output: El monto no puede ser 0.
aplicarDescuento(-1000);      // Output: El monto no puede ser negativo.
aplicarDescuento(1000, -2);   // Output: El descuento no puede ser negativo.
aplicarDescuento(1000), "20"; // Output: El valor "20" ingresado, NO es un número.
aplicarDescuento(1000);       // Output: $1000 - 0% = $1000
aplicarDescuento(1000, 25);   // Output: $1000 - 25% = $750
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste una fecha.");
    if (!(fecha instanceof Date)) return console.error(`El valor que ingresaste no es una fecha válida.`);
    
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    /**
     * [ENGLISH]
     * 1 second = 1000 milliseconds
     * 1 minute = 60 seconds
     * 1 hour   = 60 minutes
     * 1 day    = 24 hours
     * 1 year   = 365 days
     * Therefore:
     * 1 year = 1000 * 60 * 60 * 24 * 365 milliseconds
     * ==========
     * [SPANISH]
     * 1 segundo = 1000 milisegundos
     * 1 minuto = 60 segundos
     * 1 hora   = 60 minutos
     * 1 día    = 24 horas
     * 1 año    = 365 días
     * Por lo tanto:
     * 1 año = 1000 * 60 * 60 * 24 * 365 milisegundos
     */
    let aniosEnMS     = 1000 * 60 * 60 * 24 * 365;
    /**
     * [ENGLISH]
     * 1 second = 1000 milliseconds
     * 1 minute = 60 seconds
     * 1 hour   = 60 minutes
     * 1 day    = 24 hours
     * 1 year   = 365 days
     * 1 decade = 10 years
     * Therefore:
     * 1 decade = 1000 * 60 * 60 * 24 * 365 * 10 milliseconds
     * ==========
     * [SPANISH]
     * 1 segundo = 1000 milisegundos
     * 1 minuto = 60 segundos
     * 1 hora   = 60 minutos
     * 1 día    = 24 horas
     * 1 año    = 365 días
     * 1 década = 10 años
     * Por lo tanto:
     * 1 década = 1000 * 60 * 60 * 24 * 365 * 10 milisegundos
     */
    let decadasEnMS     = 1000 * 60 * 60 * 24 * 365 * 10;
    /**
     * [ENGLISH]
     * 1 second = 1000 milliseconds
     * 1 minute = 60 seconds
     * 1 hour   = 60 minutes
     * 1 day    = 24 hours
     * 1 year   = 365 days
     * 1 lustro = 5 years
     * Therefore:
     * 1 lustro = 1000 * 60 * 60 * 24 * 365 * 5 milliseconds
     * ==========
     * [SPANISH]
     * 1 segundo = 1000 milisegundos
     * 1 minuto = 60 segundos
     * 1 hora   = 60 minutos
     * 1 día    = 24 horas
     * 1 año    = 365 días
     * 1 lustro = 5 años
     * Por lo tanto:
     * 1 lustro = 1000 * 60 * 60 * 24 * 365 * 5 milisegundos
     */
    let lustrosEnMS     = 1000 * 60 * 60 * 24 * 365 * 5;
    /**
     * [ENGLISH]
     * 1 second = 1000 milliseconds
     * 1 minute = 60 seconds
     * 1 hour   = 60 minutes
     * 1 day    = 24 hours
     * 1 week   = 7 days
     * 1 year   = 52 weeks
     * Therefore:
     * 1 year = 1000 * 60 * 60 * 24 * 7 * 52 milliseconds
     * ==========
     * [SPANISH]
     * 1 segundo = 1000 milisegundos
     * 1 minuto = 60 segundos
     * 1 hora   = 60 minutos
     * 1 día    = 24 horas
     * 1 semana = 7 días
     * 1 año    = 52 semanas
     * Por lo tanto:
     * 1 año = 1000 * 60 * 60 * 24 * 7 * 52 milisegundos
     */
    let semanasEnMS     = 1000 * 60 * 60 * 7 * 52;
    /**
     * [ENGLISH]
     * 1 second = 1000 milliseconds
     * 1 minute = 60 seconds
     * 1 hour   = 60 minutes
     * 1 day    = 24 hours
     * Therefore:
     * 1 day = 1000 * 60 * 60 * 24 milliseconds
     * ==========
     * [SPANISH]
     * 1 segundo = 1000 milisegundos
     * 1 minuto = 60 segundos
     * 1 hora   = 60 minutos
     * 1 día    = 24 horas
     * Por lo tanto:
     * 1 día = 1000 * 60 * 60 * 24 milisegundos
     */
    let diasEnMS     = 1000 * 60 * 60 * 24;
    /**
     * [ENGLISH]
     * Calculating the number of years by dividing the difference in milliseconds between today and the given date by the number of milliseconds in a year.
     * ==========
     * [SPANISH]
     * Calculando el número de años dividiendo la diferencia en milisegundos entre hoy y la fecha dada por el número de milisegundos en un año.
     */
    let aniosHumanos  = Math.floor(hoyMenosFecha / aniosEnMS);
    
    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};
calcularAnios();                      // Output: No ingresaste una fecha.
calcularAnios({});                    // Output: El valor que ingresaste no es una fecha válida.
calcularAnios(false);                 // Output: El valor que ingresaste no es una fecha válida.
calcularAnios(new Date());            // Output: Estamos en el año actual 2020.
calcularAnios(new Date(1984, 4, 23)); // Output: Han pasado 35 años, desde 1984.
calcularAnios(new Date(1884, 4, 23)); // Output: Han pasado 135 años, desde 1884.
calcularAnios(new Date(2084, 4, 23)); // Output: Faltan 64 años para el 2084.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //