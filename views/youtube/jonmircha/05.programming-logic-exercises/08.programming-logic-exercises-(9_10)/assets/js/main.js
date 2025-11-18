/**
 * [ENGLISH]
 * 
 * ==========
 * [SPANISH]
 * Programa una clase llamada Pelicula.
 * La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
 *  1) Todos los datos del objeto son obligatorios.
 *  2) Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
 *  3) Valida que el título no rebase los 100 caracteres.
 *  4) Valida que el director no rebase los 50 caracteres.
 *  5) Valida que el año de estreno sea un número entero de 4 dígitos.
 *  6) Valida que el país o paises sea introducidos en forma de arreglo.
 *  7) Valida que los géneros sean introducidos en forma de arreglo.
 *  8) Valida que los géneros introducidos esten dentro de los géneros aceptados*.
 *  9) Crea un método estático que devuelva los géneros aceptados*.
 * 10) Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
 * 11) Crea un método que devuelva toda la ficha técnica de la película.
 * 12) Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
 * 
 * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

// <EXERCISE> //
console.log("<EXERCISE>");
class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion, }) {
        this.id           = id;
        this.titulo       = titulo;
        this.director     = director;
        this.estreno      = estreno;
        this.pais         = pais;
        this.generos      = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    // <POINT N°1> //
    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);
        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto.`);

        return true;
    }
    validarLongitudCadena(propiedad, valor, longitud) {
        if (!valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de carácteres permitidos (${longitud}).`);

        return true;
    }
    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);
        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número.`);

        return true;
    }
    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);
        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo.`);
        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos.`);
        for (let cadena of valor) {
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto.`);
        }

        return true;
    }    

    // <POINT N°9> //
    static get listaGeneros() {
        return["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generosAceptados() {
        return console.info(`Los g´neros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }
    // <POINT N°9> //
    
    // <POINT N°1> //

    // <POINT N°2> //
    validarIMDB(id) {
        console.log("<POINT N°2>");
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}/.test(id))) return console.error(`IMDB id "${id}" no es válido, debe tener 9 caráteres, los 2 primeros letras minúsculas, los 7 restantes números.`);
        }
        console.log("<.POINT N°2>");
    }
    // <.POINT N°2> //    

    // <POINT N°3> //
    validarTitulo(titulo) {
        console.log("<POINT N°3>");
        if (this.validarCadena("Titulo", titulo)) {
            this.validarLongitudCadena("Titulo", titulo, 100);
        }
        console.log("<.POINT N°3>");
    }
    // <.POINT N°3> //

    // <POINT N°4> //
    validarDirector(director) {
        console.log("<POINT N°4>");
        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }
        console.log("<.POINT N°4>");
    }
    // <.POINT N°4> //

    // <POINT N°5> //
    validarEstreno(estreno) {
        console.log("<POINT N°5>");
        if (this.validarNumero("Año de Estreno", estreno)) {
            if (!(/^(['-9]){4}/.test(estreno))) return console.error(`Año de Estreno "${estreno}" no es válido, debe ser un número de 4 digitos.`);
        }
        console.log("<.POINT N°5>");
    }
    // <.POINT N°5> //

    // <POINT N°6> //
    validarPais(pais) {
        console.log("<POINT N°6>");
        this.validarArreglo("País", pais);
        console.log("<.POINT N°6>");
    }
    // <.POINT N°6> //

    // <POINT N°7 AND 8> //
    validarGeneros(genero) {
        console.log("<POINT N°7 AND 8>");
        if(this.validarArreglo("Géneros", generos)) {
            for (let genero of object) {
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
        console.log("<.POINT N°7 AND 8>");
    }
    // <.POINT N°7 AND 8> //

    // <POINT N°10> //
    validarCalificacion(calificacion) {
        console.log("<POINT N°10>");
        if (this.validarNumero("Calificación", calificacion)) {
            return (calificacion < 0 || calificacion > 10) ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`) : this.calificacion = calificacion.toFixed(1);
        }
        console.log("<.POINT N°10>");
    }
    // <.POINT N°10> //

    // <POINT N°11> //
    fichaTecnica() {
        console.log("<POINT N°11>");
        console.info(`Ficha Técnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB Id: "${this.id}"`);
        console.log("<.POINT N°11>");
    }
    // <.POINT N°11> //
}

console.log("<TEST>");
const peli = new Pelicula({
              id:"tt1234567",
          titulo:"Titulo de la Peli",
        director:"Director de la Peli",
         estreno:2020,
            pais:["México", "Francia"],
         generos:["Comedy", "Sport"],
    calificacion: 7.789
});
peli.fichaTecnica();
console.log("<.TEST>");

console.log();

console.log("<POINT N°12>");
const misPelis = [
    {
                  id:"tt0758758",
              titulo:"Into the Wild",
            director:"Sean Penn",
             estreno:2007,
                pais:["USA"],
             generos:["Adventure", "Biography", "Drama"],
        calificacion: 8.1
    },
    {
                  id:"tt0479143",
              titulo:"Rocky Balboa",
            director:"Sylvester Stallone",
             estreno:2006,
                pais:["USA"],
             generos:["Action", "Drama", "Sport"],
        calificacion: 7.1
    },
    {
                  id:"tt0468569",
              titulo:"The Dark Knight",
            director:"Christopher Nolan",
             estreno:2008,
                pais:["USA", "UK"],
             generos:["Action", "Crime", "Drama"],
        calificacion: 9.0
    },
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());
console.log("<.POINT N°12>");
console.log("<.EXERCISE>");
// <.EXERCISE> //