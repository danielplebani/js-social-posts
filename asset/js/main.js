/*
Descrizione
Ricreiamo un feed social aggiungendo al layout dello starter kit di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
-id del post, numero progressivo da 1 a n
-nome autore,
-foto autore,
-data in formato americano (mm-gg-yyyy),
-testo del post,
-immagine (non tutti i post devono avere una immagine),
-numero di likes.
*/
const posts =[
    {
        id : 1,
        autore : 'daniel_plebani03',
        fotoAutore : '1.avif',
        data : '06-03-2003',
        testo : 'ma che bella giornata oggi!!!',
        immagine : '1p.jpg',
        likes : 150
    },

    {
        id : 2,
        autore : 'luca.rossi11',
        fotoAutore : '2.avif',
        data : '04-09-2001',
        testo : 'Sono sempre gli occhi a dire le parole più belle.',
        immagine : '2p.jpg',
        likes : 22
    },

    {
        id : 3,
        autore : 'Marta.Esposito.official',
        fotoAutore : '3.jpg',
        data : '01-24-2004',
        testo : 'La vita è troppo breve per bere vini mediocri.',
        immagine : '3p.jpg',
        likes : 233
    }
];


/*
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/
//CICLO FOR CHE INSERISCE TUTTI I POST CON I DATI IN PAGINA
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    function postsMarkup(post) {
        return `
          <div class="card w-75 mb-3 py-3 px-2">
            <div class="d-flex mb-2">
              <img src="./asset/img/${post.fotoAutore}" class="fotoAutore">
              <div class="d-flex flex-column">
                <h5 style="font-size: 18px;" class="card-title m-0">${post.autore}</h5>
                <span style="font-size: 12px; font-family: 'Oswald', sans-serif;">${post.data}</span>
              </div>
            </div>
            
            <p class="card-text">${post.testo}</p>
    
            <img src="./asset/img/${post.immagine}" class="card-img-top">
    
            <div class="card-body p-1 d-flex justify-content-between align-items-center">
              <i style="color: rgba(128, 128, 128, 0.414);" class="fa-solid fa-heart fs-4 mt-1"></i>
    
              <span style="font-size: 17px; font-family: 'Oswald', sans-serif;">piace a ${post.likes} persone</span>
            </div>
          </div>
        `
    };
    
    function addPosts(markup) {
        const container = document.querySelector('.container');
        container.insertAdjacentHTML('beforeend', markup);
    };
    addPosts(postsMarkup(post));
}


/*
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/
const like = document.querySelector('i');

const postLiked = [];

like.addEventListener('click', function(){
    like.style.color = 'red';

    //posts[key].likes++

    posts.forEach(function (post) {
        const likeRicevuti = post.likes;
        likeRicevuti + 1;
        console.log(likeRicevuti);
    });
      
})