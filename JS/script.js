const images = [
    {
        image: '01.webp',
        title: " Marvel's Spiderman Miles Morale ",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

const itemContainer = document.getElementById("carousel_container")


images.forEach(element => {
    // console.log(element.image,element.title);
    itemContainer.innerHTML +=
        ` <div class="item">
         
    <img  src="img/${element.image}">
 
    <div class="info_cards">
        <h3>${element.title}</h3>
        <div ">${element.text}</div>
    </div> </div>  `

});

// seleziono button down 
const btnDown = document.getElementById("btn-down")

// creo variabile contatore per classe active 
let activeImg = 0;

// aggiungo classe active al primo elemento 
const imgActive = document.getElementsByClassName("item")
imgActive[activeImg].classList.add("active")


// creo evento al click del button down 
btnDown.addEventListener("click", function () {

    // console.log("cliccato pulsante")

    // creo condizione  al click cambio immagine al buttonDown tornando indietro di un' immagine
    if (activeImg == images.length - 1) {
        activeImg = 0;

    } else {
        activeImg++
    }

    //   rimuovo la classe active all'elemento che già la aveva
    document.querySelector(".item.active").classList.remove("active")
    //   aggiungo la classe active all'elemento successivo 
    imgActive[activeImg].classList.add("active")
})


// seleziono button up 
const btnUp = document.getElementById("btn-up")

// creo evento al click per button up 
btnUp.addEventListener("click", function () {

    // creo condizione al click cambio immagine al button up 
    if (activeImg === 0) {
        activeImg = images.length - 1
    } else {
        activeImg--;
    }
    //   rimuovo la classe active all'elemento che già la aveva
    document.querySelector(".item.active").classList.remove("active")

    //   aggiungo la classe active all'elemento successivo 
    imgActive[activeImg].classList.add("active")
}



)








