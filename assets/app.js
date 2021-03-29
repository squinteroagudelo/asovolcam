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
    let forms = document.getElementsByTagName('form');
    for (let form of forms) {form.addEventListener('submit', (e) => {e.preventDefault()});}
    let sendEmail = document.getElementById('sendEmail');
    let validate = false;
    sendEmail.addEventListener('click', () => {
        for (let form of forms) {
            let inputs = form.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                if (!input.value){
                    validate = false;
                    return false;
                }else validate = true;
            });
        }

        if (validate){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Mensaje enviado',
                html: '<p class="fw-bold m-0">Gracias por escribirnos!</p><p>Pronto nos pondremos en contacto contigo.</p>',
                showConfirmButton: false,
                timer: 3000
            });
        }else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Por favor, ingresa todos los datos.',
                showConfirmButton: false,
                timer: 1500
            })
        }
        for (let form of forms) {form.reset();}
    })
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
