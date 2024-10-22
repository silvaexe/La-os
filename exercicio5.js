const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// Será impresso : 19, 21, 23, 25, 27, 30, pois  são os números maiores que 18 da lista. 

// Se quiser acessar o índice de cada elemento da lista, o for ... of...  não é a melhor escolha, pois não nos permite acessar o índice. Para isso , usamos o for... in... . 

//  Exemplo com o for... in... :  

for (let indice in lista) {
    console.log(indice, lista[indice])
    }







    

