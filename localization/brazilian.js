var brazilian = {

// LINHAS DO MENU PRINCIPAL

  start: {
    buttons: {
      play: "INICIAR",
      howtoplay: "COMO JOGAR",
      credits: "CRÉDITOS",
    },

    howtoplay: {
      title: "Como Jogar",
      backButton: "Voltar",
      0: "Faça suas escolhas lendo e clicando nos links na caixa de texto.",
      1: "Navegue pelo mapa abrindo-o no botão do canto inferior direito, lembre-se: Você pode sair da sua localização a qualquer momento.",
      2: "Mantenha-se informado sobre seus intens com seu inventário no canto superior direito.",
      3: "O jogo tem vários finais, se você conseguiu um ruim, talvez tenha esquecido de olhar em algum lugar.",
      4: "Não se esqueça de checar as configurações e escolher as melhores opções para o seu estilo de jogo.",
      5: "Divirta-se!",
    },

    credits: {
      title: "Créditos",
      backButton: "Voltar",
      specialThanks: "Agradecimentos Especiais",
      0: "Todo o jogo foi feito por Luciano Kohler da Silva, ou Blockier, mas também tive uma mãozinha com algumas artes de Cyrenp (mais precisamente, as artes do rei e da caverna).",
      1: "Alguns softwares de terceiros também foram usados para construir o jogo: Typewriter.js para o efeito de máquina de escrever usado em todo o jogo e o gerador de texto ascii de Patorjk para criar os títulos ascii, meu agradecimento a esses desenvolvedores por me economizarem tanto tempo!",
      2: "Esse projeto não seria possível se eu não tivesse meus amigos para me motivar, afinal, eu precisava de alguém para jogar meu jogo, e eu sabia que podia contar com meus amigos para saber que meu jogo seria apreciado por alguém, e isso me faz feliz demais!",
      3: "Aqui está uma lista dos meus manos, se você não estiver aqui, saiba que você ainda está no meu coração :D",
      4: `Cyrenp - Valhallan`,
      5: `Maiddo - Mestra de RPG`,
      6: `Lyn - Meu clone exato`,
      7: `Led - Guitarrista patetão`,
      8: `Jubireuu - Pequeno fã do BMO`,
      9: `Mittens - Futura Kim Jung Gi`,
      10: `Toda a cambada da UDESC - Minhas novas adições ao meu coração!`,
    },

    madeWith: "Feito por Blockier, com amor",
  },

// LINHAS PARA O INVENTÁRIO
inventory: {
  pass: "Passe: ",
  passNo: "Não",
  passYes: "Sim",
  passUsed: "Usado",
  coins: "Dinheiro: ",

  sword: {
    title: "Espada Larga de Aço",
    swordQM: "?????? ????? ?? ????",
    swordDesc0: "Mesmo que afiada,",
    swordDesc1: "ela é pesada demais!",
    swordDesc2: "como você vai usar ela?",
  },

  tunic: {
    title: "Malha Negra",
    tunicQM: "????? ?????",
    tunicDesc0: "O seu material escuro parece",
    tunicDesc1: "ser resistente a altas temperaturas",
  },

  goggles: {
    title: "Óculos Espirais",
    gogglesQM: "?????? ????????",
    gogglesDesc0: "Você se sente muito tonto",
    gogglesDesc1: "só por usar eles por alguns segundos",
  },

  islandSword: {
    title: "A Lâmina da Ilha",
    islandSwordQM: "? ?????? ?? ????",
    islandSwordDesc: "Forte o suficiente para matar qualquer coisa aqui",
    islandSwordDescQM: "????? ? ?????????? ???? ????? ???????? ????? ????",
  },
},

// MINI MENUS (others)
others: {
  map: "Mapa",
  settings: "Configurações",
  exit: "Sair",
},

// CONFIGURAÇÕES

settings: {
  backButton: "Voltar",
  
  textSpeed: {
    title: "Velocidade do texto",
    desc: "Muda o quão rápido o texto é escrito na tela",
    0: "Lento",
    1: "Normal",
    2: "Rápido",
    3: "MAIS RÁPIDO!",
  },
  delayBetween: {
    title: "Atraso entre frases",
    desc: "Muda a duração do tempo de espera entre uma frase e outra",
    0: "Normal",
    1: "Rápido",
    2: "Nenhum",
  },

  colorPalette: {
    title: "Paleta de Cores",
    desc: "Mude as cores do seu jogo!",
    0: "Padrão",
    1: "Floresta de Outono",
    2: "Bosque Vívido",
    3: "Festival de Sakuras",
    4: "Mangues da Costa",
  }
  
},

// LINHAS PARA O JOGO

WWYD: "O que você fará? <br><br>",
WWYS: "O que você dirá? <br><br>",
YAEH: `<a href="#" onclick="dyingAnimation()">Sua aventura acaba aqui.</a>`,
exitCabin: `"<b>Você sai da cabana.</b>"`,

chooseLines: {
  0: `Você pode usar o mapa a qualquer hora para sair da sua localização atual,`,
  1: `use-o se você se sentir perdido!`,
},

startLines: {
  0: `Você acorda em frente a uma grande e densa floresta,`,
  1: ` você não se lembra da sua casa,`,
  2: ` da sua vida,`,
  3: ` e muito menos do seu nome,`,
  4: ` você está perdido,`,
  5: ` e a única coisa que você pode fazer agora é procurar ajuda.<br><br>`,
  //WWYD
  6: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Entrar na floresta</a> <br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Recuar da floresta</a>`,
},

forestLines: {
  0: `Você se reencontra com a floresta.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Entrar na floresta </a><br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Recuar da floresta</a>`,
},

forestBearScaredLines: {
  0: `Você se reencontra com a floresta.<br><br>`,
  1: `O urso desapareceu da floresta, e você não vê nada de interessante por entre as árvores,`,
  2: ` você sente que continuar sua trilha na floresta não vai te ajudar.`,
},

enterForestLinesWOStick: {
  0: `Você decide adentrar mais fundo na floresta, sem saber o que te espera do outro lado dela.<br><br>`,
  1: `Pelo chão, você encontra um graveto torto no chão:<br><br>`,
  2: `<b>Você adquiriu um graveto comum</b>! <br><br>`,
  //WWYD
  3: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continuar</a> <br>`,
  4: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Recuar da floresta`,
},

enterForestLinesWithStick: {
  0: `De volta ao mesmo lugar, você ainda reconhece o lugar em que o graveto foi encontrado... <br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continuar</a> <br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Recuar da floresta</a>`,
},

ForestBearWSwordLines: {
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
},

ForestBearWOSwordLines: {
  0: `Você prossegue sua caminhada floresta até que de repente...`,
  1: ` Um urso aparece das moitas!<br><br>`,
  2: `Você segura seu bastão firmemente,`,
  3: ` pronto para lutar por sua vida, sem voltar atrás!<br><br>`,
  4: `O urso dá seu primeiro passo em sua direção, e suas pernas começam a pensar melhor que você,`,
  5: ` sem perceber, você começa a correr loucamente, só parando ao perceber que voltou à entrada da floresta,`,
  6: ` talvez você não esteja preparado para lutar com algo tão grande?<br><br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">O que eu faço agora?</a>`,
},

pierLines: {
  0: `Um pequeno píer com um barquinho pronto para uso te aguarda em frente ao mar.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'island')">Velejar para algum lugar</a><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Vislumbrar o mar</a>`,
},

pierStareSeaLines: {
  0: `Você olha para a água e percebe:`,
  1: ` Você não se lembra do seu próprio rosto!<br><br>`,
  2: `Ao se inclinar ao mar, você vê belas estrelas e a grande lua refletidas na água, mas falta algo...`,
  3: ` Cadê o seu reflexo?`,
  4: ` Cadê...`,
  5: ` Você?<br><br>`,
  6: ` <a href="#" onclick="updateScreen('pier', 'pier')">Voltar</a>`,
},

islandFirstLines: {
  0: `Você sobe no barco, agarra os remos e começa a remar,`,
  1: ` sem direção alguma, apenas com a intenção de sair do lugar.`,
  2: ` Alguns minutos de solitude com o som das ondas do mar te levam à uma pequena ilha,`,
  3: ` você decide atracar nela.<br><br>`,
  4: `Ao chegar, não há nada além de uma palmeira e um X gigante marcando algo,`,
  5: ` você, com suas mãos vazias, começa a cao X na mão, já que esse lugar não deve ter uma pá.<br><br>`,
  6: `A escavação foi bem-sucedida,`,
  7: ` depois de suas mãos ficarem quase dormentes,`,
  8: ` você encontra uma malha negra, aparentemente resistente, e acima de tudo:`,
  9: ` Estilosa!<br><br>`,
  10: `<b>Você adquiriu a malha negra!<b><br><br>`,
  11: `<a href="#" onclick="updateScreen('islandhole', 'island')">Ihaaa!</a>`,
},

islandLines: {
  0: `Aí você está, parado na orla da ilha, junto ao buraco que você fez.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'islandRowHorizonPart1')">Remar ao horizonte</a><br>`,
  2: `<a href="#" onclick="updateScreen('island', 'islandAppreciateLandscape')">Apreciar a paisagem</a>`,
},

islandAppreciateLandscapeLines: {
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
},

islandRowHorizonPart1Lines: {
  0: `Você continua sua jornada para o desconhecido,`,
  1: ` talvez o tempo te guie para o caminho certo.<br><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'islandRowHorizonPart2')">Continuar</a>`,
},

islandRowHorizonPart2Lines: {
  0: `Após alguns minutos,`,
  1: ` a confirmação de que esse lugar não é normal aparece:`,
  2: ` Você retornou ao píer!`,
  3: ` Nem você e nem a calmaria do mar virou seu barco em qualquer momento`,
  4: ` parece que você realmente está preso nesse lugar e que magia realmente existe afinal...<br><br>`,
  //WWYD
  5: `<a href="#" onclick="updateScreen('island', 'island')">Velejar para algum lugar</a><br>`,
  6: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Vislumbrar o mar</a><br>`,
},

wellLines: {
  0: `Na distância, você encontra um poço comum com uma plaquinha pendurada nele escrito "me mostre os brilhantes"<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('well', 'wellThrowCoin')">Jogar uma moeda</a><br>`,
  2: `<a href="#" onclick="updateScreen('well', 'wellLookInside')">Olhar dentro do poço</a>`,
},

wellLinesAfterGoggles: {
  0: `Você volta ao poço,`,
  1: ` a placa ainda fala que você é pobre.<br><br>`,
  2: ` "É só um poço bobo, ignora ele"<br><br>`,
  3: ` Você diz a si mesmo enquanto se afasta.`,
},

wellThrowCoinLines: {
  0: `Você retira uma moeda do resto do seu dinheiro, se aproxima do poço, e a joga no buraco sem fim.<br><br>`,
  1: `Você ouve uns barulhinhos, e então, um par de óculos é lançado para fora do poço,`,
  2: `Você reconhece como sendo um daqueles óculos de festa com um desenho espiral no lugar das lentes:<br><br>`,
  3: `<b>Você adquiriu o óculos de espiral!</b><br><br>`,
  4: `Usá-los te deixa muito tonto, depois de tirá-los, você percebe que a placa mudou seu texto:<br><br>`,
  5: `"Tu é pobre, lixão"<br><br>`,
  6: `Que poço mal-educado! Você não quer mais ficar perto dele.`,
},

wellThrowCoinWOCoinLines: {
  0: `Você procura pelos bolsos,`,
  1: ` mas percebe que não tem nem um tostão com você agora,`,
  2: ` que vergonha...<br><br>`,
  3: `<a href="#" onclick="updateScreen('well', 'well')">Voltar</a>`,
},

wellLookInsideLines: {
  0: `Você se inclina,`,
  1: ` sem água,`,
  2: ` sem balde,`,
  3: ` apenas um buraco escuro sem fim e uma corda rompida pendurada.<br><br>`,
  4: `<a href="#" onclick="updateScreen('well', 'well')">Voltar</a>`,
},

weirdRocksLines: {
  0: `Você encontra um arranjo de pedras no meio da grama:<br><br>`,
  1: `-Aoba! - A rocha diz.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Quem é você?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')"> O que é esse olho esquisito?</a>`,
},

weirdRocksWhoAreYouLines: {
  0: `- Eu sou Pedro, Pedro a pedra, prazer em conhecer chará!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksCabin')">Você sabe quem mora na cabana?<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')">O que é esse olho esquisito?</a>`,
},

weirdRocksCabinLines: {
  0: `- Ah... Você tá falando do <i>Leshy</i>? <i>Ele</i> ele é um espírito que faz coisas ruins com as pessoas, eu não quero falar sobre isso...<BR><BR>`,
  1: `<i>Leshy</i> transformou Pedro em um monte de pedras!<BR><BR>`,
  2: `Pedro começa a chorar pedrinhas, e você decide deixá-lo sozinho um pouco...`,
},

weirdRocksEyeLines: {
  0: `- Ah, esse olho? É o meu olho de metal ultra afiado e brilhante, maneiro né?<br><br>`,
  1: `Sem piadas, esse olho é brilhante mesmo. <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Quem é você?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksNice')"> Legal! Posso pegar?<br>`,
},

weirdRocksNiceLines: {
  0: `- Claro que não! Esse é o MEU olho, e se você roubá-lo, palavras não conseguirão descrever a dor que você vai receber!<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('weirdRocks','weirdRocksNotStealEye')">Não roubar o olho<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocksEyeless', 'weirdRocksStealEye')">Roubar o olho`,
},

weirdRocksNotStealEyeLines: {
  0: `- Valeu mano! :D <br><br>`,
  1: `Além do olho e da ameaça, a rocha não parece ter nada demais, você termina sua conversa com ela por enquanto.`,
},

weirdRocksStealEye: {
  0: `<b>Você adquiriu o olho do Pedro!<br><br>`,
  1: `- Ai! Devolve agora! Esse é o último aviso!<br><br>`,
  2: `Você vê claramente que Pedro está mentindo à esse ponto, você apenas vai embora.`,
},

weirdRocksAngryRox: {
  0: `Você volta para Pedro a pedra, agora chorando pedrinhas pelo olho que sobrou<br><br>`,
  1: `- Uhhh, O que você quer? vai embora seu coração de pedra!<br><br>`,
  2: `Você acha que já importunou a pedrinha demais, você se vira e vai embora.`,
},

farmLines: {
  0: `Essa fazenda solitária está isolada do resto da civilização, o fazendeiro, rapidamente reconhecendo a visita, diz:<br><br>`,
  1: `- Aoba, uma visita!!! Bem vindu ao meu brejo, aqui eu planto cenora, batata, cenora, cenora, metal e cenora!<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm', 'farmSeeCrops')">Posso ver a sua plantação?</a> <br>`,
  3: `<a href="#" onclick="updateScreen('farm', 'farmMetal')">Você planta metal?</a> <br>`,
  4: `<a href="#" onclick="updateScreen('farm','farmBye')">Tchau!</a> `,
},

farmLinesWOSticker: {
  0: `- Claru que não! As cenora são minhas linda e eu nunca ia deixá alguém tocá elas! <br><br>`,
  1: `Ele parece bem sério falando isso, além disso ele tem uma enxada, é melhor ouvir ele <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm', 'farmMetal')">Você planta metal?</a> <br>`,
  3: `<a href="#" onclick="updateScreen('farm','farmBye')">Tchau!</a> `,
},

farmLinesWSticker: {
  0: `- Claru que nã...`,
  1: ` pera, `,
  2: `isso é um adisivo de cenora? `,
  3: `EU AMO CENORA!!! <br><br>`,
  4: `- Garoto ocê pode dar uma bela vizoiada nelas, meu cenoumano! <br><br>`,
  5: `<a href="#" onclick="updateScreen('farmZoom','farmApproach')">Se aproximar da plantação</a>`,
},

farmLinesMetal: {
  0: `- Issaê! Se cenora faz mais cenora, metal faz mais metal, ocê é burro?<br><br>`,
  1: `Você fica quieto, pensando que discutir sobre isso vai ser que nem falar com uma parede<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm','farmSeeCrops')">Posso ver sua plantação?</a><br>`,
  3: `<a href="#" onclick="updateScreen('farm','farmBye')">Tchau!</a>`,
},

farmLinesBye: {
  0: `- Inté mais visita, que as cenoras te guie!<br><br>`,
  1: `Você realmente queria se afastar desse louco da cenoura.`,
},

farmLinesApproach: {
  0: `Ao passar o olho pela plantação, você encontra algo estranho, algo que parece um tubo brilhante enterrado.<br><br>`,
  1: `Você acha que o fazendeiro não vai se importar se uma cenoura desapaparecer, então você puxa o tubo.<br><br>`,
  2: `Ele estava bem enterrado entre os vegetais, mas depois de uma força, você ganha a luta contra o tubo, retirando uma bela guarda da terra.<br><br>`,
  3: `<b>Você adquiriu a guarda do fazendeiro!</b><br><br>`,
  4: `Você torce para o fazendeiro não ter percebido, você corre tentando sair da visão dele.`,
},

farmLinesHilt: {
  0: `Você vê o fazendeiro totalmente biruta procurando o tubo com a sua enxada...<br><br>`,
  1: `Talvez seja bom passar longe dele.`,
},

wallLines: {
  0: `Uma parede massiva bloqueia o caminho, e um carinha que não parece amigável dentro de um pedágio fica te encarando:<br><br>`,
  1: `- Oi, cadê o passe?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('wall-open','wallUsePass')">Aqui, eu tenho um passe</a><br>`,
  3: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Passe? Como assim?</a><br>`,
  4: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">O que tem atrás dessa parede?</a><br>`,
  5: `<a href="#" onclick="updateScreen('wall','wallBye')">Tchau!</a>`,
},

wallWhatPassLines: {
  0: `- Você precisa de um passe pra passar por aqui, pegue um no castelo, eles são legais comigo.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">O que tem atrás dessa parede?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Tchau!</a>`,
},

wallBeyondWallLines: {
  0: `- Tem uma bela caverna com um semideus, você precisa vê-lo, então pegue um passe!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Passe? Como assim?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Tchau!</a>`,
},

wallByeLines: {
  0: `- Obrigado por nada, não se esqueça de comprar um passe!<br><br>`,
  1: `Talvez você deveria dar uma olhada no que é esse passe e onde encontrar um.`,
},

wallUsePassLines: {
  0: `Você dá o passe para a coisa, ela fica muito feliz! <br><br>`,
  1: `- AAAAH, FINALMENTE, O CHEFE VAI ME DEIXAR TIRAR FOLGA!!!<br>`,
  2: `- Ok, você pode passar e admirar a caverna.<br><br>`,
  3: `A cancela ao lado dele abre <b>Agora, você pode acessar a caverna!</b>.`,
},

wallAlreadyUsedPassLines: {
  0: `Você vê a coisa de novo, tentando se segurar pra não sorrir na sua frente.<br><br>`,
  1: `- O que foi? Passa, você não tem mais nada de interessante para mim.<br><br>`,
  2: `Você tenta falar algo, mas acriatura tampa os ouvidos e fica repetindo "blablabla", que crinaçinha!`,
},

caveLines: {
  0: `Há uma grande caverna à sua frente,`,
  1: ` você consegue ouvir grunhidos vindo dela..<br><br>`,
  2: `<a href="#" onclick="updateScreen('goblin','goblin')">Entrar nela.</a>`,
},

goblinFirstLines: {
  0: `A caverna tem cheiro de mofo e sons de água pingando, além dos ruídos`,
  1: ` adentrar mais fundo na caverna mostra para você o tal semideus que o porteiro falou sobre:`,
  2: ` Um pequeno goblin ao lado de um "tesouro",`,
  3: ` que na verdade é só uma pilha de moedas no chão.<br><br>`,
  4: `- Quem ousa adentrar em meus aposentos?<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Quem é você?</a><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">O que é esse ouro?</a><br>`,
  7: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Tchau!</a>`,
},

goblinLines: {
  0: `Você volta para o interior da caverna,`,
  1: ` o goblin ainda está lá.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Quem é você?</a><br>`,
  3: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">O que é esse ouro?</a><br>`,
  4: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Tchau!</a>`,
},

goblinAfterGotMoneyLines: {
  0: `Você volta para a caverna,`,
  1: ` o goblin ainda está chorando,`,
  2: ` você não é o melhor em animar os outros,`,
  3: ` além disso você roubou o dinheiro dele,`,
  4: ` taaalveeez seja melhor esquecer dele por enquanto.`,
},

goblinWhoAreYouLines: {
  0: `- Eu sou Barretos, o semideus,`,
  1: ` o guardião do tesouro mais valioso desta ilha,`,
  2: ` o habitante da caverna mais anciã da ilha,`,
  3: ` o ser mais VERDE de todos,`,
  4: ` o MAIOR GUERREIRO QUE JÁ...<br><br>`,
  5: `Você grita para ele que você já entendeu.<br><br>`,
  6: `- Claro que entendeu...<br><br>`,
  //WWYS
  7: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">O que é esse ouro?</a><br>`,
  8: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Tchau!</a>`,
},

goblinWhatGoldLines: {
  0: `- Este é o meu tesouro,`,
  1: ` MEU tesouro,`,
  2: ` pode babar, eu sou o ser mais rico da ilha!`,
  3: ` Se você chorar o suficiente, posso pensar em te passar um tostão...`,
  4: ` HAHA!<br><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinNotMuch')">"Isso não é muito pra falar a verdade..."</a>`,
},

goblinNotMuchLines: {
  0: `O que você disse?`,
  1: ` Isso é muito! O vendedor disse pra mim!`,
  2: ` O dinheiro que ele ganha dos passes é passado pra mim,`,
  3: ` e assim eu fico cada dia MAIS RICO!<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('goblin','goblinTruth')">(Dizer a verdade) Então, eu consegui esse passe de graça...</a><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinBluff')">(Mentir) Uma pena que eu tenho mais dinheiro que você, haha.</a>`,
},

goblinBluffLines: {
  0: `- Não,`,
  1: ` isso é impossível,`,
  2: ` só pode haver um ser mais rico na ilha,`,
  3: ` SIM, É ISSO.`,
  4: ` VAMOS LUTAR, O VENCEDOR LEVA TODO O DINHEIRO!<br><br>`,
  5: `A pele verde vômito do goblin começa a ficar vermelha como uma cereja.<br><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Cai dentro!</a>`,
},

goblinTruthLines: {
  0: `- Você tá me dizendo que entrou na MINHA caverna SEM ME DAR DINHEIRO?`,
  1: ` Não, isso não pode acontecer,`,
  2: ` já que você entrou aqui de graça,`,
  3: ` VOCÊ TERÁ QUE SER MEU SERVO, PARA SEMPRE!`,
  4: ` DESISTA JÁ, AFINAL EU SOU IMBATÍVEL!<br><br>`,
  5: `Você desafia o goblin, dizendo que se você vencer, você vai pegar o tesouro para si.<br><br>`,
  6: `- EU NÃO LIGO,`,
  7: ` PREPARE-SE PARA SENTIR A FÚRIA DE BARRETOS!!!<br><br>`,
  8: `A pele verde vômito do goblin começa a ficar vermelha como uma cereja.<br><br>`,
  9: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Cai dentro!</a>`,
},

goblinComeOnLines: {
  0: `O goblin começa a ir em sua direção,`,
  1: ` as suas perninhas pequenas fazem esse processo meio longo,`,
  2: ` longo o suficiente para você pegar uma pedra do chão.`,
  3: ` Você atira ela:<br><br>`,
  4: `Na mosca, a pedra acerta o goblin bem na cara!`,
  5: ` Ele cai no chão e começa a chorar...<br><br>`,
  6: `- Auu...`,
  7: ` Por que você fez isso?`,
  8: ` Isso é jogo sujo!`,
  9: ` Vai embora!<br><br>`,
  10: `<a href="#" onclick="updateScreen('goblinCry','goblinMoney')">Pegar o dinheiro</a>`,
},

goblinMoneyLines: {
  0: `Você não é burro.`,
  1: ` Dinheiro pode te ajudar a se equipar,`,
  2: ` e você venceu a luta!`,
  3: ` você pega a pilha medíocre de dinheiro do chão.<br><br>`,
  4: `<b>Você adquiriu exatamente 31 moedas!</b><br><br>`,
  5: `Você deixa o goblin chorando na caverna,`,
  6: ` aquele cara é irritante demais.`,
},

goblinByeLines: {
  0: `- Valeu, otário,`,
  1: ` tenta me trazer algo pra comer na próxima!<br><br>`,
  2: `Quem esse cara pensa que é?`,
},

castleLines: {
  0: `Um grande castelo pode ser visto de quase qualquer lugar da ilha,`,
  1: ` o portão principal está aberto,`,
  2: ` você pode entrar nele.<br><br>`,
  3: `<a href="#" onclick="updateScreen('bifurcation','castle')">Entrar</a>`,
},

enterCastleLines: {
  0: `Pessoas passam pelas ruas, te ignorando, as construções parecem chatas e nada chama a sua atenção. <br><br>`,
  1: `No fim da rua principal, você se encontra em uma bifurcação:<br><br>`,
  2: `Para a esquerda, temos o palácio do rei.<br>`,
  3: `Para a direita, temos o mercadinho que aparenta ter umas coisas interessantes.<br><br>`,
  4: `Para onde você quer ir?<br><br>`,
  5: `<a href="#" onclick="updateScreen('king','palaceEnter')">Para o palácio do rei</a><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">Para o mercadinho</a>`,
},

palaceEnterFirstLines: {
  0: `Você entra no palácio sem problemas, parece que este lugar não precisa de muitos guardas para ser seguro, no fim da sala, você encontra um rei:<br><br>`,
  1: `- Saudações jovem cidadão, ou deveria eu dizer... Estranho?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Quem é você?</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingGoHome')">Eu preciso ir para casa</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingBye')">Tchau!</a><br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Ir para o mercadinho</a>`,
},

palaceEnterLines: {
  0: `Saudações novamente, viajante.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Quem é você?</a><br>`,
  2: `<a href="#" onclick="updateScreen('king','kingGoHome')">Eu preciso ir para casa</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingBye')">Tchau!</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">Ir para o mercadinho</a>`,
},

kingWhoAreYouLines: {
  0: `- Eu sou o rei Cyryenp, comandante deste reino, `,
  1: `meu povo foi trazido para cá por <i>Leshy</i>, e agora todos estão longe de sua família, `,
  2: `Eu sirvo de guia para estas pobres almas que perderam seus lares<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('king','kingMeetSameFate')">Você sofreu o mesmo destino que elas?</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingGoHome')">Eu preciso ir para casa</a><br>`,
  5: `<a href="#" onclick="updateScreen('king','kingBye')">Tchau!</a><br><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">Ir para o mercadinho</a>`,
},

kingMeetSameFateLines: {
  0: `- Infelizmente sim, `,
  1: `Eu fui o primeiro a aparecer aqui, e tive que passar um longo tempo sozinho,`,
  2: ` mas mais pessoas apareceram,`,
  3: ` e juntos,`,
  4: ` construímos este reino para termos um lugar para chamar de lar.<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('king','kingGoHome')">Eu preciso ir para casa</a><br>`,
  6: `<a href="#" onclick="updateScreen('king','kingBye')">Tchau!</a> <br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Ir para o mercadinho</a>`,
},

kingGoHomeLines: {
  0: `Você conta a ele sobre aparecer nesse lugar sem suas memórias. <br><br>`,
  1: `- Bem,`,
  2: ` na verdade, tenho uma ideia que pode te ajudar:`,
  3: ` <i>Leshy</i>,`,
  4: ` <i>o espírito da floresta</i> pode ter feito isso à você, <i>ele</i> trouxe toos os outros para cá,`,
  5: ` estes que agora são cidadãos desta ilha inescapável, mas talvez`,
  6: ` se você for valente o suficiente, `,
  6: ` você pode acabar com <i>ele</i> e com suas maldições vis! <br><br>`,
  7: `<a href="#" onclick="updateScreen('king','kingHowDoThis')">E como eu faço isso?</a>`,
},

kingHowDoThisLines: {
  0: `- Armas comuns não funcionam contra <i>ele</i>,`,
  1: ` vá para o santuário a sudeste daqui, você encontrará um anjo que te guiará melhor que eu,`,
  2: ` minha sugestão por agora é de ir para o mercadinho próximo daqui e ver se encontra algo útil lá,`,
  3: ` diga ao vendedor que eu te enviei lá e ele pode te dar uma ajuda. <br><br>`,
  4: ` - Boa sorte,`,
  5: ` viajante. <br><br>`,
  6: ` The king just gave you a quest, you think there's nothing more to do other than trying.<br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Ir para o mercadinho</a>`,
},

kingByeLines: {
  0: `- Até breve, viajante. <br><br>`,
  1: `Você sai do castelo, inspirado por ver tantas pessoas como você vivendo normalmente aqui.<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Para o mercadinho</a>`,
},

kingGivePommelLines: {
  0: `- Olá de novo, viajante,`,
  1: ` como vai a sua missão?<br><br>`,
  2: `Você diz para ele que só precisa do pomo para terminar a espada.<br><br>`,
  3: `- Não diga mais nada.<br><br>`,
  4: `O rei remove um ornamento de seu trono, e o entrega para você:<br><br>`,
  5: `<b>Você adquiriu o pomo do rei!</b><br><br>`,
  6: `<a href="#" onclick="updateScreen('kingPommelless','kingPommelPart2')">Finalmente!</a>`,
},

kingPommelPart2Lines: {
  0: `- Este pomo foi a única parte da lâmina que encontramos,`,
  1: ` para mantê-lo seguro,`,
  2: ` eu o guardei junto ao meu trono, mas agora,`,
  3: ` ele tem um uso melhor, o anjo saberá o que fazer agora.<br><br>`,
  4: `Vá para o santuário e termine de vez essa caça à lâmina.`,
},

shopFirstLines: {
  0: `Você entra no local e é atendido por um vendedor gente boa: <br><br>`,
  1: `- Oooulá! Eu sou o Joobireu, o aprediz de feiticeiro e vendedor honorário!`,
  2: ` Tenho muita tralha valiosa, dá uma olhadinha!<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Espada larga (20 moedas)</a><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopSticker')">Adesivo (10 moedas)</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shopPass')">Passe da parede (GRÁTIS!)</a><br><br>`,
  6: `<a href="#" onclick="updateScreen('king','palaceEnter')">Ir para o palácio</a>`,
},

shopLines: {
  0: `- E aí! Dá uma olhada nas minhas tralhas!<br><br>`,
  1: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Espada larga (20 moedas)</a><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shopSticker')">Adesivo (10 moedas)</a><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopPass')">Passe da parede (GRÁTIS!)</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('king','palaceEnter')">Ir para o palácio</a>`,
},

shopBroadswordLines: {
  0: `- Uma espada larga de aço, forjada pelo melhor ferreiro do reino:`,
  1: ` Kyle Kompos!<br><br>`,
  2: `Vai comprar?<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopBroadswordYes')">Sim</a><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">Não</a>`,
},

