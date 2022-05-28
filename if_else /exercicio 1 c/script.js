function computar(){

    var n1 = Number.parseFloat(document.getElementById('n1').value);
    var n2 = Number.parseFloat(document.getElementById('n2').value);
    var n3 = 0
    var n4 = 0
 //console.log (n1 + n2);

    if(n1 <= n2){
    res1.innerHTML=(`O primeiro número digitado ${n1} é menor que o segundo ${n2}`)
    }

   else{
   res1.innerHTML=(`O primeiro número digitado ${n1} é maior que o segundo ${n2}`)
    }

    if (n1 == n2){ 
    res2.innerHTML=(`O primeiro número ${n1} é igual o segundo número ${n2}`)
    }
    else {
    res2.innerHTML=(`O primeiro número ${n1} é diferente do segundo ${n2}`)
    }

    if (n1%2==0){
        res3.innerHTML=(`O primeiro número ${n1} é par`)
    }
    else {
        res3.innerHTML=(`O primeiro número ${n1} é impar`)
    }
    if (n2%2==0){
        res4.innerHTML=(`O segundo número ${n2} é par`)
    }
    else {
        res4.innerHTML=(`O segundo numero ${n2} é impar`)
    }

    n3 = n1+n2

    if (n3%2==0){
        res5.innerHTML=(`A soma de ${n1}+${n2} resulta em ${n3} que é par`)
    }
    else{
        res5.innerHTML=(`A soma de ${n1}+${n2} resulta em ${n3} que é impar`)
    }

    n4 = n1-n2

    if (n4>=0){
        res6.innerHTML=(`O primeiro número ${n1} menos o segundo número ${n2} resulta em ${n4} que é positivo`)
    }

    else{
        res6.innerHTML=(`O primeiro número ${n1} menos o segundo número ${n2} resulta em ${n4} que é negativo`)
    }

}