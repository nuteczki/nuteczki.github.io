var ilosc = 0;
var tablicaWstaw = [];
let x = 0;
let y = 0;
let tablica = [
  {
    nazwa: "C",
    literaDlugosc: ["r", "l", "%", "P"],
    czestotliwosc: 261,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  },
  {
    nazwa: "D",
    literaDlugosc: ["t", ";", "^", "}"],
    czestotliwosc: 293,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  },
  {
    nazwa: "E",
    literaDlugosc: ["y", "'", "&", "|"],
    czestotliwosc: 329,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  },
  {
    nazwa: "F",
    literaDlugosc: ["u", "z", "*", "A"],
    czestotliwosc: 349,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  },
  {
    nazwa: "G",
    literaDlugosc: ["i", "x", "(", "S"],
    czestotliwosc: 391,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  },
  {
    nazwa: "A",
    czestotliwosc: 440,
    literaDlugosc: ["o", "c", ")", "D"],
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  },
  {
    nazwa: "H",
    literaDlugosc: ["p", "v", "_", "F"],
    czestotliwosc: 493,
    dlugosc: [1 + "n", 2 + "n", 4 + "n", 8 + "n"]
  }
];

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
        "Długość nuty: " + tablica[x]["dlugosc"][y] + "n";
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

document.querySelector("#wstaw").addEventListener("click", function() {
  var miejsce = document.getElementById("muzyka");
  var dlugosc = tablica[x]["dlugosc"][y];
  var czestotliwosc = tablica[x]["czestotliwosc"];
  tablicaWstaw.push([czestotliwosc, dlugosc]);
  nowyDiv = document.createElement("div");
  nowyDiv.innerHTML = tablica[x]["literaDlugosc"][y];
  miejsce.appendChild(nowyDiv);
  ilosc++;
});

document.querySelector("#start").addEventListener("click", function() {
  var czas = 0;
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease(tablicaWstaw[0][0], tablicaWstaw[0][1], czas);
  console.log("dlugosc" + tablicaWstaw[0][1] + "czas" + czas);
  var czas = Tone.Time(tablicaWstaw[0][1]);
  for (var i = 1; i < tablicaWstaw.length; i++) {
    console.log("dlugosc" + tablicaWstaw[i][1] + "czas" + czas);
    synth.triggerAttackRelease(tablicaWstaw[i][0], tablicaWstaw[i][1], czas);
    czas = czas + Tone.Time(tablicaWstaw[i][1]);
  }
});
