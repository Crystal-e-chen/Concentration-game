<<<<<<< HEAD
cons`t emojis = ["dog..png","cat.png","mouse.png","hamster.png","🐰","🦊","🐻","🦁"];
=======
//const emojis = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🦁"];
// 建立6對卡牌
//let cards = [...emojis, ...emojis];
// Fisher-Yates 洗牌演算法隨機打亂卡牌順序
//for (let i = cards.length - 1; i > 0; i--) {
  //const j = Math.floor(Math.random() * (i + 1));
  //[cards[i], cards[j]] = [cards[j], cards[i]];
//}


//const gameBoard = document.querySelector('#gameBoard');
//let firstCard = null, secondCard = null;
//let lockBoard = false;
//let matches = 0;


// 初始化生成卡牌元素
//const backs = document.querySelectorAll('#gameBoard .back');
//backs.forEach((back, idx) => {
  //back.textContent = cards[idx]; // 直接放 emoji
//);
const emojis = [
  "./img/dog.png",
  "./img/cat.png",
  "./img/mouse.png",
  "./img/hamster.png",S
  "./img/rabbit.png",
  "./img/fox.png",
  "./img/bear.png",
  "./img/lion.png"
];

>>>>>>> ffcaded90fd02c3b606d87e5d97f7fc1a6e09b2e
// 建立6對卡牌
let cards = [...emojis, ...emojis];

// 隨機洗牌
for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}

const gameBoard = document.querySelector('#gameBoard');
let firstCard = null, secondCard = null;
let lockBoard = false;
let matches = 0;

<<<<<<< HEAD

// 初始化生成卡牌元素
<<<<<<< HEAD
cards.forEach(src => {
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = src; // ✅ 使用圖片路徑
  img.classList.add('card-face');
  card.appendChild(img);
  gameBoard.appendChild(card);
=======
const backs = document.querySelectorAll('#gameBoard .back');
backs.forEach((back, idx) => {
  back.textContent = cards[idx]; // 直接放 emoji
>>>>>>> cd62e588d753591b11988e6ccf4622b4d86c15fc
=======
// 初始化生成卡牌
const backs = document.querySelectorAll('#gameBoard .back');
backs.forEach((back, idx) => {
  const img = document.createElement("img");
  img.src = cards[idx];
  img.classList.add("card-img");
  back.appendChild(img);
>>>>>>> ffcaded90fd02c3b606d87e5d97f7fc1a6e09b2e
});

