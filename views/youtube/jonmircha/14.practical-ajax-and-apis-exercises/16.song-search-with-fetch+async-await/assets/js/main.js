const d = document;

const $form   = d.getElementById("form");
const $loader = d.querySelector(".loader");
const $error  = d.querySelector(".error");
const $main   = d.querySelector("main");
const $artist = d.querySelector(".artist");
const $song   = d.querySelector(".song");

$form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    try {
        $loader.style.display = "block";

        let artist = e.target.artist.value.toLowerCase();
        let song   = e.target.song.value.toLowerCase();

        let $artistTemplate = "";
        let $songTemplate   = "";

        // let artistAPI = `https://theaudiodb.com/api/v1/json/123/search.php?s=${artist}`; // Date. Current 2026
        let artistAPI = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`; // Date. Old 2020
        let songAPI   = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        let artistFetch = fetch(artistAPI);
        let songFetch   = fetch(songAPI);

        let [artistRes, songRes] = await Promise.all([artistFetch, songFetch]);

        let artistData = await artistRes.json();
        let songData   = await songRes.json();

        // console.log(artistRes, songRes); // For Example. Output: Response {type: "cors", url: "https://theaudiodb.com/api/v1/json/1/search.php?s=eddie%20vedder", redirected: false, status: 200, ok: true, ...} Response {type: "cors", url: "https://api.lyrics.ovh/v1/eddie%20vedder/everlong", redirected: false, status: 200, ok: true, ...}
        // console.log(artistData, songData); // For Example. Output: {artists: Array(1)} {lyrics: "hmmm ooh hooo It's a mistery to me we have ...azy and keep I hope you're not lonely without me"}

        if(artistData.artists === null) {
            $artistTemplate = `<h2>No existe el intérprete <mark>${artist}</mark></h2>.`;
        } else {
            let artists = artistData.artists[0];
            $artistTemplate = `
                <h2>${artists.strArtist}</h2>
                <img src="${artists.strArtistThumb}" alt="${artists.strArtist}"/>
                <p>${artists.intBornYear} - ${artists.intDiedYear || "Presente."}</p>
                <p>${artists.strCountry}</p>
                <p>${artists.strGenre} - ${artists.strStyle}</p>
                <a href="http://${artists.strWebsite}" target="_blank"></a>
                <p>${artists.strBiographyEN}</p>
            `;
        }

        if(songData === null) {
            $songTemplate = `<h2>No existe la canción <mark>${song}</mark></h2>.`;
        } else {
            $songTemplate = `
                <h2>${song.toUpperCase()}</h2>
                <blockquote>${songData.lyrics}</blockquote>
            `;
        }

        $loader.style.display = "none";
        
        $artist.innerHTML    = $artistTemplate;
        $song.innerHTML      = $songTemplate;

    } catch (err) {
        console.log(err); // For Example. Output: TypeError: Failed to fetch    
        let message = err.statusText || "Ocurrio un error.";

        $error.textContent    = `<p>Error ${err.status}: ${message}</p>`;
        $loader.style.display = "none";
    }
});