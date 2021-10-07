

var hamButton = document.querySelector(".icon");




// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);


function toggleHamburgerMenu(){
    
    var hamMenu = document.querySelector("nav ul li > ul");
    hamMenu.classList.toggle("visible");

}



function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }