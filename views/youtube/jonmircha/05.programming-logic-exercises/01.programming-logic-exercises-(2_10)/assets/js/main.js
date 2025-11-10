/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * 1) Programa una función que invierta las palabras de una cadena de texto, por ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".
 * 2) Programa una función para contar el número de veces que se repite una palabra en un texto largo, por ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 * 3) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), por ejemplo: mifuncion("Salas") devolverá true.
 * 4) Programa una función que elimine cierto patrón de caracteres de un texto dado, por ejemplo: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const invertirCadena = (cadena = "") => (!cadena) ? console.warn("No ingresaste una cadena de texto.") : console.info(cadena.split("").reverse().join(""));
invertirCadena(""); // Output: No ingresaste una cadena de texto.
invertirCadena("Hola Mundo"); // Output: odnuM aloH
invertirCadena("JavaScript es un lenguaje de programación increíble."); // Output: .elbércni nóicamargorp ed euqnal ed nu se tpircSavaJ
invertirCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab blanditiis maxime ratione tenetur delectus facere ducimus consequatur. Delectus velit quasi consequuntur unde quo voluptas necessitatibus ipsum nostrum. Deleniti, fugit?"); // Output: ?tiguf ,itineleD .mrotsun muspi subitaticessen satupov ouq ednu rutnuesnoc isauq tilev sutceleD .tnegaroc suimucud eracef sutceleD rutenet enotar emixam sitiaidnalb ba aspI .tile gnicipsida rutetcesnoc tema tis rolod muspi meroL
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const textEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste el texto largo.");
    if (!texto) return console.warn("No ingresaste la palabra a evaluar.");
    let i = 0;
    let contador = 0;
    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces.`);
}
textEnCadena(); // Output: No ingresaste el texto largo.
textEnCadena("", "mundo");  // Output: No ingresaste el texto largo.
textEnCadena("hola mundo adios mundo"); // Output: No ingresaste la palabra a evaluar.
textEnCadena("hola mundo adios mundo", "mundo"); // Output: La palabra mundo se repite 2 veces.
textEnCadena("hola mundo adios mundo yolo mundo holi mundo chao mundo", "mundo"); // Output: La palabra mundo se repite 4 veces.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra o frase.");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return (palabra === alReves) ? console.info(`Sí es palíndromo, Palabra original: ${palabra}, Palabra al revés: ${alReves}`) : console.info(`No es palíndromo, Palabra original: ${palabra}, Palabra al revés: ${alReves}`);
}
palindromo(); // Output: No ingresaste una palabra o frase.
palindromo("Hola Mundo"); // Output: No es palíndromo, Palabra original: hola mundo, Palabra al revés: odnum aloh
palindromo("Salas"); // Output: Sí es palíndromo, Palabra original: salas, Palabra al revés: salas
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //

console.log();

// <EXERCISE 4> //
console.log("<EXERCISE 4>");
console.log("<SOLUTION N°0>");
const eliminarCaracteres = (texto = "", patron = "") => (!texto) ? console.warn("No ingresaste el texto.") : (!patron) ? console.warn("No ingresaste el patrón de caracteres.") : console.info(texto.replace(new RegExp(patron, "ig"), ""));
eliminarCaracteres(); // Output: No ingresaste el texto.
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5"); // Output: No ingresaste el patrón de caracteres.
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); // Output: 1, 2, 3, 4 y 5
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "z"); // Output: xy1, xy2, xy3, xy4 y xy5
eliminarCaracteres("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur commodi ratione fugit qui, dolore quos deserunt iusto veritatis reiciendis quam. Delectus iure voluptatum officia cupiditate voluptate corrupti, officiis perferendis!", "o"); // Output: Lrem ipsum dlr sit, amet cnsectetur adipisicing elit. Cnsequuntur cmmdi ratine fugit qui, dlre qus deserunt iust veritatis reiciendis quam. Delectus iure vlptatum fficia cupiditate vlptate crrupti, fficiis perferendis!
eliminarCaracteres("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur commodi ratione fugit qui, dolore quos deserunt iusto veritatis reiciendis quam. Delectus iure voluptatum officia cupiditate voluptate corrupti, officiis perferendis!", "[a-z]"); // Output: " ,  .   .     ,     .      ,     !"
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 4>");
// <.EXERCISE 4> //