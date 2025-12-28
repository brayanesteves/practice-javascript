const d = document;
const n = navigator;

export default function webCam(id) {
    const $video = d.getElementById(id);
    console.log(n.mediaDevices); // Output: MediaDevices {ondevicechange: null}
    // console.log(n.mediaDevices.getUserMedia); // Output: f () { [native code] }

    if(n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
            console.log(stream); // For Example. Output: MediaStream {id: "f1tXgXWeXLRqQnXxqyXtnbWwyGGOnOO9rPv2", active: true, onaddtrack: null, onremovetrack: null, onactive: null, ...} 
            $video.srcObject = stream;
            $video.play();
        }).catch((err) => {
            $video.insertAdjacentHTML("beforebegin", `<p>¡Sucedió el siguiente error!: <mark>${err}</mark></p>`);
            // console.log($video); // For Example. Output: 
            console.log(`¡Sucedió el siguiente error!: ${err}`); // Output: ¡Sucedió el siguiente error!: NotAllowedError: Permission denied
        });
    }
}