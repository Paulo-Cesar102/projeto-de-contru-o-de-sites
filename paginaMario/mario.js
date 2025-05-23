const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const music = document.getElementById('musica');
const controleBtn = document.getElementById('controle');

//mario jump
const marioJump = (event) => {
    mario.classList.add('mario-jump');
    setTimeout(() => {  
        mario.classList.remove('mario-jump');
    }, 500);
}

const loop = setInterval(() => {
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    let pipePosition = pipe.offsetLeft;
    const marioWidth = mario.offsetWidth; // Obtém a largura real do Mario
    const pipeWidth = pipe.offsetWidth;   // Obtém a largura real do Pipe
    console.log('loop');

    //game over e Detecção de colisão com base nas dimensões reais dos elementos
    if (pipePosition <= marioWidth && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'paginaMario/imgs/game-over.png';

        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        mario.style.marginBottom = ' 80px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', marioJump);
document.addEventListener('click', marioJump); //mario jump on click


  const startMusic = () => {
  music.volume = 0.2;
  if (music.paused) {
    music.play().catch(e => console.warn('Autoplay bloqueado:', e));
  }

  // Remove os listeners para não tocar múltiplas vezes
  document.removeEventListener('click', startMusic);
  document.removeEventListener('keydown', startMusic);
};
document.addEventListener('click', startMusic);
document.addEventListener('keydown', startMusic);

// Botão de controle de som
controleBtn.addEventListener('click', () => {
  music.muted = !music.muted;
  controleBtn.textContent = music.muted ? '🔇 Mudo' : '🔊 Som';
});


