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