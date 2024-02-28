function calcularMDC(a, b) {
    // Implementação do Algoritmo de Euclides
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    // O MDC é o último valor de 'a' não nulo
    return a;
}

// Exemplo de uso:
let numero1 = 20;
let numero2 = 30;
let mdc = calcularMDC(numero1, numero2);
console.log("O MDC de", numero1, "e", numero2, "é:", mdc);
