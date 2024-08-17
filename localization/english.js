var english = {

// LINHAS DO MENU PRINCIPAL

start: {
  buttons: {
    play: `START`,
    howtoplay: `HOW TO PLAY`,
    credits: `CREDITS`,
  },

  howtoplay: {
    title: `How To Play`,
    backButton: `Go Back`,
    0: `Make your choices by reading and clicking the links on the chatbox.`,
    1: `Navigate through the map by opening it on the bottom right box, you can leave your location at anytime you want.`,
    2: `Keep track of what you have on you with your inventory, the upper right box.`,
    3: `The game has multiple endings, if you got a bad one, maybe you forgot to look somewhere.`,
    4: `Don't forget to check out the settings and choose the best options for your playstyle.`,
    5: `Have fun!`,
  },

  credits: {
    title: `Credits`,
    backButton: `Go Back`,
    specialThanks: `Special Thanks Especiais`,
    0: `The entirety of the game was made by Luciano Kohler da Silva, AKA Blockier, but I also got a helping hand with some arts from Cyrenp (more precisely, the king and cave arts).`,
    1: `Some third party softwares were also used to build the game: <a href="https://safi.me.uk/typewriterjs/" target="_blank">Typewriter.js</a> for the widely used typewriter effect throughout the game and <a href="https://patorjk.com/software/taag/" target="_blank">Patorjk's ascii text generator</a> to create the ascii titles, my thanks to these devs for saving me a ton of time!`,
    2: `This project wouldn't be possible if I didn't have my friends to motivate me, I needed some people to play my game, after all, and I knew that I could count on my friends to know that my game would be appreciated by someone, and that makes my day!`,
    3: `Here's a list of my pals, if you're not in here, know that you're still in my heart :D`,
    4: `Cyrenp - Valhallan`,
    5: `Maiddo - RPG Master`,
    6: `Lyn - My exact clone`,
    7: `Led - Goofy ahh guitarist`,
    8: `Jubireuu - Little BMO stan`,
    9: `Mittens - Future Kim Jung Gi`,
    10: `All of the UDESC gang - New aditions to my heart!`,
  },

  madeWith: `Made by Blockier, with love`,
},

// LINHAS PARA O INVENTÁRIO

inventory: {
  pass: `Pass: `,
  passNo: `No`,
  passYes: `Yes`,
  passUsed: `Used`,
  coins: `Coins: `,

  sword: {
    title: `Steel Broadsword`,
    swordQM: `????? ??????????`,
    swordDesc0: `Even though it looks sharp,`,
    swordDesc1: `it's too heavy! How are you`,
    swordDesc2: `using this?`,
  },

  tunic: {
    title: `Dark Tunic`,
    tunicQM: `???? ?????`,
    tunicDesc0: `Its black material seems`,
    tunicDesc1: `resistant to high temperatures`,
  },

  goggles: {
    title: `Spiral Goggles`,
    gogglesQM: `?????? ???????`,
    gogglesDesc0: `You feel really dizzy`,
    gogglesDesc1: `just by wearing those`,
  },

  islandSword: {
    title: `The Island Sword`,
    islandSwordQM: `??? ?????? ?????`,
    islandSwordDesc: `Powerful enough to kill anything in this place`,
    islandSwordDescQM: `???????? ?????? ?? ???? ???????? ?? ???? ?????`,
  },
},

// MAPA

map: {
  goback: `Go Back`,
  castle: `Castle`,
  well: `Well`,
  cabin: `Cabin`,
  weirdRocks: `Weird Rocks`,
  farm: `Farm`,
  altar: `Altar`,
  wall: `Wall`,
  forest: `Forest`,
  cave: `Cave`,
  pier: `Pier`,
  island: `Island`,
},

// MINI MENUS (others)

others: {
map: `Map`,
settings: `Settings`,
exit: `Exit`,
},

// CONFIGURAÇÕES

settings: {
  backButton: `Go Back`,

  textSpeed: {
    title: `Text Speed`,
    desc: `Change how fast the text is shown on the chat`,
    0: `Slow`,
    1: `Normal`,
    2: `Fast`,
    3: `FASTER!`,
  },
  delayBetween: {
    title: `Delay between sentences`,
    desc: `Change how long the text sleeps after each sentence`,
    0: `Normal`,
    1: `Halved`,
    2: `None`,
  },

  colorPalette: {
    title: `Color Palette`,
    desc: `Choose the color of the game`,
    0: `Default`,
    1: `Fall Forest`,
    2: `Vivid Grove`,
    3: `Sakuras' Festival`,
    4: `Coast Mangrove`,
  }
},

// LINHAS PARA O JOGO

WWYD: `What will you do? <br><br>`,
WWYS: `What will you say? <br><br>`,
YAEH: `<a href="#" onclick="dyingAnimation()">Your adventure ends here.</a>`,
exitCabin: `<b>You exited the cabin.</b>`,

chooseLines: {
  0: `You can use the map anytime you want to leave the place you currently are,`,
  1: `use it if you feel stuck!`,
},

startLines: {
  0: `You wake up in front of a great and dense forest,`,
  1: ` you don't remember your home,`,
  2: ` your life,`,
  3: ` and not even your name,`,
  4: ` you're lost,`,
  5: ` and the only thing that you can do now is to search for help.<br><br>`,
  //WWYD
  6: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a> <br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest</a>`,
},

forestLines: {
  0: `Back to forest you get.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'enterForest')"> Enter the forest </a><br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')"> Retreat from the forest</a>`,
},

forestBearScaredLines: {
  0: `Back to forest you get.<br><br>`,
  1: `The bear is nowhere to be seen, and you haven't seen anything useful between the trees,`,
  2: ` you feel that further scouting the forest won't help.`,
},

