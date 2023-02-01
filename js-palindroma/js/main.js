// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma




// Chiedere all'utente di inserire una parola
let userWord = prompt("inserisci una parola:");
// console.log(userWord);
if (wordPolindroma(userWord)) {
    console.log("la parola " + userWord + " è palindroma");
}
else {
    console.log("la parola " + userWord + " non è palindroma");
}


// RICHIAMO FUNZIONE
// wordPolindroma(userWord);

// prendo in considerazione la parola dall'ultima lettera
// Creare una funzione per capire se la parola inserita è palindroma
function wordPolindroma(word) {
    let reverseWord = "";

    // cicla fino fino a qaundo la parola inserita non è palindroma
    for (let i = 0; i < userWord.length; i++) {
        currentLetter = userWord[i];
        reverseWord = currentLetter + reverseWord;
        // SE la parola inserita  è uguale al contrario esci dal ciclo perche è polindroma
    }

    return userWord == reverseWord;
    // if (userWord[i] === userWord[index - 1 - i]) {
    //     alert("è polindroma" + userWord);
    //     console.log("parola polindroma:" + userWord);
    //     return true;
    // }
    // else {
    //     console.log("parola non polindroma " + userWord);
    //     return false;
    // }

    return true;
}
