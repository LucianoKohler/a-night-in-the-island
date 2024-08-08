var WWYD = "O que você fará? <br><br>";
var WWYS = "O que você dirá? <br><br>";
var YAEH = `<a href="#" onclick="dyingAnimation()">Sua aventura acaba aqui.</a>`;

var chooseLines = {
  0: `Você pode usar o mapa a qualquer hora para sair da sua localização atual,`,
  1: `use-o se você se sentir perdido!`,
};

var startLines = {
  0: `Você acorda em frente a uma grande e densa floresta,`,
  1: ` você não se lembra da sua casa,`,
  2: ` da sua vida,`,
  3: ` e muito menos do seu nome,`,
  4: ` você está perdido,`,
  5: ` e a única coisa que você pode fazer agora é procurar ajuda.<br><br>`,
  //WWYD
  6: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Entrar na floresta</a> <br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Recuar da floresta</a>`,
};

var forestLines = {
  0: `Você se reencontra com a floresta.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Entrar na floresta </a><br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Recuar da floresta</a>`,
};

var forestBearScaredLines = {
  0: `Você se reencontra com a floresta.<br><br>`,
  1: `O urso desapareceu da floresta, e você não vê nada de interessante por entre as árvores,`,
  2: ` você sente que continuar sua trilha na floresta não vai te ajudar.`,
};

var enterForestLinesWOStick = {
  0: `Você decide adentrar mais fundo na floresta, sem saber o que te espera do outro lado dela.<br><br>`,
  1: `Pelo chão, você encontra um graveto torto no chão:<br><br>`,
  2: `<b>Você adquiriu um graveto comum</b>! <br><br>`,
  //WWYD
  3: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continuar</a> <br>`,
  4: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Recuar da floresta`,
};

var enterForestLinesWithStick = {
  0: `De volta ao mesmo lugar, você ainda reconhece o lugar em que o graveto foi encontrado... <br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continuar</a> <br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Recuar da floresta</a>`,
};

var ForestBearWSwordLines = {
  0: `Você prossegue sua caminhada floresta até que de repente...`,
  1: ` Um urso aparece das moitas!<br><br>`,
  2: `Você rapidamente saca sua pesadíssima espada,`,
  3: ` sem perceber,`,
  4: ` o ângulo dela começa a refletir o brilho da lua em uma intensidade maluca diretamente nos olhos do urso, espantando ele!<br><br>`,
  5: `Você fica aliviado e grato por quem forjou essa espada,`,
  6: ` afinal, você não sabe usar uma...<br><br>`,
  7: `Você contunua pela floresta até encontrar o seu fim,`,
  8: ` no outro lado, você encontra um pequeno píer, com um barquinho amarrado na água.<br><br>`,
  9: `<b>Agora, você pode acessar o píer!</b>`,
};

var ForestBearWOSwordLines = {
  0: `Você prossegue sua caminhada floresta até que de repente...`,
  1: ` Um urso aparece das moitas!<br><br>`,
  2: `Você segura seu bastão firmemente,`,
  3: ` pronto para lutar por sua vida, sem voltar atrás!<br><br>`,
  4: `O urso dá seu primeiro passo em sua direção, e suas pernas começam a pensar melhor que você,`,
  5: ` sem perceber, você começa a correr loucamente, só parando ao perceber que voltou à entrada da floresta,`,
  6: ` talvez você não esteja preparado para lutar com algo tão grande?<br><br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">O que eu faço agora?</a>`,
};

var pierLines = {
  0: `Um pequeno píer com um barquinho pronto para uso te aguarda em frente ao mar.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'island')">Velejar para algum lugar</a><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Vislumbrar o mar</a>`,
};

var pierStareSeaLines = {
  0: `Você olha para a água e percebe:`,
  1: ` Você não se lembra do seu próprio rosto!<br><br>`,
  2: `Ao se inclinar ao mar, você vê belas estrelas e a grande lua refletidas na água, mas falta algo...`,
  3: ` Cadê o seu reflexo?`,
  4: ` Cadê...`,
  5: ` Você?<br><br>`,
  6: ` <a href="#" onclick="updateScreen('pier', 'pier')">Voltar</a>`,
};

var islandFirstLines = {
  0: `Você sobe no barco, agarra os remos e começa a remar,`,
  1: ` sem direção alguma, apenas com a intenção de sair do lugar.`,
  2: ` Alguns minutos de solitude com o som das ondas do mar te levam à uma pequena ilha,`,
  3: ` você decide atracar nela.<br><br>`,
  4: `Ao chegar, não há nada além de uma palmeira e um X gigante marcando algo,`,
  5: ` você, com suas mãos vazias, começa a cavar o X na mão, já que esse lugar não deve ter uma pá.<br><br>`,
  6: `A escavação foi bem-sucedida,`,
  7: ` depois de suas mãos ficarem quase dormentes,`,
  8: ` você encontra uma malha negra, aparentemente resistente, e acima de tudo:`,
  9: ` Estilosa!<br><br>`,
  10: `<b>Você adquiriu a malha negra!<b><br><br>`,
  11: `<a href="#" onclick="updateScreen('islandhole', 'island')">Ihaaa!</a>`,
};

