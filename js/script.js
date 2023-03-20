var startScreen = document.getElementById('start')
var startButton = document.getElementById('startbutton')
startButton.addEventListener('click', function(){
    startScreen.style.display = 'none';
})

//para ser mais rápido:

var textLines = {
    well0: 'In the distance, you see an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies"',
    well1: 'What will you do ?',
    well2: '<a href="#" id="throwcoinintowell"> Throw a Coin',
    well3: '<a href="#" id="jumpintowell"> Jump into the well'
}

document.addEventListener('keydown', function(event){
    if(event.code='Enter'){
        startScreen.style.display = 'none';
    }
})

//Para ciclar entre mapa e others
var othersDiv = document.getElementById('others');
var mapDiv = document.getElementById('map');

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
var place = 'house';
var currentLocation = document.querySelectorAll('.'+place);
var allPlaces = mapDiv.querySelectorAll('a')
console.log(allPlaces.length)
console.log(allPlaces)
//adicionando eventlisteners para TODOS os links do menu
for (let i=0; i<=(allPlaces.length-1); i++){
    allPlaces[i].addEventListener('click', function(){
        if(allPlaces[i].className!='goback'){
            place=allPlaces[i].className
            currentLocation = document.querySelectorAll('.'+place);
            UpdateColors();
        }
    })
}


function UpdateColors(){
    for (let i=0; i<=(allPlaces.length-1); i++){
        if(allPlaces[i].className==place){
            allPlaces[i].style.color='yellow';
        }else{
            allPlaces[i].style.color='white'
        }
    }
}

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

var chat = document.getElementById('text');

var typewriterwell = new Typewriter(chat, {
    delay: 25,
  });
  
  typewriterwell
    .pauseFor(2500)
    .typeString(textLines.well0 + '<br> <br>')
    .pauseFor(500)
    .typeString(textLines.well1 + '<br> <br>')
    .typeString(textLines.well2 + '<br>')
    .typeString(textLines.well3)
    .start();

