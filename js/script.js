var started = false;
var sticker = false;
var Stick = false;
var coins = 0;
var pass = 0;
//0 = Não tem o pass
//1 = Tem mas não usou
//2 = Tem E já usou

var sword1 = false; //Pommel
var sword2 = false; //Hilt
var sword3 = false; //Blade
var islandSword = false;

var broadsword = false;
var tunic = false;
var goggles = false;

let del = 20;
let smallDel = 500; //Delays usados para dar uma pausa entre frases
let bigDel = 1000;
let hugeDel = 1500;
let language = 'brazilian' // Para a nova implementação de linguagem

var BearScared = false;
var castleEntered = false;
var palaceEntered = false;
var shopEntered = false;
var islandEntered = false;
var kingQuest = false;
var angelVisited = false;
var goblinGotMoney = false;
var goblinVisited = false;

//BOTÕES PARA A TELA DE INÍCIO

var startScreen = document.getElementById("start");
var gameScreen = document.getElementById("gamescreen");
var creditsScreen = document.getElementById("credits");
var howToPlayScreen = document.getElementById("howtoplay");
var patchNotesScreen = document.getElementById("patchNotes");

//Para abrir o jogo

function updateStart(div) {
  var selectedLanguage = window[language]
  switch (div) {
    case "start":
      if (!started) {
        startScreen.style.display = "none";
        gameScreen.style.display = "grid";
        started = true;

        var twStart = new Typewriter(chatDiv, {
          delay: del,
        });

        twStart
          .pauseFor(smallDel)
          .typeString(selectedLanguage.startLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.startLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.startLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.startLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.startLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.startLines[5])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.startLines[6])
          .typeString(selectedLanguage.startLines[7])
          .start();
      } else {
        startScreen.style.display = "none";
        gameScreen.style.display = "none";
        creditsScreen.style.display = "none";
        gameScreen.style.display = "grid";
        patchNotesScreen.style.display = "none";
      }
      break;
    case "howtoplay":
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      creditsScreen.style.display = "none";
      howToPlayScreen.style.display = "block";
      patchNotesScreen.style.display = "none";
      break;
    case "credits":
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      howToPlayScreen.style.display = "none";
      creditsScreen.style.display = "block";
      patchNotesScreen.style.display = "none";
      break;
    case 'patchNotes':
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      howToPlayScreen.style.display = "none";
      creditsScreen.style.display = "none";
      patchNotesScreen.style.display = "block";
  }
}

var othersDiv = document.getElementById("others");
var mapDiv = document.getElementById("map");
var settingsDiv = document.getElementById("settings");

//Cicla as divs que ficam dentro da div pai "others", chamada no HTML
function UpdateInfoDiv(div) {
  othersDiv.style.display = "none";
  settingsDiv.style.display = "none";
  mapDiv.style.display = "none";

  if (div == "map") mapDiv.style.display = "block";
  else if (div == "settings") settingsDiv.style.display = "flex";
  else othersDiv.style.display = "flex";
}

function toMainMenu() {
  gameScreen.style.display = "none";
  creditsScreen.style.display = "none";
  howToPlayScreen.style.display = "none";
  startScreen.style.display = "flex";
}

//Mudar velocidade do texto

let speeds = [
  ["25", "Slow"],
  ["20", "Medium"],
  ["10", "Fast"],
  ["0", "FASTER!"],
];

let currentSpeed = 1;

function setTextSpeed(step) {
  currentSpeed += step;

  if (currentSpeed == 4) currentSpeed = 0;
  if (currentSpeed == -1) currentSpeed = 3;

  del = speeds[currentSpeed][0];
  document.getElementById("speedName").innerHTML = speeds[currentSpeed][1];
}

//Mudar paleta de cor

let palettes = [
  ["#ffffff", "#000000", "Default"],
  ["#cfab4a", "#292b30", "Fall Forest"],
  ["#13e600", "#172115", "Vivid Grove"],
  ["#fcd1d7", "#42202d", "Sakuras Festival"],
  ["#adc3e8", "#0d132a", "Coast Mangrove"],
  ["#000000", "#ffffff", "Inverted"],
];

let currentPalette = 0;

function setPalette(step) {

  if(step == "default") currentPalette = 0; //Veja disableKeyFeatures();
  else currentPalette += step;
  
  if (currentPalette == 6) currentPalette = 0;
  if (currentPalette == -1) currentPalette = 5;

  document
    .querySelector(":root")
    .style.setProperty("--main", palettes[currentPalette][0]);
  document
    .querySelector(":root")
    .style.setProperty("--bg", palettes[currentPalette][1]);
  document.getElementById("paletteName").innerHTML =
    palettes[currentPalette][2];
}

//Mudar delay entre frases

let betweenDelays = [
  [500, 1000, 1500, "Normal"],
  [250, 500, 750, "Halved"],
  [0, 0, 0, "None"],
];

let currentDelay = 0;

function setDelayTime(step){

  currentDelay += step;

  if (currentDelay == 3) currentDelay = 0;
  if (currentDelay == -1) currentDelay = 2;

  smallDel = betweenDelays[currentDelay][0];
  bigDel = betweenDelays[currentDelay][1];
  HugeDel = betweenDelays[currentDelay][2];

  document.getElementById("delayName").innerHTML = betweenDelays[currentDelay][3];
}

//Fazendo com que a localização atual fique amarela no mapa

var place = "forest";
var currentLocation = document.querySelectorAll("." + place);
var allPlaces = mapDiv.querySelectorAll("a");

let tooltip = document.createElement("span");
tooltip.id = "tooltip";
mapDiv.appendChild(tooltip);

for (let i = 0; i <= allPlaces.length - 1; i++) {
  allPlaces[i].addEventListener("click", () => {
    if (allPlaces[i].className != "goback") {
      place = allPlaces[i].className;
      currentLocation = document.querySelectorAll("." + place);

      if (!allPlaces[i].classList[1]) {
        //Se NÃO houver a classe disabled
        updateScreen(allPlaces[i].className, allPlaces[i].className);
        UpdateColors();
      }
    }
  });

  allPlaces[i].addEventListener("mousemove", (e) => {
    tooltip.style.display = "inline";

    if (allPlaces[i].classList[1]) {
      tooltip.innerHTML = "???";
    } else {
      tooltip.innerHTML =
        allPlaces[i].className.charAt(0).toUpperCase() + //Para capitalizar o primeiro caractere;
        allPlaces[i].className
          .slice(1) //Para mostrar o resto da frase;
          .replace("_", " "); //Para retirar os _ e colocar espaços (deixar bonito;)
    }

    tooltip.style.top = e.clientY - 20 + "px";
    tooltip.style.left = e.clientX + 10 + "px";
  });

  allPlaces[i].onmouseout = () => (tooltip.style.display = "none");
}

//Função para trocar a cor da localização atual

function UpdateColors() {
  for (let i = 0; i <= allPlaces.length - 1; i++) {
    if (allPlaces[i].className == place) allPlaces[i].style.color = "#cfcf00";
    else allPlaces[i].style.color = "var(--main)";
  }
}

function dyingAnimation() {
  document.getElementById("gamescreen").style.display = "none";
  document.getElementById("deathmessage").style.display = "flex";
}

document.addEventListener("keydown", (e) => {
  if (e.key == "D") dyingAnimation();
});

function updateInventory() {
  document.getElementById("Coins").innerHTML = "Coins: " + coins;
  document.getElementById("Coins").innerHTML = "Coins: " + coins;

  if (broadsword == true) {
    document.getElementById("sword").style.display = "none";
    document.getElementById("swordunlocked").style.display = "block";
  }
  if (tunic == true) {
    document.getElementById("tunic").style.display = "none";
    document.getElementById("tunicunlocked").style.display = "block";
  }
  if (goggles == true) {
    document.getElementById("goggles").style.display = "none";
    document.getElementById("gogglesunlocked").style.display = "block";
  }

  switch (pass) {
    case 0:
      document.getElementById("Pass").innerHTML = "Pass: No";
      break;
    case 1:
      document.getElementById("Pass").innerHTML = "Pass: Yes";
      break;
    case 2:
      document.getElementById("Pass").innerHTML = "Pass: Used";
      break;
  }

  let sword1Sprite = document.getElementsByClassName("sword1Sprite");
  let sword2Sprite = document.getElementsByClassName("sword2Sprite");
  let sword3Sprite = document.getElementsByClassName("sword3Sprite");

  if (sword1 == true) {
    for (let i = 0; i < sword1Sprite.length; i++) {
      sword1Sprite[i].style.color = "white";
    }
  }
  if (sword2 == true) {
    for (let i = 0; i < sword2Sprite.length; i++) {
      sword2Sprite[i].style.color = "white";
    }
  }
  if (sword3 == true) {
    for (let i = 0; i < sword3Sprite.length; i++) {
      sword3Sprite[i].style.color = "white";
    }
  }
}

function FuseSword() {
  let swordFused = document.getElementsByClassName("swordFused");
  let swordUnfused = document.getElementsByClassName("swordUnfused");
  for (let i = 0; i < swordFused.length; i++) {
    swordFused[i].innerHTML = "  ";
  }
  for (let i = 0; i < swordUnfused.length; i++) {
    swordUnfused[i].innerHTML = "";
  }

  document.getElementById("sword-title").innerHTML = "The Island Sword";
  document.getElementById("sword-desc").innerHTML =
    "Powerful enough to kill anything in this place";

  islandSword = true;
}

document.addEventListener("keydown", (e) => {
  if (e.key == "h" || e.key == "H") FuseSword();
});

//Início do chat, para colocar os textos na div "chat"

var chatDiv = document.getElementById("text");

function disableKeyFeatures() {
  //Usado na hora da luta contra Leshy
  for (let i = 0; i < allPlaces.length; i++) {
    //Andar pelo mapa
    allPlaces[i].classList.add("disabled");
  }

  setPalette("default");
  document.getElementById("paletteForward").onclick = ""; //Mudar paleta
  document.getElementById("paletteBack").onclick = "";
}

