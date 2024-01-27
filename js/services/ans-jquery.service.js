'use strict'

function getAns(cb) {
    $.get('https://yesno.wtf/api', (res) => {
        cb(res)
    })
}
