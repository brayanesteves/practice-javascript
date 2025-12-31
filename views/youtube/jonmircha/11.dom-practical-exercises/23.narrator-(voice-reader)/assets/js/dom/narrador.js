const d = document;
const w = window;

export default function speechReader() {
    const $speechSelect   = d.getElementById("speech-select");
    const $speechTextarea = d.getElementById("speech-text");
    const $speechBtn      = d.getElementById("speech-btn");
    
    const speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage); // Output: SpeechSynthesisUtterance {text: "", lang: "", voice: null, volume: 1, rate: 1, …}

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => {
        // console.log(w.speechSynthesis); // Output: SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}
        // console.log(w.speechSynthesis.getVoices()); // For Example. Output: []
        
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            // console.log(e); // Output:
            voices = w.speechSynthesis.getVoices();
            // console.log(voices); // For Example. Output: (22) [SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice, SpeechSynthesisVoice]
            voices.forEach(voice => {
                const $option       = d.createElement("option");
                $option.value       = voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`;
                
                $speechSelect.appendChild($option);
            });
        });

    });

    d.addEventListener("change", (e) => {
        if(e.target === $speechSelect) {
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
        // console.log(speechMessage); // Output: SpeechSynthesisUtterance {text: "", lang: "", voice: SpeechSynthesisVoice, volume: 1, rate: 1, …}
    });

    d.addEventListener("click", (e) => {
        if(e.target === $speechBtn) {
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
}