shopBroadswordYesLines: {
  0: `- Katching! - Diz o pequeno feiticeiro:<br><br>`,
  1: `<b>Você adquiriu a espada de aço!</b><br><br>`,
  2: `Esta espada é BEM pesada, você sabe que vai ter uns problemas em usar ela<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Melhor que nada!</a>`,
},

shopStickerLines: {
  0: `- Um adesivo de cenoura bobinho, sei lá se alguém compraria isso,`,
  1: ` mas é engraçado, de qualquer forma!<br><br>`,
  2: `Atrás do adesivo, você descobre que uma tal de "Mittens" desenhou isso.<br><br>`,
  3: `Vai comprar?<br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopStickerYes')">Sim</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Não</a>`,
},

shopStickerYesLines: {
  0: `- Katching! - Diz o pequeno feiticeiro:<br><br>`,
  1: `<b>Você adquiriu o adesivo de cenoura!</b><br><br>`,
  2: `Sem um lugar para colar ele, você só gruda ele nas suas roupas<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Se sentindo maneiro!</a>`,
},

shopPassWOKingQuest: {
  0: `- Um passe para as cavernas,`,
  1: ` ele é grátis pois não tem nada lá, só vendemos eles para que o porteiro da caverna se sinta importante com o seu trabalho,`,
  2: ` ele nem sabe que vendemos eles de graça!`,
  3: ` ele é meio solitário...<br><br>`,
  4: `Infelizmente, o local é perigoso para cidadãos, e só posso dar um desses pra você com uma permissão...<br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Voltar</a>`,
},

