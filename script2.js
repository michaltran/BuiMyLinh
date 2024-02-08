const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const response = document.getElementById('response');
const heartsContainer = document.getElementById('hearts');
const fireworksContainer = document.getElementById('fireworks');
const valentineGif = document.querySelector('.valentine-gif');
const buttonsContainer = document.querySelector('.buttons');

let yesButtonFontSize = 2;
let noContentIndex = 0;
let noContent = [
  'Bạn chắc chưa?',
  'Nhấn yes đi mà <3',
  'Bạn phải nhấn chữ yes chứ',
  'Nếu bạn nói không tôi sẽ rất là buồn',
  'Tôi sẽ rất rất buồn ☹(((((',
];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heartsContainer.appendChild(heart);
}

function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  fireworksContainer.appendChild(firework);
}

function increaseYesButtonSize() {
  yesButtonFontSize *= 1.2;
  yesButton.style.fontSize = yesButtonFontSize + 'rem';

  if (yesButtonFontSize < 100) {
    requestAnimationFrame(increaseYesButtonSize);
  }
}

noButton.addEventListener('click', () => {
  response.textContent = noContent[noContentIndex];
  heartsContainer.innerHTML = '';
  noContentIndex++;

  if (noContentIndex >= noContent.length) {
    noContentIndex = 0;
    increaseYesButtonSize();
  }
});

yesButton.addEventListener('click', () => {
  response.textContent = 'Tôi rất yêu bạn! 😍';
  heartsContainer.innerHTML = '';
  fireworksContainer.innerHTML = '';
  buttonsContainer.style.display = 'none';

  // Tạo 10 trái tim bay lên
  for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 200);
  }

  // Tạo pháo hoa
  for (let i = 0; i < 20; i++) {
    setTimeout(createFirework, i * 100);
  }

  // Ẩn ảnh gif khi nút "No" được nhấn
  valentineGif.style.display = 'none';
});
