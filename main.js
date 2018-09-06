button.addEventListener('click', (e) => {
    let script = document.createElement('script')
    let functionName = 'frank' + parseInt(Math.random() * 100000, 10)
    window[functionName] = function result() {
        if (result === 'success') {
            amount.innerText = amount.innerText - 1
        } else {

        }
    }
    script.src = 'http://jack.com:8002/pay?callbackName=yyy'
    document.body.appendChild(script)
    script.onload = function (e) {
        e.currentTarget.remove()
        delete window[functionName]
    }
    script.onerror = function () {
        alert('fail')
        e.currentTarget.remove()
        delete window[functionName]
    }
})


