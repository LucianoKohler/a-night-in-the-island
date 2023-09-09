var started = false;
var sticker = false;
var Stick = false;
var coins = 0;
var ticket = 0;
//0 = Não tem o ticket
//1 = Tem mas não usou
//2 = Tem E já usou
var sword1 = false;
var sword2 = false;
var sword3 = false;
var islandSword = false;

var broadsword = true;
var tunic = false;
var goggles = false;

let del = 0;

var castleEntered = false;
var palaceEntered = false;
var shopEntered = false;
var islandEntered = false;
var kingQuest = false;
var angelQuest = false;
//velocidade de escrita dos textos

//BOTÕES PARA A TELA DE INÍCIO

var startScreen = document.getElementById("start");
var startButton = document.getElementById("startbutton");

//Para abrir o jogo

let start = () => {
  startScreen.style.display = "none";
  started = true;

  var twStart = new Typewriter(chatDiv, {
    delay: del,
  });

  twStart
    .pauseFor(500)
    .typeString(startLines[0])
    .pauseFor(1000)
    .typeString(startLines[1])
    .typeString(WWYD)
    .typeString(startLines[2])
    .typeString(startLines[3])
    .start();
};

document.onkeydown = (e) => {
  if (e.key == "Enter" && started == false) start();
};

document.getElementById("startbutton").onclick = () => start();

//Para ciclar entre mapa e others
var othersDiv = document.getElementById("others");
var mapDiv = document.getElementById("map");

//Funções para mudar as divs, utilizadas no HTML

function toMainMenu() {
  startScreen.style.display = "flex";
  document.getElementById("deathmessage").style.display = "none";
  document.getElementById("gamescreen").style.display = "grid";
}

function toMap() {
  othersDiv.style.display = "none";
  mapDiv.style.display = "block";
}

function toOthers() {
  mapDiv.style.display = "none";
  othersDiv.style.display = "flex";
}

//Fazendo com que a localização atual fique amarela no mapa

var place = "forest";
var currentLocation = document.querySelectorAll("." + place);
var allPlaces = mapDiv.querySelectorAll("a");

//adicionando eventlisteners para TODOS os links do menu

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
    if (allPlaces[i].className == place) allPlaces[i].style.color = "yellow";
    else allPlaces[i].style.color = "white";
  }
}

//Métodos de morrer aqui

function DyingAnimation() {
  document.getElementById("gamescreen").style.display = "none";
  document.getElementById("deathmessage").style.display = "flex";
  started = false;
  //lembrar de resetar os itens ao morrer
}

document.addEventListener("keydown", function (e) {
  if (e.key == "d" || e.key == "D") {
    console.log("MORREU");
    DyingAnimation();
  }
});