shopPassWKingQuest: {
  0: `- Um passe para as cavernas,`,
  1: ` ele é grátis pois não tem nada lá, só vendemos eles para que o porteiro da caverna se sinta importante com o seu trabalho,`,
  2: ` ele nem sabe que vendemos eles de graça!`,
  3: ` ele é meio solitário...<br><br>`,
  4: `- Ah, entendo,`,
  5: ` o rei confia em você, no caso, eu também! Então toma:<br><br>`,
  6: `<b>Você adquiriu o passe da caverna!</b><br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Voltar</a>`,
},

shopTooPoorLines: {
  0: `- Você não tem dinheiro para comprar isso!<br><br>`,
  1: `- Foi mal, não faço fiado...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Voltar</a>`,
},

shopOnlyOnePerPersonLines: {
  0: `- Só um produto de cada tipo por cliente!<br><br>`,
  1: `- Foi mal, regras da loja...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Voltar</a>`,
},

altarAbandonedLines: {
  0: `Seu caminho te leva para um altar abandonado com nada de especial,`,
  1: ` ao se aproximar, você vê três espaços vazios, `,
  2: `talvez você deva colocar algo neles?<br><br>`,
  3: `Não há mais nada para investigar aqui.`,
},

altarLines: {
  0: `- Bem-vindo de novo,`,
  1: ` minha criança.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Perguntar sobre o progresso da missão</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Quem é você?</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">Como que a lâmina sumiu?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Por que você não procurou a espada por si mesma?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Tchau!</a>`,
},

