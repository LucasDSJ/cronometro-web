let minutosEsquerda = document.getElementById("minutos_esquerda")
let minutosDireita = document.getElementById("minutos_direita")
let segundosEsquerda = document.getElementById("segundos_esquerda")
let segundosDireita = document.getElementById("segundos_direita")
let i = 0
let j = 0
let c = 0
let contadorMinutosDireita = 0
let contadorMinutosEsquerda = 0

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const teste = async () => {
    while(true){
        if(c > 5 && i == 0){
            c = 0
            i = 0
            j++
            segundosDireita.textContent = 0
            segundosEsquerda.textContent = 0

            if(contadorMinutosDireita > 8){
                contadorMinutosDireita = 0
                contadorMinutosEsquerda++
                minutosDireita.textContent = contadorMinutosDireita;
                minutosEsquerda.textContent = contadorMinutosEsquerda;
            }
            else {
                contadorMinutosDireita++
                minutosDireita.textContent = contadorMinutosDireita
            }
        } 
        else {
            i++
            await sleep(100)
            if(i >= 10){
                i = 0
                c++
                segundosEsquerda.textContent = c
                segundosDireita.textContent = 0
            }
            else {
                segundosDireita.textContent = i
            }
        }
    }
}

teste()