function updateInventory() {
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

  switch (ticket) {
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
  document.getElementById("Coins").innerHTML = "Coins: " + coins;
  document.getElementById("Coins").innerHTML = "Coins: " + coins;
}

function updateSword() {
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

function updateScreen(nextImg, text) {
  let ImgQuery;

  //Esses IFs abaixo são usados caso o player entre no local após certo acontecimento.
  if (sword3 == true && nextImg == "weird_rocks") {
    ImgQuery = "weird_rocksCrying";
  } else if (ticket == 2 && nextImg == "wall") {
    ImgQuery = "wall-open";
  } else if (kingQuest == true && nextImg == "altar") {
    ImgQuery = "altarAngel";
  } else if (castleEntered == true && nextImg == "castle") {
    text = "castleEnter";
    ImgQuery = "bifurcation";
  } else if (palaceEntered == false && text == "palaceEnter") {
    text = "palaceEnterFirst";
    ImgQuery = "king";
  } else if (shopEntered == false && nextImg == "shop") {
    text = "shopFirst";
    ImgQuery = nextImg;
  } else if (islandEntered == false && nextImg == "island") {
    text = "islandFirst";
    ImgQuery = nextImg;
  } else if (tunic == true && nextImg == "island") {
    ImgQuery = "islandhole";
  } else {
    ImgQuery = nextImg;
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
      TW.typeString(chooseLines[0]).start();
      break;

    case "well":
      TW.typeString(wellLines[0])
        .pauseFor(500)
        .typeString(WWYD)
        .typeString(wellLines[1])
        .typeString(wellLines[2])
        .start();
      break;

    case "well_jump":
      TW.typeString(well_jumpLines[0])
        .pauseFor(1000)
        .typeString(well_jumpLines[1])
        .pauseFor(1000)
        .typeString(well_jumpLines[2])
        .pauseFor(1000)
        .typeString(well_jumpLines[3])
        .pauseFor(2000)
        .typeString(well_jumpLines[4])
        .start();

      setTimeout(DyingAnimation, 12500); //Tempo certo para delay = 25;
      break;

    case "forest":
      TW.typeString(forestLines[0])
        .pauseFor(500)
        .typeString(WWYD)
        .typeString(forestLines[1])
        .typeString(forestLines[2])
        .start();
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
          .pauseFor(500)
          .typeString(enterForestLinesWOStick[1])
          .pauseFor(500)
          .typeString(enterForestLinesWOStick[2])
          .pauseFor(1000)

          .typeString(WWYD)
          .typeString(enterForestLinesWOStick[3])
          .typeString(enterForestLinesWOStick[4])
          .start();
      }
      break;

    case "forestBear":
      if (broadsword == true || islandSword == true) {
        TW.typeString(ForestBearWSwordLines[0])
          .pauseFor(500)
          .typeString(ForestBearWSwordLines[1])
          .pauseFor(1000)
          .typeString(ForestBearWSwordLines[2])
          .pauseFor(500)
          .typeString(ForestBearWSwordLines[3])
          .pauseFor(500)
          .typeString(ForestBearWSwordLines[4])
          .pauseFor(1000)
          .typeString(ForestBearWSwordLines[5])
          .pauseFor(500)
          .typeString(ForestBearWSwordLines[6])
          .pauseFor(1000)
          .typeString(ForestBearWSwordLines[7])
          .pauseFor(500)
          .typeString(ForestBearWSwordLines[8])
          .pauseFor(500)
          .typeString(ForestBearWSwordLines[9])
          .start();
        document.getElementsByClassName("pier")[0].classList.remove("disabled");
      } else {
        TW.typeString(ForestBearWOSwordLines[0])
          .pauseFor(500)
          .typeString(ForestBearWOSwordLines[1])
          .pauseFor(1000)
          .typeString(ForestBearWOSwordLines[2])
          .pauseFor(500)
          .typeString(ForestBearWOSwordLines[3])
          .pauseFor(500)
          .typeString(ForestBearWOSwordLines[4])
          .pauseFor(500)
          .typeString(ForestBearWOSwordLines[5])
          .pauseFor(500)
          .typeString(ForestBearWOSwordLines[6])
          .start();
      }
      break;

    case "pier":
      TW.typeString(pierLines[0])
        .pauseFor(500)
        .typeString(WWYD)
        .typeString(pierLines[1])
        .typeString(pierLines[2])
        .start();
      break;

    case "pierStareSea":
      TW.typeString(pierStareSeaLines[0])
      .pauseFor(500)
      .typeString(pierStareSeaLines[1])
      .pauseFor(1000)
      .typeString(pierStareSeaLines[2])
      .pauseFor(500)
      .typeString(pierStareSeaLines[3])
      .pauseFor(1000)
      .typeString(pierStareSeaLines[4])
      .pauseFor(1000)
      .typeString(pierStareSeaLines[5])
      .pauseFor(1500)
      .typeString(pierStareSeaLines[6])
      .start();
      break;

    case "islandFirst":
      TW.typeString(islandFirstLines[0])
        .pauseFor(500)
        .typeString(islandFirstLines[1])
        .pauseFor(1000)
        .typeString(islandFirstLines[2])
        .pauseFor(500)
        .typeString(islandFirstLines[3])
        .pauseFor(1000)
        .typeString(islandFirstLines[4])
        .pauseFor(500)
        .typeString(islandFirstLines[5])
        .pauseFor(500)
        .typeString(islandFirstLines[6])
        .pauseFor(500)
        .typeString(islandFirstLines[7])
        .pauseFor(500)
        .typeString(islandFirstLines[8])
        .pauseFor(1000)
        .typeString(islandFirstLines[9])
        .pauseFor(1500)
        .typeString(islandFirstLines[10])
        .pauseFor(1500)
        .typeString(islandFirstLines[11])
        .start();
      islandEntered = true;
      tunic = true;
      updateInventory();

      document.getElementsByClassName("island")[0].classList.remove("disabled");
      document.getElementsByClassName("island")[1].classList.remove("disabled");
      document.getElementsByClassName("island")[2].classList.remove("disabled");

      place = "island";
      UpdateColors();

      break;

    case "island":
      TW.typeString(islandLines[0])
        .pauseFor(500)
        .typeString(WWYD)
        .typeString(islandLines[1])
        .typeString(islandLines[2])
        .start();

      place = "island";
      UpdateColors();
      break;

    case "islandRowHorizonPart1":
      TW.typeString(islandRowHorizonPart1Lines[0])
      .pauseFor(500)
      .typeString(islandRowHorizonPart1Lines[1])
      .pauseFor(500)
      .typeString(islandRowHorizonPart1Lines[2])
      .start();
      break;

      case "islandRowHorizonPart2":
        TW.typeString(islandRowHorizonPart2Lines[0])
        .pauseFor(500)
        .typeString(islandRowHorizonPart2Lines[1])
        .pauseFor(500)
        .typeString(islandRowHorizonPart2Lines[2])
        .pauseFor(1000)
        .typeString(islandRowHorizonPart2Lines[3])
        .pauseFor(500)
        .typeString(islandRowHorizonPart2Lines[4])
        .pauseFor(1000)
        .typeString(WWYD)
        .typeString(islandRowHorizonPart2Lines[5])
        .typeString(islandRowHorizonPart2Lines[6])
        .start();
        place = 'pier';
        UpdateColors();
        break;

      case "islandAppreciateLandscape":
        TW.typeString(islandAppreciateLandscapeLines[0])
        .pauseFor(1000)
        .typeString(islandAppreciateLandscapeLines[1])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[2])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[3])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[4])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[5])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[6])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[7])
        .pauseFor(1000)
        .typeString(islandAppreciateLandscapeLines[8])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[9])
        .pauseFor(500)
        .typeString(islandAppreciateLandscapeLines[10])
        .start();
        break;
  
    case "altar":
      if (kingQuest == true) {
      } else {
        TW.typeString(altarAbandonedAltar[0])
          .pauseFor(500)
          .typeString(altarAbandonedAltar[1])
          .pauseFor(500)
          .typeString(altarAbandonedAltar[2])
          .pauseFor(1000)
          .typeString(altarAbandonedAltar[3])
          .start();
      }
      break;

    case "castle":
      TW.typeString(castleLines[0])
        .pauseFor(500)
        .typeString(castleLines[1])
        .pauseFor(500)
        .typeString(castleLines[2])
        .start();
      castleEntered = true;
      setTimeout(() => {
        updateScreen("bifurcation", "castleEnter");
      }, 500);

      break;

    case "castleEnter":
      TW.typeString(enterCastleLines[0])
        .pauseFor(1000)
        .typeString(enterCastleLines[1])
        .pauseFor(500)
        .typeString(enterCastleLines[2])
        .pauseFor(500)
        .typeString(enterCastleLines[3])
        .pauseFor(500)
        .typeString(enterCastleLines[4])
        .typeString(enterCastleLines[5])
        .typeString(enterCastleLines[6])
        .start();
      break;

    case "palaceEnterFirst":
      TW.typeString(palaceEnterFirstLines[0])
        .pauseFor(1000)
        .typeString(palaceEnterFirstLines[1])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(palaceEnterFirstLines[2])
        .typeString(palaceEnterFirstLines[3])
        .typeString(palaceEnterFirstLines[4])
        .typeString(palaceEnterFirstLines[5])
        .start();
      palaceEntered = true;
      break;

    case "palaceEnter":
      TW.typeString(palaceEnterLines[0])
        .pauseFor(500)
        .typeString(WWYS)
        .typeString(palaceEnterLines[1])
        .typeString(palaceEnterLines[2])
        .typeString(palaceEnterLines[3])
        .typeString(palaceEnterLines[4])
        .start();
        break;


    case "kingWhoAreYou":
      TW.typeString(kingWhoAreYouLines[0])
        .pauseFor(500)
        .typeString(kingWhoAreYouLines[1])
        .pauseFor(500)
        .typeString(kingWhoAreYouLines[2])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(kingWhoAreYouLines[3])
        .typeString(kingWhoAreYouLines[4])
        .typeString(kingWhoAreYouLines[5])
        .typeString(kingWhoAreYouLines[6])
        .start();
      break;

    case "kingMeetSameFate":
      TW.typeString(kingMeetSameFateLines[0])
        .pauseFor(500)
        .typeString(kingMeetSameFateLines[1])
        .pauseFor(500)
        .typeString(kingMeetSameFateLines[2])
        .pauseFor(500)
        .typeString(kingMeetSameFateLines[3])
        .pauseFor(500)
        .typeString(kingMeetSameFateLines[4])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(kingMeetSameFateLines[5])
        .typeString(kingMeetSameFateLines[6])
        .typeString(kingMeetSameFateLines[7])
        .start();
      break;

    case "kingGoHome":
      TW.typeString(kingGoHomeLines[0])
        .pauseFor(1000)
        .typeString(kingGoHomeLines[1])
        .pauseFor(500)
        .typeString(kingGoHomeLines[2])
        .pauseFor(500)
        .typeString(kingGoHomeLines[3])
        .pauseFor(500)
        .typeString(kingGoHomeLines[4])
        .pauseFor(500)
        .typeString(kingGoHomeLines[5])
        .pauseFor(500)
        .typeString(kingGoHomeLines[6])
        .pauseFor(1500)
        .typeString(kingGoHomeLines[7])
        .start();
      break;

    case `kingHowDoThis`:
      TW.typeString(kingHowDoThisLines[0])
        .pauseFor(500)
        .typeString(kingHowDoThisLines[1])
        .pauseFor(500)
        .typeString(kingHowDoThisLines[2])
        .pauseFor(500)
        .typeString(kingHowDoThisLines[3])
        .pauseFor(1000)
        .typeString(kingHowDoThisLines[4])
        .pauseFor(1000)
        .typeString(kingHowDoThisLines[5])
        .pauseFor(1500)
        .typeString(kingHowDoThisLines[6])
        .pauseFor(500)
        .typeString(kingHowDoThisLines[7])
        .start();
      kingQuest = true;
      break;

    case "kingBye":
      TW.typeString(kingByeLines[0])
        .pauseFor(500)
        .typeString(kingByeLines[1])
        .typeString(kingByeLines[2])
        .start();
      break;

    case "shopFirst":
      TW.typeString(shopFirstLines[0])
        .pauseFor(500)
        .typeString(shopFirstLines[1])
        .pauseFor(500)
        .typeString(shopFirstLines[2])
        .pauseFor(500)
        .typeString(shopFirstLines[3])
        .typeString(shopFirstLines[4])
        .typeString(shopFirstLines[5])
        .typeString(shopFirstLines[6])
        .start();
      shopEntered = true;
      break;

    case "shop":
      TW.typeString(shopLines[0])
        .pauseFor(500)
        .typeString(shopLines[1])
        .typeString(shopLines[2])
        .typeString(shopLines[3])
        .typeString(shopLines[4])
        .start();
      break;

    case "shopBroadsword":
      TW.typeString(shopBroadswordLines[0])
        .pauseFor(500)
        .typeString(shopBroadswordLines[1])
        .pauseFor(1000)
        .typeString(shopBroadswordLines[2])
        .typeString(shopBroadswordLines[3])
        .typeString(shopBroadswordLines[4])
        .start();
      break;

    case "shopSticker":
      TW.typeString(shopStickerLines[0])
        .pauseFor(500)
        .typeString(shopStickerLines[1])
        .pauseFor(1000)
        .typeString(shopStickerLines[2])
        .pauseFor(500)
        .typeString(shopStickerLines[3])
        .typeString(shopStickerLines[4])
        .typeString(shopStickerLines[5])
        .start();
      break;

    case "shopPass":
      if (kingQuest == false) {
        TW.typeString(shopPassWOKingQuest[0])
          .pauseFor(500)
          .typeString(shopPassWOKingQuest[1])
          .pauseFor(500)
          .typeString(shopPassWOKingQuest[2])
          .pauseFor(500)
          .typeString(shopPassWOKingQuest[3])
          .pauseFor(1000)
          .typeString(shopPassWOKingQuest[4])
          .typeString(shopPassWOKingQuest[5])
          .start();
      } else {
        TW.typeString(shopPassWKingQuest[0])
          .pauseFor(500)
          .typeString(shopPassWKingQuest[1])
          .pauseFor(500)
          .typeString(shopPassWKingQuest[2])
          .pauseFor(500)
          .typeString(shopPassWKingQuest[3])
          .pauseFor(1000)
          .typeString(shopPassWKingQuest[4])
          .pauseFor(500)
          .typeString(shopPassWKingQuest[5])
          .pauseFor(1000)
          .typeString(shopPassWKingQuest[6])
          .start();
        ticket = 1;
        updateInventory();
      }

      break;

    case "weird_rocks":
      if (sword3 == false) {
        TW.typeString(weird_rocksLines[0])
          .pauseFor(500)
          .typeString(weird_rocksLines[1])
          .pauseFor(500)
          .typeString(WWYS)
          .typeString(weird_rocksLines[2])
          .typeString(weird_rocksLines[3])
          .start();
      } else {
        TW.typeString(weird_rocksAngryRox[0])
          .pauseFor(1000)
          .typeString(weird_rocksAngryRox[1])
          .pauseFor(1000)
          .typeString(weird_rocksAngryRox[2])
          .start();
      }
      break;

    case "weird_rocksWhoAreYou":
      TW.typeString(weird_rocksWhoAreYouLines[0])
        .pauseFor(500)
        .typeString(WWYS)
        .typeString(weird_rocksWhoAreYouLines[1])
        .typeString(weird_rocksWhoAreYouLines[2])
        .start();
      break;

    case "weird_rocksCabin":
      TW.typeString(weird_rocksCabinLines[0])
        .pauseFor(1000)
        .typeString(weird_rocksCabinLines[1])
        .pauseFor(2000)
        .typeString(weird_rocksCabinLines[2])
        .start();
      break;

    case "weird_rocksEye":
      TW.typeString(weird_rocksEyeLines[0])
        .pauseFor(1000)
        .typeString(weird_rocksEyeLines[1])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(weird_rocksEyeLines[2])
        .typeString(weird_rocksEyeLines[3])
        .start();
      break;

    case "weird_rocksNice":
      TW.typeString(weird_rocksNiceLines[0])
        .pauseFor(1000)
        .typeString(WWYD)
        .typeString(weird_rocksNiceLines[1])
        .typeString(weird_rocksNiceLines[2])
        .start();
      break;

    case "weird_rocksNotStealEye":
      TW.typeString(weird_rocksNotStealEyeLines[0])
        .pauseFor(500)
        .typeString(weird_rocksNotStealEyeLines[1])
        .start();
      break;
    case "weird_rocksStealEye":
      TW.typeString(weird_rocksStealEye[0])
        .pauseFor(1000)
        .typeString(weird_rocksStealEye[1])
        .pauseFor(1000)
        .typeString(weird_rocksStealEye[2])
        .start();

      sword3 = true;
      updateSword();

      break;

    case "cabin":
      TW.typeString(cabinLines[0])
        .pauseFor(1000)
        .typeString(cabinLines[1])
        .pauseFor(500)
        .typeString(WWYD)
        .typeString(cabinLines[2])
        .typeString(cabinLines[3])
        .start();
      break;

    case "farm":
      if (sword2 == false) {
        TW.typeString(farmLines[0])
          .pauseFor(1000)
          .typeString(farmLines[1])
          .pauseFor(1000)
          .typeString(WWYS)
          .typeString(farmLines[2])
          .typeString(farmLines[3])
          .typeString(farmLines[4])
          .start();
      } else {
        TW.typeString(farmLinesHilt[0])
          .pauseFor(1000)
          .typeString(farmLinesHilt[1])
          .start();
      }
      break;

    case "farmSeeCrops":
      if (sticker == false) {
        TW.typeString(farmLinesWOSticker[0])
          .pauseFor(1000)
          .typeString(farmLinesWOSticker[1])
          .pauseFor(2000)
          .typeString(WWYS)
          .typeString(farmLinesWOSticker[2])
          .typeString(farmLinesWOSticker[3])
          .start();
      } else {
        TW.typeString(farmLinesWSticker[0])
          .pauseFor(500)
          .typeString(farmLinesWSticker[1])
          .pauseFor(500)
          .typeString(farmLinesWSticker[2])
          .pauseFor(500)
          .typeString(farmLinesWSticker[3])
          .pauseFor(1000)
          .typeString(farmLinesWSticker[4])
          .pauseFor(1000)
          .typeString(farmLinesWSticker[5])
          .start();
        setTimeout(() => {
          updateScreen("farm-zoom", "farmApproach");
        }, 10000); //tempo bom para um delay de 25 no TW
      }
      break;

    case "farmMetal":
      TW.typeString(farmLinesMetal[0])
        .pauseFor(2000)
        .typeString(farmLinesMetal[1])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(farmLinesMetal[2])
        .typeString(farmLinesMetal[3])
        .start();
      break;

    case "farmBye":
      TW.typeString(farmLinesBye[0])
        .pauseFor(1500)
        .typeString(farmLinesBye[1])
        .start();
      break;

    case "farmApproach":
      TW.typeString(farmLinesApproach[0])
        .pauseFor(1000)
        .typeString(farmLinesApproach[1])
        .pauseFor(1500)
        .typeString(farmLinesApproach[2])
        .pauseFor(1000)
        .typeString(farmLinesApproach[3])
        .pauseFor(2000)
        .typeString(farmLinesApproach[4])
        .start();
      sword2 = true;
      updateSword();
      break;

    case "wall":
      if (ticket == 0) {
        //Se não tem
        TW.typeString(wallLines[0])
          .pauseFor(1000)
          .typeString(wallLines[1])
          .pauseFor(500)
          .typeString(WWYS)

          .typeString(wallLines[3])
          .typeString(wallLines[4])
          .typeString(wallLines[5])
          .start();
      } else if (ticket == 1) {
        //Se tem, mas não usou
        TW.typeString(wallLines[0])
          .pauseFor(1000)
          .typeString(wallLines[1])
          .pauseFor(500)
          .typeString(WWYS)
          .typeString(wallLines[2])
          .typeString(wallLines[3])
          .typeString(wallLines[4])
          .typeString(wallLines[5])
          .start();
      } else {
        //Se tem E já usou
        TW.typeString(wallAlreadyUsedTicketLines[0])
          .pauseFor(1000)
          .typeString(wallAlreadyUsedTicketLines[1])
          .pauseFor(1000)
          .typeString(wallAlreadyUsedTicketLines[2])
          .start();
      }
      break;

    case "wallUseTicket":
      TW.typeString(wallUseTicketLines[0])
        .pauseFor(1000)
        .typeString(wallUseTicketLines[1])
        .pauseFor(1500)
        .typeString(wallUseTicketLines[2])
        .pauseFor(1000)
        .typeString(wallUseTicketLines[3])
        .start();
      ticket = 2;
      updateInventory();
      document.getElementsByClassName("cave")[0].classList.remove("disabled");
      document.getElementsByClassName("cave")[1].classList.remove("disabled");
      break;

    case "wallWhatTicket":
      TW.typeString(wallWhatTicketLines[0])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(wallWhatTicketLines[1])
        .typeString(wallWhatTicketLines[2])
        .start();
      break;

    case "wallBeyondWall":
      TW.typeString(wallBeyondWallLines[0])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(wallBeyondWallLines[1])
        .typeString(wallBeyondWallLines[2])
        .start();
      break;

    case "wallBye":
      TW.typeString(wallByeLines[0])
        .pauseFor(1000)
        .typeString(wallByeLines[1])
        .start();
      break;

    default:
      console.log("não encontrado");
      break;
  }
}