function updateScreen(nextImg, text) {
  var selectedLanguage = window[language];
  let ImgQuery;

  //Esses IFs abaixo são usados caso o player entre no local após certo acontecimento.
  if (sword3 == true && nextImg == "weirdRocks") {
    ImgQuery = "weirdRocksCrying";
  } else if (pass == 2 && nextImg == "wall") {
    ImgQuery = "wall-open";
  } else if (castleEntered == true && nextImg == "castle") {
    ImgQuery = "bifurcation";
  } else if (kingQuest == true && nextImg == "altar") {
    ImgQuery = "angel";
  } else if (tunic == true && nextImg == "island") {
    ImgQuery = "islandhole";
  } else if (goggles == true && nextImg == "well") {
    ImgQuery = "wellPoor";
  } else if (goblinGotMoney == true && nextImg == "goblin") {
    ImgQuery = "goblinCry";
  } else if (sword1 == true && nextImg == "king") {
    ImgQuery = "kingPommelless";
  } else if (
    (broadsword == true && text == "shopBroadswordYes") ||
    (sticker == true && text == "shopStickerYes") ||
    ((pass == 1 || pass == 2) && text == "shopPass")
  ) {
    text = "shopOnlyOnePerPerson";
    ImgQuery = nextImg;
  } else {
    ImgQuery = nextImg;
  }

  if (nextImg == "leshyFinalForm") {
    document.querySelector(":root").style.setProperty("--main", "green");
  }

  let NI = document.getElementById(ImgQuery);

  //mudar imagem
  document.querySelector(".active").classList.remove("active");
  NI.classList.add("active");

  //mudar texto
  let TW = new Typewriter(chatDiv, {
    delay: del,
  });

  TW.pauseFor(250); //Espera inicial quando se muda a ação/localização

  switch (text) {
    case "chooselocation":
      TW.typeString(selectedLanguage.chooseLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.chooseLines[1])
        .start();
      break;

    case "well":
      if (goggles == false) {
        TW.typeString(selectedLanguage.wellLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.wellLines[1])
          .typeString(selectedLanguage.wellLines[2])
          .start();
      } else {
        TW.typeString(selectedLanguage.wellLinesAfterGoggles[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellLinesAfterGoggles[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellLinesAfterGoggles[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellLinesAfterGoggles[3])
          .start();
      }
      break;

    case "wellThrowCoin":
      if (coins >= 1) {
        TW.typeString(selectedLanguage.wellThrowCoinLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wellThrowCoinLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wellThrowCoinLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellThrowCoinLines[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wellThrowCoinLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellThrowCoinLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wellThrowCoinLines[6])
          .start();
        goggles = true;
        coins -= 1;
        updateInventory();
      } else {
        TW.typeString(selectedLanguage.wellThrowCoinWOCoinLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellThrowCoinWOCoinLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellThrowCoinWOCoinLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.wellThrowCoinWOCoinLines[3])
          .start();
      }
      break;

    case "wellLookInside":
      TW.typeString(selectedLanguage.wellLookInsideLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.wellLookInsideLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.wellLookInsideLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.wellLookInsideLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.wellLookInsideLines[4])
        .start();
      break;

    case "forest":
      if (BearScared) {
        TW.typeString(selectedLanguage.forestBearScaredLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.forestBearScaredLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.forestBearScaredLines[2])
          .start();
      } else {
        TW.typeString(selectedLanguage.forestLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.forestLines[1])
          .typeString(selectedLanguage.forestLines[2])
          .start();
      }
      break;

    case "enterForest":
      if (Stick) {
        //com graveto
        TW.typeString(selectedLanguage.enterForestLinesWithStick[0])
          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.enterForestLinesWithStick[1])
          .typeString(selectedLanguage.enterForestLinesWithStick[2])
          .start();
      } else {
        //sem graveto
        Stick = true;
        TW.typeString(selectedLanguage.enterForestLinesWOStick[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.enterForestLinesWOStick[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.enterForestLinesWOStick[2])
          .pauseFor(bigDel)

          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.enterForestLinesWOStick[3])
          .typeString(selectedLanguage.enterForestLinesWOStick[4])
          .start();
      }
      break;

    case "forestBear":
      if (broadsword == true || islandSword == true) {
        TW.typeString(selectedLanguage.ForestBearWSwordLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[5])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[6])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[7])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[8])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWSwordLines[9])
          .start();
        BearScared = true;

        document.getElementsByClassName("pier")[0].classList.remove("disabled");
      } else {
        TW.typeString(selectedLanguage.ForestBearWOSwordLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWOSwordLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.ForestBearWOSwordLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWOSwordLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWOSwordLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWOSwordLines[5])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.ForestBearWOSwordLines[6])
          .typeString(selectedLanguage.ForestBearWOSwordLines[7])
          .start();
      }
      break;

    case "pier":
      TW.typeString(selectedLanguage.pierLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYD)
        .typeString(selectedLanguage.pierLines[1])
        .typeString(selectedLanguage.pierLines[2])
        .start();
      break;

    case "pierStareSea":
      TW.typeString(selectedLanguage.pierStareSeaLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.pierStareSeaLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.pierStareSeaLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.pierStareSeaLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.pierStareSeaLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.pierStareSeaLines[5])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.pierStareSeaLines[6])
        .start();
      break;

    case "island":
      if (islandEntered == true) {
        TW.typeString(selectedLanguage.islandLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.islandLines[1])
          .typeString(selectedLanguage.islandLines[2])
          .start();

        place = "island";
        UpdateColors();
      } else {
        TW.typeString(selectedLanguage.islandFirstLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.islandFirstLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.islandFirstLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.islandFirstLines[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.islandFirstLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.islandFirstLines[5])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.islandFirstLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.islandFirstLines[7])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.islandFirstLines[8])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.islandFirstLines[9])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.islandFirstLines[10])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.islandFirstLines[11])
          .start();
        islandEntered = true;
        tunic = true;
        updateInventory();

        document
          .getElementsByClassName("island")[0]
          .classList.remove("disabled");
        document
          .getElementsByClassName("island")[1]
          .classList.remove("disabled");
        document
          .getElementsByClassName("island")[2]
          .classList.remove("disabled");

        place = "island";
        UpdateColors();
      }
      break;

    case "islandRowHorizonPart1":
      TW.typeString(selectedLanguage.islandRowHorizonPart1Lines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandRowHorizonPart1Lines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandRowHorizonPart1Lines[2])
        .start();
      break;

    case "islandRowHorizonPart2":
      TW.typeString(selectedLanguage.islandRowHorizonPart2Lines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandRowHorizonPart2Lines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandRowHorizonPart2Lines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.islandRowHorizonPart2Lines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandRowHorizonPart2Lines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYD)
        .typeString(selectedLanguage.islandRowHorizonPart2Lines[5])
        .typeString(selectedLanguage.islandRowHorizonPart2Lines[6])
        .start();
      place = "pier";
      UpdateColors();
      break;

    case "islandAppreciateLandscape":
      TW.typeString(selectedLanguage.islandAppreciateLandscapeLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[7])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[8])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[9])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.islandAppreciateLandscapeLines[10])
        .start();
      break;

    case "altar":
      if (kingQuest == true && angelVisited == true) {
        TW.typeString(selectedLanguage.altarLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.altarLines[2])
          .typeString(selectedLanguage.altarLines[3])
          .typeString(selectedLanguage.altarLines[4])
          .typeString(selectedLanguage.altarLines[5])
          .typeString(selectedLanguage.altarLines[6])
          .start();
      } else if (kingQuest == true) {
        TW.typeString(selectedLanguage.altarFirstLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarFirstLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.altarFirstLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarFirstLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarFirstLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarFirstLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.altarFirstLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarFirstLines[7])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarFirstLines[8])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.altarFirstLines[9])
          .typeString(selectedLanguage.altarFirstLines[10])
          .typeString(selectedLanguage.altarFirstLines[11])
          .typeString(selectedLanguage.altarFirstLines[12])
          .typeString(selectedLanguage.altarFirstLines[13])
          .start();
        angelVisited = true;
      } else {
        TW.typeString(selectedLanguage.altarAbandonedLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarAbandonedLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.altarAbandonedLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.altarAbandonedLines[3])
          .start();
      }
      break;

    case "angelAskAboutQuest":
      if (sword2 == false) {
        TW.typeString(selectedLanguage.angelParts2Lines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelParts2Lines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelParts2Lines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.angelPartsGeneralLines[0])
          .typeString(selectedLanguage.angelPartsGeneralLines[1])
          .typeString(selectedLanguage.angelPartsGeneralLines[2])
          .typeString(selectedLanguage.angelPartsGeneralLines[3])
          .start();
      } else if (sword3 == false) {
        TW.typeString(selectedLanguage.angelParts3Lines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelParts3Lines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.angelPartsGeneralLines[0])
          .typeString(selectedLanguage.angelPartsGeneralLines[1])
          .typeString(selectedLanguage.angelPartsGeneralLines[2])
          .typeString(selectedLanguage.angelPartsGeneralLines[3])
          .start();
      } else if (sword1 == false) {
        TW.typeString(selectedLanguage.angelParts1Lines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelParts1Lines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelParts1Lines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelParts1Lines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.angelPartsGeneralLines[0])
          .typeString(selectedLanguage.angelPartsGeneralLines[1])
          .typeString(selectedLanguage.angelPartsGeneralLines[2])
          .typeString(selectedLanguage.angelPartsGeneralLines[3])
          .start();
      } else if (islandSword == false) {
        TW.typeString(selectedLanguage.angelFuseSwordPart1Lines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelFuseSwordPart1Lines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelFuseSwordPart1Lines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelFuseSwordPart1Lines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelFuseSwordPart1Lines[4])
          .start();
      } else {
        TW.typeString(selectedLanguage.angelPartsBadFeelingLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelPartsBadFeelingLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelPartsBadFeelingLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.angelPartsBadFeelingLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelPartsBadFeelingLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.angelPartsBadFeelingLines[5])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.angelPartsGeneralLines[0])
          .typeString(selectedLanguage.angelPartsGeneralLines[1])
          .typeString(selectedLanguage.angelPartsGeneralLines[2])
          .typeString(selectedLanguage.angelPartsGeneralLines[3])
          .start();
      }
      break;

    case "altarFuseSword":
      TW.typeString(selectedLanguage.angelFuseSwordPart2Lines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelFuseSwordPart2Lines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelFuseSwordPart2Lines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelFuseSwordPart2Lines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.angelFuseSwordPart2Lines[4])
        .start();
      break;

    case "altarFuseSwordAftermath":
      TW.typeString(selectedLanguage.angelFuseSwordPart3Lines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelFuseSwordPart3Lines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.angelFuseSwordPart3Lines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.angelFuseSwordPart3Lines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelFuseSwordPart3Lines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelFuseSwordPart3Lines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.angelPartsGeneralLines[0])
        .typeString(selectedLanguage.angelPartsGeneralLines[1])
        .typeString(selectedLanguage.angelPartsGeneralLines[2])
        .typeString(selectedLanguage.angelPartsGeneralLines[3])
        .start();

      FuseSword();
      break;

    case "angelWhoAreYou":
      TW.typeString(selectedLanguage.angelWhoAreYouLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelWhoAreYouLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelWhoAreYouLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.angelWhoAreYouLines[3])
        .typeString(selectedLanguage.angelWhoAreYouLines[4])
        .typeString(selectedLanguage.angelWhoAreYouLines[5])
        .typeString(selectedLanguage.angelWhoAreYouLines[6])
        .start();
      break;

    case "angelHowSwordDisappear":
      TW.typeString(selectedLanguage.angelHowSwordDisappearLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelHowSwordDisappearLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelHowSwordDisappearLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelHowSwordDisappearLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.angelHowSwordDisappearLines[4])
        .typeString(selectedLanguage.angelHowSwordDisappearLines[5])
        .typeString(selectedLanguage.angelHowSwordDisappearLines[6])
        .typeString(selectedLanguage.angelHowSwordDisappearLines[7])
        .start();
      break;

    case "angelSearchSwordYourself":
      TW.typeString(selectedLanguage.angelSearchSwordYourselfLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelSearchSwordYourselfLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelSearchSwordYourselfLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.angelSearchSwordYourselfLines[3])
        .typeString(selectedLanguage.angelSearchSwordYourselfLines[4])
        .typeString(selectedLanguage.angelSearchSwordYourselfLines[5])
        .typeString(selectedLanguage.angelSearchSwordYourselfLines[6])
        .start();
      break;

    case "angelBye":
      TW.typeString(selectedLanguage.angelByeLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.angelByeLines[1])
        .start();
      break;

    case "castle":
      if (castleEntered == false) {
        TW.typeString(selectedLanguage.castleLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.castleLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.castleLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.castleLines[3])
          .start();
        castleEntered = true;
      } else {
        TW.typeString(selectedLanguage.enterCastleLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.enterCastleLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.enterCastleLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.enterCastleLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.enterCastleLines[4])
          .typeString(selectedLanguage.enterCastleLines[5])
          .typeString(selectedLanguage.enterCastleLines[6])
          .start();
      }
      break;

    case "palaceEnter":
      if (palaceEntered == false) {
        TW.typeString(selectedLanguage.palaceEnterFirstLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.palaceEnterFirstLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.palaceEnterFirstLines[2])
          .typeString(selectedLanguage.palaceEnterFirstLines[3])
          .typeString(selectedLanguage.palaceEnterFirstLines[4])
          .typeString(selectedLanguage.palaceEnterFirstLines[5])
          .start();
        palaceEntered = true;
      } else if (sword1 == false && sword2 == true && sword3 == true) {
        TW.typeString(selectedLanguage.kingGivePommelLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.kingGivePommelLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.kingGivePommelLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[7])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[8])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.kingGivePommelLines[9])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.kingGivePommelLines[10])
          .start();
      } else {
        TW.typeString(selectedLanguage.palaceEnterLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.palaceEnterLines[1])
          .typeString(selectedLanguage.palaceEnterLines[2])
          .typeString(selectedLanguage.palaceEnterLines[3])
          .typeString(selectedLanguage.palaceEnterLines[4])
          .start();
      }
      break;

    case "kingPommelPart2":
      TW.typeString(selectedLanguage.kingPommelPart2Lines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingPommelPart2Lines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingPommelPart2Lines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingPommelPart2Lines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingPommelPart2Lines[4])
        .start();
      sword1 = true;
      updateInventory();
      break;

    case "kingWhoAreYou":
      TW.typeString(selectedLanguage.kingWhoAreYouLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingWhoAreYouLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingWhoAreYouLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.kingWhoAreYouLines[3])
        .typeString(selectedLanguage.kingWhoAreYouLines[4])
        .typeString(selectedLanguage.kingWhoAreYouLines[5])
        .typeString(selectedLanguage.kingWhoAreYouLines[6])
        .start();
      break;

    case "kingMeetSameFate":
      TW.typeString(selectedLanguage.kingMeetSameFateLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingMeetSameFateLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingMeetSameFateLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingMeetSameFateLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingMeetSameFateLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.kingMeetSameFateLines[5])
        .typeString(selectedLanguage.kingMeetSameFateLines[6])
        .typeString(selectedLanguage.kingMeetSameFateLines[7])
        .start();
      break;

    case "kingGoHome":
      TW.typeString(selectedLanguage.kingGoHomeLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.kingGoHomeLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingGoHomeLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingGoHomeLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingGoHomeLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingGoHomeLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingGoHomeLines[6])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.kingGoHomeLines[7])
        .start();
      break;

    case `kingHowDoThis`:
      TW.typeString(selectedLanguage.kingHowDoThisLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingHowDoThisLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingHowDoThisLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingHowDoThisLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.kingHowDoThisLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.kingHowDoThisLines[5])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.kingHowDoThisLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingHowDoThisLines[7])
        .start();
      kingQuest = true;
      break;

    case "kingBye":
      TW.typeString(selectedLanguage.kingByeLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.kingByeLines[1])
        .typeString(selectedLanguage.kingByeLines[2])
        .start();
      break;

    case "shop":
      if (shopEntered == true) {
        TW.typeString(selectedLanguage.shopLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopLines[1])
          .typeString(selectedLanguage.shopLines[2])
          .typeString(selectedLanguage.shopLines[3])
          .typeString(selectedLanguage.shopLines[4])
          .start();
      } else {
        TW.typeString(selectedLanguage.shopFirstLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopFirstLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopFirstLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopFirstLines[3])
          .typeString(selectedLanguage.shopFirstLines[4])
          .typeString(selectedLanguage.shopFirstLines[5])
          .typeString(selectedLanguage.shopFirstLines[6])
          .start();
        shopEntered = true;
      }
      break;

    case "shopBroadsword":
      TW.typeString(selectedLanguage.shopBroadswordLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopBroadswordLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.shopBroadswordLines[2])
        .typeString(selectedLanguage.shopBroadswordLines[3])
        .typeString(selectedLanguage.shopBroadswordLines[4])
        .start();
      break;

    case "shopSticker":
      TW.typeString(selectedLanguage.shopStickerLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopStickerLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.shopStickerLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopStickerLines[3])
        .typeString(selectedLanguage.shopStickerLines[4])
        .typeString(selectedLanguage.shopStickerLines[5])
        .start();
      break;

    case "shopBroadswordYes":
      if (coins >= 20) {
        TW.typeString(selectedLanguage.shopBroadswordYesLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopBroadswordYesLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.shopBroadswordYesLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopBroadswordYesLines[3])
          .start();
        broadsword = true;
        coins -= 20;
        updateInventory();
      } else {
        updateScreen("shop", "shopTooPoor");
      }
      break;
    case "shopStickerYes":
      if (coins >= 10) {
        TW.typeString(selectedLanguage.shopStickerYesLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopStickerYesLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.shopStickerYesLines[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopStickerYesLines[3])
          .start();
        sticker = true;
        coins -= 10;
        updateInventory();
      } else {
        updateScreen("shop", "shopTooPoor");
      }
      break;
    case "shopTooPoor":
      TW.typeString(selectedLanguage.shopTooPoorLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopTooPoorLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopTooPoorLines[2])
        .start();
      break;

    case "shopOnlyOnePerPerson":
      TW.typeString(selectedLanguage.shopOnlyOnePerPersonLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopOnlyOnePerPersonLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.shopOnlyOnePerPersonLines[2])
        .start();
      break;

    case "shopPass":
      if (kingQuest == false) {
        TW.typeString(selectedLanguage.shopPassWOKingQuest[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWOKingQuest[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWOKingQuest[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWOKingQuest[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.shopPassWOKingQuest[4])
          .typeString(selectedLanguage.shopPassWOKingQuest[5])
          .start();
      } else {
        TW.typeString(selectedLanguage.shopPassWKingQuest[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWKingQuest[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWKingQuest[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWKingQuest[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.shopPassWKingQuest[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.shopPassWKingQuest[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.shopPassWKingQuest[6])
          .typeString(selectedLanguage.shopPassWKingQuest[7])
          .start();
        pass = 1;
        updateInventory();
      }
      break;

    case "weirdRocks":
      if (sword3 == false) {
        TW.typeString(selectedLanguage.weirdRocksLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.weirdRocksLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.weirdRocksLines[2])
          .typeString(selectedLanguage.weirdRocksLines[3])
          .start();
      } else {
        TW.typeString(selectedLanguage.weirdRocksAngryRox[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.weirdRocksAngryRox[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.weirdRocksAngryRox[2])
          .start();
      }
      break;

    case "weirdRocksWhoAreYou":
      TW.typeString(selectedLanguage.weirdRocksWhoAreYouLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.weirdRocksWhoAreYouLines[1])
        .typeString(selectedLanguage.weirdRocksWhoAreYouLines[2])
        .start();
      break;

    case "weirdRocksCabin":
      TW.typeString(selectedLanguage.weirdRocksCabinLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.weirdRocksCabinLines[1])
        .pauseFor(2000)
        .typeString(selectedLanguage.weirdRocksCabinLines[2])
        .start();
      break;

    case "weirdRocksEye":
      TW.typeString(selectedLanguage.weirdRocksEyeLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.weirdRocksEyeLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.weirdRocksEyeLines[2])
        .typeString(selectedLanguage.weirdRocksEyeLines[3])
        .start();
      break;

    case "weirdRocksNice":
      TW.typeString(selectedLanguage.weirdRocksNiceLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYD)
        .typeString(selectedLanguage.weirdRocksNiceLines[1])
        .typeString(selectedLanguage.weirdRocksNiceLines[2])
        .start();
      break;

    case "weirdRocksNotStealEye":
      TW.typeString(selectedLanguage.weirdRocksNotStealEyeLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.weirdRocksNotStealEyeLines[1])
        .start();
      break;
    case "weirdRocksStealEye":
      TW.typeString(selectedLanguage.weirdRocksStealEye[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.weirdRocksStealEye[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.weirdRocksStealEye[2])
        .start();

      sword3 = true;
      updateInventory();

      break;

    case "farm":
      if (sword2 == false) {
        TW.typeString(selectedLanguage.farmLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.farmLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.farmLines[2])
          .typeString(selectedLanguage.farmLines[3])
          .typeString(selectedLanguage.farmLines[4])
          .start();
      } else {
        TW.typeString(selectedLanguage.farmLinesHilt[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.farmLinesHilt[1])
          .start();
      }
      break;

    case "farmSeeCrops":
      if (sticker == false) {
        TW.typeString(selectedLanguage.farmLinesWOSticker[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.farmLinesWOSticker[1])
          .pauseFor(2000)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.farmLinesWOSticker[2])
          .typeString(selectedLanguage.farmLinesWOSticker[3])
          .start();
      } else {
        TW.typeString(selectedLanguage.farmLinesWSticker[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.farmLinesWSticker[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.farmLinesWSticker[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.farmLinesWSticker[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.farmLinesWSticker[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.farmLinesWSticker[5])
          .start();
      }
      break;

    case "farmMetal":
      TW.typeString(selectedLanguage.farmLinesMetal[0])
        .pauseFor(2000)
        .typeString(selectedLanguage.farmLinesMetal[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.farmLinesMetal[2])
        .typeString(selectedLanguage.farmLinesMetal[3])
        .start();
      break;

    case "farmBye":
      TW.typeString(selectedLanguage.farmLinesBye[0])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.farmLinesBye[1])
        .start();
      break;

    case "farmApproach":
      TW.typeString(selectedLanguage.farmLinesApproach[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.farmLinesApproach[1])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.farmLinesApproach[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.farmLinesApproach[3])
        .pauseFor(2000)
        .typeString(selectedLanguage.farmLinesApproach[4])
        .start();
      sword2 = true;
      updateInventory();
      break;

    case "wall":
      if (pass == 0) {
        //Se não tem
        TW.typeString(selectedLanguage.wallLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wallLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.wallLines[3])
          .typeString(selectedLanguage.wallLines[4])
          .typeString(selectedLanguage.wallLines[5])
          .start();
      } else if (pass == 1) {
        //Se tem, mas não usou
        TW.typeString(selectedLanguage.wallLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wallLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.WWYS)
          .typeString(selectedLanguage.wallLines[2])
          .typeString(selectedLanguage.wallLines[3])
          .typeString(selectedLanguage.wallLines[4])
          .typeString(selectedLanguage.wallLines[5])
          .start();
      } else {
        //Se tem E já usou
        TW.typeString(selectedLanguage.wallAlreadyUsedPassLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wallAlreadyUsedPassLines[1])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.wallAlreadyUsedPassLines[2])
          .start();
      }
      break;

    case "wallUsePass":
      TW.typeString(selectedLanguage.wallUsePassLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.wallUsePassLines[1])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.wallUsePassLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.wallUsePassLines[3])
        .start();
      pass = 2;
      updateInventory();
      document.getElementsByClassName("cave")[0].classList.remove("disabled");
      document.getElementsByClassName("cave")[1].classList.remove("disabled");
      break;

    case "wallWhatPass":
      TW.typeString(selectedLanguage.wallWhatPassLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.wallWhatPassLines[1])
        .typeString(selectedLanguage.wallWhatPassLines[2])
        .start();
      break;

    case "wallBeyondWall":
      TW.typeString(selectedLanguage.wallBeyondWallLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.wallBeyondWallLines[1])
        .typeString(selectedLanguage.wallBeyondWallLines[2])
        .start();
      break;

    case "wallBye":
      TW.typeString(selectedLanguage.wallByeLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.wallByeLines[1])
        .start();
      break;

    case "cave":
      TW.typeString(selectedLanguage.caveLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.caveLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.caveLines[2])
        .start();
      break;

    case "goblin":
      if (goblinGotMoney == false) {
        if (goblinVisited == false) {
          TW.typeString(selectedLanguage.goblinFirstLines[0])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.goblinFirstLines[1])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.goblinFirstLines[2])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.goblinFirstLines[3])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.goblinFirstLines[4])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.WWYS)
            .typeString(selectedLanguage.goblinFirstLines[5])
            .typeString(selectedLanguage.goblinFirstLines[6])
            .typeString(selectedLanguage.goblinFirstLines[7])
            .start();
          goblinVisited = true;
        } else {
          TW.typeString(selectedLanguage.goblinLines[0])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.goblinLines[1])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.WWYS)
            .typeString(selectedLanguage.goblinLines[2])
            .typeString(selectedLanguage.goblinLines[3])
            .typeString(selectedLanguage.goblinLines[4])
            .start();
        }
      } else {
        TW.typeString(selectedLanguage.goblinAfterGotMoneyLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.goblinAfterGotMoneyLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.goblinAfterGotMoneyLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.goblinAfterGotMoneyLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.goblinAfterGotMoneyLines[4])
          .start();
      }

      break;

    case "goblinWhoAreYou":
      TW.typeString(selectedLanguage.goblinWhoAreYouLines[0])
        .pauseFor(750)
        .typeString(selectedLanguage.goblinWhoAreYouLines[1])
        .pauseFor(750)
        .typeString(selectedLanguage.goblinWhoAreYouLines[2])
        .pauseFor(750)
        .typeString(selectedLanguage.goblinWhoAreYouLines[3])
        .pauseFor(750)
        .typeString(selectedLanguage.goblinWhoAreYouLines[4])
        .typeString(selectedLanguage.goblinWhoAreYouLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinWhoAreYouLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.goblinWhoAreYouLines[7])
        .typeString(selectedLanguage.goblinWhoAreYouLines[8])
        .start();
      break;

    case "goblinWhatGold":
      TW.typeString(selectedLanguage.goblinWhatGoldLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinWhatGoldLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinWhatGoldLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinWhatGoldLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinWhatGoldLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinWhatGoldLines[5])
        .start();
      break;

    case "goblinNotMuch":
      TW.typeString(selectedLanguage.goblinNotMuchLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinNotMuchLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinNotMuchLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinNotMuchLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYS)
        .typeString(selectedLanguage.goblinNotMuchLines[4])
        .typeString(selectedLanguage.goblinNotMuchLines[5])
        .start();
      break;

    case "goblinTruth":
      TW.typeString(selectedLanguage.goblinTruthLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[7])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[8])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinTruthLines[9])
        .start();
      break;

    case "goblinBluff":
      TW.typeString(selectedLanguage.goblinBluffLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinBluffLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinBluffLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinBluffLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinBluffLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinBluffLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinBluffLines[6])
        .start();
      break;

    case "goblinComeOn":
      TW.typeString(selectedLanguage.goblinComeOnLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[7])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[8])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[9])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinComeOnLines[10])
        .start();
      break;

    case "goblinMoney":
      TW.typeString(selectedLanguage.goblinMoneyLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinMoneyLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinMoneyLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinMoneyLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.goblinMoneyLines[4])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.goblinMoneyLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinMoneyLines[6])
        .start();

      goblinGotMoney = true;
      coins += 31;
      updateInventory();
      break;

    case "goblinBye":
      TW.typeString(selectedLanguage.goblinByeLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinByeLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.goblinByeLines[2])
        .start();
      break;

    case "cabin":
      TW.typeString(selectedLanguage.cabinLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.cabinLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.WWYD)
        .typeString(selectedLanguage.cabinLines[2])
        .typeString(selectedLanguage.cabinLines[3])
        .start();
      break;

    case "cabinTree":
      if (goggles) {
        TW.typeString(selectedLanguage.cabinLinesWGoggles[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.cabinLinesWGoggles[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.cabinLinesWGoggles[2])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.cabinLinesWGoggles[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.cabinLinesWGoggles[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.cabinLinesWGoggles[5])
          .start();
      } else {
        TW.typeString(selectedLanguage.cabinLinesWOGoggles[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.cabinLinesWOGoggles[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.cabinLinesWOGoggles[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.cabinLinesWOGoggles[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.cabinLinesWOGoggles[4])
          .start();
      }
      break;
    case "cabinEnter":
      disableKeyFeatures();

      TW.typeString(selectedLanguage.CabinEnterLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.CabinEnterLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.CabinEnterLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.CabinEnterLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.CabinEnterLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.CabinEnterLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.CabinEnterLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.CabinEnterLines[7])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.CabinEnterLines[8])
        .start();
      break;
    case "cabinFate":
      if (kingQuest == false) {
        TW.typeString(selectedLanguage.leshyLostSoulLines[0])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyLostSoulLines[1])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.leshyLostSoulLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyLostSoulLines[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyLostSoulLines[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyLostSoulLines[5])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyLostSoulLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyLostSoulLines[7])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyLostSoulLines[8])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyLostSoulLines[9])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyLostSoulLines[10])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.YAEH)
          .start();
      } else {
        if (goggles == false) {
          TW.typeString(selectedLanguage.leshyWOGogglesLines[0])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[1])
            .pauseFor(hugeDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[2])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[3])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[4])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[5])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[6])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[7])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[8])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[9])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[10])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[11])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWOGogglesLines[12])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.YAEH)
            .start();
        } else {
          TW.typeString(selectedLanguage.leshyWGogglesLines[0])
            .pauseFor(smallDel)
            .typeString(selectedLanguage.leshyWGogglesLines[1])
            .pauseFor(hugeDel)
            .typeString(selectedLanguage.leshyWGogglesLines[2])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[3])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[4])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[5])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[6])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[7])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[8])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[9])
            .pauseFor(3000)
            .typeString(selectedLanguage.leshyWGogglesLines[10])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[11])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[12])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[13])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[14])
            .pauseFor(bigDel)
            .typeString(selectedLanguage.leshyWGogglesLines[15])
            .start();
        }
      }
      break;

    case "leshyPassTest1":
      TW.typeString(selectedLanguage.leshySkullLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshySkullLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshySkullLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshySkullLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshySkullLines[4])
        .start();
      break;

    case "leshyBurn":
      if (tunic == false) {
        TW.typeString(selectedLanguage.leshyWODarkTunicLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[3])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[7])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWODarkTunicLines[8])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.YAEH)
          .start();
      } else {
        TW.typeString(selectedLanguage.leshyWDarkTunicLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[4])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[7])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[8])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyWDarkTunicLines[9])
          .start();
      }
      break;

    case "leshyTransform":
      TW.typeString(selectedLanguage.leshyTransformation[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyTransformation[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[5])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[6])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[7])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyTransformation[8])
        .start();
      break;

    case "leshyFinalForm":
      TW.typeString(selectedLanguage.leshyFinalFormLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[5])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyFinalFormLines[7])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[8])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[9])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[10])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyFinalFormLines[11])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[12])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[13])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[14])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[15])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[16])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[17])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[18])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyFinalFormLines[19])
        .start();
      break;

    case "leshyFinalTest":
      if (islandSword == false) {
        TW.typeString(selectedLanguage.leshyFinalDefeatLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[6])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[7])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[8])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[9])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[10])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[11])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[12])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[13])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[14])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[15])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[16])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[17])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[18])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[19])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[20])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[21])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[22])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[23])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalDefeatLines[24])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.YAEH)
          .start();
      } else {
        TW.typeString(selectedLanguage.leshyFinalVictoryLines[0])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[1])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[2])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[3])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[4])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[5])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[6])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[7])
          .pauseFor(hugeDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[8])
          .pauseFor(smallDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[9])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[10])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[11])
          .pauseFor(bigDel)
          .typeString(selectedLanguage.leshyFinalVictoryLines[12])
          .start();
      }
      break;

    case "leshyAftermath":
      TW.typeString(selectedLanguage.leshyAftermathLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAftermathLines[1])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[5])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[6])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[7])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[8])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAftermathLines[9])
        .start();
      break;

    case "leshyAngel":
      setPalette("default");
      TW.typeString(selectedLanguage.leshyAngelLines[0])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[2])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[3])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[4])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[5])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[7])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[8])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[9])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[10])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[11])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[12])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[13])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[14])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[15])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.leshyAngelLines[16])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.leshyAngelLines[17])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[18])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[19])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.leshyAngelLines[20])
        .start();
      break;

    case "ending":
      TW.typeString(selectedLanguage.endingLines[0])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[1])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[2])
        .pauseFor(bigDel)
        .typeString(selectedLanguage.endingLines[3])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[4])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[5])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[6])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[7])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[8])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[9])
        .pauseFor(smallDel)
        .typeString(selectedLanguage.endingLines[10])
        .pauseFor(hugeDel)
        .typeString(selectedLanguage.endingLines[11])
        .start();
      break;
    default:
      console.log("não encontrado");
      break;
  }
}

