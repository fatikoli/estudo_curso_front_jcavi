let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//verificar se é numero: se o number de n for maior ou igual a 1 e n for menor ou igual a 100
//returna true se não retorna false
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
    } else {
        return false
    }
}    

//Se na lista .indexof for diferente de -1 (o valor não foi encontrado na lista) 
//retorne true se não retorne false
function inLista (n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){
        //adicionar no vetor 
        valores.push(Number(num.value))
        //adicionar esse elemento que acabei de colocar no select
        let item = document.createElement ('option')
        //meu item vai ter o valor text com uma string 
        item.text = `Valor ${num.value} adicionado.`
        //
        lista.appendChild(item)


    } else {
        window.alert ('Valor inválido ou já encontrado na lista.')

    }
    //fazer esvaziar a caixa de adicionar
    num.value = ''
    num.focus()
}

//se o valor/vetor está vazio solta a mensagem pra colocar valores antes de finalizar
//se não
function finalizar(){
    if (valores.length == 0){
        windows.alert(`Adicione valores antes de finalizar!`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores [pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`


    }
}