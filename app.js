var clickBtn = document.querySelector('#btn-translate');
var userText = document.querySelector('#userText');
var outputSec = document.querySelector('#output-div');
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function setTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function clickHandler() {
    var inputText = userText.value;

    fetch(setTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))

}

clickBtn.addEventListener('click', clickHandler)