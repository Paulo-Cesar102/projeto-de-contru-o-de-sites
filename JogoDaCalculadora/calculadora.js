let insert = (num) => {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML += num;
};

let apagar = () => {
    document.getElementById('resultado').innerHTML = '';
};

let voltar = () => {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.slice(0, -1);
};

let calcular = () => {
    let numero = document.getElementById('resultado').innerHTML;
    const resultado = document.getElementById('resultado');
    const explosaoImg = document.getElementById('explosao');
    const som = document.getElementById('somExplosao');

    if (numero.includes('/0')) {
        resultado.innerHTML = '';
        resultado.classList.add('explodiu');

        // Mostra imagem
        explosaoImg.style.display = 'block';

        // Toca o som
        som.play();

        // Depois de 1 segundo, limpa tudo
        setTimeout(() => {
            resultado.innerHTML = '';
            resultado.classList.remove('explodiu');
            explosaoImg.style.display = 'none';
        }, 2100);
    } else if (numero) {
        resultado.innerHTML = eval(numero);
    }
};