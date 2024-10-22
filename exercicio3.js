const palavras =  ["Eu", "sou", "lindo"]

function montaFrase (palavras) {
    let  fraseFinal = ""
    for (let palavra  of palavras) {
        fraseFinal = fraseFinal + palavra  + " "

    }
     return  fraseFinal

}

console.log (montaFrase(palavras)) 





