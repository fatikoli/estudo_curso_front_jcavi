'use strict';

const display = document.getElementById (`display`);
const numeros = document.querySelectorAll(`[id*=tecla]`);
const operadores = document.querySelectorAll(`[id*=operador]`);

//metodo q captura o clique em cada uma das teclas- criar um evento para cada um dos numeros 
//const inserirNumero = (evento) => display.textContent = evento.target.textContent; - esse metodo nao tratava os operadores

//console.log (numeros);

let novoNumero = true;
let operador;
let numeroAnterior;
//essa variável faz com que toda vez que clicar em operador considerar que é novo número
const OperacaoPendente = () => operador !== undefined;

const calcular = () => {
    if (OperacaoPendente()){
        const numeroAtual = parseFloat(display.textContent.replace(`,`,`.`));
        novoNumero = true;
        //se fosse fazer com eval eliminando todos os ifs abaixo 
        //concatenando numero anterior concatenando com o operador e concatenando com o numero atual
        // const resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);
        // atualizarDisplay (resultado);
        
        //a outra opção seria apagar o eval e linha atualizar display e fazer esses varios ifs:
        if (operador =='+'){
        atualizarDisplay(numeroAnterior + numeroAtual);
         }else if (operador == '-'){
         atualizarDisplay(numeroAnterior - numeroAtual);
         }else if (operador == '*'){
        atualizarDisplay(numeroAnterior * numeroAtual);
        }else if (operador == '/'){
        atualizarDisplay(numeroAnterior / numeroAtual);
        }

    }
}

 
const atualizarDisplay = (texto) => {
   // display.textContent += texto;
   if (novoNumero){
       //se novo numero ele nao vai concatenar
       display.textContent = texto.toLocaleString(`BR`);
       novoNumero = false;
       //vira falso pq nao é mais um novo numero
     }else{ 
       //se não ele concatena 
           display.textContent += texto; 
       }
}

//metodo está mandando pro atualizar display o texto do botão que foi clicado
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach (numero => numero.addEventListener('click', inserirNumero));

//clicou novo numero = true e depois armazenar o operador que vai ser realizado e o numero anterior tbem
const selecionarOperador = (evento) =>{
    if (!novoNumero){
        calcular()
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent.replace(`,`,`.`));
    //console.log (operador);
    }
}
//verificar se existe uma operação pendente
operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () =>{
    calcular();
    operador = undefined
}
document.getElementById(`igual`).addEventListener(`click`, ativarIgual);
//quando alguem fizer um clique chama a função ativarIgual

//const ativarEnter = () =>{
document.getElementById(`enter`).addEventListener(`click`, ativarIgual);

//botão de apagar o display
const limparDisplay = () => display.textContent = '';
document.getElementById(`limparDisplay`).addEventListener(`click`,limparDisplay);

//botao limpar calculo
const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero= true;
    numeroAnterior = undefined;
}
document.getElementById(`limparCalculo`).addEventListener(`click`, limparCalculo);

//backspace remover ultimo caracter ou numero display vai ser igual ao mesmo display porém vou fatiar ele
const removerUltimoCaracter = () => display.textContent = display.textContent.slice(0,-1);
document.getElementById(`backspace`).addEventListener(`click`, removerUltimoCaracter);

//botão inverte positivo e negativo *-1 sempre pega o número e inverte o sinal
const inverterSinal = () => {
    novoNumero = true
    atualizarDisplay (display.textContent * -1);
}
document.getElementById(`inverter`).addEventListener(`click`, inverterSinal);

//tem que fazer tratamento pq em js a virgula é ponto mas antes faser rotina que 
//coloca o zero na frente se clicar em virgula sem numero 
const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0; // length para verificar o tamanho se for maior que zero executa
const inserirDecimal =() =>{
    if (!existeDecimal()){
        if(existeValor()){
        atualizarDisplay(',')
        }else{
            atualizarDisplay('0,')
        }
    }
}

document.getElementById(`decimalVirgula`).addEventListener('click', inserirDecimal);

//rotina para capturar a tecla do teclado nos números ou sinais criando um mapa de caracteres

const mapaTeclado = {
    '0'  : 'tecla0',
    '1'  : 'tecla1',
    '2'  : 'tecla2',
    '3'  : 'tecla3',
    '4'  : 'tecla4',
    '5'  : 'tecla5',
    '6'  : 'tecla6',
    '7'  : 'tecla7',
    '8'  : 'tecla8',
    '9'  : 'tecla9',
    '/'  : 'operadorDividir',
    '*'  : 'operadorMultiplicar',
    '-'  : 'operadorSubtrair',
    '+'  : 'operadorAdcionar',
    '='  : 'igual',
    'Enter' : 'igual',
    'BackSpace'  : 'backspace',
    'c' : 'limparDisplay',
    ',' : 'limparDisplay',
    'Escape' : 'limparCalculo',
}

const mapearTeclado = (evento) => {
const tecla = evento.key;

//verifica se uma das chaves do obj mapa teclado tem a tecla
// precionada se tem retorna true se nao retorna false
const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1; 
if (teclaPermitida ()) document.getElementById(mapaTeclado[tecla]).click(); //pega a posição da tecla e pega o id e passa para mapear,
//depois de mapeado aciona o evento click
}
//keydown ele já tem a tecla que foi teclada
document.addEventListener(`keydown`, mapearTeclado);