enterForestLinesWOStick: {
  0: `You decided to enter further into the forest, not knowing what may be at the other side of it.<br><br>`,
  1: `By the ground, you find a somewhat straight stick on the ground:<br><br>`,
  2: `<b>You got an ordinary stick</b>! <br><br>`,
  //WWYD
  3: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continue</a> <br>`,
  4: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Retreat from the forest`,
},

enterForestLinesWithStick: {
  0: `Back to the same place you are, you can still see the spot where you found your stick... <br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('forest', 'forestBear')">Continue</a> <br>`,
  2: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">Retreat from the forest</a>`,
},

ForestBearWSwordLines: {
  0: `You go further into the forest, the path leads you to...`,
  1: ` A bear!<br><br>`,
  2: `You quickly draw your sword,`,
  3: ` without realizing,`,
  4: ` the angle of it starts to reflect the moonglow at a crazy intensity, the light beam scared the bear away!<br><br>`,
  5: `You get grateful for the smith who made this sword,`,
  6: ` after all, you don't know how to use a sword...<br><br>`,
  7: `You continue through the forest until you reach the end of it,`,
  8: ` on the other side, you find a lonely pier, with a small boat hanging on the water.<br><br>`,
  9: `<b>You got access to the pier!</b>`,
},

ForestBearWOSwordLines: {
  0: `You go further into the forest, the path leads you to...`,
  1: ` A bear!<br><br>`,
  2: `You firmly hold your stick,`,
  3: ` ready to fight for your life, no turning back!<br><br>`,
  4: `The bear takes its first step towards you, and your legs start thinking better than you,`,
  5: ` before even realizing, you start to run away from the creature, getting back to the starting point,`,
  6: ` maybe you're not ready to fight such a big thing?<br><br>`,
  7: `<a href="#" onclick="updateScreen('map-choose', 'chooselocation')">What to do now?</a>`,
},

pierLines: {
  0: `A lonely pier with a ready-to-go little boat stands in front of you.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'island')">Sail with the boat</a><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Stare at the sea</a>`,
},

pierStareSeaLines: {
  0: `You look into the water, realizing:`,
  1: ` You don't remember your face!<br><br>`,
  2: `Upon bending to the sea, you only see the moon and stars reflected by the water's transparency.`,
  3: ` Where is your reflexion?`,
  4: ` Where is...`,
  5: ` You?<br><br>`,
  6: ` <a href="#" onclick="updateScreen('pier', 'pier')">Go back</a>`,
},

islandFirstLines: {
  0: `You hop on the boat, wrap your hands around the oars, and start rowing,`,
  1: ` without directions, only with the intention to go somewhere.`,
  2: ` A few minutes of only listening to the waves' sound takes you to a small island,`,
  3: ` you decide to stop there.<br><br>`,
  4: `Upon arriving, nothing stands there except a palm tree and a giant X marking something,`,
  5: ` you take your bare hands and start digging the mark, since this place mustn't have many shovels around.<br><br>`,
  6: `The digging hurt, but it was worth it,`,
  7: ` after getting your hands numb,`,
  8: ` you find a black mail, seemingly sturdy and, even more important:`,
  9: ` Stylish!<br><br>`,
  10: `<b>You got the dark Tunic!<b><br><br>`,
  11: `<a href="#" onclick="updateScreen('islandhole', 'island')">Wahoo!</a>`,
},

islandLines: {
  0: `There you are, standing in front of a desert island with the hole that you made.<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('island', 'islandRowHorizonPart1')">Row to the Horizon</a><br>`,
  2: `<a href="#" onclick="updateScreen('island', 'islandAppreciateLandscape')">Appreciate the landscape</a>`,
},

islandAppreciateLandscapeLines: {
  0: `You look at the horizon.<br><br>`,
  1: `Water,`,
  2: ` stars`,
  3: ` and the moon,`,
  4: ` that's all, why are you here?`,
  5: ` Who took you here?`,
  6: ` Was it...`,
  7: ` Magic?<br><br>`,
  8: `You must end your quest,`,
  9: ` maybe then you'll be able to know your fate on the island.<br><br>`,
  10: `<a href="#" onclick="updateScreen('island', 'island')">Go back</a>`,
},