altarFirstLines: {
  0: `- Olá pequena criança,`,
  1: ` Percebi que o rei me chamou para te ajudar na missão de derrotar <i>Leshy</i>, o espírito maligno.<br><br>`,
  2: `- Como o rei havia dito, armas comuns não vão funcionar em <i>seu</i> body,`,
  3: ` teremos que usar fogo contra fogo,`,
  4: ` uma espada embuída em magia:`,
  5: ` <b>A Lâmina da Ilha.</b><br><br>`,
  6: `- Este altar uma vez já foi um local para mantê-la segura, mas o tempo passou, e <i>Leshy</i> pensou rápido e sumiu com ela.`,
  7: ` Mas a esperança é a úlima que morre! A espada não pode sair da ilha, então ela deve estar por aqui, e se não estiver, suas partes estão.`,
  8: ` Nós só precisamos achar as partes e trazê-las para cá.<br><br>`,
  //WWYS
  9: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Perguntar sobre o progresso da missão</a><br>`,
  10: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Quem é você?</a><br>`,
  11: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">Como que a lâmina sumiu?</a><br>`,
  12: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Por que você não procurou a espada por si mesma?</a><br>`,
  13: `<a href="#" onclick="updateScreen('angel','angelBye')">Tchau!</a>`,
},

angelParts2Lines: {
  0: `- Uma vez, já ouvi o fazendeiro falar algo sobre "plantar metal",`,
  1: ` Eu não sei se isso é útil,`,
  2: ` mas vale a pena dar uma procurada.<br><br>`,
  //WWYS
  //GeneralLines
},

angelParts3Lines: {
  0: `- Eu senti uma força mágica vinda do oeste da ilha,`,
  1: ` talvez algo poderoso esteja guardando uma parte da lâmina para si!<br><br>`,
  //WWYS
  //GeneralLines
},

angelParts1Lines: {
  0: `- Agora que temos duas partes,`,
  1: ` nós só precisamos do pomo, a fonte principal dos poderes da lâmina,`,
  2: ` vá falar com o rei,`,
  3: ` ele saberá onde o pomo está.<br><br>`,
  //WWYS
  //GeneralLines
},

angelPartsBadFeelingLines: {
  0: `- Nós temos a arma mais poderosa desta ilha.`,
  1: ` Mas tem algo...`,
  2: ` De errado,`,
  3: ` e se só isso não for suficiente para derrotar <i>ele</i>?`,
  4: ` Estou com um mal pressentimento,`,
  5: `  <i>Leshy</i> joga sujo, e fará qualquer coisa para acabar com qualquer um que <i>o</i> perturbe<br><br>`,
  //WWYS
  //GeneralLines
},

angelPartsGeneralLines: {
  //Falas usadas nas três perguntas de onde estão as partes de espada
  0: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Quem é você?</a><br>`,
  1: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">Como que a lâmina sumiu?</a><br>`,
  2: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Por que você não procurou a espada por si mesma?</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelBye')">Tchau!</a>`,
},

