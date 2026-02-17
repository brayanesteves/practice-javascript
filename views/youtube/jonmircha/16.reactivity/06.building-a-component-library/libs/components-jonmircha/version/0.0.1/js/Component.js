const Component = (function () {
    /**
     * [ENGLISH]
     * 
     * =========
     * 
     * [SPANISH]
     * Creamos el 'Constructor' del componente.
     */
    const Constructor = function (options) {
        this.el       = options.el;
        this.data     = options.data;
        this.template = options.template;
    };

    /**
     * [ENGLISH]
     * 
     * =========
     * 
     * [SPANISH]
     * Agregamos los métodos al prototipo del constructor del componente.
     */

    // Render UI.
    Constructor.prototype.render = function () {
        const $el = d.querySelector(this.el);
        if(!$el) return;

        $el.innerHTML = this.template(this.data);

        console.log(this.data); // For Example. Output: {todoList: Array(3)}
    };

    /**
     * [ENGLISH]
     * 
     * =========
     * 
     * [SPANISH]
     * Actualizar el 'State' de forma reactiva.
     */
    Constructor.prototype.setState = function (obj) {
        for(let key in obj) {
            if(this.data.hasOwnProperty(key)) {
                this.data[key] = obj[key];
            }
        }

        this.render();
    };

    /**
     * [ENGLISH]
     * 
     * =========
     * 
     * [SPANISH]
     * Obtenemos una copia inmutable del 'State'.
     */
    Constructor.prototype.getState = function () {
        return JSON.parse(JSON.stringify(this.data));
    };

    return Constructor;
})();