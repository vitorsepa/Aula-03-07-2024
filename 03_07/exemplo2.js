function saudacao(genero){
    let frase
    if (genero === "feminino"){
        frase = "Olá moça!"
    } else if (genero === "nao-binário"){
        frase = "Olá moce"
    } else if (genero === "masculino"){
        frase = "Olá moço"
    } else {
        frase = "Olá pessoa"
    }
}

let genero1 = "feminino", genero2 = "nao-binario", genero3 = "masculino", genero4 = "outro"

console.log(`Genero:${genero1}: ${saudacao(genero1)}`)