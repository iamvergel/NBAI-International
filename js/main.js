let loader = document.querySelector(".loader");
let lside = document.querySelector(".lside");
let rside = document.querySelector(".rside");

let enter = document.querySelector(".ent");
let logo = document.querySelector(".logo");
let background = document.querySelector(".background");
let heroesContainer = document.querySelector(".heroes-container");

let introbgMusic = new Audio(
  "assets/music/backgroundMusic/backgroundmusic01.mp3"
);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(removeLoader, 2000);
});

function removeLoader() {
  if (loader) {
    loader.style.transition = "opacity 1s ease-out";
    loader.style.opacity = 0;

    introbgMusic.play();
    introbgMusic.volume = 0.3;
    introbgMusic.loop = true;

    setTimeout(() => {
      loader.style.display = "none";
      lside.style.width = "0";
      rside.style.width = "0";

      effects01();
    }, 1000);
  }
}

enter.addEventListener("click", () => {
  buttoneffects();

  lside.style.width = "50%";
  rside.style.width = "50%";

  effects02();

  setTimeout(() => {
    introbgMusic.pause();
    effects01();
  }, 1000);

  setTimeout(() => {
    lside.style.width = "0";
    rside.style.width = "0";
    window.location.href = "../../assets/pages/hero.html";
  }, 1250);
});

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