islandRowHorizonPart1Lines: {
  0: `You continue your journey to the unknown,`,
  1: ` maybe the time will guide you to the right way.<br><br>`,
  2: `<a href="#" onclick="updateScreen('pier', 'islandRowHorizonPart2')">Continue</a>`,
},

islandRowHorizonPart2Lines: {
  0: `After minutes,`,
  1: ` the confimation that this place is not normal appears:`,
  2: ` You returned back to the pier!`,
  3: ` You did not turn the boat, and neither the waves did,`,
  4: ` it seems that you're stuck for real and that magic really exists after all...<br><br>`,
  //WWYD
  5: `<a href="#" onclick="updateScreen('island', 'island')">Sail with the boat</a><br>`,
  6: `<a href="#" onclick="updateScreen('pier', 'pierStareSea')">Stare at the sea</a><br>`,
},

wellLines: {
  0: `In the distance, you discover an ordinary well with a hanging sign on its side. The sign reads: "Show me the shinies" <br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('well', 'wellThrowCoin')">Throw a Coin</a><br>`,
  2: `<a href="#" onclick="updateScreen('well', 'wellLookInside')">Look inside the well</a>`,
},

wellLinesAfterGoggles: {
  0: `You get back to the well,`,
  1: ` the sign is still talking about you being poor.<br><br>`,
  2: ` "It's just a silly well, ignore it"<br><br>`,
  3: ` You say to yourself, backing off.`,
},

wellThrowCoinLines: {
  0: `You get one coin from the rest of your money, you then reach near the well and throw it to the endless hole.<br><br>`,
  1: `You hear some noises, and then, a pair of goggles gets spit out of the well,`,
  2: `You recognize them as those party goggles with a spiral decal on the lenses:<br><br>`,
  3: `<b>You got the Spiral Goggles!</b><br><br>`,
  4: `Wearing them makes you really dizzy, and after removing them, you notice that the sign changed its text:<br><br>`,
  5: `"You're poor, You're thrash"<br><br>`,
  6: `What a rude well! You don't want to stay near him anymore.`,
},

wellThrowCoinWOCoinLines: {
  0: `You search around your pockets,`,
  1: ` but you realize that you don't have any money with you right now,`,
  2: ` what a shame...<br><br>`,
  3: `<a href="#" onclick="updateScreen('well', 'well')">Go back</a>`,
},

wellLookInsideLines: {
  0: `You lean into the well, checking if there was something,`,
  1: ` no water,`,
  2: ` no bucket,`,
  3: ` only a black endless hole with a hanging torn rope.<br><br>`,
  4: `<a href="#" onclick="updateScreen('well', 'well')">Go back</a>`,
},

weirdRocksLines: {
  0: `You find a weird arrangement of rocks in the middle of the grass:<br><br>`,
  1: `-Heyo! - The rock says.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Who are you?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')"> What's the deal with your eye?</a>`,
},

weirdRocksWhoAreYouLines: {
  0: `- I'm Rox, Rox the rock, nice to meetcha pal!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksCabin')">Do you know who lives in the cabin?<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksEye')">What's the deal with your eye?</a>`,
},

weirdRocksCabinLines: {
  0: `- Oh... Are you talking about <i>Leshy</i>? <i>It</i> is a spirit that makes bad things to people, I don't like to talk about that...<BR><BR>`,
  1: `<i>Leshy</i> turned Rox into a lot of stones!<BR><BR>`,
  2: `Rox starts crying pebbles, you decide to leave it alone for a bit...`,
},

weirdRocksEyeLines: {
  0: `- Oh, this eye? It's my ultra sharp and shiny metal eye, cool huh?<br><br>`,
  1: `You can't lie, that eye is awesome. <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksWhoAreYou')"> Who are you?<br>`,
  3: `<a href="#" onclick="updateScreen('weirdRocks', 'weirdRocksNice')"> Nice! Can I have it?<br>`,
},

weirdRocksNiceLines: {
  0: `- Of course not! This is MY eye and if you steal it, you will suffer the most ruthless punishment you'll ever feel!<br><br>`,
  //WWYD
  1: `<a href="#" onclick="updateScreen('weirdRocks','weirdRocksNotStealEye')">Not steal the eye<br>`,
  2: `<a href="#" onclick="updateScreen('weirdRocksEyeless', 'weirdRocksStealEye')">Steal the eye`,
},

weirdRocksNotStealEyeLines: {
  0: `- Thanks mate! :D <br><br>`,
  1: `Besides the eye and the threat, the rock doesn't show anything special, you are done with chatting with him for now.`,
},

weirdRocksStealEye: {
  0: `<b>you got Rox's eye! <br><br>`,
  1: `- Ouch! Give it back! It's your last advice!<br><br>`,
  2: `You can clearly tell that Rox is lying at this point, you just leave.`,
},

