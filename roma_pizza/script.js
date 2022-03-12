var kinkkuPizzaYhteishinta; // Luodaan muuttuja johon tallennetaan kinkku pizzojen yhteishinta
var onkoKinkkuValittu; // Muuttuja johon tallennetaan tieto onko checkboxissa rasti
var kaikenYhteisHinta; // Muuttuja johon tallennetaan kaikkien valittujen pizzojen hinta
// Funktio jolla lasketaan kinkkuananaspizzan määrä ja hinta
function kinkkuFunktio() {
  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Hankkii tiedon onko checkboxissa rasti
  if (onkoKinkkuValittu.checked) { // JOS checkboxissa on rasti niin seuraavat asiat suoritetaan   
    kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Laskee pizzojen määrän * hinta ja tallentaa ne muuttujaan
    document.getElementById("kinkku").innerHTML = kinkkuAnanasMaara.value + " kinkkuananaspizzaa lisätty joiden hinta on " + kinkkuPizzaYhteishinta + " €"; // Tulostaa pizzat ja niiden yhteishinnan
  } else if(!onkoKinkkuValittu.checked) { //Jos checkboxissa ei ole rasta
    document.getElementById("kinkku").innerHTML = "Laita raksi ruutuun jos näitä haluat :)"; // Tulostaa jos kinkkupizzaa ei valittu mutta silti painaa napppia
  } else { // Jos jotain muuta käy
    document.getElementById("kinkku").innerHTML = "Virhe";
  }
}
// Funktio jolla lasketaan juustopizzojen määrät jne
function juustoFunktio() {
  onkoJuustoValittu = document.getElementById("juustoPizza");
  if (onkoJuustoValittu.checked) {
    juustoPizzaYhteishinta = juustoPizzaMaara.value * 5;
    document.getElementById("juusto").innerHTML = juustoPizzaMaara.value + " juustopizzaa lisätty joiden hinta on " + juustoPizzaYhteishinta + " €";
  } else if(!onkoJuustoValittu.checked) {
    document.getElementById("juusto").innerHTML = "Laita raksi ruutuun jos näitä haluat :)";
  } else {
    document.getElementById("juusto").innerHTML = "Virhe...";
  }
}
// Funktio jolla lasketaan valittujen pizzojen yhteishinta
function laskeYhteisHinta() {
  kaikenYhteisHinta = kinkkuAnanasMaara.value * 8 + juustoPizzaMaara.value * 5;
  document.getElementById("hinta").innerHTML = "Yhteishinta: " + kaikenYhteisHinta + " €";
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