angelFuseSwordPart1Lines: {
  0: `- Nós conseguimos,`,
  1: ` minha criança!`,
  2: ` Temos todas as peças necessárias para recriar a lâmina!<br><br>`,
  3: `- Agora, coloque as suas partes nos encaixes do altar e se afaste.<br><br>`,
  4: `<a href="#" onclick="updateScreen('altarlightbeam','altarFuseSword')">Colocar e se afastar</a>`,
},

angelFuseSwordPart2Lines: {
  0: `O anjo recua do altar,`,
  1: `após alguns passos para trás,`,
  2: ` um feixe de luz enorme acerta o altar,`,
  3: ` soltando um som ensurdecedor de trovão, junto com uma luz cegante...<br><br>`,
  4: `<a href="#" onclick="updateScreen('angel','altarFuseSwordAftermath')">E?</a>`,
},

angelFuseSwordPart3Lines: {
  0: `O feixe de luz desaparece de repente,`,
  1: ` e ao fim da luz, tudo que resta é a tal lâmina capaz de matar qualquer coisa.<br><br>`,
  2: `<b>Você adquiriu a Lâmina da Ilha!</b><br><br>`,
  3: `- Aí está ela! Em toda a sua glória!`,
  4: ` sou grato pela sua ajuda, minha criança,`,
  5: ` você merece, segure-a firmemente e acabe com o sofrimento desta ilha.<br><br>`,
  //WWYS
},