UpdateColors();

//"BANCO DE DADOS" PARA AS FALAS DO JOGO
//todos os <a> possuem a função de dar update no jogo, as variáveis inseridas são: a imagem a ser carregada e o texto a ser printado
//criei essa var abaixo pois é muito repetida pelo jogo
var WWYD = "What will you do? <br><br>";
var WWYS = "What will you say? <br><br>";

var chooseLines = {
  0: `You can use the map anytime you want to leave the place`,
};

var startLines = {
  0: `You wake up in front of a great and dense forest, without any memory of the last day, what happened? <br><br>`,
  1: `The only thing you can do now is to investigate. <br><br>`,
  //WWYD
  2: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a> <br>`,
  3: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
};

var forestLines = {
  0: `Back to forest you get.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a><br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
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
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Retreat from the forest`,
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
  6: ` maybe you're not ready to fight such a big thing?`,
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
}

var islandFirstLines = {
  0: `You hop on the boat, wrap your hands around the oars, and start rowing,`,
  1: ` without directions, only with the intention to go somewhere.`,
  2: ` A few minutes of only listening to the waves' sound takes you to a small island,`,
  3: ` you decide to stop there.<br><br>`,
  4: `Upon arriving, nothing stands there except a plam tree and a giant X marking something,`,
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
}

