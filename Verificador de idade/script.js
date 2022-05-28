function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert( '[Erro] Verifique os dados e tente novmante!')
    } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute( 'id', 'foto')
            if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-man.png')
                }else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovem-man.png')
                }else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto-man.png')
                }else
                //idoso
                img.setAttribute('src', 'velho-man.png')    
                }
            else if (fsex[1].checked){
                gênero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'criança-woman.png')
                    }else if (idade < 21) {
                        //jovem
                        img.setAttribute('src', 'jovem-woman.png')
                    }else if (idade < 50) {
                        //adulto
                        img.setAttribute('src', 'adulto-woman.png')
                    }else
                    //idoso    
                    img.setAttribute('src', 'velho-woman.png')
                    }
            }
            res.style.textAlin = 'center'
            res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
        }
    