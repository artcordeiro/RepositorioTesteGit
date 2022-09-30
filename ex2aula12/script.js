
var txt1 = window.document.getElementById('txt1')
var img1 = window.document.getElementById('img1')

var idade1 = window.document.getElementById('idade').value
var idade = Number(idade1.value)

//var idade = Number (idade1.value)

var click = window.document.getElementById('botao')
click.addEventListener('click', clicar)

function clicar() {
    var idade1 = window.document.getElementById('idade').value
    var idade = Number(idade1.value)

    if(idade >= 20){
        txt1.innerHTML = (`Teste`)
    }else{
    
        txt1.innerHTML = (`Erro`)
    }
}

