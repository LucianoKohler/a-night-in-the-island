function translateMenu() {
  const targetLang = new URLSearchParams(window.location.search).get('l');
  var lang = targetLang == 'pt-br' ? 'brazilian' : 'english';
  var translatedText = window[lang];

  // Mudando o link de mudança de linguagem
  if (lang == 'brazilian') {
    document.getElementById('changeLang').href = '?l=en';
    document.getElementById('changeLang').innerHTML = 'Change language to English';
    document.getElementById('changeLang').style.color = 'tomato';
  } else {
    document.getElementById('changeLang').href = '?l=pt-br';
    document.getElementById('changeLang').innerHTML = 'Mudar linguagem para Português';
    document.getElementById('changeLang').style.color = 'lightgreen';
  }

  // Menu Principal
  document.getElementById('newgamebutton').innerHTML = translatedText.mainMenu.buttons.newgame;
  document.getElementById('continuebutton').innerHTML = translatedText.mainMenu.buttons.continue;
  document.getElementById('howtoplaybutton').innerHTML = translatedText.mainMenu.buttons.howtoplay;
  document.getElementById('creditsbutton').innerHTML = translatedText.mainMenu.buttons.credits;
  document.getElementById('madeWithLove').innerHTML = translatedText.mainMenu.madeWith;

  // Como Jogar
  document.getElementById('howtoplaytitle').innerHTML = translatedText.mainMenu.howtoplay.title;
  document.getElementById('howtoplaybackbutton').innerHTML = translatedText.mainMenu.howtoplay.backButton;
  
  let howToPlayItems = document.getElementById('howtoplay').querySelector('ul').querySelectorAll('li');
  for (let i = 0; i < howToPlayItems.length; i++) { howToPlayItems[i].innerHTML = translatedText.mainMenu.howtoplay[i]; }

  // Créditos
  document.getElementById('creditstitle').innerHTML = translatedText.mainMenu.credits.title;
  document.getElementById('creditsthanks').innerHTML = translatedText.mainMenu.credits.specialThanks;
  document.getElementById('creditsbackbutton').innerHTML = translatedText.mainMenu.howtoplay.backButton;

  let creditsTexts = document.getElementById('credits').querySelectorAll('p');
  for (let i = 0; i < creditsTexts.length; i++) { creditsTexts[i].innerHTML = translatedText.mainMenu.credits[i]; }

  let creditsItems = document.getElementById('credits').querySelector('ul').querySelectorAll('li');
  for (let i = 0; i < creditsItems.length; i++) { creditsItems[i].innerHTML = translatedText.mainMenu.credits[i+4]; }

  // Div Others
  document.getElementById('tomap').innerHTML = translatedText.others.map;
  document.getElementById('tosettings').innerHTML = translatedText.others.settings;
  document.getElementById('tomainmenu').innerHTML = translatedText.others.exit;

  // Inventário
  document.getElementById('Pass').innerHTML = translatedText.inventory.pass;
  document.getElementById('passStatus').innerHTML = translatedText.inventory.passNo;
  document.getElementById('Coins').innerHTML = translatedText.inventory.coins;

  document.getElementById('swordQM').innerHTML = translatedText.inventory.sword.swordQM;
  document.getElementById('swordName').innerHTML = translatedText.inventory.sword.title;
  document.getElementById('swordDesc0').innerHTML = translatedText.inventory.sword.swordDesc0;
  document.getElementById('swordDesc1').innerHTML = translatedText.inventory.sword.swordDesc1;
  document.getElementById('swordDesc2').innerHTML = translatedText.inventory.sword.swordDesc2;

  document.getElementById('tunicQM').innerHTML = translatedText.inventory.tunic.tunicQM;
  document.getElementById('tunicName').innerHTML = translatedText.inventory.tunic.title;
  document.getElementById('tunicDesc0').innerHTML = translatedText.inventory.tunic.tunicDesc0;
  document.getElementById('tunicDesc1').innerHTML = translatedText.inventory.tunic.tunicDesc1;

  document.getElementById('gogglesQM').innerHTML = translatedText.inventory.goggles.gogglesQM;
  document.getElementById('gogglesName').innerHTML = translatedText.inventory.goggles.title;
  document.getElementById('gogglesDesc0').innerHTML = translatedText.inventory.goggles.gogglesDesc0;
  document.getElementById('gogglesDesc1').innerHTML = translatedText.inventory.goggles.gogglesDesc1;

  document.getElementById('sword-title').innerHTML = translatedText.inventory.islandSword.islandSwordQM;
  document.getElementById('sword-desc').innerHTML = translatedText.inventory.islandSword.islandSwordDescQM;

  // Configurações
  document.getElementById('textSpeedTitle').innerHTML = translatedText.settings.textSpeed.title;
  document.getElementById('textSpeedDesc').innerHTML = translatedText.settings.textSpeed.desc;
  document.getElementById('speedName').innerHTML = translatedText.settings.textSpeed[1];

  document.getElementById('delayBetweenTitle').innerHTML = translatedText.settings.delayBetween.title;
  document.getElementById('delayBetweenDesc').innerHTML = translatedText.settings.delayBetween.desc;
  document.getElementById('delayName').innerHTML = translatedText.settings.delayBetween[0];

  document.getElementById('colorPaletteTitle').innerHTML = translatedText.settings.colorPalette.title;
  document.getElementById('colorPaletteDesc').innerHTML = translatedText.settings.colorPalette.desc;
  document.getElementById('paletteName').innerHTML = translatedText.settings.colorPalette[0];
  
  document.getElementById('settingsBackButton').innerHTML = translatedText.settings.backButton;

}

window.onload = translateMenu;