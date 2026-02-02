const d = document;

const $main  = d.querySelector("main");
const $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

async function loadPokemons(url) {
    try {
        $main.innerHTML = `<img class="loader" src="./assets/img/svg/loader.svg" alt="Cargando..." />`;
        
        let res  = await fetch(url);
        let json = await res.json();
        
        let $template = "";
        
        let $prevLink;
        let $nextLink;

        // console.log(json); // For Example. Output: {count:1048, next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20", previous: null, results: Array(20)}

        if(!res.ok) throw { status: res.status, statusText: res.statusText };

        for(let i = 0; i < json.results.length; i++) {
            // console.log(json.results[i]); // For Example. Output: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
            
            try {
                let res     = await fetch(json.results[i].url);
                let pokemon = await res.json();

                console.log(res, pokemon); // For Example. Output: Response {type: "cors", url: "https://pokeapi.co/api/v2/pokemon/14", redirected: false, status: 200, ok: true, ...} {abilities: Array(3), base_experience: 72, forms: Array(1), game_indices: Array(20), height: 6, ...}
                
                if(!res.ok) throw { status: res.status, statusText: res.statusText };

                $template += `
                    <figure>
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>
                `;
            } catch(err) {
                // console.error(err); // For Example. Output: TypeError: Failed to fetch
                let message = err.statusText || "Ocurrió un error.";
                $template += `
                    <figure>
                        <figcaption>Error ${err.status}: ${message}</figcaption>
                    </figure>
                `;
            }            

        }

        $main.innerHTML = $template;
    } catch(err) {
        // console.error(err); // For Example. Output: TypeError: Failed to fetch
        let message = err.statusText || "Ocurrió un error.";
        $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    }
}

d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));