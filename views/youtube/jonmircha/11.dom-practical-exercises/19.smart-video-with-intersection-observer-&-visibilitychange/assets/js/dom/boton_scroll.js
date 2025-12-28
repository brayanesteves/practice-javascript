const d = document;
const w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }

        // console.log(w.pageYOffset, d.documentElement.scrollTop); // For Example. Output: 183 183
    });

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                 top: 0,
                // left: 0,
            });
        }
    });
}