var islandLines = {
  0: `Aí você está, parado na orla da ilha, junto ao buraco que você fez.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'islandRowHorizonPart1')">Remar ao horizonte</a><br>`,
  2: `<a href="#" onclick="updateScreen('island', 'islandAppreciateLandscape')">Apreciar a paisagem</a>`,
};

var islandAppreciateLandscapeLines = {
  0: `Você olha para o horizonte.<br><br>`,
  1: `Água,`,
  2: ` estrelas`,
  3: ` e a lua,`,
  4: ` isso é tudo, por que você está aqui?`,
  5: ` Quem te trouxe para cá?`,
  6: ` Será que foi...`,
  7: ` Magia?<br><br>`,
  8: `Você deve terminar sua missão,`,
  9: ` só assim você terá a chance de saber seu destino nesse lugar.<br><br>`,
  10: `<a href="#" onclick="updateScreen('island', 'island')">Voltar</a>`,
};

var islandRowHorizonPart1Lines = {
  0: `Você continua sua jornada para o desconhecido,`,
  1: ` talvez o tempo te guie para o caminho certo.<br><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'islandRowHorizonPart2')">Continuar</a>`,
};

var islandRowHorizonPart2Lines = {
  0: `Após alguns minutos,`,
  1: ` a confirmação de que esse lugar não é normal aparece:`,
  2: ` Você retornou ao píer!`,
  3: ` Nem você e nem a calmaria do mar virou seu barco em qualquer momento`,
  4: ` parece que você realmente está preso nesse lugar e que magia realmente existe afinal...<br><br>`,
  //WWYD
  5: `<a href="#" onclick="updateScreen('island', 'island')">Velejar para algum lugar</a><br>`,
  6: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Vislumbrar o mar</a><br>`,
};

var wellLines = {
  0: `Na distância, você encontra um poço comum com uma plaquinha pendurada nele escrito "me mostre os brilhantes"<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('well', 'wellThrowCoin')">Jogar uma moeda</a><br>`,
  2: `<a href="#" onclick="updateScreen('well', 'wellLookInside')">Olhar dentro do poço</a>`,
};

var wellLinesAfterGoggles = {
  0: `Você volta ao poço,`,
  1: ` a placa ainda fala que você é pobre.<br><br>`,
  2: ` "É só um poço bobo, ignora ele"<br><br>`,
  3: ` Você diz a si mesmo enquanto se afasta.`,
};

var wellThrowCoinLines = {
  0: `Você retira uma moeda do resto do seu dinheiro, se aproxima do poço, e a joga no buraco sem fim.<br><br>`,
  1: `Você ouve uns barulhinhos, e então, um par de óculos é lançado para fora do poço,`,
  2: `Você reconhece como sendo um daqueles óculos de festa com um desenho espiral no lugar das lentes:<br><br>`,
  3: `<b>Você adquiriu o óculos de espiral!</b><br><br>`,
  4: `Usá-los te deixa muito tonto, depois de tirá-los, você percebe que a placa mudou seu texto:<br><br>`,
  5: `"Tu é pobre, lixão"<br><br>`,
  6: `Que poço mal-educado! Você não quer mais ficar perto dele.`,
};

var wellThrowCoinWOCoinLines = {
  0: `Você procura pelos bolsos,`,
  1: ` mas percebe que não tem nem um tostão com você agora,`,
  2: ` que vergonha...<br><br>`,
  3: `<a href="#" onclick="updateScreen('well', 'well')">Voltar</a>`,
};

var wellLookInsideLines = {
  0: `Você se inclina,`,
  1: ` sem água,`,
  2: ` sem balde,`,
  3: ` apenas um buraco escuro sem fim e uma corda rompida pendurada.<br><br>`,
  4: `<a href="#" onclick="updateScreen('well', 'well')">Voltar</a>`,
};

var weirdRocksLines = {
  0: `Você encontra um arranjo de pedras no meio da grama:<br><br>`,
  1: `-Aoba! - A rocha diz.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Quem é você?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')"> O que é esse olho esquisito?</a>`,
};

var weirdRocksWhoAreYouLines = {
  0: `- Eu sou Pedro, Pedro a pedra, prazer em conhecer chará!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksCabin')">Você sabe quem mora na cabana?<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')">O que é esse olho esquisito?</a>`,
};

