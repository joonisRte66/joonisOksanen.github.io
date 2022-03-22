/*
Pizzantilausprosessi.
Ensimmäinen checkbox-input kerää ensin syötteen onko kyseinen pizza valittu. Toinen input kerää tuotteiden määrän. 
Lisäksi on 3 muuta checkbox-inputtia jotka keräävät lisätäytteiden tiedot. Jokaisen input IDn on oltava erilainen sillä rakenne käyttää
'document.getElementById' toimintoa joka hankkii tiedot IDn perusteella. Isot ja pienet kirjaimet myös merkitsevät. Jokainen pizza 
ruudukko sisältää myös napin 'Lisää ostoskoriin' joka laukaisee funktion PizzanNimiFunktio(). Pizzantilausprosessi ei tue saman pizzan 
valitsemista useaan kertaan jossa jokaisessa on eri täytteet.
*/

// Muuttujat johon tallennetaan tiedot tuleeko pizzaan gluteeniton pohja
var kinkkuAnanasGluteenitonPohja;
var juustoGluteenitonPohja;
var operaGluteenitonPohja;
var kebabGluteenitonPohja;
var jauhelihaGluteenitonPohja;

// Muuttujat johon tallennetaan pizzojen yhteishinnat
var kinkkuPizzaYhteishinta;
var juustoPizzaYhteishinta;
var operaPizzaYhteishinta;
var kebabPizzaYhteishinta;
var jauhelihaPizzaYhteishinta;

// Muuttujat johon tallennetaan tiedot onko kyseinen pizza valittu
var onkoJuustoValittu;
var onkoKinkkuValittu;
var onkoOperaValittu;
var onkoKebabValittu;
var onkoJauhelihaValittu;

// Muuttuja johon tallennetaan kaiken yhteishinta
var kaikenYhteisHinta;

let valmistusAika = 0;

// Muuttujat johon tallennetaan tiedot onko lisätäytteet valittu
var juustoLisaKatkarapu;
var juustoLisaSipuli;
var jauhelihaLisaKatkarapu;
var jauhelihaLisaSipuli;
var operaLisaKatkarapu;
var operaLisaSipuli;
var kebabLisaKatkarapu;
var kebabLisaSipuli;
var kinkkuAnanasLisaKatkarapu;
var kinkkuAnanasLisaSipuli;

// Muuttujat johon tallennetaan tieto onko kyseinen juoma valittu
var onkoKokaKolaValittu;
var onkoJaffaValittu;
var onkoSpriteValittu;

// Muuttujat johon tallennetaan tieto tuleeko kyseisiin juomiin jäitä
var tuleekoKokaKolaJaita;
var tuleekoJaffaJaita;
var tuleekoSpriteJaita;

// Muuttujat johon tallennetaan jokaisen juoman yhteishinta
var kokaKolaYhteishinta;
var jaffaYhteishinta;
var spriteYhteishinta;

