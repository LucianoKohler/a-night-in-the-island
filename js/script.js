var Stick = false

let del = 5
//velocidade de escrita dos textos

//BOTÕES PARA A TELA DE INÍCIO

var startScreen = document.getElementById('start')
var startButton = document.getElementById('startbutton')
startButton.addEventListener('click', function(){
    startScreen.style.display = 'none';
})

//Para abrir o jogo com a tecla "enter"

document.addEventListener('keydown', function(event){
    if(event.code='Enter'){
        startScreen.style.display = 'none';
    }
})





//Para ciclar entre mapa e others
var othersDiv = document.getElementById('others');
var mapDiv = document.getElementById('map');

//Funções para mudar as divs, utilizadas no HTML

function toMainMenu(){
    startScreen.style.display = 'flex';
    document.getElementById('deathmessage').style.display='none';
    document.getElementById('gamescreen').style.display='grid';
}

function toMap(){
    othersDiv.style.display='none';
    mapDiv.style.display='block';
}    


function toOthers(){
    mapDiv.style.display='none';
    othersDiv.style.display='flex';
}


//Fazendo com que a localização atual fique amarela no mapa

var place = 'forest';
var currentLocation = document.querySelectorAll('.'+place);
var allPlaces = mapDiv.querySelectorAll('a')

//adicionando eventlisteners para TODOS os links do menu

for (let i=0; i<=(allPlaces.length-1); i++){
    allPlaces[i].addEventListener('click', function(){
        if(allPlaces[i].className!='goback'){
            place=allPlaces[i].className
            currentLocation = document.querySelectorAll('.'+place);
            updateScreen(allPlaces[i].className, allPlaces[i].className)
            //Botar um updateScreen aqui.
            UpdateColors();
        }
    })
}

//Função para trocar a cor da localização atual

function UpdateColors(){
    for (let i=0; i<=(allPlaces.length-1); i++){
        if(allPlaces[i].className==place){
            allPlaces[i].style.color='yellow';
        }else{
            allPlaces[i].style.color='white'
        }
    }
}

//Métodos de morrer aqui

function DyingAnimation(){
    document.getElementById('gamescreen').style.display='none';
    document.getElementById('deathmessage').style.display='flex';
}

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyD'){
        console.log('MORREU');
        DyingAnimation();
    }

})

//Início do chat, para colocar os textos na div "chat"

var chatDiv = document.getElementById('text');

document.getElementById('startbutton').onclick = () =>{
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
      .start()
}

function updateScreen(nextImg, text){
    let NI = document.getElementById(nextImg)
    console.log(nextImg, text)

    //mudar imagem
    document.querySelector('.active').classList.remove('active')
    NI.classList.add('active')

    //mudar texto
    let TW = new Typewriter(chatDiv, {
        delay: del,
    })

    switch (text){

        case 'chooselocation':

            TW.typeString(chooseLines[0]).start()
            break;

        case 'well':

            TW.typeString(wellLines[0])
            .pauseFor(500)
            .typeString(WWYD)
            .typeString(wellLines[1])
            .typeString(wellLines[2])            
            .start()
            break;

        case 'well_jump':

            TW.typeString(well_jumpLines[0])
            .pauseFor(1000)
            .typeString(well_jumpLines[1])
            .pauseFor(1000)
            .typeString(well_jumpLines[2])
            .pauseFor(1000)
            .typeString(well_jumpLines[3])
            .pauseFor(2000)
            .typeString(well_jumpLines[4])
            .start()
            break;

        case 'forest':
            TW.typeString(forestLines[0])
            .pauseFor(500)
            .typeString(WWYD)
            .typeString(forestLines[1])
            .typeString(forestLines[2])            
            .start()
            break;

        case 'enterForest':

            if(Stick){//com graveto
                TW.typeString(enterForestLinesWithStick[0])
                .typeString(WWYD)
                .typeString(enterForestLinesWithStick[1])
                .typeString(enterForestLinesWithStick[2])
                .start()
                
            }else{//sem graveto
                Stick = true
                TW.typeString(enterForestLinesWOStick[0])
                .pauseFor(500)
                .typeString(enterForestLinesWOStick[1])
                .pauseFor(1000)
    
                .typeString(WWYD)
                .typeString(enterForestLinesWOStick[2])
                .typeString(enterForestLinesWOStick[3])
                .start()
            }

            break;
        
        case 'weird_rocks':
            TW.typeString(weird_rocksLines[0])
            .pauseFor(500)
            .typeString(weird_rocksLines[1])
            .pauseFor(500)
            .typeString(weird_rocksLines[2])
            .typeString(weird_rocksLines[3])
            .typeString(weird_rocksLines[4])

            .start()
        default:
            console.log('não encontrado')
            break;
    }
}

UpdateColors()

//"BANCO DE DADOS" PARA AS FALAS DO JOGO
//todos os <a> possuem a função de dar update no jogo, as variáveis inseridas são: a imagem a ser carregada e o texto a ser printado
//criei essa var abaixo pois é muito repetida pelo jogo
var WWYD = 'What will you do? <br><br>'

var chooseLines = {
    0: `You can use the map anytime you want to leave the place`,
}

var startLines = {
    0: `You wake up in front of a great and dense forest, without any memory of the last day, what happened? <br><br>`,
    1: `The only thing you can do now is to investigate. <br><br>`,

    2: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a> <br>`,
    3: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
}

var forestLines = {
    0: `Back to forest you get.<br><br>`,

    1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a><br>`,
    2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
}

var enterForestLinesWOStick = {
    0: `You decided to enter further into the forest, unarmed and lost <br> <br>`,
    1: `By the ground, you find a somewhat straight stick on the ground, you got <b>an ordinary stick</b>! <br><br>`,

    2: `<a href="#">continue</a> <br>`,
    3: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`
}

var enterForestLinesWithStick = {
    0: `Back to the same place you are, you can still see the spot where you found your stick... <br><br>`,
    
    1: `<a href="#">continue</a> <br>`,
    2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`
}

var wellLines = {
    0: ` In the distance, you discover an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies" <br><br>` ,

    1: ` <a href="#"> Throw a Coin<br>` ,
    2: ` <a href="#" onclick="updateScreen('well_jump', 'well_jump')"> Jump into the well` ,
}

var well_jumpLines = {
    0: `Without any fear, you hop into the well, after all, that's how games work!<br><br>`,
    1: `.`,
    2: `.`,
    3: `. right?<br><br>`,
    4: `After some time, you hit the ground and die instantly, what was you thinking!?`
}

var weird_rocksLines = {
    0: `You find a weird arrangement of rocks between in the middle of the grass <br><br>`,
    1: `-Heyo! <br><br>`,
    2: `What will you say? <br><br>`,
    3: `<a href="#"> Who are you?<br>`,
    4: `<a href="#"> What's the deal with your eye?`
}