function winGame() {
  let endingText = document.getElementById("endingText");
  gameScreen.style.display = "none";
  winScreen.style.display = "flex";

  let TWEnding = new Typewriter(endingText, {
    delay: 75,
  });

  TWEnding.pauseFor(250).typeString(selectedLanguage.exitCabin).start();
}

UpdateColors();

//"BANCO DE DADOS" PARA AS FALAS DO JOGO
//todos os <a> possuem a função de dar update no jogo, as variáveis inseridas são: a imagem a ser carregada e o texto a ser printado
//Criei essas variáveis abaixo pois são muito repetidas pelo percurso do jogo
var WWYD = "What will you do? <br><br>";
var WWYS = "What will you say? <br><br>";
var YAEH = `<a href="#" onclick="dyingAnimation()">Your adventure ends here.</a>`;

var chooseLines = {
  0: `You can use the map anytime you want to leave the place you currently are,`,
  1: `use it if you feel stuck!`,
};

var startLines = {
  0: `You wake up in front of a great and dense forest,`,
  1: ` you don't remember your home,`,
  2: ` your life,`,
  3: ` and not even your name,`,
  4: ` you're lost,`,
  5: ` and the only thing that you can do now is to search for help.<br><br>`,
  //WWYD
  6: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a> <br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest</a>`,
};

var forestLines = {
  0: `Back to forest you get.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a><br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest</a>`,
};

var forestBearScaredLines = {
  0: `Back to forest you get.<br><br>`,
  1: `The bear is nowhere to be seen, and you haven't seen anything useful between the trees,`,
  2: ` you feel that further scouting the forest won't help.`,
};

