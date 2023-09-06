var started = false;
var sticker = true;
var Stick = false
var sword1 = false
var sword2 = false
var sword3 = false

let del = 25
//velocidade de escrita dos textos

//BOTÕES PARA A TELA DE INÍCIO

var startScreen = document.getElementById('start')
var startButton = document.getElementById('startbutton')


//Para abrir o jogo

let start = () => {
    startScreen.style.display = 'none';
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
    .start()
}

document.onkeydown = (e) =>{
    if(e.key =='Enter' && started == false) start();  
};

document.getElementById('startbutton').onclick = () => start();






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

let tooltip = document.createElement('span');
tooltip.id = 'tooltip'
mapDiv.appendChild(tooltip)


for (let i=0; i<=(allPlaces.length-1); i++){

    allPlaces[i].addEventListener('click', () =>{
        
        if(allPlaces[i].className!='goback'){
            place=allPlaces[i].className
            currentLocation = document.querySelectorAll('.'+place);

            if(!allPlaces[i].classList[1]){//Se NÃO houver a classe disabled
                updateScreen(allPlaces[i].className, allPlaces[i].className)
                UpdateColors();
            }
        }
    })

    allPlaces[i].addEventListener('mousemove', (e) =>{
        tooltip.style.display = 'inline';

        if(allPlaces[i].classList[1]){
            tooltip.innerHTML = '???'
        }else{
            tooltip.innerHTML = allPlaces[i].className.charAt(0).toUpperCase() + //Para capitalizar o primeiro caractere;
            allPlaces[i].className.slice(1) //Para mostrar o resto da frase;
            .replace('_', ' '); //Para retirar os _ e colocar espaços (deixar bonito;)
        }

        tooltip.style.top = (e.clientY -20) +'px';
        tooltip.style.left = (e.clientX +10) +'px';
    })
    
    allPlaces[i].onmouseout = () => tooltip.style.display = 'none'


}

//Função para trocar a cor da localização atual

function UpdateColors(){
    for (let i=0; i<=(allPlaces.length-1); i++){
        if(allPlaces[i].className==place) allPlaces[i].style.color='yellow';
        else                              allPlaces[i].style.color='white';
        
    }
}

//Métodos de morrer aqui

function DyingAnimation(){
    document.getElementById('gamescreen').style.display='none';
    document.getElementById('deathmessage').style.display='flex';
    started = false;
    //lembrar de resetar os itens ao morrer
}

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyD'){
        console.log('MORREU');
        DyingAnimation();
    }

})

//Início do chat, para colocar os textos na div "chat"

var chatDiv = document.getElementById('text');



function updateScreen(nextImg, text){

    let ImgQuery;

    //Esses IFs abaixo são usados caso o player entre no local após certo acontecimento.
    if(sword3 == true && nextImg == 'weird_rocks') ImgQuery = 'weird_rocksCrying';
    else ImgQuery = nextImg;


    let NI = document.getElementById(ImgQuery)

    //mudar imagem
    document.querySelector('.active').classList.remove('active')
    NI.classList.add('active')

    //mudar texto
    let TW = new Typewriter(chatDiv, {
        delay: del,
    })

    TW.pauseFor(250) //Espera inicial quando se muda a ação/localização

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


            setTimeout(DyingAnimation, 12500); //Tempo certo para delay = 25;
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
            if(sword3 == false){
                TW.typeString(weird_rocksLines[0])
                .pauseFor(500)
                .typeString(weird_rocksLines[1])
                .pauseFor(500)
                .typeString(weird_rocksLines[2])
                .typeString(weird_rocksLines[3])
                .typeString(weird_rocksLines[4])
                .start()
            }else{
                TW.typeString(weird_rocksAngryRox[0])
                .pauseFor(1000)
                .typeString(weird_rocksAngryRox[1])
                .pauseFor(1000)
                .typeString(weird_rocksAngryRox[2])
                .start()
            }
            break;

        case 'weird_rocksWhoAreYou':
            TW.typeString(weird_rocksWhoAreYouLines[0])
            .pauseFor(500)
            .typeString(weird_rocksWhoAreYouLines[1])
            .typeString(weird_rocksWhoAreYouLines[2])
            .typeString(weird_rocksWhoAreYouLines[3])
            .start()
            break;

        case 'weird_rocksCabin':
            TW.typeString(weird_rocksCabinLines[0])
            .pauseFor(1000)
            .typeString(weird_rocksCabinLines[1])
            .pauseFor(2000)
            .typeString(weird_rocksCabinLines[2])
            .start()
        break;

        case 'weird_rocksEye':
            TW.typeString(weird_rocksEyeLines[0])
            .pauseFor(1000)
            .typeString(weird_rocksEyeLines[1])
            .pauseFor(1000)
            .typeString(weird_rocksEyeLines[2])
            .typeString(weird_rocksEyeLines[3])
            .typeString(weird_rocksEyeLines[4])
            .start()
        break;

        case 'weird_rocksNice':
            TW.typeString(weird_rocksNiceLines[0])
            .pauseFor(1000)
            .typeString(WWYD)
            .typeString(weird_rocksNiceLines[1])
            .typeString(weird_rocksNiceLines[2])
            .start()
        break;

        case 'weird_rocksStealEye':
            TW.typeString(weird_rocksStealEye[0])
            .pauseFor(1000)
            .typeString(weird_rocksStealEye[1])
            .pauseFor(1000)
            .typeString(weird_rocksStealEye[2])
            .start()

            sword3 = true;
        break;
       
        case 'cabin':
            TW.typeString(cabinLines[0])
            .pauseFor(1000)
            .typeString(cabinLines[1])
            .pauseFor(500)
            .typeString(WWYD)
            .typeString(cabinLines[2])
            .typeString(cabinLines[3])
            .start()
            break;
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
    4: `After some time, you hit the ground and die instantly, what was you thinking?!`
}


