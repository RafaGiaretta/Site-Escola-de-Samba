var iniciar = new Audio('/audio/audio-home.mp3');

function tocarAudio() {
    iniciar.play();
}

function pararAudio() {
    iniciar.pause();
    iniciar.currentTime = 0; // Reinicia o áudio para o início
}
