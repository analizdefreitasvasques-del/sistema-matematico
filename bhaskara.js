function calcularBhaskara(a, b, c) {
    // Validação básica: 'a' não pode ser zero em uma equação do 2º grau
    if (a === 0) {
        return 'O valor de "a" nao pode ser zero.';
    }

    // Calcula o Delta (Delta = b² - 4ac)
    const delta = (b * b) - (4 * a * c);

    // Se o delta for negativo, não existem raízes reais
    if (delta < 0) {
        return 'Delta negativo. A equacao nao possui raizes reais.';
    }

    // Calcula as raízes X1 e X2 usando a classe Math nativa do JS para a raiz quadrada
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Retorna um objeto formatado com os resultados
    return {
        delta: delta,
        x1: x1,
        x2: x2
    };
}

// Exportamos a função para ser consumida externamente
module.exports = calcularBhaskara;