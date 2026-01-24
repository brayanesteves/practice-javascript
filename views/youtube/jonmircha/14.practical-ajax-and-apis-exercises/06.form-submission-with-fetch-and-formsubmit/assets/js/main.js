const d = document;

function contactForm() {
    const $form   = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");

    // console.log($inputs); // Output: NodeList(4) [input, input, input, textarea]

    $inputs.forEach((input) => {
        const $span = d.createElement("span");

        $span.id          = input.name;
        $span.textContent = input.title;

        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input  = e.target;
            let pattern = $input.pattern || $input.dataset.pattern;
            
            // console.log($input, pattern); // For Example. Output: <input type="text" name="name" placeholder="Escibe tu nombre" title="El nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required /> "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            
            if(pattern && $input.value !== "") {
                // console.log("El 'input' tiene patrón.");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
            }

            if(!pattern) {
                //console.log("El 'input' NO tiene patrón.");
                return $input.value === "" ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    d.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Enviando Formulario.");

        const $loader   = d.querySelector(".contact-form-loader");
        const $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        fetch("https://formsubmit.co/ajax/jonmircha@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        }).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
            // console.log(json); // For Example. Output: {success: "true", message: "The form was submitted successfully."}
            $loader.classList.add("none");
            $response.classList.remove("none");
            $response.innerHTML = `<p>${json.message}</p>`;
            $form.reset();
        }).catch((err) => {
            // console.log(err); // For Example. Output: 
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente.";
            $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        }).finally(() => setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
        }, 3000));

    });
}

d.addEventListener("DOMContentLoaded", contactForm);