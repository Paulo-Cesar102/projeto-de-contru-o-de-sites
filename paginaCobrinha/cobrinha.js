//area do canvas
const canvas=document.querySelector('.canvas');
const contexto = canvas.getContext('2d');
//cobrinha
const size=30;
const cobrinha = 
[   {x:200, y:200},
    {x:230, y:200},             
];

let direcao= ""; //direção inicial da cobrinha

//função para desenhar a cobrinha
const desenhoCobrinha = () =>{
contexto.fillStyle='#98fb98'; //cor do corpo da cobrinha

cobrinha.forEach((position, index) =>{

if(index === cobrinha.length -1 ){
    contexto.fillStyle='green'; //cor da cabeça da cobrinha
}

contexto.fillRect(position.x, position.y, size , size);
});
};

const moveCobra = () =>{
    if(!direcao) return; //se não tiver direção, não faz nada
    const cabeca =cobrinha[cobrinha.length -1]; //pega a última posição da cobrinha

   if(direcao == "right"){
cobrinha.push({x: cabeca.x + size , y:cabeca.y});
   }

   if(direcao == "left"){
    cobrinha.push({x: cabeca.x - size , y:cabeca.y});
       }

       if(direcao == "down"){
        cobrinha.push({x: cabeca.x , size , y:cabeca.y + size});
           }

           if(direcao == "up"){
            cobrinha.push({x: cabeca.x , size , y:cabeca.y - size});
               }
    

   cobrinha.shift(); //remove a primeira posição da cobrinha
}

const gameloop= () =>{

}

setInterval(() => {
    contexto.clearRect(0,0, 600, 600); //limpa o canvas
    moveCobra()
    desenhoCobrinha()
},300) //atualiza a cada 300ms


