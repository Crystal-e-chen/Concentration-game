cons`t emojis = ["dog..png","cat.png","mouse.png","hamster.png","🐰","🦊","🐻","🦁"];
// 建立6對卡牌
let cards = [...emojis, ...emojis];
// Fisher-Yates 洗牌演算法隨機打亂卡牌順序
for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}


const gameBoard = document.querySelector('#gameBoard');
let firstCard = null, secondCard = null;
let lockBoard = false;
let matches = 0;


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
});
