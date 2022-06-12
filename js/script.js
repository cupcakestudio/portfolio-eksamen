window.addEventListener('load', mobileSize);
window.addEventListener('resize', mobileSize);
const btn = document.querySelector(".toggle-btn");
const btn_img = document.querySelector(".menu-btn");
const burgermenu = document.querySelector(".burgermenu");
const menu = document.querySelector(".barmenu");

function mobileSize(){
   
        console.log(mobileSize);
        if (window.matchMedia("(min-width: 501px)").matches) {
          //hvis vinduet er større end sat mobil str. gem burgermenuen
          burgermenu.classList.add("hide");
          menu.classList.remove("hide");
        } else {
        
          menu.classList.add("hide");
          burgermenu.classList.remove("hide");
        }
      
}
// FRA L&F projektet

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  burgermenu.classList.toggle("shown");

  // b) lav variablen "burgermenuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const burgermenuShown = burgermenu.classList.contains("shown");

  // c) spørg om "burgermenuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (burgermenuShown) {
    console.log(burgermenuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn_img.src = "img/burgerclose.webp";
  } else {
    console.log(burgermenuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn_img.src = "img/burgermenu.webp";
  }
}
// "toggleMenu()" slutter her

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);