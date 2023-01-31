// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L'utente sceglie pari o dispari
const userPari = document.getElementById("button-pari");
const userDispari = document.getElementById("button-dispari");
// numero minimo e numero massimo
const min = 1;
const max = 5;

// utente inserisce un numero da 1 a 5.
let userNumber = parseInt(Math.floor((Math.random() * max) + min));
console.log("numero utente: " + userNumber);

// funzione per richiamare un numero random da 1 a 5 assegnato al pc

randomPcNumber();
const valore1 = userNumber;
// const valore2 = pcNumber;
// funzione per richiamare la somma dei numeri assegnati ai due giocatori
somma(valore1, valore2);

function randomPcNumber(valore2) {
    let pcNumber = parseInt(Math.floor((Math.random() * max) + min));
    valore2 = parseInt(valore2);
    console.log("numero pc: " + pcNumber);
    return;
}

function somma(num1, num2) {
    num1 = userNumber(num1);
    num2 = pcNumber(num2);
    const risultato = num1 + num2;
    // console.log("somma dei due numeri: " + risultato);
    return risultato;
}