var islandRowHorizonPart1Lines = {
 0: `You continue your journey to the unknown,`, 
 1: ` maybe the time will guide you to the right way.<br><br>`, 
 2: `<a href="#" onclick="updateScreen('pier', 'islandRowHorizonPart2')">Continue</a>`, 
}

var islandRowHorizonPart2Lines = {
 0: `After minutes,`, 
 1: ` the confimation that this place is not normal appears:`, 
 2: ` You returned back to the pier!`, 
 3: ` You did not turn the boat, and neither the waves did,`, 
 4: ` it seems that you're stuck for real and that magic really exists after all...<br><br>`, 
 //WWYD
 5: `<a href="#" onclick="updateScreen('island', 'island')">Sail with the boat</a><br>`,
 6: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Stare at the sea</a><br>`,
}

var wellLines = {
  0: ` In the distance, you discover an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies" <br><br>`,
  //WWYD
  1: ` <a href="#"> Throw a Coin<br>`,
  2: ` <a href="#" onclick="updateScreen('well_jump', 'well_jump')"> Jump into the well</a>`,
};

var well_jumpLines = {
  0: `Without any fear, you hop into the well, after all, that's how games work!<br><br>`,
  1: `.`,
  2: `.`,
  3: `. right?<br><br>`,
  4: `After some time, you hit the ground and die instantly, what was you thinking?!`,
};

