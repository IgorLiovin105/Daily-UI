const menuBody = document.querySelector('.menu__body'),
      actionMenuIcon = document.querySelector('.action-menu__icon'),
      iconMenu = document.querySelector('.menu__icon'),
      sidebar = document.querySelector('.sidebar'),
      sidebarItems = document.querySelectorAll('.sidebar__item'),
      back = document.querySelector('.sidebar__back-mob'),
      backMenu = document.querySelector('.sidebar__menu__back-mob');

if(actionMenuIcon) {
    actionMenuIcon.addEventListener('click', function() {
        if(window.innerWidth >= 769) {
            sidebar.classList.toggle('_active-desk');
        }
        else {
            sidebar.classList.toggle('_active-mob');
        }
    });
}

if(iconMenu) {
    iconMenu.addEventListener('click', function() {
        if(iconMenu.classList.contains('_active')) {
            menuBody.classList.remove('_active');
            iconMenu.classList.remove('_active');
            document.body.classList.remove('_lock');
            sidebar.classList.remove('_active-mob');
            sidebar.classList.remove('_active');
        }
        else {
            menuBody.classList.toggle('_active');
            iconMenu.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        }
    });
}

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

if(sidebarItems.length > 0) {
    sidebarItems.forEach(sidebarItem => {
        sidebarItem.addEventListener('click', function() {
            sidebar.classList.toggle('_active');
        });
    });
}

if(back) {
    back.addEventListener('click', function() {
        sidebar.classList.remove('_active-mob');
    });
}

if(backMenu) {
    backMenu.addEventListener('click', function() {
        sidebar.classList.remove('_active');
    });
}