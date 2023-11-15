// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

if (giocatore > computer) {
    console.log("Numero scelto dal giocatore: " + giocatore + "\n Numero scelto dal computer: " + computer + "\n Il giocatore ha vinto");
} else if (computer > giocatore) {
    console.log("Numero scelto dal giocatore: " + giocatore + "\n Numero scelto dal computer: " + computer  + "\n Il computer ha vinto");
} else {
    console.log("C'è stato un pareggio: " + giocatore);
}