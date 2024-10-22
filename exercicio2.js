function maioNumero(numeros) {
    let maior = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        const  valorAtual = numeros[i];
        if (valorAtual > maior) {
            maior = valorAtual;
        }
    }    
    return  maior;

    
}

const meusNumeros = [11,15,18,4,23,14,12]
const retorno  = maioNumero(meusNumeros)
console.log(retorno)
