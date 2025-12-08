const emojis = ["dog..png","cat.png","mouse.png","hamster.png","rabbit.png","fox.png","bear.png","lion.png"];
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
cards.forEach(src => {
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = src; // ✅ 使用圖片路徑
  img.classList.add('card-face');
  card.appendChild(img);
  gameBoard.appendChild(card);
});
// 建立每張卡片的事件
gameBoard.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', flipCard);
});

function flipCard() {
  if (lockBoard) return;        // 如果正在檢查配對，鎖住
  if (this === firstCard) return; // 避免點同一張卡

  this.classList.add('flip');   // 加上翻牌樣式

  if (!firstCard) {
    firstCard = this;           // 記錄第一張
    return;
  }

  secondCard = this;            // 記錄第二張
  lockBoard = true;

  checkMatch();
}

function checkMatch() {
  const img1 = firstCard.querySelector('img').src;
  const img2 = secondCard.querySelector('img').src;

  if (img1 === img2) {
    // 配對成功
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    matches += 1;

    // 全部配對成功
    if (matches === emojis.length) {
      alert("全部配對成功！");
    }
  } else {
    // 配對失敗 → 翻回去
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}