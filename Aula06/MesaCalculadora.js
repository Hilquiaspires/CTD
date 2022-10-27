//Calculadora Nível 01

function adicionar (numero1 = 0, numero2 = 0) {
    let total = numero1 + numero2;
    return total;
}

function subtracao (numero1 = 0, numero2 = 0) {
    let total = numero1 - numero2;
    return total;
}

function multiplicacao (numero1 = 0, numero2 = 0) {
    let total = numero1 * numero2;
    return total;
}

function divisao (numero1 = 0, numero2 = 0) {
    let total = numero1 / numero2;
    return total;
}

//Calculadora Nível 02

console.log("\n----- Teste de Operações/Calculadora -----\n");

console.log (adicionar(50, 5));
console.log (subtracao(50, 25));
console.log (multiplicacao(50, 2));
console.log (divisao (50, 2));
console.log (divisao(50, 0)); //Erro proposital.

//Calculadora Nível 03

function quadradoDoNumero (numero) {
    console.log (multiplicacao(numero, numero));
}

quadradoDoNumero (2);

function mediaDe3Numeros (numero1, numero2, numero3) {
    let totalSoma = adicionar(numero1, numero2) + numero3;
    let totalGeral = divisao (totalSoma, 3); //3 é o total de números.
    return totalGeral;
}

console.log (mediaDe3Numeros(2, 3, 3));

function calculaPorcentagem (numerototal, porcentagem) {
    porcentagem = divisao(porcentagem, 100);
    let resultado = multiplicacao(numerototal, porcentagem);
    return resultado;
}

console.log (calculaPorcentagem(300, 50));

function geradorDePorcentagem (valorReferencia, valorTotal) {
    let valorUnitario = divisao(valorTotal, 100);
    let resultado = divisao(valorReferencia, valorUnitario);
    return resultado;
}

console.log (geradorDePorcentagem(2, 200));

//Finalização.

console.log ("\nComponentes do grupo: \n");