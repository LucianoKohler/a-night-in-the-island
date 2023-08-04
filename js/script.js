
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

//"BANCO DE DADOS" PARA AS FALAS DO JOGO
//todos os <a> possuem a função de dar update no jogo, as variáveis inseridas são: a imagem a ser carregada e o texto a ser printado

var chooseLines = {
    0: `You can use the map anytime you want to leave the place`,
}

var startLines = {
    0: `You wake up in front of a great and dense forest, without any memory of the last day, what happened?`,
    1: `The only thing you can do now is to investigate, what will you do?`,
    2: `<a href="#"> Enter the forest </a>`,
    3: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
}

var forestLines = {
    0: `Back to forest you get, what will you do?`,
    1: `<a href="#"> Enter the forest </a>`,
    2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest`,
}


var wellLines = {
    0: ` In the distance, you discover an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies"` ,
    1: ` What will you do?` ,
    2: ` <a href="#"> Throw a Coin` ,
    3: ` <a href="#" onclick="updateScreen('well_jump', 'well_jump')"> Jump into the well` ,
}

var well_jumpLines = {
    0: `Without any fear, you hop into the well, after all, that's how games work!`,
    1: `.`,
    2: `.`,
    3: `. right?`,
    4: `After some time, you hit the ground and die instantly, what was you thinking!?`
}



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
        delay: 25,
      });

      twStart
      .pauseFor(500)
      .typeString(startLines[0] + '<br> <br>')
      .pauseFor(1000)
      .typeString(startLines[1] + '<br> <br>')
      .typeString(startLines[2] + '<br>')
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
    switch (text){
        case 'chooselocation':
            let TWS = new Typewriter(chatDiv, {
                delay: 25,
            });
            TWS.typeString(chooseLines[0]).start()
            break;
        case 'well':
            let TWW = new Typewriter(chatDiv, {
                delay: 25,
            });
            TWW.typeString(wellLines[0] + '<br> <br>')
            .pauseFor(500)
            .typeString(wellLines[1] + '<br> <br>')
            .typeString(wellLines[2] + '<br>')
            .typeString(wellLines[3])            
            .start()
            break;
        case 'well_jump':
            let TWWJ = new Typewriter(chatDiv, {
                delay: 25,
            });
            TWWJ.typeString(well_jumpLines[0] + "<br> <br>")
            .pauseFor(1000)
            .typeString(well_jumpLines[1])
            .pauseFor(1000)
            .typeString(well_jumpLines[2])
            .pauseFor(1000)
            .typeString(well_jumpLines[3] + "<br> <br>")
            .pauseFor(2000)
            .typeString(well_jumpLines[4])
            .start()


            break;
        case 'forest':
            let TWF = new Typewriter(chatDiv, {
                delay: 25,
            });
            TWF.typeString(forestLines[0] + '<br> <br>')
            .pauseFor(500)
            .typeString(forestLines[1] + '<br>')
            .typeString(forestLines[2])            
            .start()
            break;

        default:
            console.log('não encontrado')
            break;
    }
}

UpdateColors()