angelWhoAreYouLines: {
  0: `- Eu sou Maldio,`,
  1: ` Maldio o anjo,`,
  2: ` trabalho como guardiã da lâmina, mas falhei em minha missão... Agora fico aqui, esperando alguém para me ajudar com a caça à espada.<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Perguntar sobre o progresso da missão</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">Como que a lâmina sumiu?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Por que você não procurou a espada por si mesma?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Tchau!</a>`,
},

angelHowSwordDisappearLines: {
  0: `- Eu estava jogando RPG com meus amigos anjos na taverna do castelo e,`,
  1: ` infelizmente,`,
  2: ` <i>Leshy</i> percebeu minha ausência e roubou a lâmina, agora ela está desaparecida,`,
  3: ` e ninguém me ajudou a encontrá-la...<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Perguntar sobre o progresso da missão</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Como que a lâmina sumiu?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Por que você não procurou a espada por si mesma?</a><br>`,
  7: `<a href="#" onclick="updateScreen('angel','angelBye')">Tchau!</a>`,
},

angelSearchSwordYourselfLines: {
  0: `- Meu corpo é intangível! <br><br>`,
  1: `Você acha que isso faz sentido<br><br>`,
  2: `- Mas esse não é o problema, eu também sou meio tímido...<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Perguntar sobre o progresso da missão</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Como que a lâmina sumiu?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">Por que você não procurou a espada por si mesma?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Tchau!</a>`,
},

angelByeLines: {
  0: `- Até, minha criança,`,
  1: ` boa sorte com a caça à espada.`,
},

cabinLines: {
  0: `Você localiza uma pequena e miserável cabana próxima à orla da ilha, ela tem um crânio pendurado no topo de sua única entrada.<br><br>`,
  1: `Ao lado, você percebe uma árvore morta com algo entalhado em seu tronco.<br><br>`,
  //WWYD
  2: `<a href="#" onclick="updateScreen('empty','cabinEnter')">Entrar na cabana</a><br>`,
  3: `<a href="#" onclick="updateScreen('cabin','cabinTree')">Investigar a árvore</a>`,
},

