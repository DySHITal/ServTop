const menu = document.getElementById('menuR');
const nav = document.getElementById('nav');
const containerSubmenu = document.getElementsByClassName('containerSubmenu');

menu.addEventListener('click', function(){
    nav.classList.toggle('mostrar')
});

for ( i=0; i< containerSubmenu.length; i++){
    containerSubmenu[i].addEventListener('click', function(){
        if (window.innerWidth < 800) {
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;

            if (submenu.classList.contains('desplegar')){
                submenu.classList.remove('desplegar');
                submenu.removeAttribute('style');
            } else {
                submenu.classList.add('desplegar');
                submenu.style.height = height + 'px';
                submenu.style.opacity = 1;
                submenu.style.visibility = 'visible';
            }
        }
    })
}