weirdRocksAngryRox: {
  0: `You get back to Rox the rock, now crying pebbles over his lost eye <br><br>`,
  1: `- Sniff, What do you want? Go away you heart of stone!<br><br>`,
  2: `You think you already did to much to this poor rock, you turn around and leave.`,
},

farmLines: {
  0: `This lonely farm is far from the rest of the civilization, the farmer, quickly realizing you, approaches: <br><br>`,
  1: `- Oh my! Visitor!!! Welcome to ma farm, I plant carrots, potatoes, carrots, carrots, metal'n'carrots! How can I help'ya? <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm', 'farmSeeCrops')">Can I see your crops?</a> <br>`,
  3: `<a href="#" onclick="updateScreen('farm', 'farmMetal')">You plant metal?</a> <br>`,
  4: `<a href="#" onclick="updateScreen('farm','farmBye')">Bye!</a> `,
},

farmLinesWOSticker: {
  0: `- Of course not! The carrots are my precious ons and I'ould never let anyone touch'em! <br><br>`,
  1: `He seems really serious when talking this, plus he has a rake, better listen to him <br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm', 'farmMetal')">You plant metal?</a> <br>`,
  3: `<a href="#" onclick="updateScreen('farm','farmBye')">Bye!</a> `,
},

farmLinesWSticker: {
  0: `- Of course no...`,
  1: ` wait, `,
  2: `is that a carrot sticker? `,
  3: `I LOVE CARROTS!!! <br><br>`,
  4: `- Boi y'can take a good look at'em, carrot brotha! <br><br>`,
  5: `<a href="#" onclick="updateScreen('farmZoom','farmApproach')">Approach the plantation</a>`,
},

farmLinesMetal: {
  0: `- Yeah! If carrots grow carrots, expensive metal grows more metal, are ya dum?<br><br>`,
  1: `You stay quiet, thinking that arguing about this would be like talking to a wall.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('farm','farmSeeCrops')">Can I see your crops?</a><br>`,
  3: `<a href="#" onclick="updateScreen('farm','farmBye')">Bye!</a>`,
},

farmLinesBye: {
  0: `- Bye visitor, may the carrots be with ya!<br><br>`,
  1: `You really wanted to move away from that carrot crazy.`,
},

farmLinesApproach: {
  0: `As you pass your eyes through the plantation, you find something weird, it looks like a shiny tube.<br><br>`,
  1: `You think the farmer won't mind if one carrot goes away, so you pull the tube.<br><br>`,
  2: `It looked really stuck to the ground among other vegetables, but you win the fight against it and pull a beautiful hilt from the ground.<br><br>`,
  3: `<b>You got the farmer's hilt!</b><br><br>`,
  4: `You hope the farmer didn't notice it, you run trying to get out of his view.`,
},

farmLinesHilt: {
  0: `You see the farmer going goblin mode trying to find the metal part with his rake...<br><br>`,
  1: `Maybe it's better to not get near him.`,
},

wallLines: {
  0: `A massive wall blocks the way beyond it, a small guy inside a toll whick doesn't look much friendly stares at you:<br><br>`,
  1: `- Hi, where's the Pass?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('wall-open','wallUsePass')">Here, I have a Pass</a><br>`,
  3: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Pass? What do you mean?</a><br>`,
  4: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  5: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
},

wallWhatPassLines: {
  0: `- You need a Pass to pass the toll, go get one at the castle, they're nice to me.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallBeyondWall')">What's beyond this wall?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
},

wallBeyondWallLines: {
  0: `- A beatiful cavern with a demigod, you need to see it, so please, get a Pass!<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('wall','wallWhatPass')">Pass? What do you mean?</a><br>`,
  2: `<a href="#" onclick="updateScreen('wall','wallBye')">Bye!</a>`,
},

wallByeLines: {
  0: `- Thank you for nothing, don't forget to buy a Pass! <br><br>`,
  1: `Maybe you should take a look at what and where this Pass is.`,
},

wallUsePassLines: {
  0: `You give the Pass to the thing, it gets really happy! <br><br>`,
  1: `- OOOOOHH, THE BOSS WILL LET ME HAVE A DAY OFF!!!<br>`,
  2: `- Ok, you may pass and admire the cave.<br><br>`,
  3: `The pole besides him lifts, <b>you now have access to the cave!</b>.`,
},

wallAlreadyUsedPassLines: {
  0: `You see the thing again, trying to hold his smile in front of you: <br><br>`,
  1: `- So? Pass, you don't have anything interesting for me now.<br><br>`,
  2: `You try to say something, but the creature just says "blablabla" while covering its ears, what a child!`,
},

caveLines: {
  0: `A big cave stands in front of you,`,
  1: ` you can hear small growls coming from it.<br><br>`,
  2: `<a href="#" onclick="updateScreen('goblin','goblin')">Enter it.</a>`,
},

