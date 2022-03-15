var kinkkuAnanasGluteenitonPohja; // Muuttuja johon tallennetaan tieto tuleeko kinkkuananaspizzaan gluteeniton pohja
var juustoGluteenitonPohja; // Muuttuja johon tallennetaan tieto tuleeko juustopizzaan gluteention pohja
var kinkkuPizzaYhteishinta; // Muuttuja johon tallennetaan kinkku pizzojen yhteishinta
var juustoPizzaYhteishinta; // Muuttuja johon tallennetaan juusto pizzojen yhteishinta
var onkoJuustoValittu; // Muuttuja johon tallennetaan tieto onko juustopizza valittu
var onkoKinkkuValittu; // Muuttuja johon tallennetaan tieto onko kinkkupizza valittu
var kaikenYhteisHinta; // Muuttuja johon tallennetaan kaikkien valittujen pizzojen hinta
var juustoLisaKatkarapu; // Muuttuja johon tallennetaan tieto tuleeko juustopizzaan katkarapua
var juustoLisaSipuli; // Muuttuja johon tallennetaan tieto tuleeko juustopizzaan lisäsipulia
var kinkkuAnanasLisaKatkarapu; // Muuttuja johon tallennetan tieto tuleeko kinkkuananaspizzaan katkarapua
var kinkkuAnanasLisaSipuli; // Muttuuja johon tallennetaan tieto tuleeko kinkuananaspizzaan sipulia
var onkoKokaKolaValittu;
var tuleekoKokaKolaJaita;
var kokaKolaYhteishinta;
var onkoJaffaValittu;
var tuleekoJaffaJaita;
var jaffaYhteishinta;
var onkoSpriteValittu;
var tuleekoSpriteJaita;
var spriteYhteishinta
// Funktio jolla lasketaan kinkkuananaspizzan määrä ja hinta
function kinkkuFunktio() {
  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Hankkii tiedon onko checkboxissa rasti
  if (onkoKinkkuValittu.checked && kinkkuAnanasMaara.value >= 0) { // JOS checkboxissa on rasti niin seuraavat asiat suoritetaan   
    kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Laskee pizzojen määrän * hinta ja tallentaa ne muuttujaan
    kinkkuAnanasLisaTayte() // Suorittaa funktion jossa tarkistetaan onko lisätäytteitä
  } else if(!onkoKinkkuValittu.checked) { // Jos checkboxissa ei ole rasta
    document.getElementById("kinkku").innerHTML = "Laita raksi ruutuun jos näitä haluat."; // Tulostaa jos kinkkupizzaa ei valittu mutta silti painaa napppia
  } else if (kinkkuAnanasMaara.value <= 0) {  // Jos kinkkuananaspizzoja on 0 tai alle niin jatketaan:
    document.getElementById("kinkku").innerHTML = "Valitse vähintään yksi tai poista rasti.";
  } else { // Jos jotain muuta käy
    document.getElementById("kinkku").innerHTML = "Virhe";
  }
}
// Funktio jolla lasketaan juustopizzojen määrät jne
function juustoFunktio() {
  onkoJuustoValittu = document.getElementById("juustoPizza");
  if (onkoJuustoValittu.checked && juustoPizzaMaara.value >= 0) {
    juustoPizzaYhteishinta = juustoPizzaMaara.value * 5;
    juustoLisaTayte()
  } else if(!onkoJuustoValittu.checked) {
    document.getElementById("juusto").innerHTML = "Laita raksi ruutuun jos näitä haluat.";
  } else if (juustoPizzaMaara.value <= 0) {
    document.getElementById("juusto").innerHTML = "Valitse vähintään yksi tai poista rasti.";
  } else {
    document.getElementById("juusto").innerHTML = "Virhe";
  }
}
function cocaColaFunktio() {
  onkoKokaKolaValittu = document.getElementById("cocaCola");
  if (onkoKokaKolaValittu.checked && cocaColaJuomaMaara.value >= 0) {
    kokaKolaYhteishinta = cocaColaJuomaMaara.value * 3;
    cocaColaLisaJaat()
  } else if (!onkoKokaKolaValittu.checked) {
    document.getElementById("cocaCola").innerHTML = "Laita rasti ruutuun jos näitä haluat.";
  } else if (cocaColaJuomaMaara.value <= 0) {
    document.getElementById("cocaCola").innerHTML = "Valitse vähintään yksi tai poista rasti.";
  } else {
    document.getElementById("cocaCola").innerHTML = "Virhe";
  }
}
function spriteFunktio() {
  onkoSpriteValittu = document.getElementById("sprite");
  if (onkoSpriteValittu.checked && spriteJuomaMaara.value >= 0) {
    spriteYhteishinta = spriteJuomaMaara.value * 3;
    spriteLisaJaat()
  } else if (!onkoSpriteValittu.checked) {
    document.getElementById("sprite").innerHTML = "Laita rasti ruutuun jos näitä haluat.";
  } else if (spriteJuomaMaara.value <= 0) {
    document.getElementById("sprite").innerHTML = "Valitse vähintään 1 tai poista rasti.";
  } else {
    document.getElementById("sprite").innerHTML = "Virhe.";
  }
}
function jaffaFunktio() {
  onkoJaffaValittu = document.getElementById("jaffa");
  if (onkoJaffaValittu.checked && jaffaJuomaMaara.value >= 0) {
    jaffaYhteishinta = jaffaJuomaMaara.value * 3;
    jaffaLisaJaat()
  } else if (!onkoJaffaValittu.checked) {
    document.getElementById("jaffa").innerHTML = "Laita rasti ruutuun jos näitä haluat.";
  } else if (jaffaJuomaMaara.value <= 0) {
    document.getElementById("jaffa").innerHTML = "Valitse vähintään 1 tai poista rasti.";
  } else {
    document.getElementById("jaffa").innerHTML = "Virhe.";
  }
}
function kinkkuAnanasLisaTayte() {
  kinkkuAnanasLisaKatkarapu = document.getElementById("lisaKatkarapu"); // Lukee inputin kyseisiin muuttujiin
  kinkkuAnanasLisaSipuli = document.getElementById("lisaSipuli");
  kinkkuAnanasGluteenitonPohja = document.getElementById("kinkkuAnanasGluteenitonPohja");
  document.getElementById("kinkkuAnanasLisaTayte").innerHTML = "Lisätty!";
}
function juustoLisaTayte() {
  juustoLisaKatkarapu = document.getElementById("juustoLisaKatkarapu");
  juustoLisaSipuli = document.getElementById("juustoLisaSipuli");
  juustoGluteenitonPohja = document.getElementById("juustoGluteenitonPohja");
  document.getElementById("juustoLisaTayte").innerHTML = "Lisätty!";
}
function cocaColaLisaJaat() {
  tuleekoKokaKolaJaita = document.getElementById("cocaColaLisaJaa");
  document.getElementById("cocaColaLisaJaat").innerHTML = "Lisätty!";
}
function spriteLisaJaat() {
  tuleekoSpriteJaita = document.getElementById("spriteLisaJaa");
  document.getElementById("spriteLisaJaat").innerHTML = "Lisätty!"
}
function jaffaLisaJaat() {
  tuleekoJaffaJaita = document.getElementById("jaffaLisaJaa");
  document.getElementById("jaffaLisaJaat").innerHTML = "Lisätty!";
}
// Funktio jolla lasketaan valittujen pizzojen yhteishinta
function laskeYhteisHinta() {
  kaikenYhteisHinta = kinkkuAnanasMaara.value * 8 + juustoPizzaMaara.value * 5 + cocaColaJuomaMaara.value * 3 + spriteJuomaMaara.value * 3 + jaffaJuomaMaara.value * 3;
  if (kinkkuAnanasMaara.value > 0) { // Jos kinkkuananas pizzoja on enemmän kuin 0 niin jatketaan:
    if (lisaKatkarapu.checked) { // Jos kinkkuananaspizzaan tulee katkarapua niin jatketaan:
     kaikenYhteisHinta = kaikenYhteisHinta + 1 * kinkkuAnanasMaara.value; // Lisätään lisätäytteen hinta
    }
    if (lisaSipuli.checked) { // Jos kinkkuananaspizzassa on sipulia niin jatketaan:
     kaikenYhteisHinta = kaikenYhteisHinta + 1 * kinkkuAnanasMaara.value;
    }
    if (kinkkuAnanasGluteenitonPohja.checked) {
     kaikenYhteisHinta = kaikenYhteisHinta + 2 * kinkkuAnanasMaara.value;
    }
  }
  if (juustoPizzaMaara.value > 0) {
    if (juustoLisaKatkarapu.checked) {
     kaikenYhteisHinta = kaikenYhteisHinta + 1 * juustoPizzaMaara.value;
    }
    if (juustoLisaSipuli.checked) {
     kaikenYhteisHinta = kaikenYhteisHinta + 1 * juustoPizzaMaara.value;
    }
    if (juustoGluteenitonPohja.checked) {
     kaikenYhteisHinta = kaikenYhteisHinta + 2 * juustoPizzaMaara.value;
    }
}
  document.getElementById("hinta").innerHTML = "Yhteishinta: " + kaikenYhteisHinta + " €"; // Tulostaa yhteishinnan
  if (kinkkuAnanasMaara.value > 0) { // Jos kinkkuananas pizzoja on enemmän kuin 0 niin jatketaan:
    if (lisaKatkarapu.checked || lisaSipuli.checked) {  // Jos kinkkuananas pizzoissa on lisätäytteitä niin jatketaan:
      document.getElementById("valitutKinkkuPizzat").innerHTML = kinkkuAnanasMaara.value + " kinkkuananaspizzaa valituilla lisätäytteillä";
    } else if (kinkkuAnanasGluteenitonPohja.checked) {
      document.getElementById("valitutKinkkuPizzat").innerHTML = kinkkuAnanasMaara.value + " kinkkuananaspizzaa gluteenittomalla pohjalla";
    } else { // Jos lisätäytteitä ei ole:
      document.getElementById("valitutKinkkuPizzat").innerHTML = kinkkuAnanasMaara.value + " kinkkuananaspizzaa";
    }
  }
  if (juustoPizzaMaara.value > 0) {
    if (juustoLisaKatkarapu.checked || juustoLisaSipuli.checked) {
      document.getElementById("valitutJuustoPizzat").innerHTML = juustoPizzaMaara.value + " juustopizzaa valituilla lisätäytteillä";
  } else if (juustoGluteenitonPohja.checked) {
    document.getElementById("valitutJuustoPizzat").innerHTML = juustoPizzaMaara.value + " juustopizzaa gluteenittomalla pohjalla";
  } else {
    document.getElementById("valitutJuustoPizzat").innerHTML = juustoPizzaMaara.value + " juustopizzaa";
  }
 }
  if (cocaColaJuomaMaara.value > 0) {
    if (tuleekoKokaKolaJaita.checked) {
      document.getElementById("valitutCocaColat").innerHTML = cocaColaJuomaMaara.value + " Cocacolaa jäillä";
    } else {
      document.getElementById("valitutCocaColat").innerHTML = cocaColaJuomaMaara.value + " Cocacolaa ilman jäitä";
    }
  }

  if (spriteJuomaMaara.value > 0) {
    if (tuleekoSpriteJaita.checked) {
      document.getElementById("valitutSpritet").innerHTML = spriteJuomaMaara.value + " Spriteä jäillä";
    } else {
      document.getElementById("valitutSpritet").innerHTML = spriteJuomaMaara.value + " Spriteä ilman jäitä";
    }
  }

  if (jaffaJuomaMaara.value > 0) {
    if (tuleekoJaffaJaita.checked) {
      document.getElementById("valitutJaffat").innerHTML = jaffaJuomaMaara.value + " Jaffaa jäillä";
    } else {
      document.getElementById("valitutJaffat").innerHTML = jaffaJuomaMaara.value + " Jaffaa ilman jäitä";
    }
  }
}
// 2 funktiota jotka toteutuu kun käyttäjä valitsee joko 'nouto' tai 'kuljetus'
function kotiinKuljetus() { // Jos käyttäjä valitsee kuljetuksen
  document.getElementById("kuljetus").innerHTML = "Kotiinkuljetus. Kuljetusaika on noin " + kaikenYhteisHinta * 0.7 + " min. Mihin toimitamme tämän?"; // kaikenYhteisHinta * 0.5 on toimitusaika
  document.getElementById("huvaksu").style.display = "block"; // Kysyy osoitetta jos kotiin kuljetus valitaan
}
function tilausNouto() { // Jos käyttäjä valitsee noudon
  document.getElementById("kuljetus").innerHTML = kaikenYhteisHinta * 0.5 + " min valmistumiseen";
  document.getElementById("huvaksu").style.display = "none"; // Piiloittaa osoitekentän jos noutotilaus valitaan
}

function myOrderF(){
  location.href = "orderF.html";
}

function myOrder(){
  location.href = "order.html";
}

function myOrderJ(){
  location.href = "orderJ.html";
}

document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("pizzaRoma1").textContent += "Tervetuloa: " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("ulosKirjautumis_lomake");
    }
    else
        document.getElementById("ulosKirjautumis_lomake").style.display = "none";
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function kirjauduUlos(){
    localStorage.setItem("kirjautunut", "null")
}