var weirdRocksCabinLines = {
  0: `- Ah... Você tá falando do <i>Leshy</i>? <i>Ele</i> ele é um espírito que faz coisas ruins com as pessoas, eu não quero falar sobre isso...<BR><BR>`,
  1: `<i>Leshy</i> transformou Pedro em um monte de pedras!<BR><BR>`,
  2: `Pedro começa a chorar pedrinhas, e você decide deixá-lo sozinho um pouco...`,
};

var weirdRocksEyeLines = {
  0: `- Ah, esse olho? É o meu olho de metal ultra afiado e brilhante, maneiro né?<br><br>`,
  1: `Sem piadas, esse olho é brilhante mesmo. <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Quem é você?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksNice')"> Legal! Posso pegar?<br>`,
};

var weirdRocksNiceLines = {
  0: `- Claro que não! Esse é o MEU olho, e se você roubá-lo, palavras não conseguirão descrever a dor que você vai receber!<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('weirdRocks','weirdRocksNotStealEye')">Não roubar o olho<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocksEyeless', 'weirdRocksStealEye')">Roubar o olho`,
};

var weirdRocksNotStealEyeLines = {
  0: `- Valeu mano! :D <br><br>`,
  1: `Além do olho e da ameaça, a rocha não parece ter nada demais, você termina sua conversa com ela por enquanto.`,
};

var weirdRocksStealEye = {
  0: `<b>Você adquiriu o olho do Pedro!<br><br>`,
  1: `- Ai! Devolve agora! Esse é o último aviso!<br><br>`,
  2: `Você vê claramente que Pedro está mentindo à esse ponto, você apenas vai embora.`,
};

var weirdRocksAngryRox = {
  0: `Você volta para Pedro a pedra, agora chorando pedrinhas pelo olho que sobrou<br><br>`,
  1: `- Uhhh, O que você quer? vai embora seu coração de pedra!<br><br>`,
  2: `Você acha que já importunou a pedrinha demais, você se vira e vai embora.`,
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
  0: `- Of course no...`,
  1: ` wait, `,
  2: `is that a carrot sticker? `,
  3: `I LOVE CARROTS!!! <br><br>`,
  4: `- Boi y'can take a good look at'em, carrot brotha! <br><br>`,
  5: `<a href="#" onclick="updateScreen('farmZoom','farmApproach')">Approach the plantation</a>`,
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
  1: `You think the farmer won't mind if one carrot goes away, so you pull the tube.<br><br>`,
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
  1: `- Hi, where's the Pass?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('wall-open','wallUsePass')">Here, I have a Pass</a><br>`,
  3: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Pass? What do you mean?</a><br>`,
  4: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  5: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallWhatPassLines = {
  0: `- You need a Pass to pass the toll, go get one at the castle, they're nice to me.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallBeyondWallLines = {
  0: `- A beatiful cavern with a demigod, you need to see it, so please, get a Pass!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Pass? What do you mean?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
};

var wallByeLines = {
  0: `- Thank you for nothing, don't forget to buy a Pass! <br><br>`,
  1: `Maybe you should take a look at what and where this Pass is.`,
};

var wallUsePassLines = {
  0: `You give the Pass to the thing, it gets really happy! <br><br>`,
  1: `- OOOOOHH, THE BOSS WILL LET ME HAVE A DAY OFF!!!<br>`,
  2: `- Ok, you may pass and admire the cave.<br><br>`,
  3: `The pole besides him lifts, <b>you now have access to the cave!</b>.`,
};

var wallAlreadyUsedPassLines = {
  0: `You see the thing again, trying to hold his smile in front of you: <br><br>`,
  1: `- So? Pass, you don't have anything interesting for me now.<br><br>`,
  2: `You try to say something, but the creature just says blablabla while covering its ears, what a child!`,
};

var caveLines = {
  0: `A big cave stands in front of you,`,
  1: ` you can hear small growls coming from it.<br><br>`,
  2: `<a href="#" onclick="updateScreen('goblin','goblin')">Enter it.</a>`,
};

var goblinFirstLines = {
  0: `The cave smells like mold and has the sound of dripping water from the dripstones along with the growls,`,
  1: ` walking further shows you the so called demigod that the doorman spoke about:`,
  2: ` A small goblin near a "treasure",`,
  3: ` which is actually just a small pile of coins on the ground.<br><br>`,
  4: `- Who dares to enter my domain?<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Who are you?</a><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  7: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
};

var goblinLines = {
  0: `You get back to the inside of the cave,`,
  1: ` the goblin is still there.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Who are you?</a><br>`,
  3: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  4: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
};

var goblinAfterGotMoneyLines = {
  0: `You get back to the cave,`,
  1: ` the goblin is still crying,`,
  2: ` you're not good with cheering someone up,`,
  3: ` plus you stole its money,`,
  4: ` maaaaybe it's better to forget him by now.`,
};

