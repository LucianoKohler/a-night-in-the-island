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

//Para abrir o jogo

function updateStart(div) {
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
          .typeString(startLines[0])
          .pauseFor(smallDel)
          .typeString(startLines[1])
          .pauseFor(smallDel)
          .typeString(startLines[2])
          .pauseFor(smallDel)
          .typeString(startLines[3])
          .pauseFor(smallDel)
          .typeString(startLines[4])
          .pauseFor(smallDel)
          .typeString(startLines[5])
          .pauseFor(smallDel)
          .typeString(WWYD)
          .typeString(startLines[6])
          .typeString(startLines[7])
          .start();
      } else {
        startScreen.style.display = "none";
        gameScreen.style.display = "none";
        creditsScreen.style.display = "none";
        gameScreen.style.display = "grid";
      }
      break;
    case "howtoplay":
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      creditsScreen.style.display = "none";
      howToPlayScreen.style.display = "block";
      break;
    case "credits":
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      howToPlayScreen.style.display = "none";
      creditsScreen.style.display = "block";
      break;
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
      TW.typeString(chooseLines[0])
        .pauseFor(smallDel)
        .typeString(chooseLines[1])
        .start();
      break;

    case "well":
      if (goggles == false) {
        TW.typeString(wellLines[0])
          .pauseFor(smallDel)
          .typeString(WWYD)
          .typeString(wellLines[1])
          .typeString(wellLines[2])
          .start();
      } else {
        TW.typeString(wellLinesAfterGoggles[0])
          .pauseFor(smallDel)
          .typeString(wellLinesAfterGoggles[1])
          .pauseFor(smallDel)
          .typeString(wellLinesAfterGoggles[2])
          .pauseFor(smallDel)
          .typeString(wellLinesAfterGoggles[3])
          .start();
      }
      break;

    case "wellThrowCoin":
      if (coins >= 1) {
        TW.typeString(wellThrowCoinLines[0])
          .pauseFor(bigDel)
          .typeString(wellThrowCoinLines[1])
          .pauseFor(bigDel)
          .typeString(wellThrowCoinLines[2])
          .pauseFor(smallDel)
          .typeString(wellThrowCoinLines[3])
          .pauseFor(bigDel)
          .typeString(wellThrowCoinLines[4])
          .pauseFor(smallDel)
          .typeString(wellThrowCoinLines[5])
          .pauseFor(bigDel)
          .typeString(wellThrowCoinLines[6])
          .start();
        goggles = true;
        coins -= 1;
        updateInventory();
      } else {
        TW.typeString(wellThrowCoinWOCoinLines[0])
          .pauseFor(smallDel)
          .typeString(wellThrowCoinWOCoinLines[1])
          .pauseFor(smallDel)
          .typeString(wellThrowCoinWOCoinLines[2])
          .pauseFor(smallDel)
          .typeString(wellThrowCoinWOCoinLines[3])
          .start();
      }
      break;

    case "wellLookInside":
      TW.typeString(wellLookInsideLines[0])
        .pauseFor(smallDel)
        .typeString(wellLookInsideLines[1])
        .pauseFor(smallDel)
        .typeString(wellLookInsideLines[2])
        .pauseFor(smallDel)
        .typeString(wellLookInsideLines[3])
        .pauseFor(bigDel)
        .typeString(wellLookInsideLines[4])
        .start();
      break;

    case "forest":
      if (BearScared) {
        TW.typeString(forestBearScaredLines[0])
          .pauseFor(smallDel)
          .typeString(forestBearScaredLines[1])
          .pauseFor(smallDel)
          .typeString(forestBearScaredLines[2])
          .start();
      } else {
        TW.typeString(forestLines[0])
          .pauseFor(smallDel)
          .typeString(WWYD)
          .typeString(forestLines[1])
          .typeString(forestLines[2])
          .start();
      }
      break;

    case "enterForest":
      if (Stick) {
        //com graveto
        TW.typeString(enterForestLinesWithStick[0])
          .typeString(WWYD)
          .typeString(enterForestLinesWithStick[1])
          .typeString(enterForestLinesWithStick[2])
          .start();
      } else {
        //sem graveto
        Stick = true;
        TW.typeString(enterForestLinesWOStick[0])
          .pauseFor(smallDel)
          .typeString(enterForestLinesWOStick[1])
          .pauseFor(smallDel)
          .typeString(enterForestLinesWOStick[2])
          .pauseFor(bigDel)

          .typeString(WWYD)
          .typeString(enterForestLinesWOStick[3])
          .typeString(enterForestLinesWOStick[4])
          .start();
      }
      break;

    case "forestBear":
      if (broadsword == true || islandSword == true) {
        TW.typeString(ForestBearWSwordLines[0])
          .pauseFor(smallDel)
          .typeString(ForestBearWSwordLines[1])
          .pauseFor(bigDel)
          .typeString(ForestBearWSwordLines[2])
          .pauseFor(smallDel)
          .typeString(ForestBearWSwordLines[3])
          .pauseFor(smallDel)
          .typeString(ForestBearWSwordLines[4])
          .pauseFor(bigDel)
          .typeString(ForestBearWSwordLines[5])
          .pauseFor(smallDel)
          .typeString(ForestBearWSwordLines[6])
          .pauseFor(bigDel)
          .typeString(ForestBearWSwordLines[7])
          .pauseFor(smallDel)
          .typeString(ForestBearWSwordLines[8])
          .pauseFor(smallDel)
          .typeString(ForestBearWSwordLines[9])
          .start();
        BearScared = true;

        document.getElementsByClassName("pier")[0].classList.remove("disabled");
      } else {
        TW.typeString(ForestBearWOSwordLines[0])
          .pauseFor(smallDel)
          .typeString(ForestBearWOSwordLines[1])
          .pauseFor(bigDel)
          .typeString(ForestBearWOSwordLines[2])
          .pauseFor(smallDel)
          .typeString(ForestBearWOSwordLines[3])
          .pauseFor(smallDel)
          .typeString(ForestBearWOSwordLines[4])
          .pauseFor(smallDel)
          .typeString(ForestBearWOSwordLines[5])
          .pauseFor(smallDel)
          .typeString(ForestBearWOSwordLines[6])
          .typeString(ForestBearWOSwordLines[7])
          .start();
      }
      break;

    case "pier":
      TW.typeString(pierLines[0])
        .pauseFor(smallDel)
        .typeString(WWYD)
        .typeString(pierLines[1])
        .typeString(pierLines[2])
        .start();
      break;

    case "pierStareSea":
      TW.typeString(pierStareSeaLines[0])
        .pauseFor(smallDel)
        .typeString(pierStareSeaLines[1])
        .pauseFor(bigDel)
        .typeString(pierStareSeaLines[2])
        .pauseFor(smallDel)
        .typeString(pierStareSeaLines[3])
        .pauseFor(bigDel)
        .typeString(pierStareSeaLines[4])
        .pauseFor(bigDel)
        .typeString(pierStareSeaLines[5])
        .pauseFor(hugeDel)
        .typeString(pierStareSeaLines[6])
        .start();
      break;

    case "island":
      if (islandEntered == true) {
        TW.typeString(islandLines[0])
          .pauseFor(smallDel)
          .typeString(WWYD)
          .typeString(islandLines[1])
          .typeString(islandLines[2])
          .start();

        place = "island";
        UpdateColors();
      } else {
        TW.typeString(islandFirstLines[0])
          .pauseFor(smallDel)
          .typeString(islandFirstLines[1])
          .pauseFor(bigDel)
          .typeString(islandFirstLines[2])
          .pauseFor(smallDel)
          .typeString(islandFirstLines[3])
          .pauseFor(bigDel)
          .typeString(islandFirstLines[4])
          .pauseFor(smallDel)
          .typeString(islandFirstLines[5])
          .pauseFor(smallDel)
          .typeString(islandFirstLines[6])
          .pauseFor(smallDel)
          .typeString(islandFirstLines[7])
          .pauseFor(smallDel)
          .typeString(islandFirstLines[8])
          .pauseFor(bigDel)
          .typeString(islandFirstLines[9])
          .pauseFor(hugeDel)
          .typeString(islandFirstLines[10])
          .pauseFor(hugeDel)
          .typeString(islandFirstLines[11])
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
      TW.typeString(islandRowHorizonPart1Lines[0])
        .pauseFor(smallDel)
        .typeString(islandRowHorizonPart1Lines[1])
        .pauseFor(smallDel)
        .typeString(islandRowHorizonPart1Lines[2])
        .start();
      break;

    case "islandRowHorizonPart2":
      TW.typeString(islandRowHorizonPart2Lines[0])
        .pauseFor(smallDel)
        .typeString(islandRowHorizonPart2Lines[1])
        .pauseFor(smallDel)
        .typeString(islandRowHorizonPart2Lines[2])
        .pauseFor(bigDel)
        .typeString(islandRowHorizonPart2Lines[3])
        .pauseFor(smallDel)
        .typeString(islandRowHorizonPart2Lines[4])
        .pauseFor(bigDel)
        .typeString(WWYD)
        .typeString(islandRowHorizonPart2Lines[5])
        .typeString(islandRowHorizonPart2Lines[6])
        .start();
      place = "pier";
      UpdateColors();
      break;

    case "islandAppreciateLandscape":
      TW.typeString(islandAppreciateLandscapeLines[0])
        .pauseFor(bigDel)
        .typeString(islandAppreciateLandscapeLines[1])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[2])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[3])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[4])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[5])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[6])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[7])
        .pauseFor(bigDel)
        .typeString(islandAppreciateLandscapeLines[8])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[9])
        .pauseFor(smallDel)
        .typeString(islandAppreciateLandscapeLines[10])
        .start();
      break;

    case "altar":
      if (kingQuest == true && angelVisited == true) {
        TW.typeString(altarLines[0])
          .pauseFor(smallDel)
          .typeString(altarLines[1])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(altarLines[2])
          .typeString(altarLines[3])
          .typeString(altarLines[4])
          .typeString(altarLines[5])
          .typeString(altarLines[6])
          .start();
      } else if (kingQuest == true) {
        TW.typeString(altarFirstLines[0])
          .pauseFor(smallDel)
          .typeString(altarFirstLines[1])
          .pauseFor(bigDel)
          .typeString(altarFirstLines[2])
          .pauseFor(smallDel)
          .typeString(altarFirstLines[3])
          .pauseFor(smallDel)
          .typeString(altarFirstLines[4])
          .pauseFor(smallDel)
          .typeString(altarFirstLines[5])
          .pauseFor(bigDel)
          .typeString(altarFirstLines[6])
          .pauseFor(smallDel)
          .typeString(altarFirstLines[7])
          .pauseFor(smallDel)
          .typeString(altarFirstLines[8])
          .pauseFor(bigDel)
          .typeString(WWYS)
          .typeString(altarFirstLines[9])
          .typeString(altarFirstLines[10])
          .typeString(altarFirstLines[11])
          .typeString(altarFirstLines[12])
          .typeString(altarFirstLines[13])
          .start();
        angelVisited = true;
      } else {
        TW.typeString(altarAbandonedLines[0])
          .pauseFor(smallDel)
          .typeString(altarAbandonedLines[1])
          .pauseFor(smallDel)
          .typeString(altarAbandonedLines[2])
          .pauseFor(bigDel)
          .typeString(altarAbandonedLines[3])
          .start();
      }
      break;

    case "angelAskAboutQuest":
      if (sword2 == false) {
        TW.typeString(angelParts2Lines[0])
          .pauseFor(smallDel)
          .typeString(angelParts2Lines[1])
          .pauseFor(smallDel)
          .typeString(angelParts2Lines[2])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(angelPartsGeneralLines[0])
          .typeString(angelPartsGeneralLines[1])
          .typeString(angelPartsGeneralLines[2])
          .typeString(angelPartsGeneralLines[3])
          .start();
      } else if (sword3 == false) {
        TW.typeString(angelParts3Lines[0])
          .pauseFor(smallDel)
          .typeString(angelParts3Lines[1])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(angelPartsGeneralLines[0])
          .typeString(angelPartsGeneralLines[1])
          .typeString(angelPartsGeneralLines[2])
          .typeString(angelPartsGeneralLines[3])
          .start();
      } else if (sword1 == false) {
        TW.typeString(angelParts1Lines[0])
          .pauseFor(smallDel)
          .typeString(angelParts1Lines[1])
          .pauseFor(smallDel)
          .typeString(angelParts1Lines[2])
          .pauseFor(smallDel)
          .typeString(angelParts1Lines[3])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(angelPartsGeneralLines[0])
          .typeString(angelPartsGeneralLines[1])
          .typeString(angelPartsGeneralLines[2])
          .typeString(angelPartsGeneralLines[3])
          .start();
      } else if (islandSword == false) {
        TW.typeString(angelFuseSwordPart1Lines[0])
          .pauseFor(smallDel)
          .typeString(angelFuseSwordPart1Lines[1])
          .pauseFor(smallDel)
          .typeString(angelFuseSwordPart1Lines[2])
          .pauseFor(smallDel)
          .typeString(angelFuseSwordPart1Lines[3])
          .pauseFor(smallDel)
          .typeString(angelFuseSwordPart1Lines[4])
          .start();
      } else {
        TW.typeString(angelPartsBadFeelingLines[0])
          .pauseFor(smallDel)
          .typeString(angelPartsBadFeelingLines[1])
          .pauseFor(smallDel)
          .typeString(angelPartsBadFeelingLines[2])
          .pauseFor(bigDel)
          .typeString(angelPartsBadFeelingLines[3])
          .pauseFor(smallDel)
          .typeString(angelPartsBadFeelingLines[4])
          .pauseFor(smallDel)
          .typeString(angelPartsBadFeelingLines[5])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(angelPartsGeneralLines[0])
          .typeString(angelPartsGeneralLines[1])
          .typeString(angelPartsGeneralLines[2])
          .typeString(angelPartsGeneralLines[3])
          .start();
      }
      break;

    case "altarFuseSword":
      TW.typeString(angelFuseSwordPart2Lines[0])
        .pauseFor(smallDel)
        .typeString(angelFuseSwordPart2Lines[1])
        .pauseFor(smallDel)
        .typeString(angelFuseSwordPart2Lines[2])
        .pauseFor(smallDel)
        .typeString(angelFuseSwordPart2Lines[3])
        .pauseFor(bigDel)
        .typeString(angelFuseSwordPart2Lines[4])
        .start();
      break;

    case "altarFuseSwordAftermath":
      TW.typeString(angelFuseSwordPart3Lines[0])
        .pauseFor(smallDel)
        .typeString(angelFuseSwordPart3Lines[1])
        .pauseFor(bigDel)
        .typeString(angelFuseSwordPart3Lines[2])
        .pauseFor(bigDel)
        .typeString(angelFuseSwordPart3Lines[3])
        .pauseFor(smallDel)
        .typeString(angelFuseSwordPart3Lines[4])
        .pauseFor(smallDel)
        .typeString(angelFuseSwordPart3Lines[5])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(angelPartsGeneralLines[0])
        .typeString(angelPartsGeneralLines[1])
        .typeString(angelPartsGeneralLines[2])
        .typeString(angelPartsGeneralLines[3])
        .start();

      FuseSword();
      break;

    case "angelWhoAreYou":
      TW.typeString(angelWhoAreYouLines[0])
        .pauseFor(smallDel)
        .typeString(angelWhoAreYouLines[1])
        .pauseFor(smallDel)
        .typeString(angelWhoAreYouLines[2])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(angelWhoAreYouLines[3])
        .typeString(angelWhoAreYouLines[4])
        .typeString(angelWhoAreYouLines[5])
        .typeString(angelWhoAreYouLines[6])
        .start();
      break;

    case "angelHowSwordDisappear":
      TW.typeString(angelHowSwordDisappearLines[0])
        .pauseFor(smallDel)
        .typeString(angelHowSwordDisappearLines[1])
        .pauseFor(smallDel)
        .typeString(angelHowSwordDisappearLines[2])
        .pauseFor(smallDel)
        .typeString(angelHowSwordDisappearLines[3])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(angelHowSwordDisappearLines[4])
        .typeString(angelHowSwordDisappearLines[5])
        .typeString(angelHowSwordDisappearLines[6])
        .typeString(angelHowSwordDisappearLines[7])
        .start();
      break;

    case "angelSearchSwordYourself":
      TW.typeString(angelSearchSwordYourselfLines[0])
        .pauseFor(smallDel)
        .typeString(angelSearchSwordYourselfLines[1])
        .pauseFor(smallDel)
        .typeString(angelSearchSwordYourselfLines[2])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(angelSearchSwordYourselfLines[3])
        .typeString(angelSearchSwordYourselfLines[4])
        .typeString(angelSearchSwordYourselfLines[5])
        .typeString(angelSearchSwordYourselfLines[6])
        .start();
      break;

    case "angelBye":
      TW.typeString(angelByeLines[0])
        .pauseFor(smallDel)
        .typeString(angelByeLines[1])
        .start();
      break;

    case "castle":
      if (castleEntered == false) {
        TW.typeString(castleLines[0])
          .pauseFor(smallDel)
          .typeString(castleLines[1])
          .pauseFor(smallDel)
          .typeString(castleLines[2])
          .pauseFor(smallDel)
          .typeString(castleLines[3])
          .start();
        castleEntered = true;
      } else {
        TW.typeString(enterCastleLines[0])
          .pauseFor(bigDel)
          .typeString(enterCastleLines[1])
          .pauseFor(smallDel)
          .typeString(enterCastleLines[2])
          .pauseFor(smallDel)
          .typeString(enterCastleLines[3])
          .pauseFor(smallDel)
          .typeString(enterCastleLines[4])
          .typeString(enterCastleLines[5])
          .typeString(enterCastleLines[6])
          .start();
      }
      break;

    case "palaceEnter":
      if (palaceEntered == false) {
        TW.typeString(palaceEnterFirstLines[0])
          .pauseFor(bigDel)
          .typeString(palaceEnterFirstLines[1])
          .pauseFor(bigDel)
          .typeString(WWYS)
          .typeString(palaceEnterFirstLines[2])
          .typeString(palaceEnterFirstLines[3])
          .typeString(palaceEnterFirstLines[4])
          .typeString(palaceEnterFirstLines[5])
          .start();
        palaceEntered = true;
      } else if (sword1 == false && sword2 == true && sword3 == true) {
        TW.typeString(kingGivePommelLines[0])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[1])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[2])
          .pauseFor(bigDel)
          .typeString(kingGivePommelLines[3])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[4])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[5])
          .pauseFor(bigDel)
          .typeString(kingGivePommelLines[6])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[7])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[8])
          .pauseFor(smallDel)
          .typeString(kingGivePommelLines[9])
          .pauseFor(bigDel)
          .typeString(kingGivePommelLines[10])
          .start();
      } else {
        TW.typeString(palaceEnterLines[0])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(palaceEnterLines[1])
          .typeString(palaceEnterLines[2])
          .typeString(palaceEnterLines[3])
          .typeString(palaceEnterLines[4])
          .start();
      }
      break;

    case "kingPommelPart2":
      TW.typeString(kingPommelPart2Lines[0])
        .pauseFor(smallDel)
        .typeString(kingPommelPart2Lines[1])
        .pauseFor(smallDel)
        .typeString(kingPommelPart2Lines[2])
        .pauseFor(smallDel)
        .typeString(kingPommelPart2Lines[3])
        .pauseFor(smallDel)
        .typeString(kingPommelPart2Lines[4])
        .start();
      sword1 = true;
      updateInventory();
      break;

    case "kingWhoAreYou":
      TW.typeString(kingWhoAreYouLines[0])
        .pauseFor(smallDel)
        .typeString(kingWhoAreYouLines[1])
        .pauseFor(smallDel)
        .typeString(kingWhoAreYouLines[2])
        .pauseFor(bigDel)
        .typeString(WWYS)
        .typeString(kingWhoAreYouLines[3])
        .typeString(kingWhoAreYouLines[4])
        .typeString(kingWhoAreYouLines[5])
        .typeString(kingWhoAreYouLines[6])
        .start();
      break;

    case "kingMeetSameFate":
      TW.typeString(kingMeetSameFateLines[0])
        .pauseFor(smallDel)
        .typeString(kingMeetSameFateLines[1])
        .pauseFor(smallDel)
        .typeString(kingMeetSameFateLines[2])
        .pauseFor(smallDel)
        .typeString(kingMeetSameFateLines[3])
        .pauseFor(smallDel)
        .typeString(kingMeetSameFateLines[4])
        .pauseFor(bigDel)
        .typeString(WWYS)
        .typeString(kingMeetSameFateLines[5])
        .typeString(kingMeetSameFateLines[6])
        .typeString(kingMeetSameFateLines[7])
        .start();
      break;

    case "kingGoHome":
      TW.typeString(kingGoHomeLines[0])
        .pauseFor(bigDel)
        .typeString(kingGoHomeLines[1])
        .pauseFor(smallDel)
        .typeString(kingGoHomeLines[2])
        .pauseFor(smallDel)
        .typeString(kingGoHomeLines[3])
        .pauseFor(smallDel)
        .typeString(kingGoHomeLines[4])
        .pauseFor(smallDel)
        .typeString(kingGoHomeLines[5])
        .pauseFor(smallDel)
        .typeString(kingGoHomeLines[6])
        .pauseFor(hugeDel)
        .typeString(kingGoHomeLines[7])
        .start();
      break;

    case `kingHowDoThis`:
      TW.typeString(kingHowDoThisLines[0])
        .pauseFor(smallDel)
        .typeString(kingHowDoThisLines[1])
        .pauseFor(smallDel)
        .typeString(kingHowDoThisLines[2])
        .pauseFor(smallDel)
        .typeString(kingHowDoThisLines[3])
        .pauseFor(bigDel)
        .typeString(kingHowDoThisLines[4])
        .pauseFor(bigDel)
        .typeString(kingHowDoThisLines[5])
        .pauseFor(hugeDel)
        .typeString(kingHowDoThisLines[6])
        .pauseFor(smallDel)
        .typeString(kingHowDoThisLines[7])
        .start();
      kingQuest = true;
      break;

    case "kingBye":
      TW.typeString(kingByeLines[0])
        .pauseFor(smallDel)
        .typeString(kingByeLines[1])
        .typeString(kingByeLines[2])
        .start();
      break;

    case "shop":
      if (shopEntered == true) {
        TW.typeString(shopLines[0])
          .pauseFor(smallDel)
          .typeString(shopLines[1])
          .typeString(shopLines[2])
          .typeString(shopLines[3])
          .typeString(shopLines[4])
          .start();
      } else {
        TW.typeString(shopFirstLines[0])
          .pauseFor(smallDel)
          .typeString(shopFirstLines[1])
          .pauseFor(smallDel)
          .typeString(shopFirstLines[2])
          .pauseFor(smallDel)
          .typeString(shopFirstLines[3])
          .typeString(shopFirstLines[4])
          .typeString(shopFirstLines[5])
          .typeString(shopFirstLines[6])
          .start();
        shopEntered = true;
      }
      break;

    case "shopBroadsword":
      TW.typeString(shopBroadswordLines[0])
        .pauseFor(smallDel)
        .typeString(shopBroadswordLines[1])
        .pauseFor(bigDel)
        .typeString(shopBroadswordLines[2])
        .typeString(shopBroadswordLines[3])
        .typeString(shopBroadswordLines[4])
        .start();
      break;

    case "shopSticker":
      TW.typeString(shopStickerLines[0])
        .pauseFor(smallDel)
        .typeString(shopStickerLines[1])
        .pauseFor(bigDel)
        .typeString(shopStickerLines[2])
        .pauseFor(smallDel)
        .typeString(shopStickerLines[3])
        .typeString(shopStickerLines[4])
        .typeString(shopStickerLines[5])
        .start();
      break;

    case "shopBroadswordYes":
      if (coins >= 20) {
        TW.typeString(shopBroadswordYesLines[0])
          .pauseFor(smallDel)
          .typeString(shopBroadswordYesLines[1])
          .pauseFor(bigDel)
          .typeString(shopBroadswordYesLines[2])
          .pauseFor(smallDel)
          .typeString(shopBroadswordYesLines[3])
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
        TW.typeString(shopStickerYesLines[0])
          .pauseFor(smallDel)
          .typeString(shopStickerYesLines[1])
          .pauseFor(bigDel)
          .typeString(shopStickerYesLines[2])
          .pauseFor(smallDel)
          .typeString(shopStickerYesLines[3])
          .start();
        sticker = true;
        coins -= 10;
        updateInventory();
      } else {
        updateScreen("shop", "shopTooPoor");
      }
      break;
    case "shopTooPoor":
      TW.typeString(shopTooPoorLines[0])
        .pauseFor(smallDel)
        .typeString(shopTooPoorLines[1])
        .pauseFor(smallDel)
        .typeString(shopTooPoorLines[2])
        .start();
      break;

    case "shopOnlyOnePerPerson":
      TW.typeString(shopOnlyOnePerPersonLines[0])
        .pauseFor(smallDel)
        .typeString(shopOnlyOnePerPersonLines[1])
        .pauseFor(smallDel)
        .typeString(shopOnlyOnePerPersonLines[2])
        .start();
      break;

    case "shopPass":
      if (kingQuest == false) {
        TW.typeString(shopPassWOKingQuest[0])
          .pauseFor(smallDel)
          .typeString(shopPassWOKingQuest[1])
          .pauseFor(smallDel)
          .typeString(shopPassWOKingQuest[2])
          .pauseFor(smallDel)
          .typeString(shopPassWOKingQuest[3])
          .pauseFor(bigDel)
          .typeString(shopPassWOKingQuest[4])
          .typeString(shopPassWOKingQuest[5])
          .start();
      } else {
        TW.typeString(shopPassWKingQuest[0])
          .pauseFor(smallDel)
          .typeString(shopPassWKingQuest[1])
          .pauseFor(smallDel)
          .typeString(shopPassWKingQuest[2])
          .pauseFor(smallDel)
          .typeString(shopPassWKingQuest[3])
          .pauseFor(bigDel)
          .typeString(shopPassWKingQuest[4])
          .pauseFor(smallDel)
          .typeString(shopPassWKingQuest[5])
          .pauseFor(bigDel)
          .typeString(shopPassWKingQuest[6])
          .typeString(shopPassWKingQuest[7])
          .start();
        pass = 1;
        updateInventory();
      }
      break;

    case "weirdRocks":
      if (sword3 == false) {
        TW.typeString(weirdRocksLines[0])
          .pauseFor(smallDel)
          .typeString(weirdRocksLines[1])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(weirdRocksLines[2])
          .typeString(weirdRocksLines[3])
          .start();
      } else {
        TW.typeString(weirdRocksAngryRox[0])
          .pauseFor(bigDel)
          .typeString(weirdRocksAngryRox[1])
          .pauseFor(bigDel)
          .typeString(weirdRocksAngryRox[2])
          .start();
      }
      break;

    case "weirdRocksWhoAreYou":
      TW.typeString(weirdRocksWhoAreYouLines[0])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(weirdRocksWhoAreYouLines[1])
        .typeString(weirdRocksWhoAreYouLines[2])
        .start();
      break;

    case "weirdRocksCabin":
      TW.typeString(weirdRocksCabinLines[0])
        .pauseFor(bigDel)
        .typeString(weirdRocksCabinLines[1])
        .pauseFor(2000)
        .typeString(weirdRocksCabinLines[2])
        .start();
      break;

    case "weirdRocksEye":
      TW.typeString(weirdRocksEyeLines[0])
        .pauseFor(bigDel)
        .typeString(weirdRocksEyeLines[1])
        .pauseFor(bigDel)
        .typeString(WWYS)
        .typeString(weirdRocksEyeLines[2])
        .typeString(weirdRocksEyeLines[3])
        .start();
      break;

    case "weirdRocksNice":
      TW.typeString(weirdRocksNiceLines[0])
        .pauseFor(bigDel)
        .typeString(WWYD)
        .typeString(weirdRocksNiceLines[1])
        .typeString(weirdRocksNiceLines[2])
        .start();
      break;

    case "weirdRocksNotStealEye":
      TW.typeString(weirdRocksNotStealEyeLines[0])
        .pauseFor(smallDel)
        .typeString(weirdRocksNotStealEyeLines[1])
        .start();
      break;
    case "weirdRocksStealEye":
      TW.typeString(weirdRocksStealEye[0])
        .pauseFor(bigDel)
        .typeString(weirdRocksStealEye[1])
        .pauseFor(bigDel)
        .typeString(weirdRocksStealEye[2])
        .start();

      sword3 = true;
      updateInventory();

      break;

    case "farm":
      if (sword2 == false) {
        TW.typeString(farmLines[0])
          .pauseFor(bigDel)
          .typeString(farmLines[1])
          .pauseFor(bigDel)
          .typeString(WWYS)
          .typeString(farmLines[2])
          .typeString(farmLines[3])
          .typeString(farmLines[4])
          .start();
      } else {
        TW.typeString(farmLinesHilt[0])
          .pauseFor(bigDel)
          .typeString(farmLinesHilt[1])
          .start();
      }
      break;

    case "farmSeeCrops":
      if (sticker == false) {
        TW.typeString(farmLinesWOSticker[0])
          .pauseFor(bigDel)
          .typeString(farmLinesWOSticker[1])
          .pauseFor(2000)
          .typeString(WWYS)
          .typeString(farmLinesWOSticker[2])
          .typeString(farmLinesWOSticker[3])
          .start();
      } else {
        TW.typeString(farmLinesWSticker[0])
          .pauseFor(smallDel)
          .typeString(farmLinesWSticker[1])
          .pauseFor(smallDel)
          .typeString(farmLinesWSticker[2])
          .pauseFor(smallDel)
          .typeString(farmLinesWSticker[3])
          .pauseFor(bigDel)
          .typeString(farmLinesWSticker[4])
          .pauseFor(bigDel)
          .typeString(farmLinesWSticker[5])
          .start();
      }
      break;

    case "farmMetal":
      TW.typeString(farmLinesMetal[0])
        .pauseFor(2000)
        .typeString(farmLinesMetal[1])
        .pauseFor(bigDel)
        .typeString(WWYS)
        .typeString(farmLinesMetal[2])
        .typeString(farmLinesMetal[3])
        .start();
      break;

    case "farmBye":
      TW.typeString(farmLinesBye[0])
        .pauseFor(hugeDel)
        .typeString(farmLinesBye[1])
        .start();
      break;

    case "farmApproach":
      TW.typeString(farmLinesApproach[0])
        .pauseFor(bigDel)
        .typeString(farmLinesApproach[1])
        .pauseFor(hugeDel)
        .typeString(farmLinesApproach[2])
        .pauseFor(bigDel)
        .typeString(farmLinesApproach[3])
        .pauseFor(2000)
        .typeString(farmLinesApproach[4])
        .start();
      sword2 = true;
      updateInventory();
      break;

    case "wall":
      if (pass == 0) {
        //Se não tem
        TW.typeString(wallLines[0])
          .pauseFor(bigDel)
          .typeString(wallLines[1])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(wallLines[3])
          .typeString(wallLines[4])
          .typeString(wallLines[5])
          .start();
      } else if (pass == 1) {
        //Se tem, mas não usou
        TW.typeString(wallLines[0])
          .pauseFor(bigDel)
          .typeString(wallLines[1])
          .pauseFor(smallDel)
          .typeString(WWYS)
          .typeString(wallLines[2])
          .typeString(wallLines[3])
          .typeString(wallLines[4])
          .typeString(wallLines[5])
          .start();
      } else {
        //Se tem E já usou
        TW.typeString(wallAlreadyUsedPassLines[0])
          .pauseFor(bigDel)
          .typeString(wallAlreadyUsedPassLines[1])
          .pauseFor(bigDel)
          .typeString(wallAlreadyUsedPassLines[2])
          .start();
      }
      break;

    case "wallUsePass":
      TW.typeString(wallUsePassLines[0])
        .pauseFor(bigDel)
        .typeString(wallUsePassLines[1])
        .pauseFor(hugeDel)
        .typeString(wallUsePassLines[2])
        .pauseFor(bigDel)
        .typeString(wallUsePassLines[3])
        .start();
      pass = 2;
      updateInventory();
      document.getElementsByClassName("cave")[0].classList.remove("disabled");
      document.getElementsByClassName("cave")[1].classList.remove("disabled");
      break;

    case "wallWhatPass":
      TW.typeString(wallWhatPassLines[0])
        .pauseFor(bigDel)
        .typeString(WWYS)
        .typeString(wallWhatPassLines[1])
        .typeString(wallWhatPassLines[2])
        .start();
      break;

    case "wallBeyondWall":
      TW.typeString(wallBeyondWallLines[0])
        .pauseFor(bigDel)
        .typeString(WWYS)
        .typeString(wallBeyondWallLines[1])
        .typeString(wallBeyondWallLines[2])
        .start();
      break;

    case "wallBye":
      TW.typeString(wallByeLines[0])
        .pauseFor(bigDel)
        .typeString(wallByeLines[1])
        .start();
      break;

    case "cave":
      TW.typeString(caveLines[0])
        .pauseFor(smallDel)
        .typeString(caveLines[1])
        .pauseFor(smallDel)
        .typeString(caveLines[2])
        .start();
      break;

    case "goblin":
      if (goblinGotMoney == false) {
        if (goblinVisited == false) {
          TW.typeString(goblinFirstLines[0])
            .pauseFor(smallDel)
            .typeString(goblinFirstLines[1])
            .pauseFor(smallDel)
            .typeString(goblinFirstLines[2])
            .pauseFor(smallDel)
            .typeString(goblinFirstLines[3])
            .pauseFor(smallDel)
            .typeString(goblinFirstLines[4])
            .pauseFor(smallDel)
            .typeString(WWYS)
            .typeString(goblinFirstLines[5])
            .typeString(goblinFirstLines[6])
            .typeString(goblinFirstLines[7])
            .start();
          goblinVisited = true;
        } else {
          TW.typeString(goblinLines[0])
            .pauseFor(smallDel)
            .typeString(goblinLines[1])
            .pauseFor(smallDel)
            .typeString(WWYS)
            .typeString(goblinLines[2])
            .typeString(goblinLines[3])
            .typeString(goblinLines[4])
            .start();
        }
      } else {
        TW.typeString(goblinAfterGotMoneyLines[0])
          .pauseFor(smallDel)
          .typeString(goblinAfterGotMoneyLines[1])
          .pauseFor(smallDel)
          .typeString(goblinAfterGotMoneyLines[2])
          .pauseFor(bigDel)
          .typeString(goblinAfterGotMoneyLines[3])
          .pauseFor(smallDel)
          .typeString(goblinAfterGotMoneyLines[4])
          .start();
      }

      break;

    case "goblinWhoAreYou":
      TW.typeString(goblinWhoAreYouLines[0])
        .pauseFor(750)
        .typeString(goblinWhoAreYouLines[1])
        .pauseFor(750)
        .typeString(goblinWhoAreYouLines[2])
        .pauseFor(750)
        .typeString(goblinWhoAreYouLines[3])
        .pauseFor(750)
        .typeString(goblinWhoAreYouLines[4])
        .typeString(goblinWhoAreYouLines[5])
        .pauseFor(smallDel)
        .typeString(goblinWhoAreYouLines[6])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(goblinWhoAreYouLines[7])
        .typeString(goblinWhoAreYouLines[8])
        .start();
      break;

    case "goblinWhatGold":
      TW.typeString(goblinWhatGoldLines[0])
        .pauseFor(smallDel)
        .typeString(goblinWhatGoldLines[1])
        .pauseFor(smallDel)
        .typeString(goblinWhatGoldLines[2])
        .pauseFor(smallDel)
        .typeString(goblinWhatGoldLines[3])
        .pauseFor(smallDel)
        .typeString(goblinWhatGoldLines[4])
        .pauseFor(smallDel)
        .typeString(goblinWhatGoldLines[5])
        .start();
      break;

    case "goblinNotMuch":
      TW.typeString(goblinNotMuchLines[0])
        .pauseFor(smallDel)
        .typeString(goblinNotMuchLines[1])
        .pauseFor(smallDel)
        .typeString(goblinNotMuchLines[2])
        .pauseFor(smallDel)
        .typeString(goblinNotMuchLines[3])
        .pauseFor(smallDel)
        .typeString(WWYS)
        .typeString(goblinNotMuchLines[4])
        .typeString(goblinNotMuchLines[5])
        .start();
      break;

    case "goblinTruth":
      TW.typeString(goblinTruthLines[0])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[1])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[2])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[3])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[4])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[5])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[6])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[7])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[8])
        .pauseFor(smallDel)
        .typeString(goblinTruthLines[9])
        .start();
      break;

    case "goblinBluff":
      TW.typeString(goblinBluffLines[0])
        .pauseFor(smallDel)
        .typeString(goblinBluffLines[1])
        .pauseFor(smallDel)
        .typeString(goblinBluffLines[2])
        .pauseFor(smallDel)
        .typeString(goblinBluffLines[3])
        .pauseFor(smallDel)
        .typeString(goblinBluffLines[4])
        .pauseFor(smallDel)
        .typeString(goblinBluffLines[5])
        .pauseFor(smallDel)
        .typeString(goblinBluffLines[6])
        .start();
      break;

    case "goblinComeOn":
      TW.typeString(goblinComeOnLines[0])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[1])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[2])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[3])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[4])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[5])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[6])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[7])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[8])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[9])
        .pauseFor(smallDel)
        .typeString(goblinComeOnLines[10])
        .start();
      break;

    case "goblinMoney":
      TW.typeString(goblinMoneyLines[0])
        .pauseFor(smallDel)
        .typeString(goblinMoneyLines[1])
        .pauseFor(smallDel)
        .typeString(goblinMoneyLines[2])
        .pauseFor(smallDel)
        .typeString(goblinMoneyLines[3])
        .pauseFor(bigDel)
        .typeString(goblinMoneyLines[4])
        .pauseFor(hugeDel)
        .typeString(goblinMoneyLines[5])
        .pauseFor(smallDel)
        .typeString(goblinMoneyLines[6])
        .start();

      goblinGotMoney = true;
      coins += 31;
      updateInventory();
      break;

    case "goblinBye":
      TW.typeString(goblinByeLines[0])
        .pauseFor(smallDel)
        .typeString(goblinByeLines[1])
        .pauseFor(smallDel)
        .typeString(goblinByeLines[2])
        .start();
      break;

    case "cabin":
      TW.typeString(cabinLines[0])
        .pauseFor(bigDel)
        .typeString(cabinLines[1])
        .pauseFor(smallDel)
        .typeString(WWYD)
        .typeString(cabinLines[2])
        .typeString(cabinLines[3])
        .start();
      break;

    case "cabinTree":
      if (goggles) {
        TW.typeString(cabinLinesWGoggles[0])
          .pauseFor(smallDel)
          .typeString(cabinLinesWGoggles[1])
          .pauseFor(smallDel)
          .typeString(cabinLinesWGoggles[2])
          .pauseFor(smallDel)
          .typeString(cabinLinesWGoggles[3])
          .pauseFor(bigDel)
          .typeString(cabinLinesWGoggles[4])
          .pauseFor(bigDel)
          .typeString(cabinLinesWGoggles[5])
          .start();
      } else {
        TW.typeString(cabinLinesWOGoggles[0])
          .pauseFor(smallDel)
          .typeString(cabinLinesWOGoggles[1])
          .pauseFor(smallDel)
          .typeString(cabinLinesWOGoggles[2])
          .pauseFor(bigDel)
          .typeString(cabinLinesWOGoggles[3])
          .pauseFor(bigDel)
          .typeString(cabinLinesWOGoggles[4])
          .start();
      }
      break;
    case "cabinEnter":
      disableKeyFeatures();

      TW.typeString(CabinEnterLines[0])
        .pauseFor(smallDel)
        .typeString(CabinEnterLines[1])
        .pauseFor(bigDel)
        .typeString(CabinEnterLines[2])
        .pauseFor(bigDel)
        .typeString(CabinEnterLines[3])
        .pauseFor(bigDel)
        .typeString(CabinEnterLines[4])
        .pauseFor(bigDel)
        .typeString(CabinEnterLines[5])
        .pauseFor(smallDel)
        .typeString(CabinEnterLines[6])
        .pauseFor(smallDel)
        .typeString(CabinEnterLines[7])
        .pauseFor(smallDel)
        .typeString(CabinEnterLines[8])
        .start();
      break;
    case "cabinFate":
      if (kingQuest == false) {
        TW.typeString(leshyLostSoulLines[0])
          .pauseFor(smallDel)
          .typeString(leshyLostSoulLines[1])
          .pauseFor(hugeDel)
          .typeString(leshyLostSoulLines[2])
          .pauseFor(bigDel)
          .typeString(leshyLostSoulLines[3])
          .pauseFor(bigDel)
          .typeString(leshyLostSoulLines[4])
          .pauseFor(bigDel)
          .typeString(leshyLostSoulLines[5])
          .pauseFor(smallDel)
          .typeString(leshyLostSoulLines[6])
          .pauseFor(smallDel)
          .typeString(leshyLostSoulLines[7])
          .pauseFor(smallDel)
          .typeString(leshyLostSoulLines[8])
          .pauseFor(bigDel)
          .typeString(leshyLostSoulLines[9])
          .pauseFor(smallDel)
          .typeString(leshyLostSoulLines[10])
          .pauseFor(bigDel)
          .typeString(YAEH)
          .start();
      } else {
        if (goggles == false) {
          TW.typeString(leshyWOGogglesLines[0])
            .pauseFor(smallDel)
            .typeString(leshyWOGogglesLines[1])
            .pauseFor(hugeDel)
            .typeString(leshyWOGogglesLines[2])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[3])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[4])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[5])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[6])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[7])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[8])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[9])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[10])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[11])
            .pauseFor(bigDel)
            .typeString(leshyWOGogglesLines[12])
            .pauseFor(bigDel)
            .typeString(YAEH)
            .start();
        } else {
          TW.typeString(leshyWGogglesLines[0])
            .pauseFor(smallDel)
            .typeString(leshyWGogglesLines[1])
            .pauseFor(hugeDel)
            .typeString(leshyWGogglesLines[2])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[3])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[4])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[5])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[6])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[7])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[8])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[9])
            .pauseFor(3000)
            .typeString(leshyWGogglesLines[10])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[11])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[12])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[13])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[14])
            .pauseFor(bigDel)
            .typeString(leshyWGogglesLines[15])
            .start();
        }
      }
      break;

    case "leshyPassTest1":
      TW.typeString(leshySkullLines[0])
        .pauseFor(smallDel)
        .typeString(leshySkullLines[1])
        .pauseFor(bigDel)
        .typeString(leshySkullLines[2])
        .pauseFor(bigDel)
        .typeString(leshySkullLines[3])
        .pauseFor(bigDel)
        .typeString(leshySkullLines[4])
        .start();
      break;

    case "leshyBurn":
      if (tunic == false) {
        TW.typeString(leshyWODarkTunicLines[0])
          .pauseFor(bigDel)
          .typeString(leshyWODarkTunicLines[1])
          .pauseFor(smallDel)
          .typeString(leshyWODarkTunicLines[2])
          .pauseFor(bigDel)
          .typeString(leshyWODarkTunicLines[3])
          .pauseFor(smallDel)
          .typeString(leshyWODarkTunicLines[4])
          .pauseFor(bigDel)
          .typeString(leshyWODarkTunicLines[5])
          .pauseFor(bigDel)
          .typeString(leshyWODarkTunicLines[6])
          .pauseFor(smallDel)
          .typeString(leshyWODarkTunicLines[7])
          .pauseFor(bigDel)
          .typeString(leshyWODarkTunicLines[8])
          .pauseFor(bigDel)
          .typeString(YAEH)
          .start();
      } else {
        TW.typeString(leshyWDarkTunicLines[0])
          .pauseFor(bigDel)
          .typeString(leshyWDarkTunicLines[1])
          .pauseFor(smallDel)
          .typeString(leshyWDarkTunicLines[2])
          .pauseFor(bigDel)
          .typeString(leshyWDarkTunicLines[3])
          .pauseFor(bigDel)
          .typeString(leshyWDarkTunicLines[4])
          .pauseFor(smallDel)
          .typeString(leshyWDarkTunicLines[5])
          .pauseFor(bigDel)
          .typeString(leshyWDarkTunicLines[6])
          .pauseFor(smallDel)
          .typeString(leshyWDarkTunicLines[7])
          .pauseFor(smallDel)
          .typeString(leshyWDarkTunicLines[8])
          .pauseFor(bigDel)
          .typeString(leshyWDarkTunicLines[9])
          .start();
      }
      break;

    case "leshyTransform":
      TW.typeString(leshyTransformation[0])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[1])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[2])
        .pauseFor(smallDel)
        .typeString(leshyTransformation[3])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[4])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[5])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[6])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[7])
        .pauseFor(bigDel)
        .typeString(leshyTransformation[8])
        .start();
      break;

    case "leshyFinalForm":
      TW.typeString(leshyFinalFormLines[0])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[1])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[2])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[3])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[4])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[5])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[6])
        .pauseFor(smallDel)
        .typeString(leshyFinalFormLines[7])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[8])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[9])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[10])
        .pauseFor(smallDel)
        .typeString(leshyFinalFormLines[11])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[12])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[13])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[14])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[15])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[16])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[17])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[18])
        .pauseFor(bigDel)
        .typeString(leshyFinalFormLines[19])
        .start();
      break;

    case "leshyFinalTest":
      if (islandSword == false) {
        TW.typeString(leshyFinalDefeatLines[0])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[1])
          .pauseFor(smallDel)
          .typeString(leshyFinalDefeatLines[2])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[3])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[4])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[5])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[6])
          .pauseFor(smallDel)
          .typeString(leshyFinalDefeatLines[7])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[8])
          .pauseFor(smallDel)
          .typeString(leshyFinalDefeatLines[9])
          .pauseFor(hugeDel)
          .typeString(leshyFinalDefeatLines[10])
          .pauseFor(hugeDel)
          .typeString(leshyFinalDefeatLines[11])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[12])
          .pauseFor(hugeDel)
          .typeString(leshyFinalDefeatLines[13])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[14])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[15])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[16])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[17])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[18])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[19])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[20])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[21])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[22])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[23])
          .pauseFor(bigDel)
          .typeString(leshyFinalDefeatLines[24])
          .pauseFor(bigDel)
          .typeString(YAEH)
          .start();
      } else {
        TW.typeString(leshyFinalVictoryLines[0])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[1])
          .pauseFor(smallDel)
          .typeString(leshyFinalVictoryLines[2])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[3])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[4])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[5])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[6])
          .pauseFor(hugeDel)
          .typeString(leshyFinalVictoryLines[7])
          .pauseFor(hugeDel)
          .typeString(leshyFinalVictoryLines[8])
          .pauseFor(smallDel)
          .typeString(leshyFinalVictoryLines[9])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[10])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[11])
          .pauseFor(bigDel)
          .typeString(leshyFinalVictoryLines[12])
          .start();
      }
      break;

    case "leshyAftermath":
      TW.typeString(leshyAftermathLines[0])
        .pauseFor(smallDel)
        .typeString(leshyAftermathLines[1])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[2])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[3])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[4])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[5])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[6])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[7])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[8])
        .pauseFor(bigDel)
        .typeString(leshyAftermathLines[9])
        .start();
      break;

    case "leshyAngel":
      setPalette("default");
      TW.typeString(leshyAngelLines[0])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[1])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[2])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[3])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[4])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[5])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[6])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[7])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[8])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[9])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[10])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[11])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[12])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[13])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[14])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[15])
        .pauseFor(bigDel)
        .typeString(leshyAngelLines[16])
        .pauseFor(hugeDel)
        .typeString(leshyAngelLines[17])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[18])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[19])
        .pauseFor(smallDel)
        .typeString(leshyAngelLines[20])
        .start();
      break;

    case "ending":
      TW.typeString(endingLines[0])
        .pauseFor(smallDel)
        .typeString(endingLines[1])
        .pauseFor(smallDel)
        .typeString(endingLines[2])
        .pauseFor(bigDel)
        .typeString(endingLines[3])
        .pauseFor(smallDel)
        .typeString(endingLines[4])
        .pauseFor(smallDel)
        .typeString(endingLines[5])
        .pauseFor(smallDel)
        .typeString(endingLines[6])
        .pauseFor(smallDel)
        .typeString(endingLines[7])
        .pauseFor(smallDel)
        .typeString(endingLines[8])
        .pauseFor(smallDel)
        .typeString(endingLines[9])
        .pauseFor(smallDel)
        .typeString(endingLines[10])
        .pauseFor(hugeDel)
        .typeString(endingLines[11])
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

  TWEnding.pauseFor(250).typeString("<b>You exited the cabin.</b>").start();
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
  0: `use it if you feel stuck!`,
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
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
};

var forestLines = {
  0: `Back to forest you get.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a><br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
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
