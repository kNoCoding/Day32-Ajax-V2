'use strict'

function getAns(callback) {
    $.get('https://yesno.wtf/api', (res) => {
        callback(res)
    })
}