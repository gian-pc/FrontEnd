let btnYellow = document.getElementById("btnYellow");
let btnRed = document.getElementById("btnRed");
let btnToggle = document.getElementById("btnToggle");
let seccion1 = document.querySelector(".seccion1");

// Evento Click

btnYellow.onclick = () => {
  if (seccion1.classList.contains("sombra-red") === true) {
    seccion1.classList.remove("sombra-red");
  }
  seccion1.classList.add("sombra-yellow");
};

btnRed.onclick = () => {
  if (seccion1.classList.contains("sombra-yellow") === true) {
    seccion1.classList.remove("sombra-yellow");
  }
  seccion1.classList.add("sombra-red");
};

btnToggle.onclick = () => {
  if (seccion1.classList.contains("sombra-yellow") === true) {
    seccion1.classList.remove("sombra-yellow");
    seccion1.classList.add("sombra-red");
  } else if (seccion1.classList.contains("sombra-red") === true) {
    seccion1.classList.remove("sombra-red");
    seccion1.classList.add("sombra-yellow");
  } else {
    seccion1.classList.add("sombra-yellow");
  }
};