goblinFirstLines: {
  0: `The cave smells like mold and has the sound of dripping water from the dripstones along with the growls,`,
  1: ` walking further shows you the so called demigod that the doorman spoke about:`,
  2: ` A small goblin near a "treasure",`,
  3: ` which is actually just a small pile of coins on the ground.<br><br>`,
  4: `- Who dares to enter my domain?<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Who are you?</a><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  7: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
},

goblinLines: {
  0: `You get back to the inside of the cave,`,
  1: ` the goblin is still there.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('goblin','goblinWhoAreYou')">Who are you?</a><br>`,
  3: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  4: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
},

goblinAfterGotMoneyLines: {
  0: `You get back to the cave,`,
  1: ` the goblin is still crying,`,
  2: ` you're not good with cheering someone up,`,
  3: ` plus you stole its money,`,
  4: ` maaaaybe it's better to forget him by now.`,
},

goblinWhoAreYouLines: {
  0: `- I'm Barretos, the demigod,`,
  1: ` the keeper of the island's biggest treasure,`,
  2: ` the inhabitant of the oldest cave on the island,`,
  3: ` the most GREEN being here,`,
  4: ` the MIGHTIEST WARRIOR OF...<br><br>`,
  5: `You yell at him that you already got it.<br><br>`,
  6: `- Of course you got...<br><br>`,
  //WWYS
  7: `<a href="#" onclick="updateScreen('goblin','goblinWhatGold')">What's that gold?</a><br>`,
  8: `<a href="#" onclick="updateScreen('goblin','goblinBye')">Bye!</a>`,
},

goblinWhatGoldLines: {
  0: `- It's my treasure,`,
  1: ` MY treasure,`,
  2: ` envy me, I'm the richest being in the island!`,
  3: ` If you cry enough, I may give you a penny...`,
  4: ` HAHA!<br><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinNotMuch')">"That's not much to be honest..."</a>`,
},

goblinNotMuchLines: {
  0: `What do you mean?`,
  1: ` It's a lot! The shopkeeper said that to me!`,
  2: ` The money that he gets from the pass is passed to ME,`,
  3: ` and I get RICH!<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('goblin','goblinTruth')">(Say the truth) Yeah but I got the pass for free...</a><br>`,
  5: `<a href="#" onclick="updateScreen('goblin','goblinBluff')">(Bluff) I have much more money than you, haha.</a>`,
},

goblinBluffLines: {
  0: `- No,`,
  1: ` that's impossible,`,
  2: ` there can only be one richest being in the island,`,
  3: ` THAT'S IT.`,
  4: ` LET'S FIGHT, THE WINNER KEEPS ALL THE MONEY!<br><br>`,
  5: `The goblin's moss green skin color starts to turn into a boiling red color.<br><br>`,
  6: `<a href="#" onclick="updateScreen('goblin','goblinComeOn')">Come on!</a>`,
},

goblinTruthLines: {
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
},

goblinComeOnLines: {
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
},

goblinMoneyLines: {
  0: `You are not dumb.`,
  1: ` Money may help you with getting geared up,`,
  2: ` and you won the fight!`,
  3: ` you get the mediocre pile of money from the ground.<br><br>`,
  4: `<b>You got exactly 31 coins!</b><br><br>`,
  5: `You let the goblin crying at its cave,`,
  6: ` that guy is too annoying.`,
},

goblinByeLines: {
  0: `- Bye, sucker,`,
  1: ` bring me something to eat next time!<br><br>`,
  2: `Who this guy think it is?`,
},

castleLines: {
  0: `A big castle can be seen at the distance from the entire island,`,
  1: ` the main gate is open,`,
  2: ` you may enter it.<br><br>`,
  3: `<a href="#" onclick="updateScreen('bifurcation','castle')">Enter it</a>`,
},

enterCastleLines: {
  0: `People walk by, ignoring you, the buildings appear boring, and nothing attracts your attention. <br><br>`,
  1: `At the end of the main street, you find yourself at a bifurcation:<br><br>`,
  2: `To the left, we have the king's palace.<br>`,
  3: `To the right, a local shop which appear to have lots of goods.<br><br>`,
  4: `Where do you want to go?<br><br>`,
  5: `<a href="#" onclick="updateScreen('king','palaceEnter')">To the king's palace</a><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">To the local store</a>`,
},

