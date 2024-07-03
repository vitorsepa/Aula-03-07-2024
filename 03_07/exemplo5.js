//exemplo de lista onde voce encontra um termo em especifico na mesma
const frutas = ['maçã', 'banana', 'uva', 'laranja', 'pitaya']
console.log(frutas[2])

let index = 0

while(index < frutas.length){
    console.log(`${index + 1}:${frutas[index]}`)
    if (frutas[index] === 'laranja'){
        console.log('Encontramos a laranja')
        break
    }
    index++
}