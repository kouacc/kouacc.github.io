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
function menuopen() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("button").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.body.style.backgroundColor = "#141414";
  }
   
//close menu
//change background color #465362
  function menuclose() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("button").style.display = "block";
    document.getElementById("content").style.display = "block";
    document.body.style.backgroundColor = "#465362";
  }