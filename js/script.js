let del = 20;
let smallDel = 500; //Delays usados para dar uma pausa entre frases
let bigDel = 1000;
let hugeDel = 1500;

const targetLang = new URLSearchParams(window.location.search).get('l');
var language = targetLang == 'pt-br' ? 'brazilian' : 'english';
var langLines = window[language];

//BOTÕES PARA A TELA DE INÍCIO

var startScreen = document.getElementById("start");
var gameScreen = document.getElementById("gamescreen");
var creditsScreen = document.getElementById("credits");
var howToPlayScreen = document.getElementById("howtoplay");
var patchNotesScreen = document.getElementById("patchNotes");
var wrongResolutionScreen = document.getElementById("wrongResolution");

var isPlaying = false;
var wrongResOn = false;

window.addEventListener('resize', () => {
  if(window.innerWidth < window.innerHeight){
    wrongResolutionScreen.style.display = "flex";
    startScreen.style.display = "none";
    gameScreen.style.display = "none";
    creditsScreen.style.display = "none";
    howToPlayScreen.style.display = "none";
    patchNotesScreen.style.display = "none";
    wrongResOn = true;
  }else{
    if(wrongResOn){
      if(isPlaying){
        wrongResolutionScreen.style.display = "none";
        gameScreen.style.display = "grid";
      }else{
        wrongResolutionScreen.style.display = "none";
        startScreen.style.display = "flex";
      }
      wrongResOn = false;
    }
  }});

function eraseSave(){
  // Zerando o DB
  localStorage.setItem("Started", false);
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

  localStorage.setItem("currentPalette", 0);
  localStorage.setItem("currentSpeed", 1);
  localStorage.setItem("currentDelay", 0);

  // Reiniciando as áreas desbloqueáveis
  document.getElementsByClassName("cave")[0].classList.add("disabled");
  document.getElementsByClassName("cave")[1].classList.add("disabled");
  document.getElementsByClassName("pier")[0].classList.add("disabled");
  document.getElementsByClassName("island")[0].classList.add("disabled");
  document.getElementsByClassName("island")[1].classList.add("disabled");
  document.getElementsByClassName("island")[2].classList.add("disabled");

  place = "forest";
  UpdateColors();
}

function updateContinueButton(){
  if(localStorage.length == 0){ document.getElementById("continuebutton").disabled = true; }
  else if(localStorage.getItem("Started") == 'false'){
    document.getElementById("continuebutton").disabled = true;
  }else{
    document.getElementById("continuebutton").disabled = false
  }
}

