// LEMBRA QUE O LOCALSTORAGE SÓ USA STRING POR FAVORRR

let del = 20;
let smallDel = 500; //Delays usados para dar uma pausa entre frases
let bigDel = 1000;
let hugeDel = 1500;

if(localStorage.length == 0){
  document.getElementById("continuebutton").disabled = true;
}

const targetLang = new URLSearchParams(window.location.search).get('l');
var language = targetLang == 'pt-br' ? 'brazilian' : 'english';
var langLines = window[language];

//BOTÕES PARA A TELA DE INÍCIO

var startScreen = document.getElementById("start");
var gameScreen = document.getElementById("gamescreen");
var creditsScreen = document.getElementById("credits");
var howToPlayScreen = document.getElementById("howtoplay");
var patchNotesScreen = document.getElementById("patchNotes");

//Para abrir o jogo
function updateStart(div) {
  var selectedLanguage = window[language];

  switch (div) {
    case "newgame":

      // Zerando o DB para evitar que o jogador tenha itens ao reiniciar
      localStorage.setItem("Started", true);
      localStorage.setItem("sticker", false);
      localStorage.setItem("stick", false);
      localStorage.setItem("coins", 0);
      localStorage.setItem("pass", 0);
      // 0 = Não tem o pass
      // 1 = Tem mas não usou
      // 2 = Tem E já usou
      localStorage.setItem("sword1", false); // Pommel
      localStorage.setItem("sword2", false); // Hilt
      localStorage.setItem("sword3", false); // Blade
      localStorage.setItem("islandSword", false);
      localStorage.setItem("broadsword", false);
      localStorage.setItem("tunic", false);
      localStorage.setItem("goggles", false);
      localStorage.setItem("bearScared", false);
      localStorage.setItem("castleEntered", false);
      localStorage.setItem("palaceEntered", false);
      localStorage.setItem("shopEntered", false);
      localStorage.setItem("islandEntered", false);
      localStorage.setItem("kingQuest", false);
      localStorage.setItem("angelVisited", false);
      localStorage.setItem("goblinGotMoney", false);
      localStorage.setItem("goblinVisited", false);
      
      document.body.requestFullscreen();

      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      creditsScreen.style.display = "none";
      gameScreen.style.display = "grid";
      patchNotesScreen.style.display = "none";
    
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
    break;

    case "continue":
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      creditsScreen.style.display = "none";
      gameScreen.style.display = "grid";
      patchNotesScreen.style.display = "none";

      // Liberando áreas que o jogador desbloqueou
      if(localStorage.getItem("pass") == '2'){
        document.getElementsByClassName("cave")[0].classList.remove("disabled");
        document.getElementsByClassName("cave")[1].classList.remove("disabled");
      }

      if(localStorage.getItem("bearScared") == 'true'){
        document.getElementsByClassName("pier")[0].classList.remove("disabled");
      }

      if(localStorage.getItem("islandEntered") == 'true'){
        document.getElementsByClassName("island")[0].classList.remove("disabled");
        document.getElementsByClassName("island")[1].classList.remove("disabled");
        document.getElementsByClassName("island")[2].classList.remove("disabled");
      }

      document.body.requestFullscreen();
      updateInventory();
      updateScreen("forest", "welcomeBack");
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
  patchNotesScreen.style.display = "none";
  startScreen.style.display = "flex";

  // Ativar o botão de continuar caso o jogador tenha feito algo
  if(localStorage.length > 0){
    document.getElementById("continuebutton").disabled = false;
  }
}

// Mudar velocidade do texto

let speeds = [
  ["25", 0],
  ["20", 1],
  ["10", 2],
  ["0",  3],
];

let currentSpeed = 1;

function setTextSpeed(step) {
  currentSpeed += step;

  if (currentSpeed == 4) currentSpeed = 0;
  if (currentSpeed == -1) currentSpeed = 3;

  del = speeds[currentSpeed][0];
  document.getElementById("speedName").innerHTML = window[language].settings.textSpeed[speeds[currentSpeed][1]];
}

//Mudar paleta de cor

var palettes = [
  ["#ffffff", "#000000", 0],
  ["#cfab4a", "#292b30", 1],
  ["#13e600", "#172115", 2],
  ["#fcd1d7", "#42202d", 3],
  ["#adc3e8", "#0d132a", 4],
];

let currentPalette = 0;

function setPalette(step) {

  if(step == 0) currentPalette = 0;
  else currentPalette += step;
  
  if (currentPalette == 5) currentPalette = 0;
  if (currentPalette == -1) currentPalette = 4;

  document
    .querySelector(":root")
    .style.setProperty("--main", palettes[currentPalette][0]);
  document
    .querySelector(":root")
    .style.setProperty("--bg", palettes[currentPalette][1]);
  document.getElementById("paletteName").innerHTML = window[language].settings.colorPalette[currentPalette];
}

//Mudar delay entre frases

let betweenDelays = [
  [500, 1000, 1500, 0],
  [250, 500, 750, 1],
  [0, 0, 0, 2],
];

let currentDelay = 0;

function setDelayTime(step){

  currentDelay += step;

  if (currentDelay == 3) currentDelay = 0;
  if (currentDelay == -1) currentDelay = 2;

  smallDel = betweenDelays[currentDelay][0];
  bigDel = betweenDelays[currentDelay][1];
  hugeDel = betweenDelays[currentDelay][2];

  document.getElementById("delayName").innerHTML = window[language].settings.delayBetween[betweenDelays[currentDelay][3]];
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
    console.log(allPlaces[i].className);

    if (allPlaces[i].classList[1]) {
      tooltip.innerHTML = "???";
    } else {
      tooltip.innerHTML = window[language].map[allPlaces[i].className];
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
  document.getElementById("Coins").innerHTML = window[language].inventory.coins;
  document.getElementById("coinCount").innerHTML = localStorage.getItem("coins");

  if (localStorage.getItem("broadsword") == 'true') {
    document.getElementById("sword").style.display = "none";
    document.getElementById("swordunlocked").style.display = "block";
  }
  if (localStorage.getItem("tunic") == 'true') {
    document.getElementById("tunic").style.display = "none";
    document.getElementById("tunicunlocked").style.display = "block";
  }
  if (localStorage.getItem("goggles") == 'true') {
    document.getElementById("goggles").style.display = "none";
    document.getElementById("gogglesunlocked").style.display = "block";
  }

  switch (localStorage.getItem("pass")) {
    case '0':
      document.getElementById("passStatus").innerHTML = window[language].inventory.passNo;
      break;
    case '1':
      document.getElementById("passStatus").innerHTML = window[language].inventory.passYes;
      break;
    case '2':
      document.getElementById("passStatus").innerHTML = window[language].inventory.passUsed;
      break;
  }

  let sword1Sprite = document.getElementsByClassName("sword1Sprite");
  let sword2Sprite = document.getElementsByClassName("sword2Sprite");
  let sword3Sprite = document.getElementsByClassName("sword3Sprite");

  if (localStorage.getItem("sword1") == 'true') {
    for (let i = 0; i < sword1Sprite.length; i++) {
      sword1Sprite[i].style.color = "white";
    }
  }
  if (localStorage.getItem("sword2") == 'true') {
    for (let i = 0; i < sword2Sprite.length; i++) {
      sword2Sprite[i].style.color = "white";
    }
  }
  if (localStorage.getItem("sword3") == 'true') {
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

  document.getElementById("sword-title").innerHTML = window[language].inventory.islandSword.title;
  document.getElementById("sword-desc").innerHTML = window[language].inventory.islandSword.islandSwordDesc;

  localStorage.setItem("islandSword", true);
}

//Início do chat, para colocar os textos na div "chat"

var chatDiv = document.getElementById("text");

function disableKeyFeatures() {
  //Usado na hora da luta contra Leshy
  for (let i = 0; i < allPlaces.length; i++) {
    //Andar pelo mapa
    allPlaces[i].classList.add("disabled");
  }

  setPalette(0);
  document.getElementById("paletteForward").onclick = ""; //Mudar paleta
  document.getElementById("paletteBack").onclick = "";
}

function updateScreen(nextImg, text) {

  // IMPORTANTE: TODAS AS VARIÁVEIS DO LOCALSTORAGE PASSAM A SEREM VARIÁVEIS
  // SIMPLES NESSA FUNÇÃO, SE FOR USAR UMA VARIÁVEL NOVA, DECLARE-A AQUI PRIMEIRO
  var sticker = JSON.parse(localStorage.getItem("sticker"));
  var stick = JSON.parse(localStorage.getItem("stick"));
  var coins = JSON.parse(localStorage.getItem("coins"));
  var pass = JSON.parse(localStorage.getItem("pass"));
  //0 = Não tem o pass
  //1 = Tem mas não usou
  //2 = Tem E já usou

  var sword1 = JSON.parse(localStorage.getItem("sword1")); //Pommel
  var sword2 = JSON.parse(localStorage.getItem("sword2")); //Hilt
  var sword3 = JSON.parse(localStorage.getItem("sword3")); //Blade
  var islandSword = JSON.parse(localStorage.getItem("islandSword"));

  var broadsword = JSON.parse(localStorage.getItem("broadsword"));
  var tunic = JSON.parse(localStorage.getItem("tunic"));
  var goggles = JSON.parse(localStorage.getItem("goggles"));

  var bearScared = JSON.parse(localStorage.getItem("bearScared"));
  var castleEntered = JSON.parse(localStorage.getItem("castleEntered"));
  var palaceEntered = JSON.parse(localStorage.getItem("palaceEntered"));
  var shopEntered = JSON.parse(localStorage.getItem("shopEntered"));
  var islandEntered = JSON.parse(localStorage.getItem("islandEntered"));
  var kingQuest = JSON.parse(localStorage.getItem("kingQuest"));
  var angelVisited = JSON.parse(localStorage.getItem("angelVisited"));
  var goblinGotMoney = JSON.parse(localStorage.getItem("goblinGotMoney"));
  var goblinVisited = JSON.parse(localStorage.getItem("goblinVisited"))

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

    case "welcomeBack":
      TW.typeString(selectedLanguage.welcomeBack1)
      .pauseFor(smallDel)
      TW.typeString(selectedLanguage.welcomeBack2)
      .pauseFor(smallDel)
      TW.typeString(selectedLanguage.welcomeBack3)
      .start();
    break;
    
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
        
        localStorage.setItem("goggles", true);
        localStorage.setItem("coins", coins - 1);
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
      if (bearScared) {
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
      if (stick) {
        //com graveto
        TW.typeString(selectedLanguage.enterForestLinesWithStick[0])
          .typeString(selectedLanguage.WWYD)
          .typeString(selectedLanguage.enterForestLinesWithStick[1])
          .typeString(selectedLanguage.enterForestLinesWithStick[2])
          .start();
      } else {
        //sem graveto
        stick = true;
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
        localStorage.setItem("bearScared", true);

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
        localStorage.setItem("islandEntered", true);
        localStorage.setItem("tunic", true);
        updateInventory();

        document.getElementsByClassName("island")[0].classList.remove("disabled");
        document.getElementsByClassName("island")[1].classList.remove("disabled");
        document.getElementsByClassName("island")[2].classList.remove("disabled");

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
        .typeString(selectedLanguage.angelFuseSwordPart3Lines[6])
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
          localStorage.setItem("castleEntered", true);
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
          localStorage.setItem("palaceEntered", true);
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
        localStorage.setItem("sword1", true);
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
      localStorage.setItem("kingQuest", true);
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
          localStorage.setItem("shopEntered", true);
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
        localStorage.setItem("broadsword", true);
        localStorage.setItem("coins", coins-20);
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
        localStorage.setItem("sticker", true);
        localStorage.setItem("coins", coins-10);

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
          localStorage.setItem("pass", 1);
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

        localStorage.setItem("sword3", true);
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
        localStorage.setItem("sword2", true);
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
        localStorage.setItem("pass", 2);
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
          localStorage.setItem("goblinVisited", true);
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

        localStorage.setItem("goblinGotMoney", true);
        localStorage.setItem("coins", 31);
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
      setPalette(0);
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

  TWEnding.pauseFor(250).typeString(window[language].exitCabin).start();
}

UpdateColors();