var goblinWhoAreYouLines = {
  0: `- I'm Barretos, the demigod,`,
  1: ` the keeper of the island's biggest treasure,`,
  2: ` the inhabitant of the oldest cave on the island,`,
  3: ` the most green being here,`,
  4: ` the mightiest warrior of...<br><br>`,
  5: `You yell at him that you already got it.<br><br>`,
  6: `- Of course you got...<br><br>`,
  //WWYS
  7: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  8: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
};

var goblinWhatGoldLines = {
  0: `- It's my treasure,`,
  1: ` MY treasure,`,
  2: ` envy me, I'm the richest man in the island!`,
  3: ` If you cry enough, I may give you a penny...`,
  4: ` HAHA!<br><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinNotMuch')">That's not much to be honest...</a>`,
};

var goblinNotMuchLines = {
  0: `What do you mean?`,
  1: ` It's a lot! The shopkeeper said that to me!`,
  2: ` The money that he gets from the pass is passed to ME,`,
  3: ` and I get RICH!<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('goblin','goblinTruth')">(Say the truth) Yeah but I got the pass for free...</a><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinBluff')">(Bluff) I have much more money than you, haha.</a>`,
};

var goblinBluffLines = {
  0: `- No,`,
  1: ` that's impossible,`,
  2: ` there can only be one richest man in the island,`,
  3: ` THAT'S IT.`,
  4: ` LET'S FIGHT, THE WINNER KEEPS ALL THE MONEY!<br><br>`,
  5: `The goblin's moss green skin color starts to turn into a boiling red color.<br><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Come on!</a>`,
};

var goblinTruthLines = {
  0: `- You're telling me that you entered MY cave WITHOUT GIVING ME MONEY?`,
  1: ` No, this can't happen,`,
  2: ` since you got here for free,`,
  3: ` YOU'LL HAVE TO TURN INTO MY MINION, FOREVER!`,
  4: ` GIVE UP, I AM UNBEATABLE!<br><br>`,
  5: `You defy the goblin, saying that if you defeat him, you can get to keep the treasure for yourself.<br><br>`,
  6: `- I DON'T CARE,`,
  7: ` PREPARE TO FEEL THE WRATH OF BARRETOS!!!<br><br>`,
  8: `The goblin's moss green skin color starts to turn into a boiling red color.<br><br>`,
  9: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Come on!</a>`,
};

var goblinComeOnLines = {
  0: `The goblin starts to come at your direction,`,
  1: ` its small legs make this process a little long,`,
  2: ` long enough to give time to pick up a rock from the ground.`,
  3: ` You throw it:<br><br>`,
  4: `Bullseye! The rock hits the goblin's face!`,
  5: ` It falls on the ground and starts crying...<br><br>`,
  6: `- Uff...`,
  7: ` Why did you do that?`,
  8: ` That's foul play!`,
  9: ` Go away!<br><br>`,
  10: `<a href="#" onclick="updateScreen('goblinCry','goblinMoney')">Take the money</a>`,
};

var goblinMoneyLines = {
  0: `You are not dumb.`,
  1: ` Money may help you with getting geared up,`,
  2: ` and you won the fight!`,
  3: ` you get the mediocre pile of money from the ground.<br><br>`,
  4: `<b>You got exactly 31 coins!</b><br><br>`,
  5: `You let the goblin crying at its cave,`,
  6: ` that guy is too annoying.`,
};

var goblinByeLines = {
  0: `- Bye, sucker,`,
  1: ` bring me something to eat next time!<br><br>`,
  2: `Who this guy think it is?`,
};

