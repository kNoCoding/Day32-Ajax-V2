console.log('Start')
printResult(10)
sumWithCallback(3, 3, printResult)
asyncSumWithDelay(5, 5, printResult)
console.log('End')

// setInterval(() => {
//     console.log('Interval!');
// }, 500);

function printResult(res) {
    console.log('Result is: ', res)
}

function sumWithCallback(num1, num2, cb) {
    const sum = num1 + num2
    cb(sum)
}

////////////////////////////////////////////////////


// asynchronous function (async) works with a callback
function asyncSumWithDelay(num1, num2, cb) {
    setTimeout(() => {
        const sum = num1 + num2
        cb(sum)
    }, 1500)
}


////////////////////////////////////////////////////


function calculate() {
    for (let i = 0; i < 3_000_000_000; i++) {

    }
    console.log('Loop Done')
}

