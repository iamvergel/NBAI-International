let lside = document.querySelector(".lside");
let rside = document.querySelector(".rside");

backgroundMusic();

let i = 0;
let images = [];
let slideTime = 2000;

images[0] = "../../assets/image/background_image/bg2.jpg";
images[1] = "../../assets/image/background_image/bg3.jpg";
images[2] = "../../assets/image/background_image/bg4.jpg";
images[3] = "../../assets/image/background_image/bg5.jpg";
images[4] = "../../assets/image/background_image/bg7.jpg";
images[5] = "../../assets/image/background_image/bg8.jpg";
images[6] = "../../assets/image/background_image/bg1.jpg";

let back = document.querySelector(".back");

back.addEventListener("click", () => {
  buttoneffects();

  lside.style.width = "50%";
  rside.style.width = "50%";

  effects02();

  setTimeout(() => {
    window.location.href = "https://nbai-international.vercel.app/";
  }, 1500);
});

function changePicture() {
  let imageBackground = document.querySelector(".heroes-background");

  imageBackground.style.backgroundImage = "url(" + images[i] + ")";
  imageBackground.style.transition = "all 0.3s ease";

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
    enterEffect();

    event.target.classList.add("active");
    active = event.target.getAttribute("data-active");
    hero.style.backgroundImage = `url('${active}')`;
    hero.style.backgroundSize = "cover";
    hero.style.transition = "all 0.1s linear";
    hero.classList.add("fade-in");
  });

  show.addEventListener("mouseleave", () => {
    hero.style.backgroundImage = "none";
    hero.classList.remove("fade-in");
  });
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
let gelo001 = document.querySelector(".heroes span:nth-of-type(16)");
let tian001 = document.querySelector(".heroes span:nth-of-type(17)");
let erik001 = document.querySelector(".heroes span:nth-of-type(18)");
let jus001 = document.querySelector(".heroes span:nth-of-type(19)");
let jm001 = document.querySelector(".heroes span:nth-of-type(20)");

function largeScreen() {
  if (window.innerWidth >= 992) {
    joemel001.addEventListener("click", () => {
      joemelVoice();

      setTimeout(() => {
        lside.style.width = "50%";
        rside.style.width = "50%";

        effects01();

        setTimeout(() => {
          window.location.href = "../../assets/pages/hero-joemel.html";
        }, 2000);
      }, 1000);
    });

    jim001.addEventListener("click", () => {
      setTimeout(() => {
        lside.style.width = "50%";
        rside.style.width = "50%";

        effects01();

        setTimeout(() => {
          window.location.href = "../../assets/pages/hero-jimwel.html";
        }, 2000);
      }, 1000);
    });

    /*
    gab001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-gab.html";
      }, 1500);
    });

    maykel001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-maykel.html";
      }, 1500);
    });

    marvin001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-marvin.html";
      }, 1500);
    });

    ronald001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-ronald.html";
      }, 1500);
    });

    edward001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-edward.html";
      }, 1500);
    });

    jonas001.addEventListener("click", () => {
      jonasVoice();

      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-jonas.html";
      }, 1500);
    });

    xander001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-xander.html";
      }, 1500);
    });

    neil001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-neil.html";
      }, 1500);
    });

    gabo001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-gabo.html";
      }, 1500);
    });

    ryan001.addEventListener("click", () => {
      ryanVoice();

      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-ryan.html";
      }, 1500);
    });

    charlie001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-charlie.html";
      }, 1500);
    });

    vergel001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-vergel.html";
      }, 1500);
    });

    jeco001.addEventListener("click", () => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      setTimeout(() => {
        window.location.href = "assets/pages/hero-angelo.html";
      }, 1500);
    });*/
  }
}

window.addEventListener("load", largeScreen);

window.addEventListener("resize", largeScreen);

