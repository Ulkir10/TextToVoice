// let synth = window.speechSynthesis;
// let utterance;
// let voices = [];

function loadVoices() {
  voices = synth.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;

function speak() {
  const text = document.getElementById("text").value;
  const rate = parseFloat(document.getElementById("rate").value);
  const volume = parseFloat(document.getElementById("volume").value);

  utterance = new SpeechSynthesisUtterance(text);

  
  const russianVoice = voices.find(v => v.lang.startsWith("ru"));
  utterance.voice = russianVoice || voices[0];

  utterance.rate = rate;
  utterance.volume = volume;

  synth.cancel(); 
  synth.speak(utterance);
}

function pause() {
  if (synth.speaking && !synth.paused) {
    synth.pause();
  }
}

function resume() {
  if (synth.paused) {
    synth.resume();
  }
}

function stop() {
  synth.cancel();
}