cabinLinesWOGoggles: {
  0: `Ao se aproximar da árvore,`,
  1: ` os entalhamentos se tornam claros,`,
  2: ` é um texto que diz:<br><br>`,
  3: `<b>Você não consegue matá-<i>lo</i> .</b><br><br>`,
  4: `<a href="#" onclick="updateScreen('cabin','cabin')">Voltar</a>`,
},

cabinLinesWGoggles: {
  0: `Ao se aproximar da árvore,`,
  1: ` a dor de cabeça vinda de usar o óculos de festa bate BEM forte,`,
  2: ` mas você ainda consegue decifrar o que está escrito no tronco,`,
  3: ` é um texto que diz:<br><br>`,
  4: `<b>Você consegue matá-<i>lo</i> .</b><br><br>`,
  5: `<a href="#" onclick="updateScreen('cabin','cabin')">Voltar</a>`,
},

CabinEnterLines: {
  0: `Você decide entrar na cabana obscura,`,
  1: ` o que reside em seu interior ainda é um mistério.<br><br>`,
  2: `Ao entrar, tudo está um breu total,`,
  3: ` o chão está grudento,`,
  4: ` nada se move,`,
  5: ` não tem... Nada.`,
  6: ` Momentos antes de se virar e ir embora,`,
  7: ` a porta de saída bate com força, e você começa a ouvir uma voz da escuridão:<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshy','cabinFate')">Escutá-la</a>`,
},

leshyLostSoulLines: {
  0: `<i>- O que temos aqui...`,
  1: `<b><i> Uma alma perdida</b><br><br>`,
  2: `A entidade retira um pêndulo feito de gravetos do breu da cabana e começa a balança-lo lentamente.`,
  3: ` Você não consegue parar de olhar para ele,`,
  4: ` o seu movimento,`,
  5: ` a sua forma,`,
  6: ` seus movimentos suaves,`,
  7: ` eles te acalmam...<br><br>`,
  8: ` <b>Você perdeu o controle de si mesmo...</b><br><br>`,
  9: `<i>- Terminarei com isso de forma rápida,`,
  10: `<i> Você não emana atitudes nem intenções negativas...<br><br>`,
  //YAEH
},

leshyWOGogglesLines: {
  0: `<i>- O que temos aqui...`,
  1: `<b><i> Um corajoso guerreiro</b><br><br>`,
  2: `A entidade retira um pêndulo feito de gravetos do breu da cabana e começa a balança-lo lentamente.`,
  3: ` Você não consegue parar de olhar para ele,`,
  4: ` o seu movimento,`,
  5: ` a sua forma,`,
  6: ` seus movimentos suaves,`,
  7: ` eles te acalmam...<br><br>`,
  8: ` <b>Você perdeu o controle de si mesmo...</b><br><br>`,
  9: `<i>- Você achou que só a sua força de vontade era o suficiente para acabar comigo?<br><br>`,
  10: `<i>Leshy</i> joga uma adaga em seus pés,`,
  11: ` você forçadamente pega ela do chão, `,
  12: ` logo em seguida, você aponta ela para seu próprio coração.<br><br>`,
  //YAEH
},

leshyWGogglesLines: {
  0: `<i>- O que temos aqui...`,
  1: `<b><i> Um corajoso guerreiro</b><br><br>`,
  2: `A entidade retira um pêndulo feito de gravetos do breu da cabana e começa a balança-lo lentamente.`,
  3: ` Você não consegue parar de olhar para ele,`,
  4: ` o seu movimento,`,
  5: ` a sua forma,`,
  6: ` seus movimentos suaves,`,
  7: ` eles te acalmam...<br><br>`,
  8: ` <b>Você perdeu o controle de si mesmo...</b><br><br>`,
  9: `<i>- Você achou que só a sua força de vontade era o suficiente para acabar comigo?<br><br>`,
  10: `Suas pernas estremecem,`,
  11: ` e você cai,`,
  12: ` de cabeça no chão,`,
  13: ` esses óculos te deram tontura de novo...`,
  14: ` Mas o impacto da queda fez com que você saísse do controle de <i>Leshy</i>!<br><br>`,
  15: `<a href="#" onclick="updateScreen('leshySkull','leshyPassTest1')">Se recompor</a>`,
},

leshySkullLines: {
  0: `<i>- Entendo, você não é um tolo comum,`,
  1: `<i> infelizmente, eu não tenho somente um truque na manga.<br><br>`,
  2: `Uma vela enfiada em um crânio aparece, segurada por uma mão cadavérica.<br><br>`,
  3: `<i>- Queime.<br><br>`,
  4: `<a href="#" onclick="updateScreen('leshyBurn','leshyBurn')">Continuar</a>`,
},

leshyWODarkTunicLines: {
  0: `<i>Leshy</i> joga a caveira em seus pés,`,
  1: ` o chão grudento começa a inflamar,`,
  2: ` rapidamente subindo as chamas ao seu corpo.<br><br>`,
  3: `O calor é demais,`,
  4: ` você corre desesperadamente para a porta como última esperança,`,
  5: ` mas ela não se move,`,
  6: ` após mais tentativas de abrir a porta, você aceita que seu destino irá queimar junto com esta cabana,`,
  7: ` e se a sorte quiser,`,
  8: ` com <i>Leshy</i> também.<br><br>`,
},

leshyWDarkTunicLines: {
  0: `<i>Leshy</i> joga a caveira em seus pés,`,
  1: ` o chão grudento começa a inflamar,`,
  2: ` rapidamente subindo as chamas ao seu corpo.<br><br>`,
  3: `O calor é demais,`,
  4: ` mas a malha sombria absorve o calor quase que instantaneamente,`,
  5: ` rapidamente apagando o incêndio, sobrevivendo a mais uma tentativa de assassinato de <i>Leshy</i><br><br>`,
  6: `<i>- Eu pensei que eu tinha dado um fim nisso a muito tempo atrás...`,
  7: `<i> Não importa, se você quer lutar,`,
  8: `<i> vamos acabar com isso.<br><br>`,
  9: `<a href="#" onclick="updateScreen('empty','leshyTransform')">Continuar</a>`,
},

leshyTransformation: {
  0: `O par de olhos desaparece em meio a escuridão.<br><br>`,
  1: `O silêncio ensurdecedor da cabana cessa após alguns segundos, revelando uma orquestra desorganizada de madeira rangendo e quebrando,`,
  2: ` a cada tábua de madeira que se quebra,`,
  3: ` você tenta pensar no que estes barulhos significavam.`,
  4: ` O barulho cessa antes que você tivesse tempo de pensar em algo que fizesse sentido.<br><br>`,
  5: `.`,
  6: ` .`,
  7: ` .<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshyFinalForm','leshyFinalForm')">Confrontar o inimigo</a>`,
},

