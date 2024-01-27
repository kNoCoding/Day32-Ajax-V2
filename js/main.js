'use strict'

function onAsk() {
    console.log('Asking the service from controller...')
    showLoader()
    getAns(renderAns)
}

function renderAns(ans) {
    document.querySelector('.ans h2').innerText = ans.answer
    document.querySelector('.ans img').src = ans.image
    // showAns()
}

function showAns() {
    document.querySelector('.ans').hidden = false
    document.querySelector('.loading').hidden = true
}

function showLoader() {
    document.querySelector('.ans').hidden = true
    document.querySelector('.loading').hidden = false
}
