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
        autore : 'daniel plebani',
        fotoAutore : '1.avif',
        data : '06-03-2003',
        testo : 'ma che bella giornata oggi!!!',
        immagine : '1p.jpg',
        likes : 150
    },

    {
        id : 2,
        autore : 'luca rossi',
        fotoAutore : '2.avif',
        data : '04-09-2001',
        testo : 'in compagnia :)',
        immagine : '2p.jpg',
        likes : 22
    },

    {
        id : 3,
        autore : 'marta esposito',
        fotoAutore : '3.jpg',
        data : '01-24-2004',
        testo : 'viva la vita!!!!',
        immagine : '3p.jpg',
        likes : 233
    }
];

console.log(posts);
/*
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/