var enterForestLinesWOStick = {
  0: `You decided to enter further into the forest, not knowing what may be at the other side of it.<br><br>`,
  1: `By the ground, you find a somewhat straight stick on the ground:<br><br>`,
  2: `<b>You got an ordinary stick</b>! <br><br>`,
  //WWYD
  3: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continue</a> <br>`,
  4: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Retreat from the forest`,
};

var enterForestLinesWithStick = {
  0: `Back to the same place you are, you can still see the spot where you found your stick... <br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continue</a> <br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Retreat from the forest</a>`,
};

var ForestBearWSwordLines = {
  0: `You go further into the forest, the path leads you to...`,
  1: ` A bear!<br><br>`,
  2: `You quickly draw your sword,`,
  3: ` without realizing,`,
  4: ` the angle of it starts to reflect the moonglow at a crazy intensity, the light beam scared the bear away!<br><br>`,
  5: `You get grateful for the smith who made this sword,`,
  6: ` after all, you don't know how to use a sword...<br><br>`,
  7: `You continue through the forest until you reach the end of it,`,
  8: ` on the other side, you find a lonely pier, with a small boat hanging on the water.<br><br>`,
  9: `<b>You got access to the pier!</b>`,
};

var ForestBearWOSwordLines = {
  0: `You go further into the forest, the path leads you to...`,
  1: ` A bear!<br><br>`,
  2: `You firmly hold your stick,`,
  3: ` ready to fight for your life, no turning back!<br><br>`,
  4: `The bear takes its first step towards you, and your legs start thinking better than you,`,
  5: ` before even realizing, you start to run away from the creature, getting back to the starting point,`,
  6: ` maybe you're not ready to fight such a big thing?<br><br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">What to do now?</a>`,
};

