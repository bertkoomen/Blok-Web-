// Click on menu Button

var hamButton = document.querySelector(".icon");

hamButton.addEventListener("click", toggleHamburgerMenu);

var hamMenu = document.querySelector("nav ul li > ul");

function toggleHamburgerMenu() {
  hamMenu.classList.toggle("visible");
}

// onderstaande code gaat over het kruisje in het hamburger menu waardoor je deze kan sluiten.
var closeMenu = document.getElementById("closeMenu");


closeMenu.addEventListener("click", function () {
  hamMenu.classList.remove("visible");
});

// ---



// Darkmode

// alle svg's in de pagina selecteren
var svgs = document.querySelectorAll("svg");

var darkmodeBtn = document.getElementById("darkmodeBtn");

// dit gaat af wanneer de darkmode knop wordt ingedrukt
darkmodeBtn.addEventListener("click", function () {
  var element = document.body;
  element.classList.toggle("dark-mode");

    //   voor elke svg, voeg de class "icons-dark-mode" toe.
  svgs.forEach((svg) => {
    svg.classList.toggle("icons-dark-mode");
  });

    //   zorgt ervoor dat de tekst in het hamburger menu zwart blijft in darkmode
  var hamMenuText = document.querySelectorAll("nav ul li > ul > li");

  hamMenuText.forEach((text) => {   
    text.classList.toggle("visible-text");
  });
});
