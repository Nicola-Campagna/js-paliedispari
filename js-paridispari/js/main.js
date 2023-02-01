// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
const minValue = 1
const maxValue = 5;

let userChoice = prompt('Scegli "pari" o "dispari"');
if (
    userChoice != "pari" &&
    userChoice != "dispari") {

    userChoice = "pari";
    alert("Ho scelto pari per te");
    console.log("all'utente è stato assegnato: " + userChoice);

} else {
    console.log("l'utente ha scelto: " + userChoice);
}

let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
if (userNumber > maxValue || userNumber < minValue || userChoice == !isNaN) {
    alert("numero inserito non valido");
    randomUserNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    userNumber = randomUserNumber;
    alert("ho scelto io per te: " + randomUserNumber)
    console.log("numero random assegnato all'utente è " + userNumber);
}
else {
    console.log("numero assegnato all'utente: " + userNumber);
}
// numero random asseganto al pc
console.log("numero assegnato al pc: " + (generatePcNumber(1, 5)));

// SOMMA DEI DUE NUMERI
const gameTotal = userNumber + (generatePcNumber(1, 5));
console.log("somma dei due numeri assegati = " + gameTotal);

// decretare il vincitore:
if ((isEven(gameTotal)) && userChoice == "pari" || (!isEven(gameTotal)) && userChoice == "dispari") {
    console.log("ha vinto utente")
}
else {
    console.log("havinto pc");
}


// richiamola funzione per vedere che numero è stato generato e assegnato al pc

// funzione che genera un numero compreso da 1 a 5 e lo assegna al pc
function generatePcNumber(min, max) {
    const randomPcNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    return randomPcNumber;
}
// funzione che verifica se la somma dei due numeri asseganti sia pari
function isEven(num) {
    return num % 2 == 0;
}