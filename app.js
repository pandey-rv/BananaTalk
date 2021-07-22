var clickBtn = document.querySelector('#btn-translate');
var userText = document.querySelector('#userText');


function clickHandler() {
    console.log(userText.value);
}

clickBtn.addEventListener('click', clickHandler)