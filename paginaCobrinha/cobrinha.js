//area do canvas
const canvas=document.querySelector('.canvas');
const ctx= canvas.getContext('2d');
//cobrinha
const size=30;
const cobra = 
[   {x:270, y:270},
               
];

let direcao=''; //direção inicial da cobrinha
let id; //variável para armazenar o id do setTimeout
//função para desenhar a cobrinha
const randomNumber= (min,max)=>{
    return Math.round(Math.random() *(max-min) + min);
}
const randomPosition= ()=>{
    const Number=randomNumber(0,canvas.width - size);
    return Math.round(Number / 30) * 30; //arredonda o número para o tamanho da cobrinha 
}
const colorRgb = ()=>{
    const red = randomNumber(0, 255);
     const blue = randomNumber(0, 255);
      const white = randomNumber(0, 255);
      return `Rgb(${red}, ${blue}, ${white})`;//retorna uma cor rgb aleatória
}
const comida={
    x:randomPosition(),
    y:randomPosition(),
    color: colorRgb(), //cor aleatória da comida
}

const desenharComida=()=>{
    const {x, y, color} = comida; //desestruturação do objeto comida}
ctx.shadowColor=color; //cor da sombra

ctx.shadowBlur=20; //tamanho da sombra

    ctx.fillStyle=color;

    ctx.fillRect(x, y, size , size); //desenha a comida

    ctx.shadowBlur=0; //tamanho da sombra
}
const desenhocobra = () =>{
ctx.fillStyle='#98fb98'; //cor do corpo da cobrinha


cobra.forEach((position, index) =>{

if(index === cobra.length -1 ){
    ctx.fillStyle='green'; //cor da cabeça da cobrinha
}

ctx.fillRect(position.x, position.y, size , size);
});
};

const moveCobra = () =>{
    if(!direcao) return; //se não tiver direção, não faz nada
    const cabeca =cobra[cobra.length -1]; //pega a última posição da cobrinha

   if(direcao == "right"){
cobra.push({x: cabeca.x + size , y:cabeca.y});
   }

   if(direcao == "left"){
    cobra.push({x: cabeca.x - size , y:cabeca.y});
       }

       if(direcao == "down"){
        cobra.push({x: cabeca.x , y:cabeca.y + size});
           }

           if(direcao == "up"){
            cobra.push({x: cabeca.x , y:cabeca.y - size});
               }
    

   cobra.shift(); //remove a primeira posição da cobrinha

}
//função para desenhar as linhas no canvas
const desenharLinhas=()=>{

ctx.lineWidth=1; //largura da linha
ctx.strokeStyle="#191919"; //cor da linha

for(let i = 30; i < canvas.width; i+= 30){
ctx.beginPath();
ctx.lineTo(i, 0); //linha horizontal
ctx.lineTo(i, 600); //linha vertical
ctx.stroke();

ctx.beginPath();
ctx.lineTo(0, i); //linha horizontal
ctx.lineTo(600,i); //linha vertical
ctx.stroke();
};

}

 desenharLinhas(); //desenha as linhas no canvas

 const checkEat=()=>{
const cabeca= cobra[cobra.length -1]; //pega a última posição da cobrinha
    if(cabeca.x== comida.x && cabeca.y == comida.y){ //verifica se a cobrinha comeu a comida
       cobra.push(cabeca); //adiciona a cabeça da cobrinha na última posição
         comida.x = randomPosition(); //gera uma nova posição aleatória para a comida
    }
 }

const gameloop= () =>{
  ctx.clearRect(0,0, 600, 600); //limpa o canvas

   desenharLinhas(); //desenha as linhas novamente
   desenharComida(); //chama a função para desenhar a comida
   moveCobra()
    desenhocobra(); //chama a função para desenhar a cobrinha
    checkEat(); //verifica se a cobrinha comeu a comida

  id= setTimeout(() =>{
    gameloop();
    },300);
}
gameloop(); //inicia o jogo

document.addEventListener('keydown',({key})=>{
    if( key == 'ArrowRight' && direcao != 'left') {
        direcao='right';
    }
     if( key == 'ArrowLeft'&& direcao != 'right'){
        direcao='left';
    }
     if( key == 'ArrowUp'&& direcao != 'down'){
        direcao='up';}

         if( key == 'ArrowDown'&& direcao != 'up'){
        direcao='down';}
})