palaceEnterFirstLines: {
  0: `You enter the palace without any problems, looks like this place doesn't need much guards to be peaceful, at the end of the room, you see a king: <br><br>`,
  1: `- Hello fellow citizen, or may I say... Stranger?<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
},

palaceEnterLines: {
  0: `Greetings again, stranger.<br><br>`,
  //WWYS
  1: `<a href="#" onclick="updateScreen('king','kingWhoAreYou')">Who are you?</a><br>`,
  2: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  3: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
},

kingWhoAreYouLines: {
  0: `- I'm king Cyryenp, ruler of this kingdom, `,
  1: `my people were brought here by <i>Leshy</i>, and now are away from their family, `,
  2: `I serve as a guide for these poor souls who lost their home. <br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('king','kingMeetSameFate')">Did you meet the same fate?</a><br>`,
  4: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  5: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a><br><br>`,
  6: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
},

kingMeetSameFateLines: {
  0: `- Indeed, `,
  1: `I was the first one to get here, and got to spend my time alone for a long time, more people appeared here,`,
  2: ` though,`,
  3: ` and together,`,
  4: ` we built this kingdom to have a place to live.<br><br>`,
  //WWYS
  5: `<a href="#" onclick="updateScreen('king','kingGoHome')">I need to go home</a><br>`,
  6: `<a href="#" onclick="updateScreen('king','kingBye')">Bye!</a> <br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
},

kingGoHomeLines: {
  0: `You told him about waking up here without your memories. <br><br>`,
  1: `- Well,`,
  2: ` actually, I have an idea that may help you:`,
  3: ` <i>Leshy</i>,`,
  4: ` <i>the forest spirit</i> might have done this to you, <i>it</i> has brought so many others here,`,
  5: ` which are now residents of this unescapable island, but maybe,`,
  6: ` if you're brave enough, `,
  6: ` you can get <i>its</i> sick mischiefs to an end! <br><br>`,
  7: `<a href="#" onclick="updateScreen('king','kingHowDoThis')">How do I do this?</a>`,
},

kingHowDoThisLines: {
  0: `- Regular weapons won't work against <i>it</i>,`,
  1: ` go to the shrine at southeast, you'll find an angel able to guide you better than me,`,
  2: ` my suggestion for now is to go to the shop near here and see if there's anything useful there,`,
  3: ` tell the shopkeeper I sent you there and he'll give you some help. <br><br>`,
  4: ` - Good luck,`,
  5: ` stranger. <br><br>`,
  6: ` The king just gave you a quest, you think there's nothing more to do other than trying.<br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
},

kingByeLines: {
  0: `- So long, stranger. <br><br>`,
  1: `You exit the castle, inspired by seeing so many people like you living normally.<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go to shop</a>`,
},

kingGivePommelLines: {
  0: `- Hello again, stranger,`,
  1: ` how's your quest going?<br><br>`,
  2: `You tell him that you only need the pommel to finish the sword.<br><br>`,
  3: `- Speak no more.<br><br>`,
  4: `The king removes an ornament from his throne, and gives it to you:<br><br>`,
  5: `<b>You got the King's Pommel!</b><br><br>`,
  6: `<a href="#" onclick="updateScreen('kingPommelless','kingPommelPart2')">Finally!</a>`,
},

kingPommelPart2Lines: {
  0: `- This pommel was the only part of the sword that we found,`,
  1: ` to keep it safe,`,
  2: ` I guarded it within my throne, but now,`,
  3: ` it has a better use, the angel knows what to do now.<br><br>`,
  4: `You should go to the angel and finish this sword hunting.`,
},

shopFirstLines: {
  0: `You enter the building and are greeted with a friendly shopkeeper: <br><br>`,
  1: `- Helllooooww, I'm Joobireu, the little wizard apprentice AND shopkeeper!`,
  2: ` I got a lot of stuff here, take a look!<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Broadsword (20 coins)</a><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopSticker')">Sticker (10 coins)</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shopPass')">Wall Pass (FREE!)</a><br><br>`,
  6: `<a href="#" onclick="updateScreen('king','palaceEnter')">Go to the palace</a>`,
},

shopLines: {
  0: `- Hey! Take a look at my stuff!<br><br>`,
  1: `<a href="#" onclick="updateScreen('shop','shopBroadsword')">Broadsword (20 coins)</a><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shopSticker')">Sticker (10 coins)</a><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopPass')">Wall Pass (FREE!)</a><br><br>`,
  4: `<a href="#" onclick="updateScreen('king','palaceEnter')">Go to the palace</a>`,
},

shopBroadswordLines: {
  0: `- A steel broadsword, forged by the kingdom's best swordsmith:`,
  1: ` Kyle Kompos!<br><br>`,
  2: `Wanna buy it?<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shopBroadswordYes')">Yes</a><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shop')">No</a>`,
},

shopBroadswordYesLines: {
  0: `- Katching! - Says the little wizard:<br><br>`,
  1: `<b>You got the Steel Broadsword!</b><br><br>`,
  2: `The sword is REALLY heavy, you know that you'll have problems with using it<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Better than nothing!</a>`,
},

shopStickerLines: {
  0: `- A silly carrot sticker, dunno what would you do with it,`,
  1: ` it's funny, though!<br><br>`,
  2: `At the back of the card, you discover that someone named "Mittens" drew it.<br><br>`,
  3: `Wanna buy it?<br><br>`,
  4: `<a href="#" onclick="updateScreen('shop','shopStickerYes')">Yes</a><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">No</a>`,
},