var weird_rocksLines = {
  0: `You find a weird arrangement of rocks in the middle of the grass <br><br>`,
  1: `-Heyo! - The rock says <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksWhoAreYou')"> Who are you?<br>`,
  3: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksEye')"> What's the deal with your eye?`,
};

var weird_rocksWhoAreYouLines = {
  0: `- I'm Rox, Rox the rock, nice to meetcha pal!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksCabin')">Do you know who lives in the cabin?<br>`,
  2: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksEye')">What's the deal with your eye?`,
};

var weird_rocksCabinLines = {
  0: `- Oh... Are you talking about Leshy? He's a spirit that makes bad things to people, I don't like to talk about that...<BR><BR>`,
  1: `Leshy turned Rox into a lot of stones!<BR><BR>`,
  2: `Rox starts crying pebbles, you decide to leave him alone for a bit...`,
};

var weird_rocksEyeLines = {
  0: `- Oh, this eye? It's my ultra sharp and shiny metal eye, cool huh?<br><br>`,
  1: `You can't lie, that eye is awesome. <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksWhoAreYou')"> Who are you?<br>`,
  3: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksNice')"> Nice! Can I have it?<br>`,
};

var weird_rocksNiceLines = {
  0: `- Of course not! This is MY eye and if you steal it, you will suffer the most ruthless punishment you'll ever feel!<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('weird_rocks','weird_rocksNotStealEye')">Not steal the eye<br>`, //Fazer essa opção
  2: `<a href="#" onclick="updateScreen('weird_rocksEyeless', 'weird_rocksStealEye')">Steal the eye`,
};

