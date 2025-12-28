const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => {
        // console.log("entries", entries); // For Example. Output: entries => (15) [IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry, IntersectionObserverEntry]
        
        entries.forEach((entry) => {
            // console.log("entry", entry); // For Example. Output: entry => IntersectionObserverEntry {time: 246.1400000061132, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: true, …}
            const id = entry.target.getAttribute("id");
            // console.log(id); // For Example. Output: seccion1
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    };

    const observer = new IntersectionObserver((cb), {
        // rootMargin:"-250px", // Testing 'rootMargin'
        // threshold:0.5, // Testing 'threshold'
        threshold:[0.5, 0.75],
    });
    // console.log("observer", observer); // For Example. Output: observer => IntersectionObserver {root: null, rootMargin: "0px 0px 0px 0px", thresholds: Array(1), delay: 0, trackVisibility: false}

    $sections.forEach((el) => observer.observe(el));
}