let date = new Date();

$(window).ready(function () {
    goTop();
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

    let mapSiteItems = document.getElementById('siteMap').querySelectorAll('a');
    mapSiteItems.forEach(mapSiteItem => {
        mapSiteItem.style.width = 'fit-content';
        if (window.innerWidth < 576 && mapSiteItem.nextElementSibling)
            mapSiteItem.classList.add('border-primary', 'border-2', 'border-end', 'pe-3', 'pe-sm-0');
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth < 576 && mapSiteItem.nextElementSibling)
                mapSiteItem.classList.add('border-primary', 'border-2', 'border-end', 'pe-3', 'pe-sm-0');
            else
                mapSiteItem.classList.remove('border-primary', 'border-2', 'border-end', 'pe-3', 'pe-sm-0');
        });
    });

    if($(window).scrollTop() > 0)
        $('.goTop').slideDown('slow');
    else
        $('.goTop').slideUp('slow');
});

function homeLoad() {
    if (!sessionStorage.hasOwnProperty('home')) {
        console.log('no está')
        Swal.fire({
            position: 'top-center',
            title: 'Bienvenido',
            icon: 'info',
            html: 'Gracias por visitarnos',
            showConfirmButton: false,
            timer: 2000
        });
        sessionStorage.setItem('home', '1');
    }
    document.getElementById('today').innerHTML = date.toDateString();
}

function servicesLoad() {

}

function aboutLoad() {

}

function contactLoad(){
}

function goTop(){
    $('.goTop').click(() => {
        $('body,html').animate({
            scrollTop:'0px'
        },300);
    });

    $(window).scroll(() => {
        if($(this).scrollTop() > 0)
            $('.goTop').slideDown('slow');
        else
            $('.goTop').slideUp('slow');
    });
}
