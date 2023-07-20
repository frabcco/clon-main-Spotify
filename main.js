const topBar = document.querySelector('.topbar');
// Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBar.classList.add('transparent');
    } else {
        topBar.classList.remove('transparent');
    }
});
//Nueva variable para almacenar altura del topbar
let topbarHeight = topBar.offsetHeight;
//Aniadimos un padding basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector('.main-content')
mainContent.style.paddingTop = `${topbarHeight + 20}px`

//boton play
const containerConcentracion = document.querySelectorAll('.card-concentracion')
const containerSpotifyPlaylists = document.querySelectorAll('.card-spotify-playlists')

//Funcion que se va a repetir
const createButton = card => {
    //Crear el boton
    const button = document.createElement('button')
    button.innerHTML = '<i class="fa-solid fa-play"></i>'
    //Agregar el boton al elemento hijo
    card.appendChild(button)
    //Ocultar el boton inicialmente
    button.style.display = "none"
    button.classList.add("btn-play")
    //Agregamos un evento de hover a este elemento
    //Se necesita cuando le mouse entra y cuando sale
    card.addEventListener('mouseover', () => {
        button.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
        button.style.display = 'none';
    });
};
//Usamos la funcion en las dos filas de contenedores
containerConcentracion.forEach(card => {
    createButton(card)
})

containerSpotifyPlaylists.forEach(card => {
    createButton(card)
})