

// Declaration des boutons et de l'input avec lesquels interagir

let toogler = document.querySelector('.logoChange')
let selector1 = document.querySelector('.base1>select')
let selector2 = document.querySelector('.base2>select')
let input = document.querySelector('input')

// Evenement : Touche du bouton d'inversion rapide des bases 
toogler.onclick = function(){
    const temp = selector1.value
    selector1.value = selector2.value
    selector2.value = temp
    document.querySelector('.result').innerText = '-'
    input.value = ''
    toogler.classList.add('rotate')
    selector1.classList.add('bounce')
    selector2.classList.add('bounce')
    
    // Petite animation lors de l'inversion rapide des bases
    setTimeout(() => {
        toogler.classList.remove('rotate')
        selector1.classList.remove('bounce')
        selector2.classList.remove('bounce')
    }, 500)
}

// Fonction du processus de calcul du résultat


function process() {
    const base1 = parseInt(selector1.value)
    const base2 = parseInt(selector2.value)
    checkValue(base1)
    let written = input.value
    if (written === '') {
        document.querySelector('.result').innerText = '-'
    }
    else {
        let decimalValue = parseInt(written, base1)
        let convertedValue = decimalValue.toString(base2).toUpperCase()
        document.querySelector('.result').innerText = convertedValue
    }
    
}

// Événement : A chaque tape à l'input


input.oninput = process


// Verification de nombre de part le base de départ pour validation


function checkValue(base){
    let written = input.value
    const arrayWritten = written.split('')
    if (base === 2){
        for (let i = 0; i < arrayWritten.length; i++){
            if (arrayWritten[i] !== '0' && arrayWritten[i] !== '1'){
                input.value = written.substring(0, i)
                break
            }
        }
    }
    else if (base === 8){
        for (let i = 0; i < arrayWritten.length; i++){
            if (arrayWritten[i] < '0' || arrayWritten[i] > '7'){
                input.value = written.substring(0, i)
                break
            }
        }
    }
    else if (base === 16){
        for (let i = 0; i < arrayWritten.length; i++){
            if ((arrayWritten[i] < '0' || arrayWritten[i] > '9') && 
                (arrayWritten[i].toLowerCase() < 'a' || arrayWritten[i].toLowerCase() > 'f')){
                input.value = written.substring(0, i)
                break
            }
        }
    }
    else if (base === 10){
        for (let i = 0; i < arrayWritten.length; i++){
            if (arrayWritten[i] < '0' || arrayWritten[i] > '9'){
                input.value = written.substring(0, i)
                break
            }
        }
    }
}

// Événement : Lors d'une changement de base  sur l'un ou l'autre côté

selector1.onchange = process
selector2.onchange = process