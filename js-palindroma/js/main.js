// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// Chiedere all'utente di inserire una parola
let userWord = prompt("inserisci una parola:");
// console.log(userWord);

// RICHIAMO FUNZIONE
wordPolindroma();

// prendo in considerazione la parola dall'ultima lettera
// Creare una funzione per capire se la parola inserita è palindroma
function wordPolindroma() {
    const index = userWord.length;

    // cicla fino fino a qaundo la parola inserita non è palindroma
    for (let i = 0; i < index / 2; i++) {
        // SE la parola inserita  è uguale al contrario esci dal ciclo perche è polindroma
        if (userWord[i] === userWord[index - 1 - i]) {
            alert("è polindroma" + userWord);
            console.log("parola polindroma:" + userWord);
            return true;
        }
        else {
            console.log("parola non polindroma " + userWord);
            return false;
        }
    }

    return true;
}