shopStickerYesLines: {
  0: `- Katching! - Says the little wizard:<br><br>`,
  1: `<b>You got the Carrot Sticker!</b><br><br>`,
  2: `Without a place to glue it, you glue it to your clothing.<br><br>`,
  3: `<a href="#" onclick="updateScreen('shop','shop')">Feeling stylish!</a>`,
},

shopPassWOKingQuest: {
  0: `- A pass to the caves,`,
  1: ` it's free cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` poor lone guy...<br><br>`,
  4: `Sadly, the place is dangerous for citizens, and I can only give one to you with permission...<br><br>`,
  5: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
},

shopPassWKingQuest: {
  0: `- A pass to the caves,`,
  1: ` it's free cuz' there isn't anything interesting there, we only sell them so the wall doorman gets to feel important with its work,`,
  2: ` he doesn't even know that we sell them for free!`,
  3: ` Poor lone guy...<br><br>`,
  4: `- Oh, I get it,`,
  5: ` the king trusts you, then so do I, take it:<br><br>`,
  6: `<b>You got the Wall Pass!</b><br><br>`,
  7: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
},

shopTooPoorLines: {
  0: `- You don't have enough money to buy that!<br><br>`,
  1: `- Sorry, I can't give credit...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
},

shopOnlyOnePerPersonLines: {
  0: `- Only one product of each type per person!<br><br>`,
  1: `- Sorry, store rules...<br><br>`,
  2: `<a href="#" onclick="updateScreen('shop','shop')">Go back</a>`,
},

altarAbandonedLines: {
  0: `Your way takes you to an abandoned altar without anything apparent,`,
  1: ` upon getting closer, you find three empty notches, `,
  2: `maybe you need to place someting there?<br><br>`,
  3: `There's nothing more to investigate here.`,
},

altarLines: {
  0: `- Welcome again,`,
  1: ` my child.<br><br>`,
  //WWYS
  2: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
},

altarFirstLines: {
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
},

angelParts2Lines: {
  0: `- I once heard the farmer talking about "planting metal",`,
  1: ` I don't know if that's useful,`,
  2: ` but it is surely worth a shot.<br><br>`,
  //WWYS
  //GeneralLines
},

angelParts3Lines: {
  0: `- I felt a little bit of magic coming the west of the island,`,
  1: ` maybe someone powerful is keeping a part for itself!<br><br>`,
  //WWYS
  //GeneralLines
},

angelParts1Lines: {
  0: `- Now that we have two parts,`,
  1: ` we only need the pommel, the main part of the sword's superpowers,`,
  2: ` go talk to the king,`,
  3: ` he knows where it is.<br><br>`,
  //WWYS
  //GeneralLines
},

angelPartsBadFeelingLines: {
  0: `- We got the mightiest weapon of this island.`,
  1: ` But something feels...`,
  2: ` Off,`,
  3: ` what if just it is not enough to defeat <i>him</i>?`,
  4: ` I have a bad feeling about this,`,
  5: `  <i>Leshy</i> is dirty, and will do anything to kill anyone who bothers <i>him</i>.<br><br>`,
  //WWYS
  //GeneralLines
},

angelPartsGeneralLines: {
  //Falas usadas nas três perguntas de onde estão as partes de espada
  0: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  1: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  2: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  3: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
},

angelFuseSwordPart1Lines: {
  0: `- We did it,`,
  1: ` my child!`,
  2: ` We got all the necessary pieces to refuse the Sword!<br><br>`,
  3: `- Now, place the parts at their notches and take a step back.<br><br>`,
  4: `<a href="#" onclick="updateScreen('altarlightbeam','altarFuseSword')">Do what they asked</a>`,
},

angelFuseSwordPart2Lines: {
  0: `The angel retreats from the altar,`,
  1: `and after 5 steps of backing off,`,
  2: ` a giant light beam strucks the altar,`,
  3: ` making a deafening noise of a lightning, together with a blinding light...<br><br>`,
  4: `<a href="#" onclick="updateScreen('angel','altarFuseSwordAftermath')">And?</a>`,
},

angelFuseSwordPart3Lines: {
  0: `The light beam disappears into thin air,`,
  1: ` and you're left with the so called blade capable of slaying anything.<br><br>`,
  2: `<b>You got The Island Sword!</b><br><br>`,
  3: `- There it is! In all of its glory!`,
  4: ` I'm grateful for your help, my child,`,
  5: ` you deserve it, keep it and use it to end this island's suffering.<br><br>`,
  //WWYS
  6: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
},

