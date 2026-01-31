let toogler = document.querySelector('.logoChange')
let seletor1 = document.querySelector('.base1>select')
let seletor2 = document.querySelector('.base2>select')
let input = document.querySelector('input')
console.log(input);
toogler.onclick = function(){
    const temp = seletor1.value
    seletor1.value = seletor2.value
    seletor2.value = temp
    document.querySelector('.result').innerText = '-'
    input.value = ''
    toogler.classList.add('rotate')
    seletor1.classList.add('bounce')
    seletor2.classList.add('bounce')
    setTimeout(() => {
        toogler.classList.remove('rotate')
        seletor1.classList.remove('bounce')
        seletor2.classList.remove('bounce')
    }, 500)
}

input.oninput = function(){
    const base1 = parseInt(seletor1.value)
    const base2 = parseInt(seletor2.value)
    checkValue(base1)
    let written = input.value
    if (written === ''){
        document.querySelector('.result').innerText = '-'
    }
    else {
        let decimalValue = parseInt(written, base1)
        let convertedValue = decimalValue.toString(base2).toUpperCase()
        document.querySelector('.result').innerText = convertedValue
    }

}
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