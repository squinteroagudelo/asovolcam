$(window).ready(function () {
    let headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.marginTop = headerHeight + 'px';
    let navIcon = document.getElementById('navIcon');
    navIcon.addEventListener('click', (e) => {
        e.target.classList.toggle('fa-bars');
        e.target.classList.toggle('fa-times');
    });

    let navbarBrand = document.querySelectorAll('.navbar-brand');
    let aMenu = $('#navbarNavAltMarkup>.navbar-nav>a');
    for (const navbarBrandElement of navbarBrand) {
        navbarBrandElement.addEventListener('click', () => {
            for (const a of aMenu) {
                a.classList.remove('active');
                aMenu[0].classList.add('active');
            }
        });
    }
});

function homeLoad() {
    if (!sessionStorage.hasOwnProperty('home')) {
        console.log('no está')
        Swal.fire({
            title: 'Bienvenido',
            icon: 'info',
            html: 'Gracias por visitarnos',
            showConfirmButton: false,
            timer: 2000
        });
        sessionStorage.setItem('home', '1');
    }
}

function servicesLoad() {

}

function aboutLoad() {

}

function contactLoad(){

}
