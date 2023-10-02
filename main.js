//CAROUSEL AUTOMÁTICO PARA DESKTOP Y MOBILE
const blocks = document.querySelectorAll(".section6-block");
const indicators = document.querySelectorAll(".indicators span");

let currentPosition = 0; // Posición actual del carrusel
const totalPositions = blocks.length; // Número total de posiciones

// Función para mostrar la posición actual del carrusel
function showPosition(position) {
  blocks.forEach((block, index) => {
    if (index === position) {
      block.style.display = "flex";
    } else {
      block.style.display = "none";
    }
  });

  // Actualiza los indicadores de posición
  indicators.forEach((indicator, index) => {
    if (index === position) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Función para avanzar al siguiente conjunto de divs
function nextPosition() {
  currentPosition = (currentPosition + 1) % totalPositions;
  showPosition(currentPosition);
}

// Configura un temporizador para cambiar automáticamente de posición
setInterval(nextPosition, 7000); // Cambia el valor (en milisegundos) para ajustar la velocidad

// Mostrar la primera posición al cargar la página
showPosition(currentPosition);
//-------------------------------------------------------------------------------------------
const blocks_mobile = document.querySelectorAll(".section6-block-mobile");
  const indicators_mobile = document.querySelectorAll(".indicators-mobile span");

  let currentPositionMobile = 0; // Posición actual del carrusel
  const totalPositionsMobile = blocks_mobile.length; // Número total de posiciones

  // Función para mostrar la posición actual del carrusel
  function showPositionMobileSection6(position) {
    blocks_mobile.forEach((block, index) => {
      if (index === position) {
        block.style.display = "flex";
      } else {
        block.style.display = "none";
      }
    });

    // Actualiza los indicadores de posición
    indicators_mobile.forEach((indicator, index) => {
      if (index === position) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Función para avanzar al siguiente conjunto de divs
  function nextPositionMobileSection6() {
    currentPositionMobile = (currentPositionMobile + 1) % totalPositionsMobile;
    showPositionMobileSection6(currentPositionMobile);
  }

  // Configura un temporizador para cambiar automáticamente de posición
  setInterval(nextPositionMobileSection6, 4000); // Cambia el valor (en milisegundos) para ajustar la velocidad

  // Mostrar la primera posición al cargar la página
  showPositionMobileSection6(currentPositionMobile);


//ANIMACIÓN DEL HEADER
document.querySelector(".hamb").addEventListener('click', function(e) {
  document.getElementById('one').classList.toggle('oneClick')
  document.getElementById('two').classList.toggle('twoClick')
  document.getElementById('trhee').classList.toggle('trheeClick')
  document.querySelector('.menu').classList.toggle('menuClick')
  document.querySelector('.navBar').classList.toggle('navBar-background')
})

const headerHTML = document.querySelector('.navBar');

window.addEventListener('scroll', () => {
if (window.scrollY > window.innerHeight * 1.25) {
  headerHTML.classList.add('navBar-background-scroll');
} else {
  headerHTML.classList.remove('navBar-background-scroll');
}
});

//SECTION-3 ANIMACIÓN-CONTROL CAROUSEL (MOBILE)
const btn1 = document.getElementById('carousel-mobile-btn1');
const btn2 = document.getElementById('carousel-mobile-btn2');
const cartHTML = document.querySelectorAll('.cart');

btn1.addEventListener('touchstart', function(e) {
  btn1.style.background = "#30C5CA";
  btn2.style.background = "#D9D9D9";
  cartHTML[0].style.transform = "translateX(60%)";
  cartHTML[1].style.transform = "translateX(60%)";
});

btn2.addEventListener('touchstart', function(e) {
  btn2.style.background = "#30C5CA";
  btn1.style.background = "#D9D9D9";
  cartHTML[0].style.transform = "translateX(-60%)";
  cartHTML[1].style.transform = "translateX(-60%)";
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 440) {
    cartHTML[0].style.transform = "translateX(0%)";
    cartHTML[1].style.transform = "translateX(0%)";
  } else if (window.innerWidth < 441){
    btn1.style.background = "#30C5CA";
    btn2.style.background = "#D9D9D9";
    cartHTML[0].style.transform = "translateX(60%)";
    cartHTML[1].style.transform = "translateX(60%)";
  }
});


//SECTION-4 ANIMACIÓN-CONTROL ACORDEÓN (MOBILE)

const touchAcordeon = document.querySelectorAll('.section4-hover');
const touchCart = document.querySelectorAll('.section4-cart');

// Agrega un manejador de eventos touchstart a cada elemento de touchCart
touchCart.forEach((element, index) => {
  element.addEventListener('touchstart', function() {
    // Si el elemento tocado ya tiene una altura de "15vh", establece su altura en "0vh"
    if (touchAcordeon[index].style.height === '15vh') {
      touchAcordeon[index].style.height = '0vh';
    } else {
      // Establece la altura de todos los elementos en "0vh"
      touchAcordeon.forEach((acordeon) => {
        acordeon.style.height = '0vh';
      });
      // Establece la altura del elemento tocado en "15vh"
      touchAcordeon[index].style.height = '15vh';
    }
  });
});


//SECTION-5 ANIMACIÓN-CONTROL CAROUSEL (MOBILE)

//Primer carousel
const s5_btns1 = [
  document.getElementById('section5-carousel-mobile-top-btn1'),
  document.getElementById('section5-carousel-mobile-top-btn2'),
  document.getElementById('section5-carousel-mobile-top-btn3'),
  document.getElementById('section5-carousel-mobile-top-btn4')
];

const s5_cart1HTML = document.querySelectorAll('.section5-block-1-cart');

for (let i = 0; i < s5_btns1.length; i++) {
  s5_btns1[i].addEventListener('touchstart', function(e) {
    for (let j = 0; j < s5_btns1.length; j++) {
      s5_btns1[j].style.background = j === i ? "#30C5CA" : "#D9D9D9";
      s5_cart1HTML[j].style.transform = `translateX(-${i * 100}%)`;
    }
  });
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 440) {
    for (let j = 0; j < s5_btns2.length; j++) {
      s5_cart1HTML[j].style.transform = `translateX(-0%)`;
    }
  } else if (window.innerWidth < 441){
    s5_btns1[0].style.background = "#30C5CA";
    s5_btns1[1].style.background = "#D9D9D9";
    s5_btns1[2].style.background = "#D9D9D9";
    s5_btns1[3].style.background = "#D9D9D9";
    for (let j = 0; j < s5_btns2.length; j++) {
      s5_cart1HTML[j].style.transform = `translateX(-0%)`;
    }
  }
});

//Segundo carousel

const s5_btns2 = [
  document.getElementById('section5-carousel-mobile-bottom-btn1'),
  document.getElementById('section5-carousel-mobile-bottom-btn2'),
  document.getElementById('section5-carousel-mobile-bottom-btn3'),
  document.getElementById('section5-carousel-mobile-bottom-btn4')
];

const s5_cart2HTML = document.querySelectorAll('.section5-block-2-cart');

for (let i = 0; i < s5_btns2.length; i++) {
  s5_btns2[i].addEventListener('touchstart', function(e) {
    for (let j = 0; j < s5_btns2.length; j++) {
      s5_btns2[j].style.background = j === i ? "#30C5CA" : "#D9D9D9";
      s5_cart2HTML[j].style.transform = `translateX(-${i * 100}%)`;
    }
  });
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 440) {
    for (let j = 0; j < s5_btns2.length; j++) {
      s5_cart2HTML[j].style.transform = `translateX(-0%)`;
    }
  } else if (window.innerWidth < 441){
    s5_btns2[0].style.background = "#30C5CA";
    s5_btns2[1].style.background = "#D9D9D9";
    s5_btns2[2].style.background = "#D9D9D9";
    s5_btns2[3].style.background = "#D9D9D9";
    for (let j = 0; j < s5_btns2.length; j++) {
      s5_cart2HTML[j].style.transform = `translateX(-0%)`;
    }
  }
});

