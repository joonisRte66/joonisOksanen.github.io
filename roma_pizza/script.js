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
var onkoKokaKolaValittu; // Muuttuja johon tallennetaan tieto onko cocacola valittu
var tuleekoKokaKolaJaita; // Muuttuja johon tallennetaan tieto tuleeko cocacolaan jäitä
var kokaKolaYhteishinta; // Muuttuja johon tallennetaan cocacola juomien yhteishinta
var onkoJaffaValittu; // Muuttuja johon tallennetaan tieto onko jaffa valittu
var tuleekoJaffaJaita; // Muuttuja johon tallennetaan tieto tuleeko jaffaan jäitä
var jaffaYhteishinta; // Muuttuja johon tallennetaan jaffojen yhteishinta
var onkoSpriteValittu; // Muuttuja johon tallennetaan tieto onko sprite valittu
var tuleekoSpriteJaita; // Muuttuja johon tallennetaan tieto tuleeko spriteen jäitä
var spriteYhteishinta // Muuttuja johon tallennetaan sprite juomien yhteishinta
// Funktio jolla lasketaan kinkkuananaspizzan määrä ja hinta

function kinkkuFunktio() {
  var kinkkuAnanasMaara = 0; // Muuttuja johon tallennetaan kinkkuananaspizzojen määrä
  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Tallennetaan tieto onko kinkkuananas valittu muuttujaan onkoKinkkuValittu
  kinkkuAnanasMaara = document.getElementById("kinkkuAnanasMaara"); // Tallennetaan kinkkuananaspizzojen määrä muuttujaan
  if (onkoKinkkuValittu.checked) { // Tarkistetaan onko kinkkuananaspizzaa valittu
    if (kinkkuAnanasMaara.value > 0) { // Tarkistaa onko kinkkuananas pizzoja enemmän kuin 0
      kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Kinkkuananaspizzojen yhteishinta = Määrä * Hinta (8e)
      kinkkuAnanasLisaTayte() // Kutsuu funktiota
      document.getElementById("kinkkuVirhe").innerHTML = ""; // Jos pizzoja on yli 0 ja rasti ruudussa niin virhe teksti poistetaan
      laskeYhteisHinta()
    } else { // Jos kinkkuananaspizzoja on valittu alle 0
      document.getElementById("kinkkuVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("kinkkuAnanasLisaTayte").innerHTML = "";
      document.getElementById("valitutKinkkuPizzat").innerHTML = "";
    }
  } else { // Jos kinkkuananaspizzaa ei ole valittu
    document.getElementById("kinkkuVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("kinkkuAnanasLisaTayte").innerHTML = "";
    document.getElementById("valitutKinkkuPizzat").innerHTML = "";
  }
}

function juustoFunktio() {
  var juustoPizzaMaara = 0;
  onkoJuustoValittu = document.getElementById("juustoPizza");
  juustoPizzaMaara = document.getElementById("juustoPizzaMaara");
  if (onkoJuustoValittu.checked) {
    if (juustoPizzaMaara.value > 0) {
      juustoPizzaYhteishinta = juustoPizzaMaara.value * 5;
      juustoLisaTayte()
      document.getElementById("juustoVirhe").innerHTML = "";
      laskeYhteisHinta()
    } else {
      document.getElementById("juustoVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("juustoLisaTayte").innerHTML = "";
      document.getElementById("valitutJuustoPizzat").innerHTML = "";
    }
  } else {
    document.getElementById("juustoVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("juustoLisaTayte").innerHTML = "";
    document.getElementById("valitutJuustoPizzat").innerHTML = "";
  }
}

function cocaColaFunktio() {
  var cocaColaJuomaMaara = 0;
  onkoKokaKolaValittu = document.getElementById("cocaCola");
  cocaColaJuomaMaara = document.getElementById("cocaColaJuomaMaara");

  if (onkoKokaKolaValittu.checked) {
    if (cocaColaJuomaMaara.value > 0) {
      kokaKolaYhteishinta = cocaColaJuomaMaara.value * 3;
      cocaColaLisaJaat()
      document.getElementById("cocaColaVirhe").innerHTML = "";
      laskeYhteisHinta()
    } else {
      document.getElementById("cocaColaVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("cocaCola").innerHTML = "";
      document.getElementById("cocaColaLisaJaat").innerHTML = "";
      document.getElementById("valitutCocaColat").innerHTML = "";
    }
  } else {
    document.getElementById("cocaColaVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("cocaCola").innerHTML = "";
    document.getElementById("cocaColaLisaJaat").innerHTML = "";
    document.getElementById("valitutCocaColat").innerHTML = "";
  }
}

function spriteFunktio() {
  var spriteJuomaMaara = 0;
  onkoSpriteValittu = document.getElementById("sprite");
  spriteJuomaMaara = document.getElementById("spriteJuomaMaara");

  if (onkoSpriteValittu.checked) {
    if (spriteJuomaMaara.value > 0) {
      spriteYhteishinta = spriteJuomaMaara.value * 3;
      spriteLisaJaat()
      document.getElementById("spriteVirhe").innerHTML = "";
      laskeYhteisHinta()
    } else {
      document.getElementById("spriteVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("sprite").innerHTML = "";
      document.getElementById("valitutSpritet").innerHTML = "";
    }
  } else {
    document.getElementById("spriteVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("sprite").innerHTML = "";
    document.getElementById("valitutSpritet").innerHTML = "";
  }
}

function jaffaFunktio() {
  var jaffaJuomaMaara = 0;
  onkoJaffaValittu = document.getElementById("jaffa");
  jaffaJuomaMaara = document.getElementById("jaffaJuomaMaara");

  if (onkoJaffaValittu.checked) {
    if (jaffaJuomaMaara.value > 0) {
      jaffaYhteishinta = jaffaJuomaMaara.value * 3;
      jaffaLisaJaat()
      document.getElementById("jaffaVirhe").innerHTML = "";
      laskeYhteisHinta()
    } else {
      document.getElementById("jaffaVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("jaffa").innerHTML = "";
      document.getElementById("valitutJaffat").innerHTML = "";
    }
  } else {
    document.getElementById("jaffaVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("jaffa").innerHTML = "";
    document.getElementById("valitutJaffat").innerHTML = "";
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

function myFeed(){
  location.href = "index.html";
  alert("Kiitos palautteesta.");
}