let select = document.querySelector(".select");
let heroname = document.querySelector(".name");
let roleContainer = document.querySelector(".roleContainer");
let role = document.querySelector(".role");
let effects = document.querySelector(".effects");
let jimbg = document.querySelector(".jimbg");
let heroBackground = document.querySelector(".heroBackground");
let heroBriefbackground = document.querySelector(".heroBriefbackground");
let joemelWeapon = document.querySelector('.joemelWeapon');
let gabWeapon = document.querySelector('.gabWeapon');
let maykelWeapon = document.querySelector('.maykelWeapon');
let maykelWeaponOne = document.querySelector('.maykelWeaponOne');
let maykelWeaponTwo = document.querySelector('.maykelWeaponTwo');

select.addEventListener("click", () => {
  if (heroname.innerHTML === "JOEMEL") {
    heroname.innerHTML = "JOEMEL";
    heroname.style.opacity = "1";

    effects.style.backgroundImage =
      "url('https://i.pinimg.com/originals/ef/5e/4b/ef5e4b4d024c66b42311e337ae8ab4cc.gif')";

    heroBackground.style.backgroundImage =
      "url('../../assets/image/background_image/joemelbg.jpg')";
    heroBackground.style.opacity = "0.5";

    role.innerHTML = "fighter / tank";
    role.style.opacity = "1";

    joemelVoice();

    setTimeout(() => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      effects01();

      setTimeout(() => {
        window.location.href = "../../assets/pages/hero-joemel.html";
      }, 1000);
    }, 500);
  } else if (heroname.innerHTML = "JIMWEL") {
    heroname.innerHTML = "jimwel";
    heroname.style.opacity = "1";

    effects.style.backgroundImage =
      "url('https://cdn.dribbble.com/users/652916/screenshots/2033857/media/d3b47e7e94f6dc54fb1f4d2680298dd8.gif')";

    heroBackground.style.backgroundImage =
      "url('../../assets/image/background_image/jimbg.jpg')";
    heroBackground.style.opacity = "0.7";

    roleContainer.style.backgroundColor = "white";

    role.innerHTML = "support";
    role.style.opacity = "1";

    setTimeout(() => {
      lside.style.width = "50%";
      rside.style.width = "50%";

      effects01();

      setTimeout(() => {
        window.location.href = "../../assets/pages/hero-jimwel.html";
      }, 2000);
    }, 1000);
  }
});

joemel001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "JOEMEL";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://i.pinimg.com/originals/ef/5e/4b/ef5e4b4d024c66b42311e337ae8ab4cc.gif')";

  joemelWeapon.style.backgroundImage =
    "url('../../assets/image/characters/character001/joemel_weapon.png')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/joemelbg.jpg')";
  heroBackground.style.opacity = "0.5";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Joemel : The Eternal Hashira - one of the deadliest Hashira, Joemel lived over five thousand years ago. He was a master of Stone Hardening and Foil Breathing techniques, <br/> wielding them with unmatched skill. Above all, Joemel was also an Imaginary Trapper, a skill he acquired from his friend, Sivergel, who taught him this unique ability."';

  role.innerHTML = "fighter / tank";
  role.style.opacity = "1";
});
joemel001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
  joemelWeapon.style.backgroundImage = "";
});

jim001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "jimwel";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://cdn.dribbble.com/users/652916/screenshots/2033857/media/d3b47e7e94f6dc54fb1f4d2680298dd8.gif')";

  jimbg.style.backgroundImage =
    "url('https://i.pinimg.com/originals/f5/dc/b2/f5dcb20b8e25a547dcbfbe33bbf78c5e.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/jimbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Jimwell : The Modern Hashira - In the present day, Jimwell stands as one of the most essential Hashira, renowned not for his offensive prowess but for his unparalleled support <br/> capabilities. From a young age, Jimwell displayed a natural affinity for the  Water Breathing Technique."';

  role.innerHTML = "support";
  role.style.opacity = "1";
});
jim001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
  jimbg.style.backgroundImage = "";
});

gab001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "GABRYELLE";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/i8tcyIgDxnSvK/giphy.gif')";

  gabWeapon.style.backgroundImage =
    "url('../../assets/image/characters/character003/gab_weapon.png')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/gabbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Gabryelle : The Last Rock Bender - he is a rock bender who has the power to create a rock wall that can protect her from any attack. <br/>he is also a master of the Water Breathing Technique, the Fire Breathing Technique and the Bright Stone Hardening Technique."';

  role.innerHTML = "tank / support";
  role.style.opacity = "1";
});
gab001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
  gabWeapon.style.backgroundImage = "";
});