var pierLines = {
  0: `A lonely pier with a ready-to-go little boat stands in front of you.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'island')">Sail with the boat</a><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Stare at the sea</a>`,
};

var pierStareSeaLines = {
  0: `You look into the water, realizing:`,
  1: ` You don't remember your face!<br><br>`,
  2: `Upon bending to the sea, you only see the moon and stars reflected by the water's transparency.`,
  3: ` Where is your reflexion?`,
  4: ` Where is...`,
  5: ` You?<br><br>`,
  6: ` <a href="#" onclick="updateScreen('pier', 'pier')">Go back</a>`,
};

var islandFirstLines = {
  0: `You hop on the boat, wrap your hands around the oars, and start rowing,`,
  1: ` without directions, only with the intention to go somewhere.`,
  2: ` A few minutes of only listening to the waves' sound takes you to a small island,`,
  3: ` you decide to stop there.<br><br>`,
  4: `Upon arriving, nothing stands there except a palm tree and a giant X marking something,`,
  5: ` you take your bare hands and start digging the mark, since this place mustn't have many shovels around.<br><br>`,
  6: `The digging hurt, but it was worth it,`,
  7: ` after getting your hands numb,`,
  8: ` you find a black mail, seemingly sturdy and, even more important:`,
  9: ` Stylish!<br><br>`,
  10: `<b>You got the dark Tunic!<b><br><br>`,
  11: `<a href="#" onclick="updateScreen('islandhole', 'island')">Wahoo!</a>`,
};

var islandLines = {
  0: `There you are, standing in front of a desert island with the hole that you made.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'islandRowHorizonPart1')">Row to the Horizon</a><br>`,
  2: `<a href="#" onclick="updateScreen('island', 'islandAppreciateLandscape')">Appreciate the landscape</a>`,
};

var islandAppreciateLandscapeLines = {
  0: `You look at the horizon.<br><br>`,
  1: `Water,`,
  2: ` stars`,
  3: ` and the moon,`,
  4: ` that's all, why are you here?`,
  5: ` Who took you here?`,
  6: ` Was it...`,
  7: ` Magic?<br><br>`,
  8: `You must end your quest,`,
  9: ` maybe then you'll be able to know your fate on the island.<br><br>`,
  10: `<a href="#" onclick="updateScreen('island', 'island')">Go back</a>`,
};

var islandRowHorizonPart1Lines = {
  0: `You continue your journey to the unknown,`,
  1: ` maybe the time will guide you to the right way.<br><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'islandRowHorizonPart2')">Continue</a>`,
};

var islandRowHorizonPart2Lines = {
  0: `After minutes,`,
  1: ` the confimation that this place is not normal appears:`,
  2: ` You returned back to the pier!`,
  3: ` You did not turn the boat, and neither the waves did,`,
  4: ` it seems that you're stuck for real and that magic really exists after all...<br><br>`,
  //WWYD
  5: `<a href="#" onclick="updateScreen('island', 'island')">Sail with the boat</a><br>`,
  6: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Stare at the sea</a><br>`,
};

var wellLines = {
  0: `In the distance, you discover an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies" <br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('well', 'wellThrowCoin')">Throw a Coin</a><br>`,
  2: `<a href="#" onclick="updateScreen('well', 'wellLookInside')">Look inside the well</a>`,
};

var wellLinesAfterGoggles = {
  0: `You get back to the well,`,
  1: ` the sign is still talking about you being poor.<br><br>`,
  2: ` "It's just a silly well, ignore it"<br><br>`,
  3: ` You say to yourself, backing off.`,
};

var wellThrowCoinLines = {
  0: `You get one coin from the rest of your money, you then reach near the well and throw it to the endless hole.<br><br>`,
  1: `You hear some noises, and then, a pair of goggles gets spit out of the well,`,
  2: `You recognize them as those party goggles with a spiral decal on the lenses:<br><br>`,
  3: `<b>You got the Spiral Goggles!</b><br><br>`,
  4: `Wearing them makes you really dizzy, and after removing them, you notice that the sign changed its text:<br><br>`,
  5: `"You're poor, You're thrash"<br><br>`,
  6: `What a rude well! You don't want to stay near him anymore.`,
};

var wellThrowCoinWOCoinLines = {
  0: `You search around your pockets,`,
  1: ` but you realize that you don't have any money with you right now,`,
  2: ` what a shame...<br><br>`,
  3: `<a href="#" onclick="updateScreen('well', 'well')">Go back</a>`,
};

var wellLookInsideLines = {
  0: `You lean into the well, checking if there was something,`,
  1: ` no water,`,
  2: ` no bucket,`,
  3: ` only a black endless hole with a hanging torn rope.<br><br>`,
  4: `<a href="#" onclick="updateScreen('well', 'well')">Go back</a>`,
};

var weirdRocksLines = {
  0: `You find a weird arrangement of rocks in the middle of the grass:<br><br>`,
  1: `-Heyo! - The rock says.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Who are you?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')"> What's the deal with your eye?`,
};

var weirdRocksWhoAreYouLines = {
  0: `- I'm Rox, Rox the rock, nice to meetcha pal!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksCabin')">Do you know who lives in the cabin?<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')">What's the deal with your eye?`,
};

var weirdRocksCabinLines = {
  0: `- Oh... Are you talking about <i>Leshy</i>? <i>It</i> is a spirit that makes bad things to people, I don't like to talk about that...<BR><BR>`,
  1: `<i>Leshy</i> turned Rox into a lot of stones!<BR><BR>`,
  2: `Rox starts crying pebbles, you decide to leave it alone for a bit...`,
};

var weirdRocksEyeLines = {
  0: `- Oh, this eye? It's my ultra sharp and shiny metal eye, cool huh?<br><br>`,
  1: `You can't lie, that eye is awesome. <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Who are you?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksNice')"> Nice! Can I have it?<br>`,
};

var weirdRocksNiceLines = {
  0: `- Of course not! This is MY eye and if you steal it, you will suffer the most ruthless punishment you'll ever feel!<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('weirdRocks','weirdRocksNotStealEye')">Not steal the eye<br>`, //Fazer essa opção
  2: `<a href="#" onclick="updateScreen('weirdRocksEyeless', 'weirdRocksStealEye')">Steal the eye`,
};

var weirdRocksNotStealEyeLines = {
  0: `- Thanks mate! :D <br><br>`,
  1: `Besides the eye and the threat, the rock doesn't show anything special, you are done with chatting with him for now.`,
};

