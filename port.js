let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navabr');

menuIcon.onclick = () => {
    menuIcon.classList.toggle( 'fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.ofsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navLinks.forEach.apply(links => {
                navLinks.forEach.apply(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + ']').classList.add('active');

                });
            });
        }
    
    } );

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
 });