let loader = document.querySelector(".loader");
let lside = document.querySelector(".lside");
let rside = document.querySelector(".rside");

let enter = document.querySelector(".ent");
let logo = document.querySelector(".logo");
let background = document.querySelector(".background");
let heroesContainer = document.querySelector(".heroes-container");

let introbgMusic = new Audio("assets/music/backgroundMusic/backgroundmusic01.mp3");


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
    }, 200);
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
    logo.remove();
    enter.remove();
    background.remove();
    loader.style.display = "none";
    heroesContainer.style.visibility = "visible";
    backgroundMusic();
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
  audio.volume = 0.05;
}

let back = document.querySelector(".back");
back.addEventListener("click", () => {
  buttoneffects();

  lside.style.width = "50%";
  rside.style.width = "50%";

  effects02();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});

let i = 0;
let images = [];
let slideTime = 2000;

images[0] = "assets/image/background_image/bg2.jpg";
images[1] = "assets/image/background_image/bg3.jpg";
images[2] = "assets/image/background_image/bg4.jpg";
images[3] = "assets/image/background_image/bg5.jpg";
images[4] = "assets/image/background_image/bg7.jpg";
images[5] = "assets/image/background_image/bg8.jpg";
images[6] = "assets/image/background_image/bg1.jpg";

function changePicture() {
  let imageBackground = document.querySelector(".heroes-background");

  imageBackground.style.backgroundImage = "url(" + images[i] + ")";
  imageBackground.style.transition = "all 1.5s ease";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changePicture, slideTime);
}

window.onload = function () {
  changePicture();
};

let heroes = document.querySelectorAll(".heroes span");
let active = "";
let hero = document.querySelector(".hero");

heroes.forEach((show) => {
  show.addEventListener("mouseenter", (active) => {
    event.target.classList.add("active");
    active = event.target.getAttribute("data-active");
    hero.style.backgroundImage = `url('${active}')`;
    hero.style.backgroundSize = "cover";
    hero.style.transition = "all 0.1s linear";
    hero.classList.add("fade-in");
    show.style.transform = 'scale(1.1)';
        show.style.boxShadow = '0 0 5px 0 #fff';
        sgow.style.border = 'solid 2px #fff';
  });
  
  show.addEventListener("mouseleave", () => {
    show.style.transform = 'scale(1.0)';
    show.style.boxShadow = '0 0 0 0 #fff';
    sgow.style.border = 'solid 2px #fff';
  });
  
  if (!('ontouchstart' in window)) {
  show.addEventListener("mouseleave", () => {
    hero.style.backgroundImage = "none";
    hero.classList.remove("fade-in");
  });
  }
});

let joemel001 = document.querySelector(".heroes span:nth-of-type(1)");
let jim001 = document.querySelector(".heroes span:nth-of-type(2)");
let gab001 = document.querySelector(".heroes span:nth-of-type(3)");
let maykel001 = document.querySelector(".heroes span:nth-of-type(4)");
let marvin001 = document.querySelector(".heroes span:nth-of-type(5)");
let ronald001 = document.querySelector(".heroes span:nth-of-type(6)");
let edward001 = document.querySelector(".heroes span:nth-of-type(7)");
let jonas001 = document.querySelector(".heroes span:nth-of-type(8)");
let xander001 = document.querySelector(".heroes span:nth-of-type(9)");
let neil001 = document.querySelector(".heroes span:nth-of-type(10)");
let gabo001 = document.querySelector(".heroes span:nth-of-type(11)");
let ryan001 = document.querySelector(".heroes span:nth-of-type(12)");
let charlie001 = document.querySelector(".heroes span:nth-of-type(13)");
let vergel001 = document.querySelector(".heroes span:nth-of-type(14)");
let jeco001 = document.querySelector(".heroes span:nth-of-type(15)");

joemel001.addEventListener("click", () => {
  joemelVoice();
});

jonas001.addEventListener("click", () => {
  jonasVoice();
});

ryan001.addEventListener("click", () => {
  ryanVoice();
});

let heroname = document.querySelector(".name");
let role = document.querySelector(".role");

joemel001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "JOEMEL";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "85px";

  role.innerHTML = "fighter / tank";
  role.style.opacity = "1";
});
if (!('ontouchstart' in window)) {
joemel001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  role.style.opacity = "0";
});
}

jim001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "jimwel";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "85px";

  role.innerHTML = "support";
  role.style.opacity = "1";
});
if (!('ontouchstart' in window)) {
jim001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  role.style.opacity = "0";
});
}

gab001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "GABRYELLE";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "60px";

  role.innerHTML = "tank / support";
  role.style.opacity = "1";
  role.style.top = "20%";
});
if (!('ontouchstart' in window)) {
gab001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
  role.style.top = "18%";
});
}

maykel001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "michael";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "80px";

  role.innerHTML = "marksman";
  role.style.opacity = "1";
});
if (!('ontouchstart' in window)) {
maykel001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});
}

marvin001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "marvin";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "85px";

  role.innerHTML = "assasin";
  role.style.opacity = "1";
});
marvin001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  role.style.opacity = "0";
});

ronald001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "ronald";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "85px";

  role.innerHTML = "fighter";
  role.style.opacity = "1";
});
ronald001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

edward001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "edward";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "85px";

  role.innerHTML = "tank";
  role.style.opacity = "1";
});
edward001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

jonas001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "jonas";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "90px";

  role.innerHTML = "fighter / assasin";
  role.style.opacity = "1";
  role.style.top = "20%";
});
jonas001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
  role.style.top = "18%";
});

xander001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "xander";
  heroname.style.opacity = "1";
  heroname.style.fontSize = "95px";

  role.innerHTML = "mage / marksman";
  role.style.opacity = "1";
});
xander001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

neil001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "neilfred";
  heroname.style.fontSize = "80px";
  heroname.style.opacity = "1";

  role.innerHTML = "assasin / mage";
  role.style.opacity = "1";
  role.style.top = "19%";
});
neil001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
  role.style.top = "18%";
});

gabo001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "gabriel";
  heroname.style.fontSize = "90px";
  heroname.style.opacity = "1";

  role.innerHTML = "marksman / tank";
  role.style.opacity = "1";
});
gabo001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

ryan001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "ryan";
  heroname.style.fontSize = "120px";
  heroname.style.opacity = "1";

  role.innerHTML = "tank / support / fighter";
  role.style.opacity = "1";
  role.style.top = "16%";
  role.style.left = "25%";
  role.style.fontSize = "8px";
});
ryan001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
  role.style.top = "18%";
  role.style.fontSize = "10px";
  role.style.left = "20%";
});

charlie001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "charlie";
  heroname.style.fontSize = "90px";
  heroname.style.opacity = "1";

  role.innerHTML = "mage / support";
  role.style.opacity = "1";
});
charlie001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

vergel001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "vergel";
  heroname.style.fontSize = "90px";
  heroname.style.opacity = "1";

  role.innerHTML = "fighter / tank";
  role.style.opacity = "1";
});
vergel001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

jeco001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "angelo";
  heroname.style.fontSize = "90px";
  heroname.style.opacity = "1";

  role.innerHTML = "tank / support";
  role.style.opacity = "1";
});
jeco001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  heroname.style.fontSize = "100px";
  role.style.opacity = "0";
});

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