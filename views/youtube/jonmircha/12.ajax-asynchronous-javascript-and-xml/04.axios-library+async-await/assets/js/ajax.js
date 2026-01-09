(() => {
    const  xhr      = new XMLHttpRequest();
    const $xhr      = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();

    // console.log(xhr); // Output: XMLHttpRequest

    xhr.addEventListener("readystatechange", (e) => {

        /**
         * Output:
         * XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, ...}
         * XMLHttpRequest {onreadystatechange: null, readyState: 2, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, ...}
         * XMLHttpRequest {onreadystatechange: null, readyState: 3, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, ...}
         * XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, ...}
        */
       // console.log(xhr);

       if (xhr.readyState !== 4) return;

       // console.log(xhr); // Output: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, ...}

       if (xhr.status >= 200 && xhr.status < 300) {
            // console.log(xhr); // Output: XMLHttpRequest
            // console.log("Éxito.");
            // console.log(xhr.responseText); // For Example. Output: [{"id":1,"name":"Leanne Graham
            // $xhr.innerHTML = xhr.responseText; // Incorrect
            let json = JSON.parse(xhr.responseText);
            console.log(json); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
           // console.log("Error.");
           let message = xhr.statusText || "Ocurrió un error.";
           $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        // console.log("Este mensaje cargará de cualquier forma.");
    });

    // xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Request to external API
    xhr.open("GET", "assets/documents/json/users.json"); // Request to local JSON file

    xhr.send();
})();

(() => {    
    const $fetch      = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        /*.then((res) => {
            console.log(res); // For Example. Output: Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …}
            return res.ok ? res.json() : Promise.reject(res); 
        })*/
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            // console.log(json); // Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            // $fetch.innerHTML = json; // Incorrect
            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            // console.log("Estamos en el 'catch'", err); // For Example. Output: Estamos en el 'catch' Response {type: "cors", url: "https://jsonplaceholder.typicode.com/user", redirected: false, status: 404, ok: false, …}
            // console.log(err); // For Example. Output: Response {type: "cors", url: "https://jsonplaceholder.typicode.com/user", redirected: false, status: 404, ok: false, …}
            let message = err.statusText || "Ocurrió un error.";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        }).finally( () => {
            // console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch.");
        });
})();

(() => {    
    const $fetchLocal = document.getElementById("fetch-local");
    const $fragment   = document.createDocumentFragment();

    fetch("assets/documents/json/users.json")
        /*.then((res) => {
            console.log(res); // For Example. Output: Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …}
            return res.ok ? res.json() : Promise.reject(res); 
        })*/
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            // console.log(json); // Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            // $fetchLocal.innerHTML = json; // Incorrect
            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchLocal.appendChild($fragment);
        })
        .catch((err) => {
            // console.log("Estamos en el 'catch'", err); // For Example. Output: Estamos en el 'catch' Response {type: "cors", url: "https://jsonplaceholder.typicode.com/user", redirected: false, status: 404, ok: false, …}
            // console.log(err); // For Example. Output: Response {type: "cors", url: "https://jsonplaceholder.typicode.com/user", redirected: false, status: 404, ok: false, …}
            let message = err.statusText || "Ocurrió un error.";
            $fetchLocal.innerHTML = `Error ${err.status}: ${message}`;
        }).finally( () => {
            // console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch.");
        });
})();

// <Fetch Async + Await (Online)> //
(() => {    
    const $fetchAsyncAwaitOnline = document.getElementById("fetch-async");
    const $fragment        = document.createDocumentFragment();

    async function getData() {
        try {
            let res  = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();

            // console.log(res, res); // For Example. Output: Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …} (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            
            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsyncAwaitOnline.appendChild($fragment);
        } catch (err) {
            let message = err.statusText || "Ocurrió un error.";
            $fetchAsyncAwaitOnline.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            // console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch.");
        }
        
    }

    getData();
})();
// <.Fetch + Async Await (Online)> //

