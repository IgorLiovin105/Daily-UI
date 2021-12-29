const dashboardUser = document.querySelector('.dashboard__user')
const dashboardCustomize = document.querySelector('.dashboard__customize')

if(dashboardUser) {
    dashboardUser.addEventListener('click', function() {
        dashboardUser.classList.toggle('_active')
        dashboardCustomize.classList.toggle('_active')
    })
}