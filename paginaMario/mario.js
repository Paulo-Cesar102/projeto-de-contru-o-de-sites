const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const music = document.getElementById('musica');
const controleBtn = document.getElementById('controle');
const menu=document.querySelector('.menu');
const btnPlay=document.querySelector('.btn-play');
let scoreFinal = document.querySelector('.scoreFinal');
let score = document.querySelector('.scoreValor');

//mario jump
const marioJump = (event) => {
    mario.classList.add('mario-jump');
    setTimeout(() => {  
        mario.classList.remove('mario-jump');
    }, 500);
}
let scoreInicial=() => {
score.innerHTML=parseInt(score.innerHTML) + 1; //incrementa a pontuação
}



let loop = setInterval(() => {
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

        mario.src = 'imgs/game-over.png';

        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        mario.style.marginBottom = ' 80px';

        clearInterval(loop);
        perdeu(); //chama a função perdeu
    }else if (pipePosition <= marioWidth && pipePosition > 0) {
        scoreInicial(); //incrementa a pontuação
    }
    if(score.innerHTML >= 100) {
        pipe.style.animationDuration = '0.8s'; //aumenta a velocidade do pipe

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
 const perdeu=()=>{
 
  menu.style.display='flex'; //mostra o menu
 scoreFinal.innerText= score.innerText; //atualiza a pontuação final
  music.pause(); //pausa a música
 
 }
 const resetGame = () => {
  // Resetar menu
  menu.style.display = 'none';

  // Resetar Mario
  mario.src = 'imgs/mario.gif'; // imagem original do Mario
  mario.style.width = '';        // remove largura customizada
  mario.style.marginLeft = '';   // remove marginLeft customizada
  mario.style.marginBottom = ''; // remove marginBottom customizada
  mario.style.animation = '';    // reseta animação (para voltar a pular)
  mario.style.bottom = '';       // remove bottom fixo

  // Resetar pipe
  pipe.style.animation = '';    // reseta animação para reiniciar
  pipe.style.left = '';         // remove posição fixa, volta para a animação padrão
  pipe.style.animationDuration = '1.5s'; // volta velocidade normal

  // Resetar pontuação
  scoreFinal.innerText = '00';
  score.innerText = '00';

  // Reiniciar música
  music.currentTime = 0;
  music.play();

  // Reiniciar o loop
  clearInterval(loop);
  loop = setInterval(() => {
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    let pipePosition = pipe.offsetLeft;
    const marioWidth = mario.offsetWidth;
    const pipeWidth = pipe.offsetWidth;

    // Detecta colisão
    if (pipePosition <= marioWidth && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = 'imgs/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';
      mario.style.marginBottom = '80px';

      clearInterval(loop);
      perdeu();
    } else if (pipePosition <= marioWidth && pipePosition > 0) {
      scoreInicial();
    }

    if (parseInt(score.innerHTML) >= 100) {
      pipe.style.animationDuration = '0.8s';
    }
  }, 10);
};
 btnPlay.addEventListener('click',({key})=>{
    menu.style.display = 'none';
   scoreFinal.innerText = score.innerText = '00'; //reseta a pontuação
    
  resetGame(); //chama a função resetGame
 });
 