/*
Jokaisella pizzalla on oma funktio joka käynnistyy 'Lisää ostoskoriin' painamisella. Funktio luo ja alustaa muuttujan johon tallennetaan kyseisten pizzojen määrä.
Funktio myös tallentaa muuttujaan tiedon onko kyseinen pizza valittu. Funktio tarkistaa onko kyseinen pizza valittu, jos ei ole
mutta käyttäjä yrittää silti tilata sen, tulostaa tämä virhe viestin ja tyhjentää muut mahdolliset tekstit. Funktio myös
tarkistaa että pizzoja on valittu enemmän kuin 0, ja jos ei niin tulostaa tämä toisen virheviestin. Jos tarkastukset menevät läpi,
tallennetaan pizzan yhteishinnaksi Määrä * Hinta ja kutsutaan funktioita PizzanNimiLisaTayte(), tyhjennetään virheviesti ja kutsutaan
toista funktiota laskeYhteisHinta() joka päivittää yhteishinnan aina automaattisesti.
*/
function kinkkuFunktio() {
  var kinkkuAnanasMaara = 0; // Muuttuja johon tallennetaan kinkkuananaspizzojen määrä
  onkoKinkkuValittu = document.getElementById("kinkkuananas"); // Tallennetaan tieto onko kinkkuananas valittu muuttujaan onkoKinkkuValittu
  kinkkuAnanasMaara = document.getElementById("kinkkuAnanasMaara"); // Tallennetaan kinkkuananaspizzojen määrä muuttujaan
  if (onkoKinkkuValittu.checked) { //Tarkistetaan onko kinkkuananaspizzaa valittu
    if (kinkkuAnanasMaara.value > 0) { // Tarkistaa onko kinkkuananas pizzoja enemmän kuin 0
      kinkkuPizzaYhteishinta = kinkkuAnanasMaara.value * 8; // Kinkkuananaspizzojen yhteishinta = Määrä * Hinta (8e)
      kinkkuAnanasLisaTayte() // Kutsuu funktiota
      document.getElementById("kinkkuVirhe").innerHTML = ""; // Jos pizzoja on yli 0 ja rasti ruudussa niin virhe teksti poistetaan
      laskeYhteisHinta() // Kutsuu funktiota
      valmista()
    } else { // Jos kinkkuananaspizzoja on valittu alle 0
      document.getElementById("kinkkuVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("kinkkuAnanasLisaTayte").innerHTML = "";
      document.getElementById("valitutKinkkuPizzat").innerHTML = "";
      document.getElementById("kinkku").innerHTML = "";
      document.getElementById("valmistus").innerHTML = "";
      document.getElementById("hinta").innerHTML = "";
    }
  } else { // Jos kinkkuananaspizzaa ei ole valittu
    document.getElementById("kinkkuVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("kinkkuAnanasLisaTayte").innerHTML = "";
    document.getElementById("valitutKinkkuPizzat").innerHTML = "";
    document.getElementById("kinkku").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
  if (kinkkuAnanasMaara.value > 10) {
    document.getElementById("kinkkuVirhe").innerHTML = "VIRHE: Valitse alle 10";
    document.getElementById("kinkkuAnanasLisaTayte").innerHTML = "";
    document.getElementById("valitutKinkkuPizzat").innerHTML = "";
    document.getElementById("kinkku").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
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
      valmista()
    } else {
      document.getElementById("juustoVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("juustoLisaTayte").innerHTML = "";
      document.getElementById("valitutJuustoPizzat").innerHTML = "";
      document.getElementById("juusto").innerHTML = "";
      document.getElementById("valmistus").innerHTML = "";
      document.getElementById("hinta").innerHTML = "";
    }
  } else {
    document.getElementById("juustoVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("juustoLisaTayte").innerHTML = "";
    document.getElementById("valitutJuustoPizzat").innerHTML = "";
    document.getElementById("juusto").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
  if (juustoPizzaMaara.value > 10) {
    document.getElementById("juustoVirhe").innerHTML = "VIRHE: Valitse alle 10";
    document.getElementById("juustoLisaTayte").innerHTML = "";
    document.getElementById("valitutJuustoPizzat").innerHTML = "";
    document.getElementById("juusto").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
}
function operaFunktio() {
  var operaPizzaMaara = 0;
  onkoOperaValittu = document.getElementById("operaPizza");
  operaPizzaMaara = document.getElementById("operaPizzaMaara");
  if (onkoOperaValittu.checked) {
    if (operaPizzaMaara.value > 0) {
      operaPizzaYhteishinta = operaPizzaMaara.value * 13;
      operaLisaTayte()
      document.getElementById("operaVirhe").innerHTML = "";
      laskeYhteisHinta()
      valmista()
    } else {
      document.getElementById("operaVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("operaLisaTayte").innerHTML = "";
      document.getElementById("valitutOperaPizzat").innerHTML = "";
      document.getElementById("opera").innerHTML = "";
      document.getElementById("valmistus").innerHTML = "";
      document.getElementById("hinta").innerHTML = "";
    }
  } else {
    document.getElementById("operaVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("operaLisaTayte").innerHTML = "";
    document.getElementById("valitutOperaPizzat").innerHTML = "";
    document.getElementById("opera").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
  if (operaPizzaMaara.value > 10) {
    document.getElementById("operaVirhe").innerHTML = "VIRHE: Valitse alle 10";
    document.getElementById("operaLisaTayte").innerHTML = "";
    document.getElementById("valitutOperaPizzat").innerHTML = "";
    document.getElementById("opera").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
}
function kebabFunktio() {
  var kebabPizzaMaara = 0;
  onkoKebabValittu = document.getElementById("kebabPizza");
  kebabPizzaMaara = document.getElementById("kebabPizzaMaara");
  if (onkoKebabValittu.checked) {
    if (kebabPizzaMaara.value > 0) {
      kebabPizzaYhteishinta = kebabPizzaMaara.value * 7;
      kebabLisaTayte()
      document.getElementById("kebabVirhe").innerHTML = "";
      laskeYhteisHinta()
      valmista()
    } else {
      document.getElementById("kebabVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("kebabLisaTayte").innerHTML = "";
      document.getElementById("valitutKebabPizzat").innerHTML = "";
      document.getElementById("kebab").innerHTML = "";
      document.getElementById("valmistus").innerHTML = "";
      document.getElementById("hinta").innerHTML = "";
    }
  } else {
    document.getElementById("kebabVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("kebabLisaTayte").innerHTML = "";
    document.getElementById("valitutKebabPizzat").innerHTML = "";
    document.getElementById("kebab").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
  if (kebabPizzaMaara.value > 10) {
    document.getElementById("kebabVirhe").innerHTML = "VIRHE: Valitse alle 10";
    document.getElementById("kebabLisaTayte").innerHTML = "";
    document.getElementById("valitutKebabPizzat").innerHTML = "";
    document.getElementById("kebab").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
}
function jauhelihaFunktio() {
  var jauhelihaPizzaMaara = 0;
  onkoJauhelihaValittu = document.getElementById("jauhelihaPizza");
  jauhelihaPizzaMaara = document.getElementById("jauhelihaPizzaMaara");
  if (onkoJauhelihaValittu.checked) {
    if (jauhelihaPizzaMaara.value > 0) {
      jauhelihaPizzaYhteishinta = jauhelihaPizzaMaara.value * 7;
      jauhelihaLisaTayte()
      document.getElementById("jauhelihaVirhe").innerHTML = "";
      laskeYhteisHinta()
      valmista()
    } else {
      document.getElementById("jauhelihaVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("jauhelihaLisaTayte").innerHTML = "";
      document.getElementById("valitutJauhelihaPizzat").innerHTML = "";
      document.getElementById("jauheliha").innerHTML = "";
      document.getElementById("valmistus").innerHTML = "";
      document.getElementById("hinta").innerHTML = "";
    }
  } else {
    document.getElementById("jauhelihaVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("jauhelihaLisaTayte").innerHTML = "";
    document.getElementById("valitutJauhelihaPizzat").innerHTML = "";
    document.getElementById("jauheliha").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
  if (jauhelihaPizzaMaara.value > 10) {
    document.getElementById("jauhelihaVirhe").innerHTML = "VIRHE: Valitse alle 10";
    document.getElementById("jauhelihaLisaTayte").innerHTML = "";
    document.getElementById("valitutJauhelihaPizzat").innerHTML = "";
    document.getElementById("jauheliha").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
}
function pepperoniFunktio() {
  var pepperoniPizzaMaara = 0;
  onkoPepperoniValittu = document.getElementById("pepperoniPizza");
  pepperoniPizzaMaara = document.getElementById("pepperoniPizzaMaara");
  if (onkoPepperoniValittu.checked) {
    if (pepperoniPizzaMaara.value > 0) {
      pepperoniPizzaYhteishinta = pepperoniPizzaMaara.value * 7;
      pepperoniLisaTayte()
      document.getElementById("pepperoniVirhe").innerHTML = "";
      laskeYhteisHinta()
      valmista()
    } else {
      document.getElementById("pepperoniVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("pepperoniLisaTayte").innerHTML = "";
      document.getElementById("valitutPepperoniPizzat").innerHTML = "";
      document.getElementById("pepperoni").innerHTML = "";
      document.getElementById("valmistus").innerHTML = "";
      document.getElementById("hinta").innerHTML = "";
    }
  } else {
    document.getElementById("pepperoniVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("pepperoniLisaTayte").innerHTML = "";
    document.getElementById("valitutPepperoniPizzat").innerHTML = "";
    document.getElementById("pepperoni").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
  if (pepperoniPizzaMaara.value > 10) {
    document.getElementById("pepperoniVirhe").innerHTML = "VIRHE: Valitse alle 10";
    document.getElementById("pepperoniLisaTayte").innerHTML = "";
    document.getElementById("valitutPepperoniPizzat").innerHTML = "";
    document.getElementById("pepperoni").innerHTML = "";
    document.getElementById("valmistus").innerHTML = "";
    document.getElementById("hinta").innerHTML = "";
  }
}

/*
Jokaisella juomalla on myös oma funktio. Funktio luo muuttujan johon se tallentaa kyseisen juoman määrän. Se myös kerää tiedot onko kyseinen juoma ylipäätään valittu.
Funktio tarkistaa onko juoma valittu ja että niiden määrä on yli 0. Jos ei niin luo tämä virhe viestin. Jos tarkastukset menevät läpi, tulee juoman yhteishinnaksi
Määrä * Hinta. Se myös kutsuu funktiota juomaLisaJaat() ja laskeYhteisHinta().
*/
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

/*
pizzanNimiLisaTayte() funktio kerää tiedot onko lisätäytteitä valittu. Funktio käynnistyy pizzanNimifunktion lopussa. Se myös kerää tiedon
onko gluteeniton pohja valittu ja tulostaa tekstin "Lisätty!".
*/
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
function operaLisaTayte() {
  operaLisaKatkarapu = document.getElementById("operaLisaKatkarapu");
  operaLisaSipuli = document.getElementById("operaLisaSipuli");
  operaGluteenitonPohja = document.getElementById("operaGluteenitonPohja");
  document.getElementById("operaLisaTayte").innerHTML = "Lisätty!";
}
function kebabLisaTayte() {
  kebabLisaKatkarapu = document.getElementById("kebabLisaKatkarapu");
  kebabLisaSipuli = document.getElementById("kebabLisaSipuli");
  kebabGluteenitonPohja = document.getElementById("kebabGluteenitonPohja");
  document.getElementById("kebabLisaTayte").innerHTML = "Lisätty!";
}
function jauhelihaLisaTayte() {
  jauhelihaLisaKatkarapu = document.getElementById("jauhelihaLisaKatkarapu");
  jauhelihaLisaSipuli = document.getElementById("jauhelihaLisaSipuli");
  jauhelihaGluteenitonPohja = document.getElementById("jauhelihaGluteenitonPohja");
  document.getElementById("jauhelihaLisaTayte").innerHTML = "Lisätty!";
}
function pepperoniLisaTayte() {
  pepperoniLisaKatkarapu = document.getElementById("pepperoniLisaKatkarapu");
  pepperoniLisaSipuli = document.getElementById("pepperoniLisaSipuli");
  pepperoniGluteenitonPohja = document.getElementById("pepperoniGluteenitonPohja");
  document.getElementById("pepperoniLisaTayte").innerHTML = "Lisätty!";
}

// juomanNimiLisaJaat() funktio kerää tiedot tuleeko juomaan lisäjäitä. Funktio käynnistyy juomanNimifunktion lopussa.
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


/*
Funktio laskeYhteisHinta() käynnistyy joka kerta kun tuote lisätään ostoskoriin. Se lisää yhteishintaan pizzojen määrän * hinnan. Voisi tulevaisuudessa olla vain
+ tuotteenyhteishinnat. Funktio myös tarkistaa onko lisätäytteitä / gluteeniton pohja valittu ja lisää näiden summat yhteishintaan. Tämän jälkeen funktio
tulostaa yhteishinnan ja valitut tuotteet. Funktiota voisi muuntaa selkeämmäksi mutta se ei ole prioriteetti juuri nyt.
*/
function laskeYhteisHinta() {
  kaikenYhteisHinta = kinkkuAnanasMaara.value * 8 + juustoPizzaMaara.value * 5 + operaPizzaMaara.value * 13 + kebabPizzaMaara.value * 7 + jauhelihaPizzaMaara.value * 6 + cocaColaJuomaMaara.value * 3 + spriteJuomaMaara.value * 3 + jaffaJuomaMaara.value * 3 + pepperoniPizzaMaara.value * 8;

  valmistusAika = kinkkuAnanasMaara.value * 10 + juustoPizzaMaara.value * 10 + operaPizzaMaara.value * 10 + kebabPizzaMaara.value * 10 + jauhelihaPizzaMaara.value * 10 + pepperoniPizzaMaara.value * 10;
  if (kinkkuAnanasMaara.value > 0) { // Jos kinkkuananas pizzoja on enemmän kuin 0 niin jatketaan:
    if (lisaKatkarapu.checked) { // Jos kinkkuananaspizzaan tulee katkarapua niin jatketaan:
     kaikenYhteisHinta = kaikenYhteisHinta + kinkkuAnanasMaara.value * 1; // Lisätään lisätäytteen hinta
     valmistusAika = valmistusAika + 1 * kinkkuAnanasMaara.value;
     valmista()
    }
    if (lisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + kinkkuAnanasMaara.value * 1;
      valmistusAika = valmistusAika + 1 * kinkkuAnanasMaara.value;
      valmista()
    }
    if (kinkkuAnanasGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + kinkkuAnanasMaara.value * 2;
      valmistusAika = valmistusAika + 3 * kinkkuAnanasMaara.value;
      valmista()
    }
  }
  if (juustoPizzaMaara.value > 0) {
    if (juustoLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + juustoPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * juustoPizzaMaara.value;
      valmista()
    }
    if (juustoLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + juustoPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * juustoPizzaMaara.value;
      valmista()
    }
    if (juustoGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + juustoPizzaMaara.value * 2;
      valmistusAika = valmistusAika + 3 * juustoPizzaMaara.value;
      valmista()
    }
}
  if (operaPizzaMaara.value > 0) {
    if (operaLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + operaPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * operaPizzaMaara.value;
      valmista()
    }
    if (operaLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + operaPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * operaPizzaMaara.value;
      valmista()
    }
    if (operaGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + operaPizzaMaara.value * 2;
      valmistusAika = valmistusAika + 3 * operaPizzaMaara.value;
      valmista()
    }
  }
  if (kebabPizzaMaara.value > 0) {
    if (kebabLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + kebabPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * kebabPizzaMaara.value;
      valmista()
    }
    if (kebabLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + kebabPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * kebabPizzaMaara.value;
      valmista()
    }
    if (kebabGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + kebabPizzaMaara.value * 2;
      valmistusAika = valmistusAika + 3 * kebabPizzaMaara.value;
      valmista()
    }
  }
  if (jauhelihaPizzaMaara.value > 0) {
    if (jauhelihaLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + jauhelihaPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * jauhelihaPizzaMaara.value;
      valmista()
    }
    if (jauhelihaLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + jauhelihaPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * jauhelihaPizzaMaara.value;
      valmista()
    }
    if (jauhelihaGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + jauhelihaPizzaMaara.value * 2;
      valmistusAika = valmistusAika + 3 * jauhelihaPizzaMaara.value;
      valmista()
    }
  }
  if (pepperoniPizzaMaara.value > 0) {
    if (pepperoniLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + pepperoniPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * pepperoniPizzaMaara.value;
      valmista()
    }
    if (pepperoniLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + pepperoniPizzaMaara.value * 1;
      valmistusAika = valmistusAika + 1 * pepperoniPizzaMaara.value;
      valmista()
    }
    if (pepperoniGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + pepperoniPizzaMaara.value * 2;
      valmistusAika = valmistusAika + 3 * pepperoniPizzaMaara.value;
      valmista()
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
  if (operaPizzaMaara.value > 0) {
    if (operaLisaKatkarapu.checked || operaLisaSipuli.checked) {
      document.getElementById("valitutOperaPizzat").innerHTML = operaPizzaMaara.value + " operapizzaa valituilla lisätäytteillä";
    } else if (operaGluteenitonPohja.checked) {
      document.getElementById("valitutOperaPizzat").innerHTML = operaPizzaMaara.value + " operapizzaa gluteenittomalla pohjalla";
    } else {
      document.getElementById("valitutOperaPizzat").innerHTML = operaPizzaMaara.value + " operapizzaa"
    }
  }
  if (kebabPizzaMaara.value > 0) {
    if (kebabLisaKatkarapu.checked || kebabLisaSipuli.checked) {
      document.getElementById("valitutKebabPizzat").innerHTML = kebabPizzaMaara.value + " kebabpizzaa valituilla lisätäytteillä";
    } else if (kebabGluteenitonPohja.checked) {
      document.getElementById("valitutKebabPizzat").innerHTML = kebabPizzaMaara.value + " kebabpizzaa gluteenittomalla pohjalla";
    } else {
      document.getElementById("valitutKebabPizzat").innerHTML = kebabPizzaMaara.value + " kebabpizzaa"
    }
  }
  if (jauhelihaPizzaMaara.value > 0) {
    if (jauhelihaLisaKatkarapu.checked || jauhelihaLisaSipuli.checked) {
      document.getElementById("valitutJauhelihaPizzat").innerHTML = jauhelihaPizzaMaara.value + " jauhelihapizzaa valituilla lisätäytteillä";
    } else if (jauhelihaGluteenitonPohja.checked) {
      document.getElementById("valitutJauhelihaPizzat").innerHTML = jauhelihaPizzaMaara.value + " jauhelihapizzaa gluteenittomalla pohjalla";
    } else {
      document.getElementById("valitutJauhelihaPizzat").innerHTML = jauhelihaPizzaMaara.value + " jauhelihapizzaa"
    }
  }
  if (pepperoniPizzaMaara.value > 0) {
    if (pepperoniLisaKatkarapu.checked || pepperoniLisaSipuli.checked) {
      document.getElementById("valitutPepperoniPizzat").innerHTML = pepperoniPizzaMaara.value + " pepperonipizzaa valituilla lisätäytteillä";
    } else if (pepperoniGluteenitonPohja.checked) {
      document.getElementById("valitutPepperoniPizzat").innerHTML = pepperoniPizzaMaara.value + " pepperonipizzaa gluteenittomalla pohjalla";
    } else {
      document.getElementById("valitutPepperoniPizzat").innerHTML = pepperoniPizzaMaara.value + " pepperonipizzaa"
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
function valmista() {
  document.getElementById("valmistus").innerHTML = "Valmistusaika on noin " + valmistusAika + " min";
}

function kuljeta() {
  var kuljetusOsoite = document.getElementById("kuljetusOsoite");
  var kuljetusAika;
  document.getElementById("kuljetusAika").innerHTML = "Kuljetus osoitteeseen " + kuljetusOsoite.value;
}

// PIZZANTILAUSPROSESSI LOPPUU TÄHÄN!

function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Syötä oikea nimi!";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Syötä oikea puhelin numero!";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Syötä oikea sähköpostiosoite!";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Syötä vähintään 10 merkkiä!";
    error_message.innerHTML = text;
    return false;
  }
  alert("Lähetetty onnistuneesti!");
  return true;
}

function store(){

  var name = document.getElementById('name');
  var pw = document.getElementById('pw');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if(name.value.length == 0){
      alert('Täytä sähköpostisi!');

  }else if(pw.value.length == 0){
      alert('Täytä salasana!');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Täytä sähköpostisi ja salasanasi!');

  }else if(pw.value.length < 6){
      alert('Pitää olla vähintään 6 merkkiä!');

  }else if(!pw.value.match(numbers)){
      alert('Lisää yksi numero!');

  }else if(!pw.value.match(upperCaseLetters)){
      alert('Lisää 1 iso kirjain!');

  }else if(!pw.value.match(lowerCaseLetters)){
      alert('Lisää yksi pieni kirjain!');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
      alert('Olet rekisteröitynyt!');
  }
}

//checking
function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');

  if(userName.value == storedName && userPw.value == storedPw){
      localStorage.setItem("userName", document.getElementById("userName").value);
      localStorage.setItem("kirjautunut", "kylla");
      alert('Olet kirjautunut sisään tunnuksillasi. Pääset kirjautumaan ulos Kirjaudu välilehdeltä painamalla "Kirjaudu ulos" painiketta.');  
  }else{
      alert('Virhe kirjautumisessa.');
  }
}

document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += "Olet kirjautunut sähköpostilla: " + localStorage.getItem("userName") + " pizzerian nettisivuille!";
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("ulosKirjautumis_lomake");
    }
    else
        document.getElementById("ulosKirjautumis_lomake").style.display = "none";
}
function kirjauduUlos(){
    localStorage.setItem("kirjautunut", "null")
}


function myOrderF(){
  if(localStorage.getItem("kirjautunut") === "kylla"){
    location.href = "orderF.html";
  }
  else{
    alert('Sinun pitää kirjautua, jotta voit tilata!!!');
    location.href ="login.html";
  }
}

function myOrder(){
  if(localStorage.getItem("kirjautunut") === "kylla"){
    location.href = "order.html";
  }
  else{
    alert('Sinun pitää kirjautua, jotta voit tilata!!!');
    location.href ="login.html";
  }
}

function myOrderJ(){
  if(localStorage.getItem("kirjautunut") === "kylla"){
    location.href = "orderJ.html";
  }
  else{
    alert('Sinun pitää kirjautua, jotta voit tilata!!!');
    location.href ="login.html";
  }
}