var started = false;
var sticker = false;
var Stick = false;
var ticket = 1;
//0 = Não tem o ticket
//1 = Tem mas não usou
//2 = Tem E já usou
var sword1 = false;
var sword2 = false;
var sword3 = false;

let del = 0;

var castleEntered = false;
var palaceEntered = false;
var shopEntered = false;
var kingQuest = true;
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
  }
  else if (ticket == 2 && nextImg == "wall") {
    ImgQuery = "wall-open";
  }
  else if (kingQuest == true && nextImg == "altar") {
    ImgQuery = "altarAngel";
  }
  else if (castleEntered == true && nextImg == "castle") {
    ImgQuery = "bifurcation";
    text = "castleEnter";
  }
  else if (palaceEntered == true && nextImg == "king") {
    text = "palaceEnter";
  } else if(shopEntered == false && nextImg == 'shop') {
    text = 'shopFirst'; //arrumar aqui
  }  else ImgQuery = nextImg;
  console.log(shopEntered)
  console.log(nextImg)
  console.log(text)

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
          .pauseFor(1000)

          .typeString(WWYD)
          .typeString(enterForestLinesWOStick[2])
          .typeString(enterForestLinesWOStick[3])
          .start();
      }

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
      setTimeout(() => {
        updateScreen("bifurcation", "castleEnter");
      }, 500);
      castleEntered = true;
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
      TW.typeString(kingEnterFirstLines[0])
        .pauseFor(1000)
        .typeString(kingEnterFirstLines[1])
        .pauseFor(1000)
        .typeString(WWYS)
        .typeString(kingEnterFirstLines[2])
        .typeString(kingEnterFirstLines[3])
        .typeString(kingEnterFirstLines[4])
        .typeString(kingEnterFirstLines[5])
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

    case 'shopFirst':
      TW.typeString(shopFirstLines[0])
        .pauseFor(500)
        .typeString(shopFirstLines[1])
        .pauseFor(500)
        .typeString(shopFirstLines[2])
        .pauseFor(500)
        .typeString(shopFirstLines[3])
        .typeString(shopFirstLines[4])
        .typeString(shopFirstLines[5])
        .start();
        shopEntered = true;
        break;
      
        case 'shop':
          TW.typeString(shopFirstLines[0])
          .pauseFor(500)
          .typeString(shopFirstLines[1])
          .typeString(shopFirstLines[2])
          .typeString(shopFirstLines[3])
          .start();
        
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
  0: `You decided to enter further into the forest, unarmed and lost <br> <br>`,
  1: `By the ground, you find a somewhat straight stick on the ground, you got <b>an ordinary stick</b>! <br><br>`,
  //WWYD
  2: `<a href="#">continue</a> <br>`,
  3: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
};

var enterForestLinesWithStick = {
  0: `Back to the same place you are, you can still see the spot where you found your stick... <br><br>`,
  //WWYD
  1: `<a href="#">continue</a> <br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
};

var wellLines = {
  0: ` In the distance, you discover an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies" <br><br>`,
  //WWYD
  1: ` <a href="#"> Throw a Coin<br>`,
  2: ` <a href="#" onclick="updateScreen('well_jump', 'well_jump')"> Jump into the well`,
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
  5: `<a href="#" onclick="updateScreen('king','palaceEnterFirst')">To the king's palace</a><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">To the local store</a>`,
};

var kingEnterFirstLines = {
  0: `You enter the palace without any problems, looks like this place doesn't need much guards to be peaceful, at the end of the room, you see a king: <br><br>`,
  1: `- Hello fellow citizen, or may I say... Stranger?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,

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
  4: `<a href="#" onclick="updateScreen('shop','shop')">Sticker (10 coins)</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Wall Pass (<s>1 coin</s> FREE!)</a><br>`,
};

var shopLines = {
  0: ` Welcome back! Take a look at my stuff!<br><br>`,
  1: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Broadsword (20 coins)</a><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Sticker (10 coins)</a><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Wall Pass (<s>1 coin</s> FREE!)</a><br>`,
}

var shopBroadsword = {
  0: `A steel broadsword, forged by the kingdom's best swordsmith:`,
  0: ` Kyle Kompos!<br><br>`,
  0: `Wanna buy it?<br><br>`,
  0: `<a href="#" onclick="updateScreen('shop','shopBroadswordYes')">Yes</a><br>`,
  0: `<a href="#" onclick="updateScreen('shop','shopBroadswordNo')">No</a>`,
}

var altarAbandonedAltar = {
  0: `Your way takes you to an abandoned altar without anything apparent,`,
  1: ` upon getting closer, you find three empty notches, `,
  2: `maybe you need to place someting there?<br><br>`,
  3: `There's nothing more to investigate here.`,
};

