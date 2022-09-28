function copier() {
    var copyText = document.getElementById("discord");
    copyText.style.display = 'block';
    copyText.focus();
    copyText.select();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    copyText.style.display = 'none';
    
    window.notificationService.notify({
    text:"Copié dans le presse-papier",
    type: 'success',
    position:'top-right',
    autoClose: true,
    duration: 1000,
  })
  }

// when the mouse is over id "logo", change the font to a random one
// when the mouse is out of id "logo", change the font Nabla
// add transitions to the font change
// use the following fonts: "Amatic SC", "Bungee Spice", "Nabla", "Poppins", "Press Start 2P", "Prompt", "Roboto Mono"
// Language: javascript
// Path: js\script.js
function randomFont() {
    var fonts = ["Amatic SC", "Bungee Spice", "Nabla", "Poppins", "Press Start 2P", "Prompt"];
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById("logo").style.fontFamily = randomFont;
    document.getElementById("logo").style.transition = "all 0.5s ease-in-out";
}

//space the lettes of id "logo" by 0.5rem
function spacing() {
    document.getElementById("logo").style.letterSpacing = "0.3rem";
    document.getElementById("logo").style.transition = "all 0.5s ease-in-out";
}
//space the lettes of id "logo" by 0rem (back to normal position)
function spacingOut() {
    document.getElementById("logo").style.letterSpacing = "0rem";
    document.getElementById("logo").style.transition = "all 0.5s ease-in-out";
}

//open menu
//change background color to #141414
//add transition to the background color change and the menu opening
function menuopen() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("button").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.body.style.backgroundColor = "#141414";
    document.body.style.transition = "all 0.5s ease-in-out";
    document.getElementById("menu").style.transition = "all 0.5s ease-in-out";
  }
   
//close menu
//change background color #465362
//add transition to the background color change and the menu opening
  function menuclose() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("button").style.display = "block";
    document.getElementById("content").style.display = "block";
    document.body.style.backgroundColor = "#465362";
    document.getElementById("menu").style.transition = "all 0.5s ease-in-out";
  }

//get class contact_buttons
// when mouse is over, change background color of the body to #21272f
// when mouse is out, change background color of the body to default
// add transition to the background color change
function bg_button_on() {
    document.body.style.backgroundColor = "#21272f";
    document.body.style.transition = "all 0.5s ease-in-out";
}

function bg_button_off() {
  document.body.style.backgroundColor = "#465362";
  document.body.style.transition = "all 0.5s ease-in-out";
}

//create function explora()
//when clicked, show the div "explora" and add a black background with opacity 0.5
//add transition to the divs
//reduce opacity of the background color inside the div "explora"
//do not reduce opacity of the text inside the div "explora"

function explora() {
    document.getElementById("explora").style.display = "block";
    document.getElementById("explora").style.transition = "all 0.5s ease-in-out";
    document.getElementById("explora").style.backgroundColor = "#011936";
    document.getElementById("explora").style.transition = "all 0.5s ease-in-out";
}

//create function explora_close()
//when clicked, hide the div "explora" and remove the black background with opacity 0.5
//add transition to the divs
function exploraClose() {
    document.getElementById("explora").style.display = "none";
    document.getElementById("explora").style.transition = "all 0.5s ease-in-out";
    document.getElementById("explora").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("explora").style.transition = "all 0.5s ease-in-out";
}