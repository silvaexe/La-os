const quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (quantidadePets === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else {
  const nomesPets = []; 
  
  for (let i = 0; i < quantidadePets; i++) {
    const nome = prompt(`Digite o nome do bichinho ${i + 1}:`);
    nomesPets.push(nome); 
  }

  
  console.log("Nomes dos bichinhos de estimação:", nomesPets);
}
