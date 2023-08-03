
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
var textLines = {
    chooselocation: `You can use the map anytime you want to leave the place`,
    start0: `You wake up in front of a great and dense forest, without any memory of the last day, what happened?`,
    start1: `The only thing you can do now is to investigate, what will you do?`,
    start2: `<a href="#"> Enter the florest </a>`,
    start3: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the florest`,
    well0: ` In the distance, you see an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies"` ,
    well1: ` What will you do ?` ,
    well2: ` <a href="#"> Throw a Coin` ,
    well3: ` <a href="#"> Jump into the well` ,
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
            console.log(place);

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
      .typeString(textLines.start0 + '<br> <br>')
      .pauseFor(1000)
      .typeString(textLines.start1 + '<br> <br>')
      .typeString(textLines.start2 + '<br>')
      .typeString(textLines.start3)
      .start()
}

function updateScreen(nextImg, text){
    let NI = document.getElementById(nextImg)

    document.querySelector('.active').classList.remove('active')

    NI.classList.add('active')
    if(text == 'chooselocation'){
        let TW = new Typewriter(chatDiv, {
            delay: 25,
        });
        TW.typeString(textLines.chooselocation).start()
    }
}

UpdateColors()