maykel001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "michael";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://3.bp.blogspot.com/-NaFg_MVKDEM/UnUJxowVYYI/AAAAAAAAHE0/nZ8-GHHLobE/s1600/Animation.gif')";

  maykelWeapon.style.backgroundImage =
    "url('../../assets/image/characters/character004/maykel_weapon2.png')";

    maykelWeaponOne.style.backgroundImage =
    "url('../../assets/image/characters/character004/maykel_weapon.png')";

    maykelWeaponTwo.style.backgroundImage =
    "url('../../assets/image/characters/character004/maykel_weapon.png')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/maykelbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Michael : the 7th Genggeng Slayer who is a legendary marksman"';

  role.innerHTML = "marksman";
  role.style.opacity = "1";
});
maykel001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
  maykelWeapon.style.backgroundImage = "";
  maykelWeaponOne.style.backgroundImage = "";
  maykelWeaponTwo.style.backgroundImage = "";
});

marvin001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "marvin";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('http://fc09.deviantart.net/fs71/f/2011/162/9/5/lightning_gif_animation_by_bluehorses-d3in114.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/marvinbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Marvin : The Assasin who save the Modern Hashira Jimwel"';

  role.innerHTML = "assasin";
  role.style.opacity = "1";
});
marvin001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
});

ronald001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "ronald";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://i.pinimg.com/originals/11/0f/2b/110f2bbc1027482ffe89b353d49b958e.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/ronaldbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Ronald : The Street Fighter who is a legendary fighter with Chou and lapu-lapu of mobile legend"';

  role.innerHTML = "fighter";
  role.style.opacity = "1";
});
ronald001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
});

edward001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "edward";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/9Ap0p7lLngdck/giphy.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/edwardbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "tank";
  role.style.opacity = "1";
});
edward001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

jonas001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "jonas";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/26BRGoqbUQvk8nwTC/giphy.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/jonasbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "fighter / assasin";
  role.style.opacity = "1";
});
jonas001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

xander001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "xander";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/l41lLPD1qV9jXpv56/giphy.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/xanderbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "mage / marksman";
  role.style.opacity = "1";
});
xander001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

neil001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "neilfred";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media2.giphy.com/media/CKlafeh1NAxz35KTq4/giphy-downsized-large.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/neilbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "assasin / mage";
  role.style.opacity = "1";
});
neil001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

gabo001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "gabriel";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/d3MKUPmuO1fyPaRq/giphy.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/gabobg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "marksman / tank";
  role.style.opacity = "1";
});
gabo001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

ryan001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "ryan";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/98rDBgZedHM9q/giphy.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/ryanbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Ryan : One of the legendary Hashira, is the king of all wolves, feared for his unmatched combat skills and mastery of stealth. A formidable fighter,<br/> he excels in both battle and evasion, often disappearing into the shadows when needed.<br/> He is rarely seen, but when he does appear, its usually in a strategic position, ready to strike when the time is right."';

  role.innerHTML = "tank / fighter";
  role.style.opacity = "1";
});
ryan001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
});

charlie001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "charlie";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://37.media.tumblr.com/988535f6a4b664a8f597985f66d38d67/tumblr_n8bz2ndH8R1tb09k8o1_500.gif')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/charliebg.webp')";
  heroBackground.style.opacity = "0.8";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "mage / support";
  role.style.opacity = "1";
});
charlie001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

vergel001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "vergel";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media1.tenor.com/images/c6b7bab8f19aa4da200077327ec3b52d/tenor.gif?itemid=16948532')";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/vergelbg.jpg')";
  heroBackground.style.opacity = "0.7";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "fighter / tank";
  role.style.opacity = "1";
});
vergel001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

