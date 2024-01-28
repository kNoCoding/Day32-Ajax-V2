

function onAsk(ev) {
    console.log('ev', ev)

    console.log('ev.target.value', ev.target.value)
    getAns(renderAns)
}

function renderAns(ans) {
    document.querySelector('.ans h2').innerText = ans.answer
    document.querySelector('.ans img').src = ans.image
}

function showAns() {
    document.querySelector('.ans').hidden = false
}