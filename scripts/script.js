

var hamButton = document.querySelector(".icon");




// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);


function toggleHamburgerMenu(){
    
    var hamMenu = document.querySelector("nav ul");
    hamMenu.classList.toggle("visible");

}

