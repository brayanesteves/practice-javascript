const d = document;

export default function darkTheme(btn, classDark) {
    const $themeBtn  = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");

    console.log($selectors); // Output: NodeList(2) [html, body]

    let moon = "🌙";
    let sun  = "☀️";

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {

            console.log($themeBtn.textContent); // For Example. Output: 🌙

            if($themeBtn.textContent === moon) {
                $selectors.forEach((el) => el.classList.add(classDark));
                $themeBtn.textContent = sun;
            } else {
                $selectors.forEach((el) => el.classList.remove(classDark));
                $themeBtn.textContent = moon;
            }
        }
    });
}