var castleLines = {
  0: `A big castle can be seen at the distance from the entire island,`,
  1: ` the main gate is open,`,
  2: ` you may enter it.<br><br>`,
  3: `<a href="#" onclick="updateScreen('bifurcation','castle')">Enter it</a>`,
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

var palaceEnterLines = {
  0: `Greetings again, stranger.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  2: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
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
  4: ` <i>the forest spirit</i> might have done this to you, <i>it</i> has brought so many others here,`,
  5: ` which are now residents of this unescapable island, but maybe,`,
  6: ` if you're brave enough, `,
  6: ` you can get <i>its</i> sick mischiefs to an end! <br><br>`,
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

var kingGivePommelLines = {
  0: `- Hello again, stranger,`,
  1: ` how's your quest going?<br><br>`,
  2: `You tell him that you only need the pommel to finish the sword.<br><br>`,
  3: `- Speak no more.<br><br>`,
  4: `The king removes an ornament from his throne, and gives it to you:<br><br>`,
  5: `<b>You got the King's Pommel!</b><br><br>`,
  6: `<a href="#" onclick="updateScreen('kingPommelless','kingPommelPart2')">Finally!</a>`,
};

var kingPommelPart2Lines = {
  0: `- This pommel was the only part of the sword that we found,`,
  1: ` to keep it safe,`,
  2: ` I guarded it within my throne, but now`,
  3: ` it has a better use, the angel knows what to do now.<br><br>`,
  4: `You should go to the angel and finish this sword hunting.`,
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

var shopBroadswordYesLines = {
  0: `- Katching! - Says the little wizard:<br><br>`,
  1: `<b>You got the Steel Broadsword!</b><br><br>`,
  2: `The sword is REALLY heavy, you know that you'll have problems with using it<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Better than nothing!</a>`,
};

var shopStickerLines = {
  0: `- A silly carrot sticker, dunno what would you do with it,`,
  1: ` it's funny, though!<br><br>`,
  2: `At the back of the card, you discover that someone named "Mittens" drew it.<br><br>`,
  3: `Wanna buy it?<br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopStickerYes')">Yes</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">No</a>`,
};

var shopStickerYesLines = {
  0: `- Katching! - Says the little wizard:<br><br>`,
  1: `<b>You got the Carrot Sticker!</b><br><br>`,
  2: `Without a place to glue it, you glue it to your clothing.<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Feeling stylish!</a>`,
};

var shopPassWOKingQuest = {
  0: `- A pass to the caves,`,
  1: ` it's free cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` poor lone guy...<br><br>`,
  4: `Sadly, the place is dangerous for citizens, and I can only give one to you with permission...<br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopPassWKingQuest = {
  0: `- A pass to the caves,`,
  1: ` it's free cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` Poor lone guy...<br><br>`,
  4: `- Oh, I get it,`,
  5: ` the king trusts you, then so do I, take it:<br><br>`,
  6: `<b>You got the Wall Pass!</b><br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopTooPoorLines = {
  0: `- You don't have enough money to buy that!<br><br>`,
  1: `- Sorry, I can't give credit...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var shopOnlyOnePerPersonLines = {
  0: `- Only one type of product per person!<br><br>`,
  1: `- Sorry, store rules...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
};

var altarAbandonedLines = {
  0: `Your way takes you to an abandoned altar without anything apparent,`,
  1: ` upon getting closer, you find three empty notches, `,
  2: `maybe you need to place someting there?<br><br>`,
  3: `There's nothing more to investigate here.`,
};

var altarLines = {
  0: `- Welcome again,`,
  1: ` my child.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var altarFirstLines = {
  0: `- Hello little child,`,
  1: ` I see that the king has called me to help you with your quest of defeating the evil spirit <i>Leshy</i>.<br><br>`,
  2: `- As the king said, regular weapons won't work against <i>its</i> body,`,
  3: ` we will need to use fire against fire,`,
  4: ` a sword soaked with magic:`,
  5: ` <b>The Island Sword.</b><br><br>`,
  6: `- This altar once was a place to keep it safe, but time passed, and <i>Leshy</i> thought fast and got rid of it.`,
  7: ` But hope is not lost! The sword can't leave the island, so it must be here, and if not, its parts are.`,
  8: ` We just need to find them and take them here.<br><br>`,
  //WWYS
  9: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  10: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  11: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  12: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  13: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelParts2Lines = {
  0: `- I once heard the farmer talking about "planting metal",`,
  1: ` I don't know if that's useful,`,
  2: ` but it is surely worth a shot.<br><br>`,
  //WWYS
  //GeneralLines
};

var angelParts3Lines = {
  0: `- I felt a little bit of magic coming the west of the island,`,
  1: ` maybe someone powerful is keeping a part for itself!<br><br>`,
  //WWYS
  //GeneralLines
};

var angelParts1Lines = {
  0: `- Now that we have two parts,`,
  1: ` we only need the pommel, the main part of the sword's superpowers,`,
  2: ` go talk to the king,`,
  3: ` he knows where it is.<br><br>`,
  //WWYS
  //GeneralLines
};

var angelPartsBadFeelingLines = {
  0: `- We got the mightiest weapon of this island.`,
  1: ` But something feels...`,
  2: ` Off,`,
  3: ` what if just it is not enough to defeat <i>him</i>?`,
  4: ` I have a bad feeling about this,`,
  5: `  <i>Leshy</i> is dirty, and will do anything to kill anyone who bothers him.<br><br>`,
  //WWYS
  //GeneralLines
};

var angelPartsGeneralLines = {
  //Falas usadas nas três perguntas de onde estão as partes de espada
  0: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  1: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  2: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelFuseSwordPart1Lines = {
  0: `- We did it,`,
  1: ` my child!`,
  2: ` We got all the necessary pieces to refuse the Sword!<br><br>`,
  3: `- Now, place the parts at their notches and take a step back.<br><br>`,
  4: `<a href="#" onclick="updateScreen('altarlightbeam','altarFuseSword')">Do what they asked</a>`,
};

var angelFuseSwordPart2Lines = {
  0: `The angel retreats from the altar,`,
  1: `and after 5 steps of backing off,`,
  2: ` a giant light beam strucks the`,
  3: ` altar, making a deafening noise of a lightning, together with a blinding light...<br><br>`,
  4: `<a href="#" onclick="updateScreen('angel','altarFuseSwordAftermath')">And?</a>`,
};

var angelFuseSwordPart3Lines = {
  0: `The light beam disappears into thin air,`,
  1: ` and you're left with the so called blade capable of slaying anything.<br><br>`,
  2: `<b>You got The Island Sword!</b><br><br>`,
  3: `- There it is! In all of its glory!`,
  4: ` I'm grateful for your help, my child,`,
  5: ` you deserve it, keep it and use it to end this island's suffering.<br><br>`,
  //WWYS
};

var angelWhoAreYouLines = {
  0: `- I'm Maldio,`,
  1: ` Maldio the angel,`,
  2: ` I work here as a swordkeeper, but I failed my job... Now I stay here, waiting for someone to come and help with the swordfinding.<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelHowSwordDisappearLines = {
  0: `- I was playing RPG with my angel friends at the castle's tavern and,`,
  1: ` unfortunately,`,
  2: ` <i>Leshy</i> took the cue and stole the sword while I was away, and now it is gone,`,
  3: ` and no one helped me with finding it...<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  7: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelSearchSwordYourselfLines = {
  0: `- I don't have a fisic body! <br><br>`,
  1: `You think that this makes sense<br><br>`,
  2: `- But that's not the main problem, I am also a little shy...<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
};

var angelByeLines = {
  0: `- Bye my child,`,
  1: ` good luck with the sword finding.`,
};

var cabinLines = {
  0: `You spot a small and miserable cabin at the edge of the island, the cabin has a skull hanged by the top of its only entrance.<br><br>`,
  1: `By the side, you notice a dead tree with a small script carved on its trunk.<br><br>`,
  //WWYD
  2: `<a href="#" onclick="updateScreen('empty','cabinEnter')">Enter the cabin</a><br>`,
  3: `<a href="#" onclick="updateScreen('cabin','cabinTree')">Investigate the tree</a>`,
};

var cabinLinesWOGoggles = {
  0: `Upon coming closer to the tree,`,
  1: ` the carving becomes clear,`,
  2: ` it's a text written:<br><br>`,
  3: `<b>You can't slay him.</b><br><br>`,
  4: `<a href="#" onclick="updateScreen('cabin','cabin')">Go back</a>`,
};

var cabinLinesWGoggles = {
  0: `Upon coming closer to the tree,`,
  1: ` the headache from using the goggles gets REALLY strong,`,
  2: ` but you can still see what's carved,`,
  3: ` it's a text:<br><br>`,
  4: `<b>You can slay him.</b><br><br>`,
  5: `<a href="#" onclick="updateScreen('cabin','cabin')">Go back</a>`,
};

var CabinEnterLines = {
  0: `You decided to enter the dark cabin,`,
  1: ` what really resides inside of it is still unknown.<br><br>`,
  2: `Inside of it, everything is pitch black,`,
  3: ` the ground is sticky,`,
  4: ` nothing moves,`,
  5: ` there isn't... Anything.`,
  6: ` Moments before going back outside,`,
  7: ` the door shuts, and you hear a voice from the darkness:<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshy','cabinFate')">Listen to it</a>`,
};

var leshyLostSoulLines = {
  0: `<i>- What do we have here...`,
  1: `<b><i> A lost soul.</b><br><br>`,
  2: `The entity pulls off a pendulum made out of sticks and starts to swing it.`,
  3: ` You can't look away from it,`,
  4: ` its movement,`,
  5: ` its form,`,
  6: ` its swiftness,`,
  7: ` it calms you down...<br><br>`,
  8: ` <b>You are not in control of yourself...</b><br><br>`,
  9: `<i>- I will end this quickly,`,
  10: `<i> I don't see any bad intentions coming from you...<br><br>`,
  //YAEH
};

var leshyWOGogglesLines = {
  0: `<i>- What do we have here...`,
  1: `<b><i> A brave warrior?</b><br><br>`,
  2: `The entity pulls off a pendulum made out of sticks and starts to swing it.`,
  3: ` You can't look away from it,`,
  4: ` its movement,`,
  5: ` its form,`,
  6: ` its swiftness,`,
  7: ` it calms you down...<br><br>`,
  8: ` <b>You are not in control of yourself...</b><br><br>`,
  9: `<i>- You thought that only your will was enough to end me?<br><br>`,
  10: `<i>Leshy</i> throws a dagger to your feet,`,
  11: ` you are forced take it, `,
  12: ` you start to point the dagger to your heart.<br><br>`,
  //YAEH
};

var leshyWGogglesLines = {
  0: `<i>- What do we have here...`,
  1: `<b><i> A brave warrior.</b><br><br>`,
  2: `The entity pulls off a pendulum made out of sticks and starts to swing it.`,
  3: ` You can't look away from it,`,
  4: ` its movement,`,
  5: ` its form,`,
  6: ` its swiftness,`,
  7: ` it calms you down...<br><br>`,
  8: ` <b>You are not in control of yourself...</b><br><br>`,
  9: `<i>- You thought that only your will was enough to end me?<br><br>`,
  10: `Your legs crumble,`,
  11: ` and you fall,`,
  12: ` straight into the ground,`,
  13: ` the goggles made you dizzy again,`,
  14: ` and the impact made you snap out of the control!<br><br>`,
  15: `<a href="#" onclick="updateScreen('leshySkull','leshyPassTest1')">Pull yourself together</a>`,
};

var leshySkullLines = {
  0: `<i>- I see, that you have something special,`,
  1: `<i> sadly, I have more than one trick.<br><br>`,
  2: `A skull with a candle across it appears, held by a gruesome hand.<br><br>`,
  3: `<i>- Burn.<br><br>`,
  4: `<a href="#" onclick="updateScreen('leshyBurn','leshyBurn')">Continue</a>`,
};

var leshyWODarkTunicLines = {
  0: `<i>Leshy</i> throws the skull at your feet,`,
  1: ` the sticky floor begins to burn,`,
  2: ` quickly spreading into your upper body.<br><br>`,
  3: `The heat is to much,`,
  4: ` you run to the door hoping that you can flee,`,
  5: ` but it won't budge,`,
  6: ` you just accept that you'll burn with this cabin,`,
  7: ` and luckily,`,
  8: ` with <i>Leshy</i> as well.<br><br>`,
};

var leshyWDarkTunicLines = {
  0: `<i>Leshy</i> throws the skull at your feet,`,
  1: ` the sticky floor begins to burn,`,
  2: ` quickly spreading into your upper body.<br><br>`,
  3: `The heat is to much,`,
  4: ` but the dark tunic absorbs the fire,`,
  5: ` rapidly disappearing after <i>Leshy's</i> killing attempt.<br><br>`,
  6: `<i>- I thought that they got rid, of this thing a long time ago...`,
  7: `<i> It doesn't matter, if you want it that badly,`,
  8: `<i> let's end this.<br><br>`,
  9: `<a href="#" onclick="updateScreen('empty','leshyTransform')">Continue</a>`,
};

var leshyTransformation = {
  0: `The pair of eyes disappear in the darkness.<br><br>`,
  1: `The deafening silence of the cabin soon turns into a loud orchestra of craking wood,`,
  2: ` as if it was being destroyed,`,
  3: ` plank by plank.`,
  4: ` The noise stops before you have time to process what was happening.<br><br>`,
  5: `.`,
  6: ` .`,
  7: ` .<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshyFinalForm','leshyFinalForm')">Face the enemy</a>`,
};

var leshyFinalFormLines = {
  0: `The small pair of eyes doesn't exist anymore.<br><br>`,
  1: `The putrid hand which held the skull doesn't exist anymore.<br><br>`,
  2: `Your enemy has changed,`,
  3: ` what before appeared to be a moving corpse,`,
  4: ` now is a colossal eye that lights the entire cabin with a dark green glow,`,
  5: ` making its presence more than obvious.<br><br>`,
  6: `The worst part,`,
  7: ` though,`,
  8: ` is that the monster's pupil isn't regular,`,
  9: ` something is moving inside of it,`,
  10: ` knocking from the inside,`,
  11: ` begging for freedom,`,
  12: ` that thing...<br><br>`,
  13: `<b>Is you.</b><br><br>`,
  14: `Even though your face is a mystery for yourself after you first arrived at the island,`,
  15: ` you can't think of anything else other than you being the one imprisioned by <i>Leshy's</i> evil intentions.<br><br>`,
  16: `You've found a way to exit the island,`,
  17: ` but one final thing is necessary to do so:<br><br>`,
  18: `<b>YOU NEED TO SAVE YOURSELF!</b><br><br>`,
  19: `<a href="#" onclick="updateScreen('empty','leshyFinalTest')">End this</a>`,
};

var leshyFinalDefeatLines = {
  0: `You hold your broadsword uptight,`,
  1: ` for some reason,`,
  2: ` it isn't as heavy as before,`,
  3: ` maybe it's the adrenalin,`,
  4: ` maybe it's the will to end everything,`,
  5: ` but in the end, it doesn't matter at all.<br><br>`,
  6: `You rush to the eye,`,
  7: ` it doesn't do anything other than staring at you,`,
  8: ` each step makes your strength grow bigger,`,
  9: ` as if all of the island's vitality was within you.<br><br>`,
  10: `<b>You slash the eye's pupil.</b><br><br>`,
  11: `The head of the imprisioned one starts to fall from their neck,`,
  12: ` <b>but so does yours.</b><br><br>`,
  13: `The feeling of having the island by your side was fake,`,
  14: ` the certainty that this fight was already won was fake,`,
  15: ` and maybe the chance of ending this suffering was never real at all.<br><br>`,
  16: `As your head hits the ground,`,
  17: ` you can only notice the green eye looking at you:<br><br>`,
  18: `- Killed by your own hands,`,
  19: ` the saddest way to end your life.<br><br>`,
  20: `A regular sword,`,
  21: ` even if sharpened to its limit,`,
  22: ` can't slice the transcendental.`,
  23: ` Only what's not from the material world can slice the unsliceable.<br><br>`,
  24: ` That's your final thought before you succumb to death's call.<br><br>`,
  //YAEH
};

var leshyFinalVictoryLines = {
  0: `You hold your magical blade uptight,`,
  1: ` the weapon is much more lighter than it looks,`,
  2: ` making slicing much more effective.<br><br>`,
  3: `You rush to the eye,`,
  4: ` it doesn't do anything other than staring at you,`,
  5: ` each step makes your strength grow bigger,`,
  6: ` as if all of the island's vitality was within you.<br><br>`,
  7: `<b>You slash the eye's pupil.</b><br><br>`,
  8: `The person inside the pupil begins to glow,`,
  9: ` while the rest of the eye starts to quickly rot before your eyes:<br><br>`,
  10: `- The Island sword...`,
  11: ` I underestimated you...<br><br>`,
  12: `<a href="#" onclick="updateScreen('leshyAftermath','leshyAftermath')">Victory at last...</a>`,
};

var leshyAftermathLines = {
  0: `Suddenly, the eye gets totally rotten,`,
  1: ` leaving a giant hole in the wall,`,
  2: ` the moonglow washes you`,
  3: ` and you take the moment to calm yourself,`,
  4: ` your "You" starts to come back,`,
  5: ` you start to remember your name,`,
  6: ` your history,`,
  7: ` your life,`,
  8: ` everything is back.<br><br>`,
  9: `<a href="#" onclick="updateScreen('leshyAngel','leshyAngel')">Something is approaching...</a>`,
};

var leshyAngelLines = {
  0: ` Maldio the angel phases through the cabin's walls after this conversation with yourself:<br><br>`,
  1: `- I can't believe it,`,
  2: ` you managed to defeat the evil spirit!`,
  3: ` You know what that means?<br><br>`,
  4: `You remain quiet,`,
  5: ` waiting for the answer...<br><br>`,
  6: `- It means that the island is free from <i>Leshy's</i> curse,`,
  7: ` and everyone can go back home,`,
  8: ` including you!<br><br>`,
  9: ` Words can't describe your feelings right now,`,
  10: ` you get up,`,
  11: ` excited to know how.<br><br>`,
  12: `- I won't make this long,`,
  13: ` I know that you're homesick.<br><br>`,
  14: `The angel proceeds into getting close to the <i>eye's</i> remains,`,
  15: ` you didn't even realize that they were there,`,
  16: ` Maldio starts to manipulate the small portions of magic that remained in the pile of nothing...<br><br>`,
  17: `- That's it,`,
  18: ` the portal is open,`,
  19: ` look behind you!<br><br>`,
  20: `<a href="#" onclick="updateScreen('finalDoor','ending')">Turn Around</a>`,
};

var endingLines = {
  0: `The end of your quest is nigh,`,
  1: ` all of your efforts paid off,`,
  2: ` and you feel a giant feeling of realization after the recovery of your memories.<br><br>`,
  3: `You turn around,`,
  4: ` you see a door,`,
  5: ` the same door that locked you into this place,`,
  6: ` but now,`,
  7: ` it is freeing you,`,
  8: ` you see your home on the other side,`,
  9: ` you turn around to say the last goodbye to Maldio,`,
  10: ` this wouldn't be possible without their help.<br><br>`,
  11: `<a href="#" onclick="winGame();">Go through the door</a>`,
};