var weirdRocksStealEye = {
  0: `<b>you got Rox's eye! <br><br>`,
  1: `- Ouch! Give it back! It's your last advice!<br><br>`,
  2: `You can clearly tell that Rox is lying at this point, you just leave.`,
};

var weirdRocksAngryRox = {
  0: `You get back to Rox the rock, now crying pebbles over his lost eye <br><br>`,
  1: `- Sniff, What do you want? Go away you heart of stone!<br><br>`,
  2: `You think you already did to much to this poor rock, you turn around and leave.`,
};

var farmLines = {
  0: `This lonely farm is far from the rest of the civilization, the farmer, quickly realizing you, approaches: <br><br>`,
  1: `- Oh my! Visitor!!! Welcome to ma farm, I plant carrots, potatoes, carrots, carrots, metal'n'carrots! How can I help'ya? <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm', 'farmSeeCrops')">Can I see your crops?</a> <br>`,
  3: `<a href="#" onclick="updateScreen('farm', 'farmMetal')">You plant metal?</a> <br>`,
  4: `<a href="#" onclick="updateScreen('farm','farmBye')">Bye!</a> `,
};

var farmLinesWOSticker = {
  0: `- Of course not! The carrots are my precious ons and I'ould never let anyone touch'em! <br><br>`,
  1: `He seems really serious when talking this, plus he has a rake, better listen to him <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm', 'farmMetal')">You plant metal?</a> <br>`,
  3: `<a href="#" onclick="updateScreen('farm','farmBye')">Bye!</a> `,
};

var farmLinesWSticker = {
  0: `- Of course no...`,
  1: ` wait, `,
  2: `is that a carrot sticker? `,
  3: `I LOVE CARROTS!!! <br><br>`,
  4: `- Boi y'can take a good look at'em, carrot brotha! <br><br>`,
  5: `<a href="#" onclick="updateScreen('farmZoom','farmApproach')">Approach the plantation</a>`,
};

var farmLinesMetal = {
  0: `- Yeah! If carrots grow carrots, expensive metal grows more metal, are ya dum?<br><br>`,
  1: `You stay quiet, thinking that arguing about this would be like talking to a wall.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm','farmSeeCrops')">Can I see your crops?</a><br>`,
  3: `<a href="#" onclick="updateScreen('farm','farmBye')">Bye!</a>`,
};

var farmLinesBye = {
  0: `- Bye visitor, may the carrots be with ya!<br><br>`,
  1: `You really wanted to move away from that carrot crazy.`,
};

var farmLinesApproach = {
  0: `As you pass your eyes through the plantation, you find something weird, it looks like a shiny tube<br><br>`,
  1: `You think the farmer won't mind if one carrot goes away, so you pull the tube.<br><br>`,
  2: `It looked really stuck to the ground among other vegetables, but you win the fight against it and pull a beautiful hilt from the ground.<br><br>`,
  3: `<b>You got the farmer's hilt!</b><br><br>`,
  4: `You hope the farmer didn't notice it, you run trying to get out of his view.`,
};

var farmLinesHilt = {
  0: `You see the farmer going goblin mode trying to find the metal part with his rake...<br><br>`,
  1: `Maybe it's better to not get near him.`,
};

var wallLines = {
  0: `A massive wall blocks the way beyond it, a small guy inside a toll whick doesn't look much friendly stares at you:<br><br>`,
  1: `- Hi, where's the Pass?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('wall-open','wallUsePass')">Here, I have a Pass</a><br>`,
  3: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Pass? What do you mean?</a><br>`,
  4: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  5: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallWhatPassLines = {
  0: `- You need a Pass to pass the toll, go get one at the castle, they're nice to me.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallBeyondWallLines = {
  0: `- A beatiful cavern with a demigod, you need to see it, so please, get a Pass!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Pass? What do you mean?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallByeLines = {
  0: `- Thank you for nothing, don't forget to buy a Pass! <br><br>`,
  1: `Maybe you should take a look at what and where this Pass is.`,
};

var wallUsePassLines = {
  0: `You give the Pass to the thing, it gets really happy! <br><br>`,
  1: `- OOOOOHH, THE BOSS WILL LET ME HAVE A DAY OFF!!!<br>`,
  2: `- Ok, you may pass and admire the cave.<br><br>`,
  3: `The pole besides him lifts, <b>you now have access to the cave!</b>.`,
};

var wallAlreadyUsedPassLines = {
  0: `You see the thing again, trying to hold his smile in front of you: <br><br>`,
  1: `- So? Pass, you don't have anything interesting for me now.<br><br>`,
  2: `You try to say something, but the creature just says blablabla while covering its ears, what a child!`,
};

var caveLines = {
  0: `A big cave stands in front of you,`,
  1: ` you can hear small growls coming from it.<br><br>`,
  2: `<a href="#" onclick="updateScreen('goblin','goblin')">Enter it.</a>`,
};

var goblinFirstLines = {
  0: `The cave smells like mold and has the sound of dripping water from the dripstones along with the growls,`,
  1: ` walking further shows you the so called demigod that the doorman spoke about:`,
  2: ` A small goblin near a "treasure",`,
  3: ` which is actually just a small pile of coins on the ground.<br><br>`,
  4: `- Who dares to enter my domain?<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Who are you?</a><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  7: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
};

var goblinLines = {
  0: `You get back to the inside of the cave,`,
  1: ` the goblin is still there.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Who are you?</a><br>`,
  3: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  4: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
};

var goblinAfterGotMoneyLines = {
  0: `You get back to the cave,`,
  1: ` the goblin is still crying,`,
  2: ` you're not good with cheering someone up,`,
  3: ` plus you stole its money,`,
  4: ` maaaaybe it's better to forget him by now.`,
};

var goblinWhoAreYouLines = {
  0: `- I'm Barretos, the demigod,`,
  1: ` the keeper of the island's biggest treasure,`,
  2: ` the inhabitant of the oldest cave on the island,`,
  3: ` the most green being here,`,
  4: ` the mightiest warrior of...<br><br>`,
  5: `You yell at him that you already got it.<br><br>`,
  6: `- Of course you got...<br><br>`,
  //WWYS
  7: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  8: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
};

var goblinWhatGoldLines = {
  0: `- It's my treasure,`,
  1: ` MY treasure,`,
  2: ` envy me, I'm the richest man in the island!`,
  3: ` If you cry enough, I may give you a penny...`,
  4: ` HAHA!<br><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinNotMuch')">That's not much to be honest...</a>`,
};

var goblinNotMuchLines = {
  0: `What do you mean?`,
  1: ` It's a lot! The shopkeeper said that to me!`,
  2: ` The money that he gets from the pass is passed to ME,`,
  3: ` and I get RICH!<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('goblin','goblinTruth')">(Say the truth) Yeah but I got the pass for free...</a><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinBluff')">(Bluff) I have much more money than you, haha.</a>`,
};

var goblinBluffLines = {
  0: `- No,`,
  1: ` that's impossible,`,
  2: ` there can only be one richest man in the island,`,
  3: ` THAT'S IT.`,
  4: ` LET'S FIGHT, THE WINNER KEEPS ALL THE MONEY!<br><br>`,
  5: `The goblin's moss green skin color starts to turn into a boiling red color.<br><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Come on!</a>`,
};

var goblinTruthLines = {
  0: `- You're telling me that you entered MY cave WITHOUT GIVING ME MONEY?`,
  1: ` No, this can't happen,`,
  2: ` since you got here for free,`,
  3: ` YOU'LL HAVE TO TURN INTO MY MINION, FOREVER!`,
  4: ` GIVE UP, I AM UNBEATABLE!<br><br>`,
  5: `You defy the goblin, saying that if you defeat him, you can get to keep the treasure for yourself.<br><br>`,
  6: `- I DON'T CARE,`,
  7: ` PREPARE TO FEEL THE WRATH OF BARRETOS!!!<br><br>`,
  8: `The goblin's moss green skin color starts to turn into a boiling red color.<br><br>`,
  9: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Come on!</a>`,
};

var goblinComeOnLines = {
  0: `The goblin starts to come at your direction,`,
  1: ` its small legs make this process a little long,`,
  2: ` long enough to give time to pick up a rock from the ground.`,
  3: ` You throw it:<br><br>`,
  4: `Bullseye! The rock hits the goblin's face!`,
  5: ` It falls on the ground and starts crying...<br><br>`,
  6: `- Uff...`,
  7: ` Why did you do that?`,
  8: ` That's foul play!`,
  9: ` Go away!<br><br>`,
  10: `<a href="#" onclick="updateScreen('goblinCry','goblinMoney')">Take the money</a>`,
};

var goblinMoneyLines = {
  0: `You are not dumb.`,
  1: ` Money may help you with getting geared up,`,
  2: ` and you won the fight!`,
  3: ` you get the mediocre pile of money from the ground.<br><br>`,
  4: `<b>You got exactly 31 coins!</b><br><br>`,
  5: `You let the goblin crying at its cave,`,
  6: ` that guy is too annoying.`,
};

var goblinByeLines = {
  0: `- Bye, sucker,`,
  1: ` bring me something to eat next time!<br><br>`,
  2: `Who this guy think it is?`,
};

var castleLines = {
  0: `A big castle can be seen at the distance from the entire island,`,
  1: ` the main gate is open,`,
  2: ` you may enter it.<br><br>`,
  3: `<a href="#" onclick="updateScreen('bifurcation','castle')">Enter it</a>`,
};

var enterCastleLines = {
  0: `People walk by, ignoring you, the buildings appear boring, and nothing attracts your attention. <br><br>`,
  1: `At the end of the main street, you find yourself at a bifurcation:<br><br>`,
  2: `To the left, we have the king's palace<br>`,
  3: `To the right, a local shop which appear to have lots of goods<br><br>`,
  4: `Where do you want to go?<br><br>`,
  5: `<a href="#" onclick="updateScreen('king','palaceEnter')">To the king's palace</a><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">To the local store</a>`,
};

var palaceEnterFirstLines = {
  0: `You enter the palace without any problems, looks like this place doesn't need much guards to be peaceful, at the end of the room, you see a king: <br><br>`,
  1: `- Hello fellow citizen, or may I say... Stranger?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
};

var palaceEnterLines = {
  0: `Greetings again, stranger.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  2: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
};

var kingWhoAreYouLines = {
  0: `- I'm king Cyryenp, ruler of this kingdom, `,
  1: `my people were brought here by <i>Leshy</i>, and now are away from their family, `,
  2: `I serve as a guide for these poor souls who lost their home. <br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('king','kingMeetSameFate')">Did you meet the same fate?</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  5: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
};

var kingMeetSameFateLines = {
  0: `- Indeed, `,
  1: `I was the first one to get here, and got to spend my time alone for a long time, more people appeared here,`,
  2: ` though,`,
  3: ` and together,`,
  4: ` we built this kingdom to have a place to live.<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  6: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a> <br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
};

