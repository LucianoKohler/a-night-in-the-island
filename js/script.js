var startScreen = document.getElementById('start')
var startButton = document.getElementById('startbutton')
startButton.addEventListener('click', function(){
    startScreen.style.display = 'none';
    console.log('clicado');
})

//Para ciclar entre mapa e others
var othersDiv = document.getElementById('others');
var mapDiv = document.getElementById('map');


function toMap(){
    othersDiv.style.display='none';
    mapDiv.style.display='block';
}    


function toOthers(){
    mapDiv.style.display='none';
    othersDiv.style.display='flex';
}   

var place = 'house';
var currentLocation = document.querySelectorAll('.'+place);
var allPlaces = mapDiv.querySelectorAll('a')
console.log(allPlaces.length)
console.log(allPlaces)
//adicionando eventlisteners para TODOS os links do menu
for (let i=0; i<=(allPlaces.length-1); i++){
    allPlaces[i].addEventListener('click', function(){
        place=allPlaces[i].className
        currentLocation = document.querySelectorAll('.'+place);
        updateColors();
    })
}


function updateColors(){
    for (let i=0; i<=(allPlaces.length-1); i++){
        if(allPlaces[i].className==place){
            allPlaces[i].style.color='yellow';
        }else{
            allPlaces[i].style.color='white'
        }
    }
    
    // for (let i=0; i<=currentLocation.length; i++){
    //     currentLocation[i].style.color='yellow';
    }