var weird_rocksLines = {
    0: `You find a weird arrangement of rocks in the middle of the grass <br><br>`,
    1: `-Heyo! - The rock says <br><br>`,
    2: `What will you say? <br><br>`,
    3: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksWhoAreYou')"> Who are you?<br>`,
    4: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksEye')"> What's the deal with your eye?`
}

var weird_rocksWhoAreYouLines = {
    0: `- I'm Rox, Rox the rock, nice to meetcha pal!<br><br>`,
    1: `What will you say?<br><br>`,
    2: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksCabin')">Do you know who lives in the cabin?<br>`,
    3: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksEye')">What's the deal with your eye?`
}

var weird_rocksCabinLines = {
    0: `- Oh... Are you talking about Leshy? He's a spirit that makes bad things to people, I don't like to talk about that...<BR><BR>`,
    1: `Leshy turned Rox into a lot of stones!<BR><BR>`,
    2: `Rox starts crying pebbles, you decide to leave him alone for a bit...`
}

var weird_rocksEyeLines = {
    0: `- Oh, this eye? It's my ultra sharp and shiny metal eye, cool huh?<br><br>`,
    1: `You can't lie, that eye is awesome. <br><br>`,
    2: `What will you say?<br><br>`,
    3: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksWhoAreYou')"> Who are you?<br>`,
    4: `<a href="#" onclick="updateScreen('weird_rocks', 'weird_rocksNice')"> Nice! Can I have it?<br>`,
}

var weird_rocksNiceLines = {
    0: `- Of course not! This is MY eye and if you steal it, you will suffer the most ruthless punishment you'll ever feel!<br><br>`,
    
    1: `<a href="#">Not steal the eye<br>`,//mudar o cara abaixo para eyeless quando der
    2: `<a href="#" onclick="updateScreen('weird_rocksEyeless', 'weird_rocksStealEye')">Steal the eye`,
}

var weird_rocksStealEye = {
    0: `<b>you got Rox's eye! <br><br>`,
    1: `- Ouch! Give it back! It's your last advice!<br><br>`,
    2: `You can clearly tell that Rox is lying at this point, you just leave.`,
}

var weird_rocksAngryRox = {
    0: `You get back to Rox the rock, now crying pebbles over his lost eye <br><br>`,
    1: `- <i>sniff</i>, What do you want? Go away you heart of stone!<br><br>`,
    2: `You think you already did to much to this poor rock, you turn around and leave.`
}

var cabinLines = {
    0: `You spot a small and miserable cabin at the edge of the island, the cabin has a skull hanged by the top of its only entrance.<br><br>`,
    1: `By the side, you notice a dead tree with a small script carved on its trunk <br><br>`,

    2: `<a href="#">Enter the cabin<br>`,
    3: `<a href="#">Investigate the tree`,
}

var FarmLines = {
    0: `Oh my! Visitor!!! Welcome to ma farm, I plant carrots, potatoes, carrots, carrots, metal and carrots! How can I help'ya?`
}