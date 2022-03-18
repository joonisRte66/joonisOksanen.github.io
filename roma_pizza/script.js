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
    } else {
      document.getElementById("operaVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("operaLisaTayte").innerHTML = "";
      document.getElementById("valitutOperaPizzat").innerHTML = "";
    }
  } else {
    document.getElementById("operaVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("operaLisaTayte").innerHTML = "";
    document.getElementById("valitutOperaPizzat").innerHTML = "";
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
    } else {
      document.getElementById("kebabVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("kebabLisaTayte").innerHTML = "";
      document.getElementById("valitutKebabPizzat").innerHTML = "";
    }
  } else {
    document.getElementById("kebabVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("kebabLisaTayte").innerHTML = "";
    document.getElementById("valitutKebabPizzat").innerHTML = "";
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
    } else {
      document.getElementById("jauhelihaVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("jauhelihaLisaTayte").innerHTML = "";
      document.getElementById("valitutJauhelihaPizzat").innerHTML = "";
    }
  } else {
    document.getElementById("jauhelihaVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("jauhelihaLisaTayte").innerHTML = "";
    document.getElementById("valitutJauhelihaPizzat").innerHTML = "";
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
    } else {
      document.getElementById("pepperoniVirhe").innerHTML = "VIRHE: Valitse vähintään yksi";
      document.getElementById("pepperoniLisaTayte").innerHTML = "";
      document.getElementById("valitutPepperoniPizzat").innerHTML = "";
    }
  } else {
    document.getElementById("pepperoniVirhe").innerHTML = "VIRHE: Laita rasti ruutuun ensin";
    document.getElementById("pepperoniLisaTayte").innerHTML = "";
    document.getElementById("valitutPepperoniPizzat").innerHTML = "";
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
  if (operaPizzaMaara.value > 0) {
    if (operaLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * operaPizzaMaara.value;
    }
    if (operaLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * operaPizzaMaara.value;
    }
    if (operaGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 2 * operaPizzaMaara.value;
    }
  }
  if (kebabPizzaMaara.value > 0) {
    if (kebabLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * kebabPizzaMaara.value;
    }
    if (kebabLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * kebabPizzaMaara.value;
    }
    if (kebabGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 2 * kebabPizzaMaara.value;
    }
  }
  if (jauhelihaPizzaMaara.value > 0) {
    if (jauhelihaLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * jauhelihaPizzaMaara.value;
    }
    if (jauhelihaLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * jauhelihaPizzaMaara.value;
    }
    if (jauhelihaGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 2 * jauhelihaPizzaMaara.value;
    }
  }
  if (pepperoniPizzaMaara.value > 0) {
    if (pepperoniLisaKatkarapu.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * pepperoniPizzaMaara.value;
    }
    if (pepperoniLisaSipuli.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 1 * pepperoniPizzaMaara.value;
    }
    if (pepperoniGluteenitonPohja.checked) {
      kaikenYhteisHinta = kaikenYhteisHinta + 2 * pepperoniPizzaMaara.value;
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
// 2 funktiota jotka toteutuu kun käyttäjä valitsee joko 'nouto' tai 'kuljetus'
function kotiinKuljetus() { // Jos käyttäjä valitsee kuljetuksen
  document.getElementById("kuljetus").innerHTML = "Kotiinkuljetus. Kuljetusaika on noin " + kaikenYhteisHinta * 0.7 + " min. Mihin toimitamme tämän?"; // kaikenYhteisHinta * 0.5 on toimitusaika
  document.getElementById("huvaksu").style.display = "block"; // Kysyy osoitetta jos kotiin kuljetus valitaan
}
function tilausNouto() { // Jos käyttäjä valitsee noudon
  document.getElementById("kuljetus").innerHTML = kaikenYhteisHinta * 0.5 + " min valmistumiseen";
  document.getElementById("huvaksu").style.display = "none"; // Piiloittaa osoitekentän jos noutotilaus valitaan
}
// PIZZANTILAUSPROSESSI LOPPUU TÄHÄN!


function myOrderF(){
  location.href = "orderF.html";
}

function myOrder(){
  location.href = "order.html";
}

function myOrderJ(){
  location.href = "orderJ.html";
}

function myFeed(){
  location.href = "index.html";
  alert("Kiitos palautteesta.");
}

function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
