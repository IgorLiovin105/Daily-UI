const dashboardUser = document.querySelector('.dashboard__user')
const dashboardCustomize = document.querySelector('.dashboard__customize')

if(dashboardUser) {
    dashboardUser.addEventListener('click', function() {
        dashboardUser.classList.toggle('_active')
        dashboardCustomize.classList.toggle('_active')
    })
}

const bottomTemperatureCheckboxGroup = document.querySelector('.bottom-temperature__checkbox-group')

if(bottomTemperatureCheckboxGroup) {
    bottomTemperatureCheckboxGroup.addEventListener('click', function() {
        bottomTemperatureCheckboxGroup.classList.toggle('_active')
    })
}

$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true
    })
})