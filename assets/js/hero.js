let back = document.querySelector(".back");
let lside = document.querySelector(".lside");
let rside = document.querySelector(".rside");

effects02();
backgroundMusic();

back.addEventListener("click", () => {
  buttoneffects();

  setTimeout(() => {
    effects01();

    lside.style.width = "50%";
    rside.style.width = "50%";
    setTimeout(() => {
      window.location.href = "/assets/pages/hero.html";
    }, 2000);
  }, 1000);
});

//sound effects
function buttoneffects() {
  let soundeffect = new Audio("../../assets/music/soundeffects/click01.mp3");
  soundeffect.play();
  soundeffect.volume = 1;
}

function effects01() {
  let effects = new Audio("../../assets/music/soundeffects/woosh.mp3");
  effects.play();
  effects.volume = 1;
}

function effects02() {
  let effects = new Audio("../../assets/music/soundeffects/swing.mp3");
  effects.play();
  effects.volume = 1;
}

function backgroundMusic() {
  let audio = new Audio("../../assets/music/backgroundMusic/bgmusic.mp3");
  audio.loop = true;
  audio.play();
  audio.volume = 0.2;
}
