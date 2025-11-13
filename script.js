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
const backs = document.querySelectorAll('#gameBoard .back');
backs.forEach((back, idx) => {
  back.textContent = cards[idx]; // 直接放 emoji
});
