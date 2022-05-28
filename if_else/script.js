


//var n1 = Number.parsefloat(window.alert ('Digite um numero'))
//var n2 = Number.parsefloat(window.alert ('Digite mais um numero'))

function adicionar(){

   // var divt = document.getElementById("divtest").innerHTML;
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = 0;
    var n4 = 0;
    var res1 = document.getElementById('res1');
    var res2 = document.getElementById('res2');
    var res3 = document.getElementById('res3');
    var res4 = document.getElementById('res4');
    var res5 = document.getElementById('res5');
    
    //var res = document.querySelector('div#res')

   // console.log ("res1  " + res1);

    if (n1 < n2) { 
    res1.innerHTML = (`O Primeiro número é ${n1} é menor que ${n2}`)
    }
    else {
    res1.innerHTML = (`O Segundo número ${n2} é menor que o primeiro ${n1}`)
    }

    if (n1%2==0){
    res2.innerHTML = (`O Primeiro número ${n1} é PAR`)
    } 
    else {
    res2.innerHTML = (`O Primeiro número ${n1} é IMPAR`)
    }

    if (n2%2==0){
    res3.innerHTML = (`O Segundo número ${n2} é PAR`)
    } 
    else {
    res3.innerHTML = (`O Segundo número ${n2} é IMPAR`)
    }

    n3 = n1+n2;

    if (n3%2==0){    
   res4.innerHTML = (`O resultado da soma de ${n1} + ${n2}, ${n3} é PAR`)
    } 
    else {
    res4.innerHTML = (`O resultado da soma de ${n1} + ${n2}, ${n3} é IMPAR`)
    }
    
    n4 = n1-n2;

    if (n4 >= 0){
        res5.innerHTML =(`O resultado da subtração do primeiro número ${n1} - ${n2} segundo número = ${n4} é positivo`)
    } 
    else{
        res5.innerHTML =(`O resultado da subtração do primeiro número ${n1} - ${n2} segundo número = ${n4} é negativo`)

    }
    //fazer esvaziar a caixa de adicionar
    n1.res1.value = ''
    res.focus()
}

    //res.innerHTML += `teste` 
//res.innerHTML += `<p> Ao todo, temos ${n1} números cadastrados.</p>`