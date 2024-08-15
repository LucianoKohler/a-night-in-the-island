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
  document.getElementById('startbutton').innerHTML = translatedText.start.buttons.start;
  document.getElementById('howtoplaybutton').innerHTML = translatedText.start.buttons.howtoplay;
  document.getElementById('creditsbutton').innerHTML = translatedText.start.buttons.credits;
  document.getElementById('madeWithLove').innerHTML = translatedText.start.madeWith;

  // Como Jogar

  document.getElementById('howtoplaytitle').innerHTML = translatedText.start.howtoplay.title;


}

window.onload = translateMenu;