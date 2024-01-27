'use strict'

function getAns(cb) {
    const xhr = new XMLHttpRequest()
    // console.log('xhr:', xhr)
    xhr.onreadystatechange = () => {
        // console.log('xhr.readyState:', xhr.readyState)
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            console.log('ans:', ans)
            cb(ans)
        }
    }
    xhr.open('GET', 'https://yesno.wtf/api', true)
    xhr.send()
}





// function getAns(cb) {
//     setTimeout(() => {
//         const res = (Math.random() > 0.5) ? 'Sure Thing' : 'No Way'
//         console.log('Service answered:', res)
//         cb(res)
//     }, 1000)
// }


