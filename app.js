var clickBtn = document.querySelector('#btn-translate');
var userText = document.querySelector('#userText');
var outputSec = document.querySelector('#output-div');




function clickHandler() {
    outputSec.innerText = userText.value;
}

clickBtn.addEventListener('click', clickHandler)