leshyFinalFormLines: {
  0: `O pequeno par de olhos não existe mais.<br><br>`,
  1: `A pútrida mão que segurava o crânio não existe mais.<br><br>`,
  2: `O seu inimigo mudou,`,
  3: ` o que antes parecia ser um cadáver necrosado,`,
  4: ` agora se tornou um olho colossal que ilumina a cabana inteira com um brilho verde neon,`,
  5: ` deixando a sua presença mais do que óbvia.<br><br>`,
  6: `Mas o pior de tudo,`,
  7: ` porém,`,
  8: ` é o fato de que a pupila do monstro não é comum,`,
  9: ` tem algo se movendo dentro dela,`,
  10: ` batendo do lado de dentro,`,
  11: ` implorando por liberdade,`,
  12: ` essa coisa...<br><br>`,
  13: `<b>É você.</b><br><br>`,
  14: `Mesmo que o seu rosto tenha se tornado um mistério após sua chegada na ilha,`,
  15: ` você não consegue pensar em mais nada além de ter certeza de que é você ali, preso pelas más intenções de <i>Leshy</i>.<br><br>`,
  16: `você encontrou uma forma de sair da ilha,`,
  17: ` mas uma única missão resta antes de que você possa sair deste lugar:<br><br>`,
  18: `<b>VOCÊ PRECISA SALVAR VOCÊ!</b><br><br>`,
  19: `<a href="#" onclick="updateScreen('empty','leshyFinalTest')">Acabar com isso</a>`,
},

leshyFinalDefeatLines: {
  0: `Você empunha sua espada larga com toda su força,`,
  1: ` por algum motivo,`,
  2: ` ela não parece tão pesada como antes,`,
  3: ` talvez seja a adrenalina percorrendo seu corpo,`,
  4: ` talvez seja a vontade de querer acabar com tudo,`,
  5: ` mas no fim, nada disso importa.<br><br>`,
  6: `Você corre em direção ao olho,`,
  7: ` ele não faz nada além de encarar o fundo da sua alma,`,
  8: ` cada passo te deixa mais forte e destemido,`,
  9: ` como se a vitalidade da ilha estivesse dentro de você.<br><br>`,
  10: `<b>Você golpeia o olho com um único corte horizontal.</b><br><br>`,
  11: `A cabeça do imprisionado começa a escorregar de seu pescoço,`,
  12: ` <b>assim como a sua.</b><br><br>`,
  13: `O sentimento de companhia da ilha não passava de uma farsa,`,
  14: ` a certeza que a luta já estava ganha não passava de uma farsa,`,
  15: ` e talvez, a chance de sair deste lugar nunca tenha sido real pra início de conversa.<br><br>`,
  16: `Ao sentir sua cabeça deslizando de seu pescoço,`,
  17: ` você só consegue perceber o olho te encarando:<br><br>`,
  18: `- Morto pelas próprias mãos,`,
  19: ` a maneira mais triste de acabar com a vida.<br><br>`,
  20: `Uma espada comum,`,
  21: ` mesmo que afiada até seu limite,`,
  22: ` não pode cortar material transcendido.`,
  23: ` Apenas o que não é feito deste mundo pode cortar o incortável.<br><br>`,
  24: ` Este é o seu último pensamento antes de sucumbir ao chamado da morte.<br><br>`,
  //YAEH
},

leshyFinalVictoryLines: {
  0: `Você empunha sua lâmina mágica com força,`,
  1: ` a arma é muito mais leve do que parece,`,
  2: ` facilitando um corte rápido e mortal.<br><br>`,
  3: `Você corre em direção ao olho,`,
  4: ` ele não faz nada além de encarar o fundo da sua alma,`,
  5: ` cada passo te deixa mais forte e destemido,`,
  6: ` como se a vitalidade da ilha estivesse dentro de você.<br><br>`,
  7: `<b>Você golpeia o olho com um único corte horizontal.</b><br><br>`,
  8: `A pessoa dentro do olho começa a brilhar,`,
  9: ` enquanto o resto do olho começa a se putrefazer rapidamente na sua frente:<br><br>`,
  10: `- The Lâmina da Ilha...`,
  11: ` Eu te subestimei...<br><br>`,
  12: `<a href="#" onclick="updateScreen('leshyAftermath','leshyAftermath')">Enfim, o fim...</a>`,
},

leshyAftermathLines: {
  0: `Num piscar de olhos, o mosntro fica totalmente podre,`,
  1: ` deixando um buraco gigante na parede da cabana,`,
  2: ` a luz do luar lava a sua alma`,
  3: ` e você toma este momento para se acalmar,`,
  4: ` o seu "eu" começa a voltar,`,
  5: ` você começa a se lembrar do seu nome,`,
  6: ` da sua história,`,
  7: ` da sua vida,`,
  8: ` tudo está de volta.<br><br>`,
  9: `<a href="#" onclick="updateScreen('leshyAngel','leshyAngel')">Algo está se aproximando...</a>`,
},

leshyAngelLines: {
  0: ` Maldio, o anjo, atravessa a parede da cabana após o momento consigo mesmo:<br><br>`,
  1: `- Não consigo acreditar,`,
  2: ` você conseguiu derrotar o <i>espírito maligno</i>!`,
  3: ` Sabe o que isso significa?<br><br>`,
  4: `Você se mantém calado,`,
  5: ` esperando por uma resposta...<br><br>`,
  6: `- Isso significa que a ilha agora está livre maldição de <i>Leshy</i>,`,
  7: ` todos podem voltar para seus lares,`,
  8: ` incluindo você!<br><br>`,
  9: ` Palavras não conseguem descrever seus sentimentos neste momento,`,
  10: ` você se levanta,`,
  11: ` ansioso para saber como.<br><br>`,
  12: `- Eu não vou demorar muito,`,
  13: ` eu sei que você deve estar ansioso para voltar pra casa.<br><br>`,
  14: `O anjo chega perto dos restos deformados do <i>olho</i>,`,
  15: ` você nem havia percebido que eles ainda estavam lá,`,
  16: ` Maldio começa a manipular os pequenos restos de magia que ainda restaram da pilha de massa amorfa<br><br>`,
  17: `- É isso,`,
  18: ` o portal está aberto,`,
  19: ` olhe para trás!<br><br>`,
  20: `<a href="#" onclick="updateScreen('finalDoor','ending')">Se virar</a>`,
},

endingLines: {
  0: `O fim da sua missão está próximo,`,
  1: ` todos os seus esforços serão finalmente recompensados,`,
  2: ` você sente um enorme sentimento de missão cumprida após recuperar suas memórias.<br><br>`,
  3: `Você se vira,`,
  4: ` e encontra uma porta,`,
  5: ` a mesma porta que te trancou neste lugar,`,
  6: ` mas agora,`,
  7: ` ela está te libertando,`,
  8: ` você vê a sua casa do outro lado,`,
  9: ` você olha para trás e dá um último adeus para Maldio,`,
  10: ` nada disso seria possível sem a sua ajuda.<br><br>`,
  11: `<a href="#" onclick="winGame(),">Passar pela porta</a>`,
}
};