const emojis = [
  "dog..png","cat.png","mouse.png","hamster.png",
  "rabbit.png","fox.png","bear.png","lion.png"
];

// 建立卡牌
let cards = [...emojis, ...emojis];

// 洗牌
for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}

const gameBoard = document.querySelector('#gameBoard');
const timerEl = document.querySelector('#timer');
const restartBtn = document.querySelector('#restartBtn');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;

/* ===== 新增：計時 ===== */
let time = 0;
let timer = null;

// 初始化卡牌
cards.forEach(src => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = src;
  img.classList.add('card-face');

  card.appendChild(img);
  gameBoard.appendChild(card);
});

// 綁定事件
gameBoard.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', flipCard);
});

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    time++;
    timerEl.textContent = time;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  startTimer(); // 第一次翻牌才開始計時

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkMatch();
}

function checkMatch() {
  const img1 = firstCard.querySelector('img').src;
  const img2 = secondCard.querySelector('img').src;

  if (img1 === img2) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matches++;
    resetBoard();

    if (matches === emojis.length) {
      stopTimer();
      alert(`全部配對成功！花了 ${time} 秒`);
      restartBtn.style.display = "inline-block";
    }
  } else {
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

/* ===== 再來一次（結束後才能按） ===== */
restartBtn.addEventListener('click', () => {
  location.reload();
});