var kingGoHomeLines = {
  0: `You told him about waking up here without your memories. <br><br>`,
  1: `- Well,`,
  2: ` actually, I have an idea that may help you:`,
  3: ` <i>Leshy</i>,`,
  4: ` <i>the forest spirit</i> might have done this to you, <i>it</i> has brought so many others here,`,
  5: ` which are now residents of this unescapable island, but maybe,`,
  6: ` if you're brave enough, `,
  6: ` you can get <i>its</i> sick mischiefs to an end! <br><br>`,
  7: `<a href="#" onclick="updateScreen('king','kingHowDoThis')">How do I do this?</a>`,
};

var kingHowDoThisLines = {
  0: `- Regular weapons won't work against him,`,
  1: ` go to the shrine at southeast, you'll find an angel able to guide you better than me,`,
  2: ` my suggestion for now is to go to the shop near here and see if there's anything useful there,`,
  3: ` tell the shopkeeper I sent you there and he'll give you some help. <br><br>`,
  4: ` - Good luck,`,
  5: ` stranger. <br><br>`,
  6: ` The king just gave you a quest, you think there's nothing more to do other than trying.<br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
};

var kingByeLines = {
  0: `- So long, stranger. <br><br>`,
  1: `You exit the castle, inspired by seeing so many people like you living normally.<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
};

var kingGivePommelLines = {
  0: `- Hello again, stranger,`,
  1: ` how's your quest going?<br><br>`,
  2: `You tell him that you only need the pommel to finish the sword.<br><br>`,
  3: `- Speak no more.<br><br>`,
  4: `The king removes an ornament from his throne, and gives it to you:<br><br>`,
  5: `<b>You got the King's Pommel!</b><br><br>`,
  6: `<a href="#" onclick="updateScreen('kingPommelless','kingPommelPart2')">Finally!</a>`,
};

var kingPommelPart2Lines = {
  0: `- This pommel was the only part of the sword that we found,`,
  1: ` to keep it safe,`,
  2: ` I guarded it within my throne, but now`,
  3: ` it has a better use, the angel knows what to do now.<br><br>`,
  4: `You should go to the angel and finish this sword hunting.`,
};

var shopFirstLines = {
  0: `You enter the building and are greeted with a friendly shopkeeper: <br><br>`,
  1: `- Helllooooww, I'm Joobireu, the little wizard apprentice AND shopkeeper!`,
  2: ` I got a lot of stuff here, take a look!<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Broadsword (20 coins)</a><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopSticker')">Sticker (10 coins)</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shopPass')">Wall Pass (FREE!)</a><br><br>`,
  6: `<a href="#" onclick="updateScreen('king','palaceEnter')">Go to the palace</a>`,
};

var shopLines = {
  0: `- Hey! Take a look at my stuff!<br><br>`,
  1: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Broadsword (20 coins)</a><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shopSticker')">Sticker (10 coins)</a><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopPass')">Wall Pass (FREE!)</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('king','palaceEnter')">Go to the palace</a>`,
};

var shopBroadswordLines = {
  0: `- A steel broadsword, forged by the kingdom's best swordsmith:`,
  1: ` Kyle Kompos!<br><br>`,
  2: `Wanna buy it?<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopBroadswordYes')">Yes</a><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">No</a>`,
};

var shopBroadswordYesLines = {
  0: `- Katching! - Says the little wizard:<br><br>`,
  1: `<b>You got the Steel Broadsword!</b><br><br>`,
  2: `The sword is REALLY heavy, you know that you'll have problems with using it<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Better than nothing!</a>`,
};

var shopStickerLines = {
  0: `- A silly carrot sticker, dunno what would you do with it,`,
  1: ` it's funny, though!<br><br>`,
  2: `At the back of the card, you discover that someone named "Mittens" drew it.<br><br>`,
  3: `Wanna buy it?<br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopStickerYes')">Yes</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">No</a>`,
};

var shopStickerYesLines = {
  0: `- Katching! - Says the little wizard:<br><br>`,
  1: `<b>You got the Carrot Sticker!</b><br><br>`,
  2: `Without a place to glue it, you glue it to your clothing.<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Feeling stylish!</a>`,
};

