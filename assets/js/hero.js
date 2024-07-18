let back = document.querySelector(".back");
let lside = document.querySelector(".lside");
let rside = document.querySelector(".rside");

back.addEventListener("click", () => {
  setTimeout(() => {
    lside.style.width = "50%";
    rside.style.width = "50%";
    setTimeout(() => {
      window.location.href = "/assets/pages/hero.html";
    }, 2000);
  }, 1000);
});

function enterEffect() {
  let effect = new Audio("assets/music/soundeffects/wind.mp3");
  effect.play();
  effect.volume = 1;
}

//sound effects
function joemelVoice() {
  let audio = new Audio("assets/music/hero_pickingvoice/joemel001.wav");
  audio.play();
  audio.volume = 1;
}

function jonasVoice() {
  let audio = new Audio("assets/music/hero_pickingvoice/jonas001.mp3");
  audio.play();
  audio.volume = 1;
}

function ryanVoice() {
  let audio = new Audio("assets/music/hero_pickingvoice/ryan001.mp3");
  audio.play();
  audio.volume = 1;
}

function buttoneffects() {
  let soundeffect = new Audio("assets/music/soundeffects/click01.mp3");
  soundeffect.play();
  soundeffect.volume = 1;
}

function effects01() {
  let effects = new Audio("assets/music/soundeffects/woosh.mp3");
  effects.play();
  effects.volume = 1;
}

function effects02() {
  let effects = new Audio("assets/music/soundeffects/swing.mp3");
  effects.play();
  effects.volume = 1;
}

function backgroundMusic() {
  let audio = new Audio("assets/music/backgroundMusic/bgmusic.mp3");
  audio.loop = true;
  audio.play();
  audio.volume = 0.2;
}
