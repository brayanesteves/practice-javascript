const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector);
        const  random  = Math.floor(Math.random() * $players.length);
        const  winner  = $players[random];

        console.log($players, random, winner); // For Example. Output: NodeList(10) [li.player, li.player, li.player, li.player, li.player, li.player, li.player, li.player, li.player, li.player] 9 <li class="player">Perl</li>
        
        return `El ganador es: ${winner.textContent}.`;
    };

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            let result = getWinner(selector)
            alert(result);
            console.log(result); // For Example. Output: El ganador es: Perl.
        }
    });

    /**
     * [ENGLISH]
     * ============================
     * [SPANISH]
     * Es para probar en consola estando en la pestaña de "Comentarios" de un vídeo de YouTube. Selecciona varios comentarios y ejecuta esta función en consola para obtener un comentario ganador aleatorio.
     * 
     * @param {*} selector 
     * @returns 
     */
    const getWinnerComment = (selector) => {
        const $players = document.querySelectorAll(selector);
        const  random  = Math.floor(Math.random() * $players.length);
        const  winner  = $players[random];
        
        return `El ganador es: ${winner.textContent}.`;
    };

    // getWinnerComment("ytd-comment-thread-renderer #author-text span"); // Example of usage in console of YouTube Comments tab to get a random winner.
}