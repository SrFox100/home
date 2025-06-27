var texts = ["Hello.", "Hello one...", "Hi.!?", "Hello again!", "...", "Hello my friend!", "Æ my friend.", "Привет.", "Привет снова!", "Хеллоу май визитор.", "Hello there...", "Hello kind sir!", "Hello and so on.", "Hi what what?", "Hey what's up?", "Mustæ!", "И уже не исколечить, смех лощённый дураков, ведь запрыгнул ей на плечи, мокрый ангел с облаков...", "こんにちは私の親愛なる友人。", "안녕하세요.", "Willst du bis der Tod euch scheidet, treu ihrsein für alle Tage.", "Mister bombastic, bomba fantasta.", "中國公民你好。", "Æԙ.", '<span style="color: red;">This text is red.</span>', '<span style="color: #0f0;">This text is green.</span>', '<span style="color: #00f;">This text is blue.</span>'];
var texts2 = ["Welcome to my home website. My name is Senior Fox, i created much projects for my friends, for myself and etc.", "Hmmm, chicken... I like them. I like their life, i like taste... i should eat them, i should kill them, why not?", "Hey, you are at the home website.", "I want make your day better! You can do it! Have a nice day bro!", "Добро пожаловать на мой главный сайт, где ты можешь просто посмотреть на него! Есть несколько страниц, GitHub хостит этот сайт кстати.", "Kill kill kill cuddly bunny rabbits! Oh hello, i was just furious...", "♫А движения неловки, как будто бы из мышеловки, как будто бы из мышеловки, только вырвалась она.♫", "キツネのウェブサイトへようこそ！", "Nein... Nein...", "偉大的中國黨已將您帶到福克斯的網站，您可以在其中查看他、了解他的項目等等。"];
var output = document.getElementById("type");
var output2 = document.getElementById("type2");

function typeText(text, outputElement, time) {
  var randomIndex = Math.floor(Math.random() * text.length);
  var selectedText = text[randomIndex];

  outputElement.innerHTML = "";

  var index = 0;
  var typedText = "";

  function addChar() {
    if (index < selectedText.length) {
      typedText += selectedText.charAt(index);
      outputElement.innerHTML = typedText;
      index++;
      setTimeout(addChar, time);
    }
  }

  addChar();
}

typeText(texts, output, 80);
typeText(texts2, output2, 50);