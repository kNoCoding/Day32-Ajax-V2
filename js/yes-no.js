
const debounceGetAns = debounce(() => getAns(renderAns), 3000)

function onAsk(ev) {
    // check the input without RegEx
    // let lastChar = ev.target.value.slice(-1)

    // if (ev.target.value.length > 3 && lastChar === '?') getAns(renderAns)
    // if (ev.target.value.length === 0) hideAns()

    // check the input using RegEx
    let value = ev.target.value
    let regex = /^.{3,}\?$/

    if (regex.test(value)) {
        debounceGetAns()
    } else {
        hideAns()
    }
}

function renderAns(ans) {
    document.querySelector('.ans h2').innerText = ans.answer
    document.querySelector('.ans img').src = ans.image

    if (ans.answer === 'yes') getJoke(renderJoke)
    if (ans.answer === 'no') getDog(renderDog)
}

function renderJoke(ans) {
    document.querySelector('.ans p').innerText = ans.value
}
function renderDog(ans) {
    document.querySelector('.ans p').innerText = ''
    document.querySelector('.ans img').src = ans.message
}

function showAns() {
    document.querySelector('.ans').hidden = false
}

function hideAns() {
    document.querySelector('.ans').hidden = true
}
