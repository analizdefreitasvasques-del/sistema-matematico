function somar(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtrair(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}

// Função para dividir dois números com validação de erro
function dividir(a, b) {
    if (b === 0) {
        return 'Erro: Divisao por zero nao e permitida!';
    }
    return a / b;
}

// Exportamos as funções para que o arquivo index.js possa utilizá-las
module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};