angelWhoAreYouLines: {
  0: `- I'm Maldio,`,
  1: ` Maldio the angel,`,
  2: ` I work here as a swordkeeper, but I failed my job... Now I stay here, waiting for someone to come and help with the swordfinding.<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
},

angelHowSwordDisappearLines: {
  0: `- I was playing RPG with my angel friends at the castle's tavern and,`,
  1: ` unfortunately,`,
  2: ` <i>Leshy</i> took the cue and stole the sword while I was away, and now it is gone,`,
  3: ` and no one helped me with finding it...<br><br>`,
  //WWYS
  4: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelSearchSwordYourself')">Why didn't you search the sword by yourself?</a><br>`,
  7: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
},

angelSearchSwordYourselfLines: {
  0: `- I don't have a physical body! <br><br>`,
  1: `You think that this makes sense<br><br>`,
  2: `- But that's not the main problem, I am also a little shy...<br><br>`,
  //WWYS
  3: `<a href="#" onclick="updateScreen('angel','angelAskAboutQuest')">Ask about the progress of the quest</a><br>`,
  4: `<a href="#" onclick="updateScreen('angel','angelWhoAreYou')">Who are you?</a><br>`,
  5: `<a href="#" onclick="updateScreen('angel','angelHowSwordDisappear')">How did the sword disappear?</a><br>`,
  6: `<a href="#" onclick="updateScreen('angel','angelBye')">Bye!</a>`,
},

angelByeLines: {
  0: `- Bye my child,`,
  1: ` good luck with the sword finding.`,
},

cabinLines: {
  0: `You spot a small and miserable cabin at the edge of the island, the cabin has a skull hanged by the top of its only entrance.<br><br>`,
  1: `By the side, you notice a dead tree with a small script carved on its trunk.<br><br>`,
  //WWYD
  2: `<a href="#" onclick="updateScreen('empty','cabinEnter')">Enter the cabin</a><br>`,
  3: `<a href="#" onclick="updateScreen('cabin','cabinTree')">Investigate the tree</a>`,
},

cabinLinesWOGoggles: {
  0: `Upon coming closer to the tree,`,
  1: ` the carving becomes clear,`,
  2: ` it's a text written:<br><br>`,
  3: `<b>You can't slay <i>him</i>.</b><br><br>`,
  4: `<a href="#" onclick="updateScreen('cabin','cabin')">Go back</a>`,
},

cabinLinesWGoggles: {
  0: `Upon coming closer to the tree,`,
  1: ` the headache from using the goggles gets REALLY strong,`,
  2: ` but you can still see what's carved,`,
  3: ` it's a text:<br><br>`,
  4: `<b>You can slay him.</b><br><br>`,
  5: `<a href="#" onclick="updateScreen('cabin','cabin')">Go back</a>`,
},

CabinEnterLines: {
  0: `You decided to enter the dark cabin,`,
  1: ` what really resides inside of it is still unknown.<br><br>`,
  2: `Inside of it, everything is pitch black,`,
  3: ` the ground is sticky,`,
  4: ` nothing moves,`,
  5: ` there isn't... Anything.`,
  6: ` Moments before going back outside,`,
  7: ` the door shuts, and you hear a voice from the darkness:<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshy','cabinFate')">Listen to it</a>`,
},

leshyLostSoulLines: {
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
},

leshyWOGogglesLines: {
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
},

leshyWGogglesLines: {
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
},

leshySkullLines: {
  0: `<i>- I see, that you have something special,`,
  1: `<i> sadly, I have more than one trick.<br><br>`,
  2: `A skull with a candle across it appears, held by a gruesome hand.<br><br>`,
  3: `<i>- Burn.<br><br>`,
  4: `<a href="#" onclick="updateScreen('leshyBurn','leshyBurn')">Continue</a>`,
},

leshyWODarkTunicLines: {
  0: `<i>Leshy</i> throws the skull at your feet,`,
  1: ` the sticky floor begins to burn,`,
  2: ` quickly spreading into your upper body.<br><br>`,
  3: `The heat is to much,`,
  4: ` you run to the door hoping that you can flee,`,
  5: ` but it won't budge,`,
  6: ` you just accept that you'll burn with this cabin,`,
  7: ` and luckily,`,
  8: ` with <i>Leshy</i> as well.<br><br>`,
},

leshyWDarkTunicLines: {
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
},

leshyTransformation: {
  0: `The pair of eyes disappear in the darkness.<br><br>`,
  1: `The deafening silence of the cabin soon turns into a loud orchestra of craking wood,`,
  2: ` as if it was being destroyed,`,
  3: ` plank by plank.`,
  4: ` The noise stops before you have time to process what was happening.<br><br>`,
  5: `.`,
  6: ` .`,
  7: ` .<br><br>`,
  8: `<a href="#" onclick="updateScreen('leshyFinalForm','leshyFinalForm')">Face the enemy</a>`,
},

leshyFinalFormLines: {
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
},

leshyFinalDefeatLines: {
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
},

leshyFinalVictoryLines: {
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
},

leshyAftermathLines: {
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
},

leshyAngelLines: {
  0: ` Maldio the angel phases through the cabin's walls after this conversation with yourself:<br><br>`,
  1: `- I can't believe it,`,
  2: ` you managed to defeat the <i>evil spirit</i>!`,
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
},

endingLines: {
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
  11: `<a href="#" onclick="winGame(),">Go through the door</a>`,
}
}