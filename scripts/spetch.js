let saludos = [
    'hola ',
    'hola pedazo de mierda',
    '¿que pasa?'
]

const btn = document.querySelector('.speak');
const interpret = document.querySelector('.interpret')
const response = document.querySelector('.response');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = (event) => {
    console.log('voice activate, you can speak');
    
    
}


recognition.onresult = (event) =>{
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    
    interpret.textContent = transcript;

    readOutLoud(transcript)

}

btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud (message) {
    const speech = new SpeechSynthesisUtterance();
    let finalText;
    speech.text = '¿no se que decir carita triste?';

    let messageLowerCase = message.toLowerCase();
    
    if (messageLowerCase.includes('hola') || messageLowerCase.includes('qué pasa')){
        finalText = saludos[Math.floor(Math.random() * saludos.length)];
        speech.text = finalText;
    }
    

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    response.textContent = finalText;
    window.speechSynthesis.speak(speech)
}
