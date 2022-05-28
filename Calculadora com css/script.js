function displaynum(n1){
    Calculadora2.text1.value = Calculadora2.text1.value + n1;
    Calculadorafil.text1.value = Calculadorafil.text1.value + n1;
}

function eql(){
    Calculadora2.text1.value = eval (Calculadora2.text1.value);

}

function cleartext(quemChamou){
    if (quemChamou == 1){
        Calculadora2.text1.value = null;
    }else{
        Calculadorafil.text1.value = null;
    }


}