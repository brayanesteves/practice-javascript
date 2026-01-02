(() => {
    const  xhr      = new XMLHttpRequest();
    const $xhr      = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();

    console.log(xhr); // Output: XMLHttpRequest

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
            console.log("Éxito.");
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
           console.log("Error.");
           let message = xhr.statusText || "Ocurrió un error.";
           $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        console.log("Este mensaje cargará de cualquier forma.");
    });

    // xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Request to external API
    xhr.open("GET", "assets/documents/json/users.json"); // Request to local JSON file

    xhr.send();
})();