//Para abrir o jogo
function updateStart(div) {
  switch (div) {
    case "newgame":

      isPlaying = true;
      eraseSave();
      setPalette(0);
      setTextSpeed(0);
      setDelayTime(0);
      document.body.requestFullscreen();

      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      creditsScreen.style.display = "none";
      gameScreen.style.display = "grid";
      patchNotesScreen.style.display = "none";

      updateScreen("forest", "start");
    break;

    case "continue":

      isPlaying = true;
      place = "forest";
      setPalette("useSaved");
      setTextSpeed("useSaved");
      setDelayTime("useSaved");
      UpdateColors();
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
  isPlaying = false;
  gameScreen.style.display = "none";
  creditsScreen.style.display = "none";
  howToPlayScreen.style.display = "none";
  patchNotesScreen.style.display = "none";
  startScreen.style.display = "flex";

  // Ativar/desativar o botão de continuar caso o jogador tenha feito algo
  updateContinueButton();
}

// Mudar velocidade do texto

let speeds = [
  ["25", 0],
  ["20", 1],
  ["10", 2],
  ["0",  3],
];

function setTextSpeed(step) {
  // step pode ser tanto um número (+1, 0, -1), como "useSaved"
  let currentSpeed = JSON.parse(localStorage.getItem("currentSpeed"));
  if (currentSpeed == null) currentSpeed = 1;

  if(step == 0) currentSpeed = 1;
  if (step != "useSaved") currentSpeed += step;
  if (currentSpeed == 4) currentSpeed = 0;
  if (currentSpeed == -1) currentSpeed = 3;

  del = speeds[currentSpeed][0];
  document.getElementById("speedName").innerHTML = window[language].settings.textSpeed[speeds[currentSpeed][1]];
  localStorage.setItem("currentSpeed", currentSpeed);
}

//Mudar paleta de cor

var palettes = [
  ["#ffffff", "#000000", 0],
  ["#cfab4a", "#1b1e24", 1],
  ["#13e600", "#172115", 2],
  ["#fcd1d7", "#42202d", 3],
  ["#adc3e8", "#0d132a", 4],
];

function setPalette(step) {
  // step pode tanto ser um número (+1, 0, -1), como "useSaved" para pegar a paleta do localStorage
  let currentPalette = JSON.parse(localStorage.getItem("currentPalette"));
  if (currentPalette == null) { currentPalette = 0; }

  if(step == 0) currentPalette = 0;
  else if(step != "useSaved") currentPalette += step;

  if (currentPalette == 5) currentPalette = 0;
  if (currentPalette == -1) currentPalette = 4;

  document
    .querySelector(":root")
    .style.setProperty("--main", palettes[currentPalette][0]);
  document
    .querySelector(":root")
    .style.setProperty("--bg", palettes[currentPalette][1]);
  document.getElementById("paletteName").innerHTML = window[language].settings.colorPalette[currentPalette];

  localStorage.setItem("currentPalette", currentPalette);
}

//Mudar delay entre frases
// smallDel, bigDel, between
let betweenDelays = [
  [500, 1000, 0],
  [250, 500,  1],
  [0,   0,    2],
];

function setDelayTime(step){
  let currentDelay = JSON.parse(localStorage.getItem("currentDelay"));
  if (currentDelay == null) currentDelay = 0;
  if(step == 0) currentDelay = 0;
  if(step != "useSaved") currentDelay += step;

  if (currentDelay == 3) currentDelay = 0;
  if (currentDelay == -1) currentDelay = 2;

  smallDel = betweenDelays[currentDelay][0];
  bigDel = betweenDelays[currentDelay][1];
  hugeDel = betweenDelays[currentDelay][2];

  document.getElementById("delayName").innerHTML = window[language].settings.delayBetween[betweenDelays[currentDelay][2]];

  localStorage.setItem("currentDelay", currentDelay);
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
      localStorage.setItem("Started", true);

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
  // Refundir caso o jogador saia
  if(localStorage.getItem("islandSword") == 'true'){
    FuseSword();
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

  document.getElementById("tomainmenu").onclick = "";
  document.getElementById("tomainmenu").disabled = true;

  setPalette(0);
  document.getElementById("paletteForward").onclick = ""; //Mudar paleta
  document.getElementById("paletteBack").onclick = "";
}

async function typewriteCorrect(delay, divToType, lines){
  divToType.style.pointerEvents = "none"

  let textOBJ = window[language][lines]
  if(!textOBJ){ console.error(`Não há texto na variável ${lines}.`); return; }

  divToType.innerHTML = "";

  for(let line of Object.values(textOBJ)){
    const newSpan = document.createElement("span") // Nova span com a nova linha
    divToType.appendChild(newSpan)
    console.log("Proxima linha: " + line)

    divToType.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", e => e.stopPropagation());
    });

    await new Promise(resolve => {
      let i = 0;
      let len = line.length
      
      function nextChar(){
      let spans = divToType.querySelectorAll("span")
      if(i >= len) { resolve(); return; }
      if(line[i+1] == "<"){
        while(line[i+1] != ">" && i < len){
          if(line[i+1] == 'a'){
            divToType.style.pointerEvents = "all"
          }
          i++
        }
      }

      spans[spans.length-1].innerHTML = line.slice(0, i+2)

      i++
  
      delay = del;

      // Ignore
      // if(/,/.test(line[i])) delay = smallDel
      // if(/[.:?!]/.test(line[i])) delay = bigDel
      
      let timeout = setTimeout(nextChar, delay);
    }
    
    nextChar()
  })    
  }
}

function typewrite(delay, divToType, lines){ // Text to type = object
  chatDiv.style.pointerEvents = "none"
  
  let textObject = window[language][lines]
  if(!textObject){ console.error(`Texto da variável ${lines}, não encontrado`); return }
  
  divToType.innerHTML = "<span id='shown'></span><span id='hidden'></span>";
  
  let shownSpan = divToType.querySelector("#shown")
  let hiddenSpan = divToType.querySelector("#hidden")

  for(let s of Object.values(textObject)){
    hiddenSpan.innerHTML += s; // Fills the hidden span
  }

  divToType.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => e.stopPropagation());
  });


  let i = 0;
  let divHTML = hiddenSpan.innerHTML // Full text
  let len = divHTML.length

  function nextChar(){
    if(i >= len) return;
    
    if(divHTML[i+1] == "<"){
      while(divHTML[i+1] != ">" && i < len){
        if(divHTML[i+1] == 'a'){
          chatDiv.style.pointerEvents = "all"
        } 
        i++;
      }
    }
    shownSpan.innerHTML = divHTML.substring(0, i+2);
    hiddenSpan.innerHTML = divHTML.substring(i+2);

    i++;
    delay = del;

    if(/,/.test(divHTML[i])) delay = smallDel
    if(/[.:?!]/.test(divHTML[i])) delay = bigDel
    timeout = setTimeout(nextChar, delay)
  }

  function skipTyping(e){
    if(e.target.closest("a")) return; // se for um link clicado
    clearTimeout(timeout)
    hiddenSpan.innerHTML = ""
    shownSpan.innerHTML = divHTML
    chatDiv.style.pointerEvents = "all"
  }
  
  nextChar()
  setTimeout(() => { document.getElementById("chat").addEventListener("click", skipTyping, { once: true }) }, 100)
}

