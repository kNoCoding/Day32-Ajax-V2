'use strict'

function getAns(callback) {
    $.get('https://yesno.wtf/api', (res) => {
        callback(res)
    })
}

function getJoke(callback) {
    $.get('https://api.chucknorris.io/jokes/random', (res) => {
        callback(res)
        console.log('!!!!res: ', res)

    })
}

function getDog(callback) {
    $.get('https://dog.ceo/api/breeds/image/random', (res) => {
        callback(res)
    })
}
