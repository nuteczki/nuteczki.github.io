var zapamietaj;
var identyfikator = "identyfikator";
var ilosc = 0;
var tablicaUtwor = [];
let tablicaIdentyfikator = [];
let x = 0;
let y = 0;
let tablica = [
  {
    nazwa: "C",
    literaDlugosc: ["r", "l", "%", "P"],
    czestotliwosc: 261,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  },
  {
    nazwa: "D",
    literaDlugosc: ["t", ";", "^", "}"],
    czestotliwosc: 293,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  },
  {
    nazwa: "E",
    literaDlugosc: ["y", "'", "&", "|"],
    czestotliwosc: 329,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  },
  {
    nazwa: "F",
    literaDlugosc: ["u", "z", "*", "A"],
    czestotliwosc: 349,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  },
  {
    nazwa: "G",
    literaDlugosc: ["i", "x", "(", "S"],
    czestotliwosc: 391,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  },
  {
    nazwa: "A",
    czestotliwosc: 440,
    literaDlugosc: ["o", "c", ")", "D"],
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  },
  {
    nazwa: "H",
    literaDlugosc: ["p", "v", "_", "F"],
    czestotliwosc: 493,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"],
    dlugoscMS: [2000, 1000, 500, 250]
  }
];

//********************Wybieranie Nutek******************************
document.querySelector("#pole").innerHTML = document.getElementById(
  "pole"
).innerHTML = tablica[x]["literaDlugosc"][y];
document.getElementById("czestotliwosc").innerHTML =
  "Czestotliwosc nuty: " + tablica[x]["czestotliwosc"];
document.getElementById("dlugosc").innerHTML =
  "Długość nuty: " + tablica[x]["dlugosc"][y];

document
  .querySelector("#czestotliwosc-up")
  .addEventListener("click", function() {
    if (x < tablica.length - 1) {
      x++;
      document.getElementById("pole").innerHTML =
        tablica[x]["literaDlugosc"][y];
      document.getElementById("czestotliwosc").innerHTML =
        "Czestotliwosc nuty: " + tablica[x]["czestotliwosc"];
      document.getElementById("dlugosc").innerHTML =
        "Długość nuty: " + tablica[x]["dlugosc"][y];
    }
  });

document
  .querySelector("#czestotliwosc-down")
  .addEventListener("click", function() {
    if (x > 0) {
      x--;
      document.getElementById("pole").innerHTML =
        tablica[x]["literaDlugosc"][y];
      document.getElementById("czestotliwosc").innerHTML =
        "Czestotliwosc nuty: " + tablica[x]["czestotliwosc"];
    }
  });

document.querySelector("#dlugosc-down").addEventListener("click", function() {
  if (y > 0) {
    y--;
    document.getElementById("pole").innerHTML = tablica[x]["literaDlugosc"][y];
    document.getElementById("dlugosc").innerHTML =
      "Długość nuty: " + tablica[x]["dlugosc"][y];
  }
});

document.querySelector("#dlugosc-up").addEventListener("click", function() {
  if (y < tablica[x]["literaDlugosc"].length - 1) {
    y++;
    document.getElementById("pole").innerHTML = tablica[x]["literaDlugosc"][y];
    document.getElementById("dlugosc").innerHTML =
      "Długość nuty: " + tablica[x]["dlugosc"][y];
  }
});
//********************Wybieranie Nutek******************************

//********************Wstawianie nutek do utworu*********************
document.querySelector("#wstaw").addEventListener("click", function() {
  var miejsce = document.getElementById("muzyka");
  var dlugoscMS = tablica[x]["dlugoscMS"][y];
  var dlugosc = tablica[x]["dlugosc"][y];
  var czestotliwosc = tablica[x]["czestotliwosc"];
  tablicaUtwor.push([czestotliwosc, dlugosc, dlugoscMS]);
  nowyDiv = document.createElement("div");
  nowyDiv.id = identyfikator + ilosc;
  nowyDiv.innerHTML = tablica[x]["literaDlugosc"][y];
  miejsce.appendChild(nowyDiv);
  tablicaIdentyfikator.push(nowyDiv.id);
  ilosc++;
});
//********************Wstawianie nutek do utworu*********************

