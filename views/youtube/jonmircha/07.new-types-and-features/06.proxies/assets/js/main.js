/**
 * [ENGLISH]
 * Proxies are an advanced feature in JavaScript that allows you to create an object that wraps another object and can intercept and redefine fundamental operations for that object, such as property reading and writing, function invocation, and more.
 * In this example, we create a `person` object with properties `name`, `surname`, and `age`. Then, we define a handler (`handler`) with a `set` method that intercepts property assignments. When a value is assigned to a property of the proxy, the `set` method is executed, allowing us to customize the assignment behavior.
 * Finally, we create a proxy (`jon`) that wraps the `person` object using the defined handler. When assigning values to the proxy's properties, the `set` method is triggered, but in this case, it does not perform any additional action.
 * When we print the proxy, we see that the properties still have their initial values since the `set` method did not modify the original object.
 * ====================
 * [SPANISH]
 * Proxies [Proxys] son una característica avanzada de JavaScript que permite crear un objeto que envuelve a otro objeto y puede interceptar y redefinir operaciones fundamentales para ese objeto, como la lectura y escritura de propiedades, la invocación de funciones, entre otras.
 * En este ejemplo, creamos un objeto `persona` con propiedades `nombre`, `apellido` y `edad`. Luego, definimos un manejador (`manejador`) con un método `set` que intercepta las asignaciones de propiedades. Cuando se asigna un valor a una propiedad del proxy, el método `set` se ejecuta, permitiéndonos personalizar el comportamiento de la asignación.
 * Finalmente, creamos un proxy (`jon`) que envuelve al objeto `persona` utilizando el manejador definido. Al asignar valores a las propiedades del proxy, el método `set` se activa, pero en este caso no realiza ninguna acción adicional.
 * Al imprimir el proxy, vemos que las propiedades siguen teniendo sus valores iniciales, ya que el método `set` no modificó el objeto original.
 */

const persona = {
      nombre: "",
    apellido: "",
        edad: 0,
};

const manejador = {
    set(obj, prop, valor) {
        if(Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad ${prop} no existe en el objeto persona.`);
        }
        if ((prop === "nombre" || prop === "apellido") && !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valor)) {
            return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco.`);
        }
        obj[prop] = valor;
    }
};

const jon = new Proxy(persona, manejador);
      jon.nombre = "Jon19";
      jon.apellido = "Mi - rcha";
      jon.edad = 35;
      jon.twitter = "@jonmircha";
console.log(jon); // Output: {nombre: "", apellido: "", edad: 35}

console.log(persona); // Output: {nombre: "Jon", apellido: "Mircha", edad: 35}