function updateScreen(nextImg, nextText) {

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

  let ImgQuery;

  //Esses IFs abaixo são usados caso o player entre no local após certo acontecimento.
    if     (stick && nextText == "enterForest")                      { nextText = "enterForestWStick" }
    else if(!stick && nextText == "enterForest")                     { nextText = "enterForestWOStick"; localStorage.setItem("stick", true) }
    else if(bearScared && nextText == "forest")                      { nextText = "forestBearScared" }
    else if((islandSword || broadsword) && nextText == "forestBear") {
      nextText = "forestBearWSword";
      localStorage.setItem("bearScared", true)
      document.getElementsByClassName("pier")[0].classList.remove("disabled");
    }
    else if(nextText == "forestBear")                                { nextText = "forestBearWOSword" }
    else if(!kingQuest && nextText == "altar")                       { nextText = "altarAbandoned" }
    else if(!angelVisited && nextText == "altar")                    { nextText = "altarFirst"; localStorage.setItem("angelVisited", true) }
    else if(!castleEntered && nextText == "castle")                  { localStorage.setItem("castleEntered", true) }
    else if(castleEntered && nextText == "castle")                   { nextText = "castleEnter" }
    else if(!palaceEntered && nextText == "palace")                  { nextText = "palaceFirst"; localStorage.setItem("palaceEntered", true) }
    else if(nextText == "kingHowDoThis")                             { localStorage.setItem("kingQuest", true) }
    else if(sword2 && sword3 && !sword1 && nextText == "palace")     { nextText = "kingGivePommel"; localStorage.setItem("sword1", true) }
    else if(!shopEntered && nextText == "shop")                      { nextText = "shopFirst"; localStorage.setItem("shopEntered", true) }
    else if(nextText == "shopBroadswordYes" && broadsword)           { nextText = "shopOnlyOnePerPerson" }
    else if(nextText == "shopStickerYes" && sticker)                 { nextText = "shopOnlyOnePerPerson" }
    else if(nextText == "shopPass" && pass > 0)                      { nextText = "shopOnlyOnePerPerson" }
    else if(nextText == "shopBroadswordYes" && coins < 20)           { nextText = "shopTooPoor" }
    else if(nextText == "shopBroadswordYes" && coins >= 20)          { 
      localStorage.setItem("coins", coins - 20);
      localStorage.setItem("broadsword", true) }
      else if(nextText == "shopStickerYes" && coins < 10)            { nextText = "shopTooPoor" }
      else if(nextText == "shopStickerYes" && coins >= 10)    {
      localStorage.setItem("coins", coins - 10);
      localStorage.setItem("sticker", true) 
    }
    else if(nextText == "shopPass" && !kingQuest)                    { nextText = "shopPassWOKingQuest" }
    else if(nextText == "shopPass" && kingQuest)                     { nextText = "shopPassWKingQuest"; localStorage.setItem("pass", 1) }
    else if(nextText == "weirdRocksStealEye")                        { localStorage.setItem("sword3", true) }
    else if(nextText == "weirdRocks" && sword3)                      { nextText = "weirdRocksAngryRox" }
    else if(nextText == "farm" && sword2)                            { nextText = "farmCrazyFarmer" }
    else if(nextText == "farmSeeCrops" && !sticker)                  { nextText = "farmSeeCropsWOSticker" }
    else if(nextText == "farmSeeCrops" && sticker)                   { nextText = "farmSeeCropsWSticker" }
    else if(nextText == "farmApproach" && sticker)                   { localStorage.setItem("sword2", true) }
    else if(nextText == "wallUsePass" && pass == 0)                  { nextText = "wallUsePassWOPass" }
    else if(nextText == "wallUsePass" && pass == 1)                  { // Unlocking the pier
      nextText = "wallUsePassWPass"; 
      localStorage.setItem("pass", 2); 
      document.getElementsByClassName("cave")[0].classList.remove("disabled");
      document.getElementsByClassName("cave")[1].classList.remove("disabled"); }
    else if(nextText == "wall" && pass == 2)                         { nextText = "wallAlreadyUsedPass"}
    else if(nextText == "goblin" && goblinGotMoney)                  { nextText = "goblinAfterGotMoney"}
    else if(nextText == "goblin" && !goblinVisited)                  { nextText = "goblinFirst"; localStorage.setItem("goblinVisited", true)}
    else if(nextText == "goblinMoney")                               {
      localStorage.setItem("goblinGotMoney", true)
      localStorage.setItem("coins", 31)
    }
    else if(nextText == "wellThrowCoin" && coins < 1)                { nextText = "wellThrowCoinWOCoin" }
    else if(nextText == "wellThrowCoin" && coins >= 1)               {
      localStorage.setItem("goggles", true) 
      localStorage.setItem("coins", coins-1)
    }
    else if(nextText == "well" && goggles)                           { nextText = "wellAfterGoggles" }
    else if(nextText == "island" && !islandEntered)                  {
      nextText = "islandFirst"
      document.getElementsByClassName("island")[0].classList.remove("disabled");
      document.getElementsByClassName("island")[1].classList.remove("disabled");
      document.getElementsByClassName("island")[2].classList.remove("disabled");
      localStorage.setItem("islandEntered", true) 
      localStorage.setItem("tunic", true)
    }
    else if(nextText == "angelAskAboutQuest" && !sword2)              { nextText = "angelParts2" }
    else if(nextText == "angelAskAboutQuest" && !sword3)              { nextText = "angelParts3" }
    else if(nextText == "angelAskAboutQuest" && !sword1)              { nextText = "angelParts1" }
    else if(nextText == "angelAskAboutQuest" && !islandSword)         { nextText = "angelFuseSword1" }
    else if(nextText == "angelAskAboutQuest")                         { nextText = "angelPartsBadFeeling" }
    else if(nextText == "angelFuseSword3")                            { localStorage.setItem("islandSword", true) }
    else if(nextText == "cabinTree" && islandSword && goggles && tunic){ nextText = "treeCanDefeat" }
    else if(nextText == "cabinTree")                                  { nextText = "treeCantDefeat" }
    else if(nextText == "leshyFate" && !kingQuest)                    { nextText = "leshyLostSoul" }
    else if(nextText == "leshyFate" && !goggles)                      { nextText = "leshyWOGoggles" }
    else if(nextText == "leshyFate")                                  { nextText = "leshyWGoggles" }
    else if(nextText == "leshyBurn" && !tunic)                        { nextText = "leshyWODarkTunic" }
    else if(nextText == "leshyBurn")                                  { nextText = "leshyWDarkTunic" }
    else if(nextText == "leshyFinalTest" && !islandSword)             { nextText = "leshyFinalDefeat" }
    else if(nextText == "leshyFinalTest")                             { nextText = "leshyFinalVictory" }
    
    else if(nextText == "leshyAngel")                                 { setPalette("useSaved") }

    if (sword3 && nextImg == "weirdRocks")          { ImgQuery = "weirdRocksCrying"; }
    else if (pass == 2 && nextImg == "wall")        { ImgQuery = "wall-open"; }
    else if (castleEntered && nextImg == "castle")  { ImgQuery = "bifurcation"; }
    else if (kingQuest && nextImg == "altar")       { ImgQuery = "angel"; }
    else if (tunic && nextImg == "island")          { ImgQuery = "islandhole"; }
    else if (goggles && nextImg == "well")          { ImgQuery = "wellPoor"; }
    else if (goblinGotMoney && nextImg == "goblin") { ImgQuery = "goblinCry"; }
    else if (sword1 && nextImg == "king")           { ImgQuery = "kingPommelless"; }
    else                                            { ImgQuery = nextImg; }

  updateInventory();

  if (nextImg == "leshyFinalForm") {
    document.querySelector(":root").style.setProperty("--main", "green");
  }

  let NI = document.getElementById(ImgQuery);

  //mudar imagem
  document.querySelector(".active").classList.remove("active");
  NI.classList.add("active");

  //mudar texto
  typewriteCorrect(del, chatDiv, nextText)
}

function winGame() {
  let endingText = document.getElementById("endingText");
  gameScreen.style.display = "none";
  winScreen.style.display = "flex";

  endingText.innerHTML = window[language].exitCabin[0]
  eraseSave();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'w' || e.key === 'W') {
    winGame();
  }
}, { once: true });

UpdateColors();
updateContinueButton();
