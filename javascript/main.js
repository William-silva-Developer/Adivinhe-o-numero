let numeroAleatorio = parseInt(Math.random() * 11)

var soma = 0
/*==================CONTADOR DE CHANCES================== */

var botao = document.getElementById("clique")


botao.addEventListener('click', function contaChute(){
    var contador = (soma++)
    console.log(contador)
    if (contador == 3){
        window.alert("Você atingil o número de tentativas.")
        location.reload()
    }

})







function chute( ) {
    
    let chute = parseInt(document.getElementById("valor").value)

    alert("Atenção! Você terá apenas 3 tentativas.")
    
    
    let conteChance = 0
    
    if (chute == numeroAleatorio) {

        document.getElementById("resultado").innerHTML = "Parabéns. Você acertou"
    }
    else if ( chute > numeroAleatorio) {
        

        document.getElementById("resultado").innerHTML ="Seu palpite é maior que o valor."
        

    }
    else if (chute < numeroAleatorio) {
    
        document.getElementById("resultado").innerHTML ="Seu palpite é menor que o valor."

        
    }
    

}

/*==============================================================================*/

