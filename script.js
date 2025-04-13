let posicaoAtual = 0; 


function inserirLetra(letra) {
    if (posicaoAtual < 5) { 
        let quadrado = document.getElementById('letra' + posicaoAtual);
        quadrado.textContent = letra; // coloca a letra na div
        posicaoAtual++; // avança para a próxima posição
    }
}


function limpar() {
    for (let i = 0; i < 5; i++) {
        document.getElementById('letra' + i).textContent = "";
    }
    posicaoAtual = 0; 
}
