let valores = [8, 1, 7, 2, 9]

//consolo.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//forma inteligente
// variavel pos começa com zero e enquanto pos for menor que que o tamanho do vetor 
//explicacao: a variavel pos começa com zero- enquanto o pos for menor do que o final do vetor 
for (let pos=0; pos < valores.length; pos++){
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//jeito mais simplificado de fazer na nova versão do js
//para cada posição na dentro de num eu vou mostrar o num pos

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}