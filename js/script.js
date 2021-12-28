function zeroFirstFormat(value) {
    if (value < 10) {
        value = '0' + value
    }
    return value
}

    /* функция получения текущей даты и времени */

function currentTime() {
    let currentTime = new Date();
    let hours = zeroFirstFormat(currentTime.getHours())
    let minutes = zeroFirstFormat(currentTime.getMinutes())
    let seconds = zeroFirstFormat(currentTime.getSeconds())
    return hours + ':' + minutes + ':' + seconds
}

document.querySelector('.header__time').innerHTML = currentTime()

setInterval(function () {
    document.querySelector('.header__time').innerHTML = currentTime()
}, 1000)

function currentDate() {
    let currentDate = new Date()
    let day = zeroFirstFormat(currentDate.getDate())
    let month = zeroFirstFormat(currentDate.getMonth()+1)
    let year = currentDate.getFullYear()
    return day + '.' + month + '.' + year
}

document.querySelector('.header__date').innerHTML = currentDate()