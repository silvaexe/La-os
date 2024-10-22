
const arrayOriginal = [10, 15, 20, 25, 30, 35, 40];

function imprimirArray(array) {
    array.forEach(valor => console.log(valor));
}

function imprimirDivididoPor10(array) {
    array.forEach(valor => console.log(valor / 10));
}

function imprimirPares(array) {
    const novosPares = array.filter(valor => valor % 2 === 0);
    console.log(novosPares);
}

function imprimirArrayFormatado(array) {
    const novosArrayFormatado = array.map((valor, i) => `O elemento do índice ${i} é: ${valor}`);
    console.log(novosArrayFormatado);
}

function imprimirMaiorMenor(array) {
    let valorMaximo = -Infinity; 
    let valorMinimo = Infinity;   

    array.forEach(valor => {
        if (valor > valorMaximo) {
            valorMaximo = valor;
        }
        if (valor < valorMinimo) {
            valorMinimo = valor;
        }
    });

    console.log(`Maior valor: ${valorMaximo}`);
    console.log(`Menor valor: ${valorMinimo}`);
}


console.log("Valores do array original:");
imprimirArray(arrayOriginal);

console.log("\nValores do array original divididos por 10:");
imprimirDivididoPor10(arrayOriginal);

console.log("\nNúmeros pares do array original:");
imprimirPares(arrayOriginal);

console.log("\nArray formatado:");
imprimirArrayFormatado(arrayOriginal);

console.log("\nMaior e menor valor do array original:");
imprimirMaiorMenor(arrayOriginal);
