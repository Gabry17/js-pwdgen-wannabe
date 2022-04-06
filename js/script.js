//DICHIARAZIONE
//informazioni per l'utente

//nome
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);

//cognome
const lastName = prompt("Qual'è il tuo cognome?");
console.log(lastName);

//colore preferito
const colorName = prompt("Qual'è il tuo colore preferito?");
console.log(colorName);

//Data
let year = 2022;


//ELABORAZIONE
//esecuzione informazioni
let infUser = `${userName}${lastName}${colorName}${year}`;
console.log(infUser, typeof(infUser));

//OUTPUT
//visualizzare informazioni nel browser
document.getElementById('user').innerHTML = infUser;