var shopPassWOKingQuest = {
  0: `- A pass to the caves,`,
  1: ` it's free cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` poor lone guy...<br><br>`,
  4: `Sadly, the place is dangerous for citizens, and I can only give one to you with permission...<br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopPassWKingQuest = {
  0: `- A pass to the caves,`,
  1: ` it's free cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` Poor lone guy...<br><br>`,
  4: `- Oh, I get it,`,
  5: ` the king trusts you, then so do I, take it:<br><br>`,
  6: `<b>You got the Wall Pass!</b><br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopTooPoorLines = {
  0: `- You don't have enough money to buy that!<br><br>`,
  1: `- Sorry, I can't give credit...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopOnlyOnePerPersonLines = {
  0: `- Only one type of product per person!<br><br>`,
  1: `- Sorry, store rules...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var altarAbandonedLines = {
  0: `Your way takes you to an abandoned altar without anything apparent,`,
  1: ` upon getting closer, you find three empty notches, `,
  2: `maybe you need to place someting there?<br><br>`,
  3: `There's nothing more to investigate here.`,
};

var altarLines = {
  0: `- Welcome again,`,
  1: ` my child.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var altarFirstLines = {
  0: `- Hello little child,`,
  1: ` I see that the king has called me to help you with your quest of defeating the evil spirit <i>Leshy</i>.<br><br>`,
  2: `- As the king said, regular weapons won't work against <i>its</i> body,`,
  3: ` we will need to use fire against fire,`,
  4: ` a sword soaked with magic:`,
  5: ` <b>The Island Sword.</b><br><br>`,
  6: `- This altar once was a place to keep it safe, but time passed, and <i>Leshy</i> thought fast and got rid of it.`,
  7: ` But hope is not lost! The sword can't leave the island, so it must be here, and if not, its parts are.`,
  8: ` We just need to find them and take them here.<br><br>`,
  //WWYS
  9: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  10: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  11: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  12: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  13: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelParts2Lines = {
  0: `- I once heard the farmer talking about "planting metal",`,
  1: ` I don't know if that's useful,`,
  2: ` but it is surely worth a shot.<br><br>`,
  //WWYS
  //GeneralLines
};

var angelParts3Lines = {
  0: `- I felt a little bit of magic coming the west of the island,`,
  1: ` maybe someone powerful is keeping a part for itself!<br><br>`,
  //WWYS
  //GeneralLines
};

var angelParts1Lines = {
  0: `- Now that we have two parts,`,
  1: ` we only need the pommel, the main part of the sword's superpowers,`,
  2: ` go talk to the king,`,
  3: ` he knows where it is.<br><br>`,
  //WWYS
  //GeneralLines
};

var angelPartsBadFeelingLines = {
  0: `- We got the mightiest weapon of this island.`,
  1: ` But something feels...`,
  2: ` Off,`,
  3: ` what if just it is not enough to defeat <i>him</i>?`,
  4: ` I have a bad feeling about this,`,
  5: `  <i>Leshy</i> is dirty, and will do anything to kill anyone who bothers him.<br><br>`,
  //WWYS
  //GeneralLines
};

var angelPartsGeneralLines = {
  //Falas usadas nas três perguntas de onde estão as partes de espada
  0: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  1: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  2: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelFuseSwordPart1Lines = {
  0: `- We did it,`,
  1: ` my child!`,
  2: ` We got all the necessary pieces to refuse the Sword!<br><br>`,
  3: `- Now, place the parts at their notches and take a step back.<br><br>`,
  4: `<a href="#" onclick="updateScreen('altarlightbeam','altarFuseSword')">Do what they asked</a>`,
};

var angelFuseSwordPart2Lines = {
  0: `The angel retreats from the altar,`,
  1: `and after 5 steps of backing off,`,
  2: ` a giant light beam strucks the`,
  3: ` altar, making a deafening noise of a lightning, together with a blinding light...<br><br>`,
  4: `<a href="#" onclick="updateScreen('angel','altarFuseSwordAftermath')">And?</a>`,
};

var angelFuseSwordPart3Lines = {
  0: `The light beam disappears into thin air,`,
  1: ` and you're left with the so called blade capable of slaying anything.<br><br>`,
  2: `<b>You got The Island Sword!</b><br><br>`,
  3: `- There it is! In all of its glory!`,
  4: ` I'm grateful for your help, my child,`,
  5: ` you deserve it, keep it and use it to end this island's suffering.<br><br>`,
  //WWYS
};

var angelWhoAreYouLines = {
  0: `- I'm Maldio,`,
  1: ` Maldio the angel,`,
  2: ` I work here as a swordkeeper, but I failed my job... Now I stay here, waiting for someone to come and help with the swordfinding.<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelHowSwordDisappearLines = {
  0: `- I was playing RPG with my angel friends at the castle's tavern and,`,
  1: ` unfortunately,`,
  2: ` <i>Leshy</i> took the cue and stole the sword while I was away, and now it is gone,`,
  3: ` and no one helped me with finding it...<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  7: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelSearchSwordYourselfLines = {
  0: `- I don't have a fisic body! <br><br>`,
  1: `You think that this makes sense<br><br>`,
  2: `- But that's not the main problem, I am also a little shy...<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelByeLines = {
  0: `- Bye my child,`,
  1: ` good luck with the sword finding.`,
};

var cabinLines = {
  0: `You spot a small and miserable cabin at the edge of the island, the cabin has a skull hanged by the top of its only entrance.<br><br>`,
  1: `By the side, you notice a dead tree with a small script carved on its trunk.<br><br>`,
  //WWYD
  2: `<a href="#" onclick="updateScreen('empty','cabinEnter')">Enter the cabin</a><br>`,
  3: `<a href="#" onclick="updateScreen('cabin','cabinTree')">Investigate the tree</a>`,
};

var cabinLinesWOGoggles = {
  0: `Upon coming closer to the tree,`,
  1: ` the carving becomes clear,`,
  2: ` it's a text written:<br><br>`,
  3: `<b>You can't slay him.</b><br><br>`,
  4: `<a href="#" onclick="updateScreen('cabin','cabin')">Go back</a>`,
};

var cabinLinesWGoggles = {
  0: `Upon coming closer to the tree,`,
  1: ` the headache from using the goggles gets REALLY strong,`,
  2: ` but you can still see what's carved,`,
  3: ` it's a text:<br><br>`,
  4: `<b>You can slay him.</b><br><br>`,
  5: `<a href="#" onclick="updateScreen('cabin','cabin')">Go back</a>`,
};

var CabinEnterLines = {
  0: `You decided to enter the dark cabin,`,
  1: ` what really resides inside of it is still unknown.<br><br>`,
  2: `Inside of it, everything is pitch black,`,
  3: ` the ground is sticky,`,
  4: ` nothing moves,`,
  5: ` there isn't... Anything.`,
  6: ` Moments before going back outside,`,
  7: ` the door shuts, and you hear a voice from the darkness:<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshy','cabinFate')">Listen to it</a>`,
};

var leshyLostSoulLines = {
  0: `<i>- What do we have here...`,
  1: `<b><i> A lost soul.</b><br><br>`,
  2: `The entity pulls off a pendulum made out of sticks and starts to swing it.`,
  3: ` You can't look away from it,`,
  4: ` its movement,`,
  5: ` its form,`,
  6: ` its swiftness,`,
  7: ` it calms you down...<br><br>`,
  8: ` <b>You are not in control of yourself...</b><br><br>`,
  9: `<i>- I will end this quickly,`,
  10: `<i> I don't see any bad intentions coming from you...<br><br>`,
  //YAEH
};

var leshyWOGogglesLines = {
  0: `<i>- What do we have here...`,
  1: `<b><i> A brave warrior?</b><br><br>`,
  2: `The entity pulls off a pendulum made out of sticks and starts to swing it.`,
  3: ` You can't look away from it,`,
  4: ` its movement,`,
  5: ` its form,`,
  6: ` its swiftness,`,
  7: ` it calms you down...<br><br>`,
  8: ` <b>You are not in control of yourself...</b><br><br>`,
  9: `<i>- You thought that only your will was enough to end me?<br><br>`,
  10: `<i>Leshy</i> throws a dagger to your feet,`,
  11: ` you are forced take it, `,
  12: ` you start to point the dagger to your heart.<br><br>`,
  //YAEH
};

var leshyWGogglesLines = {
  0: `<i>- What do we have here...`,
  1: `<b><i> A brave warrior.</b><br><br>`,
  2: `The entity pulls off a pendulum made out of sticks and starts to swing it.`,
  3: ` You can't look away from it,`,
  4: ` its movement,`,
  5: ` its form,`,
  6: ` its swiftness,`,
  7: ` it calms you down...<br><br>`,
  8: ` <b>You are not in control of yourself...</b><br><br>`,
  9: `<i>- You thought that only your will was enough to end me?<br><br>`,
  10: `Your legs crumble,`,
  11: ` and you fall,`,
  12: ` straight into the ground,`,
  13: ` the goggles made you dizzy again,`,
  14: ` and the impact made you snap out of the control!<br><br>`,
  15: `<a href="#" onclick="updateScreen('leshySkull','leshyPassTest1')">Pull yourself together</a>`,
};

var leshySkullLines = {
  0: `<i>- I see, that you have something special,`,
  1: `<i> sadly, I have more than one trick.<br><br>`,
  2: `A skull with a candle across it appears, held by a gruesome hand.<br><br>`,
  3: `<i>- Burn.<br><br>`,
  4: `<a href="#" onclick="updateScreen('leshyBurn','leshyBurn')">Continue</a>`,
};

var leshyWODarkTunicLines = {
  0: `<i>Leshy</i> throws the skull at your feet,`,
  1: ` the sticky floor begins to burn,`,
  2: ` quickly spreading into your upper body.<br><br>`,
  3: `The heat is to much,`,
  4: ` you run to the door hoping that you can flee,`,
  5: ` but it won't budge,`,
  6: ` you just accept that you'll burn with this cabin,`,
  7: ` and luckily,`,
  8: ` with <i>Leshy</i> as well.<br><br>`,
};

var leshyWDarkTunicLines = {
  0: `<i>Leshy</i> throws the skull at your feet,`,
  1: ` the sticky floor begins to burn,`,
  2: ` quickly spreading into your upper body.<br><br>`,
  3: `The heat is to much,`,
  4: ` but the dark tunic absorbs the fire,`,
  5: ` rapidly disappearing after <i>Leshy's</i> killing attempt.<br><br>`,
  6: `<i>- I thought that they got rid, of this thing a long time ago...`,
  7: `<i> It doesn't matter, if you want it that badly,`,
  8: `<i> let's end this.<br><br>`,
  9: `<a href="#" onclick="updateScreen('empty','leshyTransform')">Continue</a>`,
};

var leshyTransformation = {
  0: `The pair of eyes disappear in the darkness.<br><br>`,
  1: `The deafening silence of the cabin soon turns into a loud orchestra of craking wood,`,
  2: ` as if it was being destroyed,`,
  3: ` plank by plank.`,
  4: ` The noise stops before you have time to process what was happening.<br><br>`,
  5: `.`,
  6: ` .`,
  7: ` .<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshyFinalForm','leshyFinalForm')">Face the enemy</a>`,
};

var leshyFinalFormLines = {
  0: `The small pair of eyes doesn't exist anymore.<br><br>`,
  1: `The putrid hand which held the skull doesn't exist anymore.<br><br>`,
  2: `Your enemy has changed,`,
  3: ` what before appeared to be a moving corpse,`,
  4: ` now is a colossal eye that lights the entire cabin with a dark green glow,`,
  5: ` making its presence more than obvious.<br><br>`,
  6: `The worst part,`,
  7: ` though,`,
  8: ` is that the monster's pupil isn't regular,`,
  9: ` something is moving inside of it,`,
  10: ` knocking from the inside,`,
  11: ` begging for freedom,`,
  12: ` that thing...<br><br>`,
  13: `<b>Is you.</b><br><br>`,
  14: `Even though your face is a mystery for yourself after you first arrived at the island,`,
  15: ` you can't think of anything else other than you being the one imprisioned by <i>Leshy's</i> evil intentions.<br><br>`,
  16: `You've found a way to exit the island,`,
  17: ` but one final thing is necessary to do so:<br><br>`,
  18: `<b>YOU NEED TO SAVE YOURSELF!</b><br><br>`,
  19: `<a href="#" onclick="updateScreen('empty','leshyFinalTest')">End this</a>`,
};

var leshyFinalDefeatLines = {
  0: `You hold your broadsword uptight,`,
  1: ` for some reason,`,
  2: ` it isn't as heavy as before,`,
  3: ` maybe it's the adrenalin,`,
  4: ` maybe it's the will to end everything,`,
  5: ` but in the end, it doesn't matter at all.<br><br>`,
  6: `You rush to the eye,`,
  7: ` it doesn't do anything other than staring at you,`,
  8: ` each step makes your strength grow bigger,`,
  9: ` as if all of the island's vitality was within you.<br><br>`,
  10: `<b>You slash the eye's pupil.</b><br><br>`,
  11: `The head of the imprisioned one starts to fall from their neck,`,
  12: ` <b>but so does yours.</b><br><br>`,
  13: `The feeling of having the island by your side was fake,`,
  14: ` the certainty that this fight was already won was fake,`,
  15: ` and maybe the chance of ending this suffering was never real at all.<br><br>`,
  16: `As your head hits the ground,`,
  17: ` you can only notice the green eye looking at you:<br><br>`,
  18: `- Killed by your own hands,`,
  19: ` the saddest way to end your life.<br><br>`,
  20: `A regular sword,`,
  21: ` even if sharpened to its limit,`,
  22: ` can't slice the transcendental.`,
  23: ` Only what's not from the material world can slice the unsliceable.<br><br>`,
  24: ` That's your final thought before you succumb to death's call.<br><br>`,
  //YAEH
};

var leshyFinalVictoryLines = {
  0: `You hold your magical blade uptight,`,
  1: ` the weapon is much more lighter than it looks,`,
  2: ` making slicing much more effective.<br><br>`,
  3: `You rush to the eye,`,
  4: ` it doesn't do anything other than staring at you,`,
  5: ` each step makes your strength grow bigger,`,
  6: ` as if all of the island's vitality was within you.<br><br>`,
  7: `<b>You slash the eye's pupil.</b><br><br>`,
  8: `The person inside the pupil begins to glow,`,
  9: ` while the rest of the eye starts to quickly rot before your eyes:<br><br>`,
  10: `- The Island sword...`,
  11: ` I underestimated you...<br><br>`,
  12: `<a href="#" onclick="updateScreen('leshyAftermath','leshyAftermath')">Victory at last...</a>`,
};

var leshyAftermathLines = {
  0: `Suddenly, the eye gets totally rotten,`,
  1: ` leaving a giant hole in the wall,`,
  2: ` the moonglow washes you`,
  3: ` and you take the moment to calm yourself,`,
  4: ` your "You" starts to come back,`,
  5: ` you start to remember your name,`,
  6: ` your history,`,
  7: ` your life,`,
  8: ` everything is back.<br><br>`,
  9: `<a href="#" onclick="updateScreen('leshyAngel','leshyAngel')">Something is approaching...</a>`,
};

var leshyAngelLines = {
  0: ` Maldio the angel phases through the cabin's walls after this conversation with yourself:<br><br>`,
  1: `- I can't believe it,`,
  2: ` you managed to defeat the evil spirit!`,
  3: ` You know what that means?<br><br>`,
  4: `You remain quiet,`,
  5: ` waiting for the answer...<br><br>`,
  6: `- It means that the island is free from <i>Leshy's</i> curse,`,
  7: ` and everyone can go back home,`,
  8: ` including you!<br><br>`,
  9: ` Words can't describe your feelings right now,`,
  10: ` you get up,`,
  11: ` excited to know how.<br><br>`,
  12: `- I won't make this long,`,
  13: ` I know that you're homesick.<br><br>`,
  14: `The angel proceeds into getting close to the <i>eye's</i> remains,`,
  15: ` you didn't even realize that they were there,`,
  16: ` Maldio starts to manipulate the small portions of magic that remained in the pile of nothing...<br><br>`,
  17: `- That's it,`,
  18: ` the portal is open,`,
  19: ` look behind you!<br><br>`,
  20: `<a href="#" onclick="updateScreen('finalDoor','ending')">Turn Around</a>`,
};

var endingLines = {
  0: `The end of your quest is nigh,`,
  1: ` all of your efforts paid off,`,
  2: ` and you feel a giant feeling of realization after the recovery of your memories.<br><br>`,
  3: `You turn around,`,
  4: ` you see a door,`,
  5: ` the same door that locked you into this place,`,
  6: ` but now,`,
  7: ` it is freeing you,`,
  8: ` you see your home on the other side,`,
  9: ` you turn around to say the last goodbye to Maldio,`,
  10: ` this wouldn't be possible without their help.<br><br>`,
  11: `<a href="#" onclick="winGame();">Go through the door</a>`,
};
