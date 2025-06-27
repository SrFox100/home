/*Script for new website version.*/
function rng(min,max) {
  return Math.floor(Math.random() * (max-min)) + min;
};
const rngText =[
  'What a lovely day today!',
  'Hello kind sir!',
  'Good morning(or day(or afternoon(or... I dont know your time, sorry))).',
  'Chicken!',
  'Ae!',
  'Hey website! Why?',
  'Veliky Stario knows about you everything...'
];
const rngText2 = [
  'This website contains projects, which was created by me, friend, someone or also by you!',
  'This website was made by me in GitHub, So thank him for free host. Thank you GitHub Pages for our fine website!',
  'The creator of website SrFox is Russian and live in Russia. So hes speaking on Russian. Ah yeah, hes made his own language, is altarian(or altarska).',
  'This website is archiving old version of him. Will be funny when SrFox updating him every year, but he promised update on winter-spring. So there is!',
  'SrFox maybe will make russian version of website, but hes not promised for that.',
  'Mini pixel icons for projects were drawn by me on Krita. ',
  'This text should be in first sentence, but its not working because javascript.',
  'Check https://symbl.cc! Very important site for seeking emojis and symbols!'
];
const TextOnRand = document.getElementById('rngtxt');
TextOnRand.innerHTML = rngText[rng(0,7)] + ' ' + rngText2[rng(0,8)];

function TypeAnim(elementId, speed) {
  let element = document.getElementById(elementId);
  let text = element.textContent;
  element.textContent = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
function unTypeAnim(elementId, speed) {
  let element = document.getElementById(elementId);
  let text = element.textContent;
  let i = text.length;

  function untype() {
    if (i > 0) {
      element.textContent = text.substring(0, i - 1);
      i--;
      text = element.textContent;
      setTimeout(untype, speed);
    }
  }

  untype();
}
TypeAnim('GeneralTitle',20);
TypeAnim('FirstPar',1);
TypeAnim('AboutText',15);
TypeAnim('AboutText2',20);
TypeAnim('AboutText3',25);