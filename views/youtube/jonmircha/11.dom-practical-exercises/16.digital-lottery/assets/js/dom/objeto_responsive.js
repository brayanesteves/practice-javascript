const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }

        // console.log("MQ", breakpoint, e.matches); // For Examnple. Output: MQ MediaQueryList {media: "(min-width: 1024px)", matches: false, onchange: null} false
    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}