var hamMenu = document.querySelector("nav ul");

var hamButton = document.querySelector(".icon");




// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);



function toggleHamburgerMenu(){

    hamMenu.classList.toggle("visible");

}