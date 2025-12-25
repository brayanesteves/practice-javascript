const d  = document;
const n  = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id);

    const isMoble   = {
        android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function() { 
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop = {
          linux: () => ua.match(/linux/i),
            mac: () => ua.match(/macintosh/i),
        windows: () => ua.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        }
    };
    const isBrowser = {
         chrome: () => ua.match(/chrome/i),
         safari: () => ua.match(/safari/i) && !ua.match(/chrome/i),
        firefox: () => ua.match(/firefox/i),
          opera: () => ua.match(/opera|opera mini/i),
             ie: () => ua.match(/msie|iemobile/i),
           edge: () => ua.match(/edge/i),
        any: function() {
            return this.chrome() || this.safari() || this.firefox() || this.opera() || this.edge() || this.ie();
        }
    };
    console.log(ua); // For Example. Output: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36
    console.log(isMoble.android()); // For Example. Output: ["Android", index: 20, input: "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) App...e Gecko) Chrome/83.0.4103.97 Mobile Safari/537.36", groups: undefined]
    console.log(isMoble.ios()); // For Example. Output: ["iPad", index: 13, input: "Mozilla/5.0 (iPad; CPU OS 11_0 like MAC OS X) Appl... Gecko) Version/11.0 Mobile/15A5341f Safari/604.1", groups: undefined]
    console.log(isMoble.any()); // For Example. Output: 

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMoble.any() ? isMoble.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    /* <Contenido exclusivo> */
    if(isBrowser.chrome()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }

    if(isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
    }

    if(isBrowser.linux()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    }

    if(isBrowser.mac()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
    }

    if(isBrowser.windows()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
    }
    /* <.Contenido exclusivo> */

    /* <Redirecciones> */
    if(isMoble.android()) {
        window.location.href = "https://jonmircha.com";
    }
    /* <.Redirecciones> */
}