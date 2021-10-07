

var hamButton = document.querySelector(".icon");




// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);


function toggleHamburgerMenu(){
    
    var hamMenu = document.querySelector("nav ul li > ul");
    hamMenu.classList.toggle("visible");

}

// darkmode//

// var colorSwitch = document.getElementById('input-color-switch');

// colorSwitch.addEventListener('click', checkMode);

// function checkMode(){
//     console.log('checking..');

//     if (colorSwitch.checked){
//         console.log('dark on');
//         darkModeOn();
//     }
//     else{ 
//         console.log('dark off');
//         darkModeOff();
//     }
// }

// function darkModeOn(){
//     document.body.classList.toggle("dark-mode")

// }

// function darkModeOff(){
//     document.body.classList.toggle("dark-mode")
    
// }

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }