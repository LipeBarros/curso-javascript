let num = [5,8,2,9,3]
//num[9] = 9
num.push(1)
//num.length
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor nao foi enscontrado!')
} else {
    console.log(`O valor esta na posiçao ${pos}`)
} 

//console.log(valores)

/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
*/