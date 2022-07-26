document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        {img: '/img/MH page/MH grupal 1.jpg'},
        {img: '/img/MH page/MH grupal 2.jpg'},
        {img: '/img/MH page/MH grupal 4.jpg'},
        {img: '/img/MH page/MH largo.jpg'},
        {img: '/img/MH page/MH parte trasera.jpg'},
        {img: '/img/MH page/MH 1.jpg'},
        {img: '/img/MH page/MH 2.jpg'},
        {img: '/img/MH page/MH 3.jpg'},
        {img: '/img/MH page/MH 4.jpg'},
        {img: '/img/MH page/MH 5.jpg'},
        {img: '/img/MH page/MH rojo.jpg'},
        {img: '/img/MH page/MH azul.jpg'},
        {img: '/img/MH page/MH azul 2.jpg'},
        {img: '/img/MH page/MH azul 3.jpg'},
        {img: '/img/MH page/MH largo entrada.jpg'},
        {img: '/img/MH page/Baño largo 1.jpg'},
        {img: '/img/MH page/Baño largo 2.jpg'},
        {img: '/img/MH page/Baño duchas 1.jpg'},
        {img: '/img/MH page/Baño duchas 2.jpg'},
        {img: '/img/MH page/Baño lavatorios.jpg'},
        {img: '/img/MH page/Baño lavatorios 2.jpg'},
        {img: '/img/MH page/Baño Lateral 1.jpg'},
        {img: '/img/MH page/MH cocina.jpg'},
        {img: '/img/MH page/MH comedor.jpg'},
        {img: '/img/MH page/intro.jpg'},
        {img: '/img/MH page/MH L 1.jpg'},
        {img: '/img/MH page/MH L 2.jpg'},
        {img: '/img/MH page/MH L 3.jpg'},
        {img: '/img/MH page/MH L 4.jpg'}
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeriaImagenes = document.querySelectorAll('.galeria img')
    const imgSlideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function(event){
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador -1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length -1].img
                contador = imagenes.length -1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length -1) {
                img.src = imagenes[contador +1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

    Array.from(galeriaImagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagenSeleccionada = +event.target.dataset.imgMostrar
            imgSlideshow.src = imagenes[imagenSeleccionada].img
            contador = imagenSeleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btnCerrar').addEventListener('click', ()=> {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})
