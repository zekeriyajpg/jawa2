// Drum Kit JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Ses dosyalarını tanımlayın
    const sounds = {
      65: "sounds/kick.wav",
      83: "sounds/snare.wav",
      68: "sounds/hihat.wav",
      70: "sounds/tom1.wav",
      71: "sounds/tom2.wav",
      72: "sounds/tom3.wav",
      74: "sounds/crash.wav",
    };
  
    // Butonlara tıklama ve klavye olayları ekle
    const buttons = document.querySelectorAll(".drum");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => playSound(button.dataset.key));
    });
  
    document.addEventListener("keydown", (event) => {
      playSound(event.keyCode);
    });
  
    function playSound(key) {
      const audioSrc = sounds[key];
      if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
        animateButton(key);
      }
    }
  
    function animateButton(key) {
      const button = document.querySelector(`.drum[data-key="${key}"]`);
      if (button) {
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 200);
      }
    }
  });
  