jeco001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "angelo";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media.giphy.com/media/ypDa5gIE8VfIk1lQ9s/giphy.gif')";
  effects.style.opacity = "1";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/jecobg.jpg')";
  heroBackground.style.opacity = "0.9";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "tank / support";
  role.style.opacity = "1";
});
jeco001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

gelo001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "gelo";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDFzYzk1bm05ZGV5N3F3MGRrMWxjbnptM29sNGg5aXQzOXg5eWZldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dB66K4Kywc8gPVh6A7/giphy.gif')";
  effects.style.opacity = "1";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/gelobg.jpeg')";
  heroBackground.style.opacity = "0.9";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "support / tank";
  role.style.opacity = "1";
});
gelo001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

tian001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "Cristian";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VqazA1ejI1M2U1NWh5aG9wbjB1a3J6dzM2eWJ5bjJyNTlzdmpuOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0JXhP33IC7yynHz7yI/giphy.gif')";
  effects.style.opacity = "1";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/tianbg.jpg')";
  heroBackground.style.opacity = "0.9";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "assasin";
  role.style.opacity = "1";
});
tian001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

erik001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "Erick";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTl1dHcxNjIzaGNxcGx5Zjd5NDgzdzNlZ2JrdHFubHkxbTdkeHR5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2Cy90VMhfoA9BC/giphy.gif')";
  effects.style.opacity = "1";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/erikbg.jpeg')";
  heroBackground.style.opacity = "0.9";

  roleContainer.style.backgroundColor = "white";

  role.innerHTML = "Mage / Fighter";
  role.style.opacity = "1";
});
erik001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
});

jus001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "Justine";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZhZjJrN2huYTYzNXNrejU1cGY4Y2N6dXRwcXltNGNyNzR1Nm9seiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iMBEwpRodEBlpuTyVD/giphy.gif')";
  effects.style.opacity = "1";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/justbg.jpg')";
  heroBackground.style.opacity = "0.9";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Justine : the King of the Knights of the Round Table, is a legendary tank and support, known for his unshakable strength in battle. He once trained alongside his closest friends, <br/> Erick and Cristian, forging an unbreakable bond. Though time has separated them, his dedication to protect and the memories of their friendship continue to drive him forward.';

  role.innerHTML = "tank / support";
  role.style.opacity = "1";
});
jus001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
});

jm001.addEventListener("mouseenter", () => {
  heroname.innerHTML = "JM";
  heroname.style.opacity = "1";

  effects.style.backgroundImage =
    "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29ndHE2ejQyd3U4eDB4a3ZnMTAxOTZzN3JrYXYxbjZiNG05OTdueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IfxBjGrbIK3vwkODkA/giphy.gif')";
  effects.style.opacity = "1";

  heroBackground.style.backgroundImage =
    "url('../../assets/image/background_image/jmbg.jpg')";
  heroBackground.style.opacity = "0.9";
  heroBackground.style.filter = "grayscale(70%)";

  roleContainer.style.backgroundColor = "white";

  heroBriefbackground.innerHTML = '"Jm : The Legendary Card Man in the Land of Peru-peru"';

  role.innerHTML = "Mage";
  role.style.opacity = "1";
});
jm001.addEventListener("mouseleave", () => {
  heroname.style.opacity = "0";
  roleContainer.style.backgroundColor = "";
  role.style.opacity = "0";
  effects.style.backgroundImage = "";
  heroBackground.style.opacity = "0";
  heroBriefbackground.innerHTML = "";
  heroBackground.style.filter = "none";
});

function enterEffect() {
  let effect = new Audio("../../assets/music/soundeffects/wind.mp3");
  effect.play();
  effect.volume = 1;
}

//sound effects
function joemelVoice() {
  let audio = new Audio("../../assets/music/hero_pickingvoice/joemel001.wav");
  audio.play();
  audio.volume = 1;
}

function jonasVoice() {
  let audio = new Audio("../../assets/music/hero_pickingvoice/jonas001.mp3");
  audio.play();
  audio.volume = 1;
}

function ryanVoice() {
  let audio = new Audio("../../ssets/music/hero_pickingvoice/ryan001.mp3");
  audio.play();
  audio.volume = 1;
}

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
