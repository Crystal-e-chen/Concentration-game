const emojis = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🦁"];
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
cards.forEach((emoji, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.innerHTML = `<img src="${emoji}" alt="card image">`;
  gameBoard.appendChild(card);
});
