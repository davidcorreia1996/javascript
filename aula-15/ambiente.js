let num = [5,8,4,9]
num.push(1)
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso conteúdo são: ${num}`)
console.log(`Nosso primeirio vetor ${num[2]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)

}