// <Fetch + Async Await (Local)> //
(() => {    
    const $fetchAsyncAwaitLocal = document.getElementById("fetch-async-local");
    const $fragment        = document.createDocumentFragment();

    async function getData() {
        try {
            let res  = await fetch("assets/documents/json/users.json");
            let json = await res.json();

            // console.log(res, res); // For Example. Output: Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …} (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            
            // if(!res.ok) throw new Error("Ocurrió un error al solicitar los datos.");

            if(!res.ok) throw { status: res.status, statusText: res.statusText };

            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsyncAwaitLocal.appendChild($fragment);
        } catch (err) {
            // console.log("Estoy en el 'catch'", err); // For Example. Output: Estoy en el 'catch' Response {type: "cors", url: "https://jsonplaceholder.typicode.com/user", redirected: false, status: 404, ok: false, …}
            let message = err.statusText || "Ocurrió un error.";
            $fetchAsyncAwaitLocal.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            // console.log("Esto se ejecutará independientemente del try...catch.");
        }
        
    }

    getData();
})();
// <.Fetch + Async Await (Local)> //

// <Axios Library (Online)> //
(() => {    
    const $axios    = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        // console.log(res); // For Example. Output: {data: Array(10), status: 200, statusText: "", headers: {…}, config: {…}, …}
        let json = res.data;

        json.forEach( el => {
            const $li           = document.createElement("li");
                  $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch((err) => {
        // console.log("Estamos en el 'catch'", err.response); // For Example. Output: Estamos en el 'catch' Response {data: {…}, status: 404, statusText: "", headers: {…}, config: {…}, …}
        // console.log(err.response); // For Example. Output: Response {data: {…}, status: 404, statusText: "", headers: {…}, config: {…}, …}
        let message      = err.statusText || "Ocurrió un error.";
        $axios.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
        // console.log("Esto se ejecutará independientemente del resultado de Axios.");
    });
})();
// <.Axios Library (Online)> //

// <Axios Library (Local)> //
(() => {    
    const $axiosLocal = document.getElementById("axios-local");
    const $fragment   = document.createDocumentFragment();

    axios.get("assets/documents/json/users.json")
    .then((res) => {
        // console.log(res); // For Example. Output: {data: Array(10), status: 200, statusText: "", headers: {…}, config: {…}, …}
        let json = res.data;

        json.forEach( el => {
            const $li           = document.createElement("li");
                  $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $axiosLocal.appendChild($fragment);
    })
    .catch((err) => {
        // console.log("Estamos en el 'catch'", err.response);  // For Example. Output: Estamos en el 'catch' Response {data: {…}, status: 404, statusText: "", headers: {…}, config: {…}, …}
        // console.log(err.response); // For Example. Output: Response {data: {…}, status: 404, statusText: "", headers: {…}, config: {…}, …}
        let message           = err.response.statusText || "Ocurrió un error.";
        $axiosLocal.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
        console.log("Esto se ejecutará independientemente del resultado de Axios.");
    });
})();
// <.Axios Library (Local)> //

// <Axios Library + Async Await (Online)> //
(() => {
    const $axiosAsyncOnline = document.getElementById("axios-async");
    const $fragment         = document.createDocumentFragment();

    async function getData() {
        try {
            let res  = await axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await res.data;

            // console.log(res, json); // For Example. Output: {data: Array(10), status: 200, statusText: "", headers: {…}, config: {…}, …} (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsyncOnline.appendChild($fragment);
        } catch (err) {
            let message = err.response.statusText || "Ocurrió un error.";
            $axiosAsyncOnline.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            // console.log("Esto se ejecutará independientemente del try...catch.");
        }
    }

    getData();
})();
// <.Axios Library + Async Await (Online)> //

// <Axios Library + Async Await (Local)> //
(() => {
    const $axiosAsyncLocal = document.getElementById("axios-async-local");
    const $fragment        = document.createDocumentFragment();

    async function getData() {
        try {
            let res  = await axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await res.data;

            // console.log(res, json); // For Example. Output: {data: Array(10), status: 200, statusText: "", headers: {…}, config: {…}, …} (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsyncLocal.appendChild($fragment);
        } catch (err) {
            let message = err.response.statusText || "Ocurrió un error.";
            $axiosAsyncLocal.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            // console.log("Esto se ejecutará independientemente del try...catch.");
        }
    }

    getData();
})();
// <.Axios Library + Async Await (Local)> //