var weird_rocksNotStealEyeLines = {
  0: `- Thanks mate! :D <br><br>`,
  1: `Besides the eye and the threat, the rock doesn't show anything special, you are done with chatting with him for now.`,
};

var weird_rocksStealEye = {
  0: `<b>you got Rox's eye! <br><br>`,
  1: `- Ouch! Give it back! It's your last advice!<br><br>`,
  2: `You can clearly tell that Rox is lying at this point, you just leave.`,
};

var weird_rocksAngryRox = {
  0: `You get back to Rox the rock, now crying pebbles over his lost eye <br><br>`,
  1: `- <i>sniff</i>, What do you want? Go away you heart of stone!<br><br>`,
  2: `You think you already did to much to this poor rock, you turn around and leave.`,
};

var cabinLines = {
  0: `You spot a small and miserable cabin at the edge of the island, the cabin has a skull hanged by the top of its only entrance.<br><br>`,
  1: `By the side, you notice a dead tree with a small script carved on its trunk <br><br>`,
  //WWYD
  2: `<a href="#">Enter the cabin<br>`,
  3: `<a href="#">Investigate the tree`,
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
  0: `- Of course no..`,
  1: `wait, `,
  2: `is that a carrot sticker? `,
  3: `I LOVE CARROTS!!! <br><br>`,
  4: `- Boi y'can take a good look at'em, carrot brotha! <br><br>`,
  5: `You approach the plantation.`,
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
  1: `You think the farmar won't mind if one carrot goes away, so you pull the tube.<br><br>`,
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
  1: `- Hi, where's the ticket?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('wall-open','wallUseTicket')">Here, I have a ticket</a><br>`,
  3: `<a href="#" onclick="updateScreen('wall','wallWhatTicket')">Ticket? What do you mean?</a><br>`,
  4: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  5: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallWhatTicketLines = {
  0: `- You need a ticket to pass the toll, go get one at the castle, they're nice to me.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallBeyondWallLines = {
  0: `- A beatiful cavern with a demigod, you need to see it, so please, get a ticket!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallWhatTicket')">Ticket? What do you mean?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallByeLines = {
  0: `- Thank you for nothing, don't forget to buy a ticket! <br><br>`,
  1: `Maybe you should take a look at what and where this ticket is.`,
};

var wallUseTicketLines = {
  0: `You give the ticket to the thing, it gets really happy! <br><br>`,
  1: `- OOOOOHH, THE BOSS WILL LET ME HAVE A DAY OFF!!!<br>`,
  2: `- Ok, you may pass and admire the cave.<br><br>`,
  3: `The pole besides him lifts, <b>you now have access to the cave</b>.`,
};

var wallAlreadyUsedTicketLines = {
  0: `You see the thing again, trying to hold his smile in front of you: <br><br>`,
  1: `- So? Pass, you don't have anything interesting for me now.<br><br>`,
  2: `You try to say something, but the creature just says blablabla while covering its ears, what a child!`,
};

var castleLines = {
  0: `A big castle can be seen at the distance from the entire island,`,
  1: ` the main gate is open,`,
  2: ` you decide to enter it.`,
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

var palaceEnterLines ={
  0: `Greetings again, stranger.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  2: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,

}

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
  4: ` the forest spirit might have done this to you, it has brought so many others here,`,
  5: ` which are now residents of this unescapable island, but maybe,`,
  6: ` if you're brave enough, `,
  6: ` you can get his sick mischiefs to an end! <br><br>`,
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

var kingQuestLines = {
  0: `- Ah, I see, the legends are true,`,
  1: ` the Island Sword really exists... <br><br>`,
  2: ` But you don't have the materials to craft, as I can see, come back after getting 2 pieces of the sword.<br><br>`,
  3: `- Sadly, I don't know where the pieces reside now. <br><br>`,
  4: `You need to get those pieces in order to have a chance of ending <i>Leshy</i>.`,
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

var shopStickerLines = {
  0: `- A silly carrot sticker, dunno what would you do with it,`,
  1: ` it's funny, though!<br><br>`,
  2: `At the back of the card, you discover that someone named "EmmyLing" drew it.<br><br>`,
  3: `Wanna buy it?<br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopStickerYes')">Yes</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">No</a>`,
};

var shopPassWOKingQuest = {
  0: `- A pass to the caves,`,
  1: ` it's cheap cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` poor lone guy...<br><br>`,
  4: `Sadly, the place is dangerous for citizens, and I can only give one to you with permission...<br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopPassWKingQuest = {
  0: `- A pass to the caves,`,
  1: ` it's cheap cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` poor lone guy...<br><br>`,
  4: `- Oh, I get it,`,
  5: ` the king trusts you, then so do I, take it:<br><br>`,
  6: `<b>You got the Wall Pass!</b>`,
};

var altarAbandonedAltar = {
  0: `Your way takes you to an abandoned altar without anything apparent,`,
  1: ` upon getting closer, you find three empty notches, `,
  2: `maybe you need to place someting there?<br><br>`,
  3: `There's nothing more to investigate here.`,
};
