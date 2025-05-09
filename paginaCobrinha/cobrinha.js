//area do canvas
const canvas=document.querySelector('.canvas');
const cxt= canvas.getContext('2d');
//cobrinha
const size=30;
const cobra = 
[   {x:200, y:200},
    {x:230, y:200},             
];

let direcao= ""; //direção inicial da cobrinha

//função para desenhar a cobrinha
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
        cobra.push({x: cabeca.x , size , y:cabeca.y + size});
           }

           if(direcao == "up"){
            cobra.push({x: cabeca.x , size , y:cabeca.y - size});
               }
    

   cobra.shift(); //remove a primeira posição da cobrinha
}
 
const gameloop= () =>{

}

setInterval(() => {
    ctx.clearRect(0,0, 600, 600); //limpa o canvas
    moveCobra()
    desenhocobra()
},300) //atualiza a cada 300ms