//*********************Podświetlanie nutek podczas gry*****************
/*document.querySelector("#start").addEventListener("click", function() {
  var z = 0;
  var czasMS = tablicaUtwor[0][2];
  document.getElementById(tablicaIdentyfikator[z]).style.color = "red";
  var z = 1;
  for (var i = 1; i < tablicaUtwor.length; i++) {
    setTimeout(function() {
      document.getElementById(tablicaIdentyfikator[z]).style.color = "red";
      document.getElementById(tablicaIdentyfikator[z - 1]).style.color =
        "white";
      z++;
    }, czasMS);
    czasMS = czasMS + tablicaUtwor[i][2];
  }
  setTimeout(function() {
    document.getElementById(tablicaIdentyfikator[i - 1]).style.color = "white";
  }, czasMS);
});
*/
//*********************Podświetlanie nutek podczas gry*****************

// **********************Podświetlanie nutek hover/Kasowanie Nutek*********************
document.querySelector("#wstaw").addEventListener("click", function() {
  for (var i = 0; i < tablicaUtwor.length; i++) {
    podswietlanie(i);
    kasowanie(i);
  }
});

function podswietlanie(i) {
  document
    .getElementById(tablicaIdentyfikator[i])
    .addEventListener("mousemove", function() {
      document.getElementById(tablicaIdentyfikator[i]).style.backgroundColor =
        "blue";
    });
  document
    .getElementById(tablicaIdentyfikator[i])
    .addEventListener("mouseout", function() {
      document.getElementById(tablicaIdentyfikator[i]).style.backgroundColor =
        "black";
    });
}

function kasowanie(i) {
  document
    .getElementById(tablicaIdentyfikator[i])
    .addEventListener("click", function() {
      document.getElementById(tablicaIdentyfikator[i]).remove();
      tablicaUtwor.splice(i, 1);
    });
}
// **********************Podświetlanie nutek hover/Kasowanie Nutek*********************
//====================================================================================//
document
  .querySelector("#start")
  .addEventListener("click", e => Tone.Transport.toggle());

document.querySelector("#start").addEventListener("click", function() {
  var czas = 0;
  var synth = new Tone.Synth().toMaster();
  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[0][0], tablicaUtwor[0][1], time);
  }, czas);
  var czas = Tone.Time(tablicaUtwor[0][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[1][0], tablicaUtwor[1][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[1][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[2][0], tablicaUtwor[2][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[2][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[3][0], tablicaUtwor[3][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[3][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[4][0], tablicaUtwor[4][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[4][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[5][0], tablicaUtwor[5][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[5][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[6][0], tablicaUtwor[6][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[6][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[7][0], tablicaUtwor[7][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[7][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[8][0], tablicaUtwor[8][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[8][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[9][0], tablicaUtwor[9][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[9][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[10][0], tablicaUtwor[10][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[10][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[11][0], tablicaUtwor[11][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[11][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[12][0], tablicaUtwor[12][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[12][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[13][0], tablicaUtwor[13][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[13][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[14][0], tablicaUtwor[14][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[14][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[15][0], tablicaUtwor[15][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[15][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[16][0], tablicaUtwor[16][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[16][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[17][0], tablicaUtwor[17][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[17][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[18][0], tablicaUtwor[18][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[18][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[19][0], tablicaUtwor[19][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[19][1]);

  Tone.Transport.schedule(function(time) {
    synth.triggerAttackRelease(tablicaUtwor[20][0], tablicaUtwor[20][1], time);
  }, czas);
  czas = czas + Tone.Time(tablicaUtwor[20][1]);
});
