/* DATI UTENTE */


//KM
//utilizzo let piuttosto che const perchè così una volta verificato che il valore inserito dall'utente contenga un numero, faccio il parseInt e riassegno il valore alla stessa variabile.
let userTravelWidth = prompt(`Please,
enter the number of kilometers you wish to travel`);
console.log("n km = ", userTravelWidth, typeof userTravelWidth);

//se valore negativo o 0
if (userTravelWidth <= 0) {
    alert("this trip is too short! please, try again");
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt

    /* adesso lo trasformi in numero col parseInt. dopo verifico se il valore ottenuto sia NaN o no. non lo faccio prima, perchè magari un utente potrebbe aver inserito 200km e la parte successiva al valore numrico verrebbe potata automaticametne col parseInt. però chiedo____________________________________________________________________________________  */
} else {
    userTravelWidth = parseInt(userTravelWidth);
    console.log("n km = ", userTravelWidth, typeof userTravelWidth);
}
//se valore inserito è una stringa priva di numeri
if (isNaN(userTravelWidth)) {
    alert("please, enter a correct value");
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt
}




//ANNO DI NACITA 
//anche qui rimuovo il parseint perchè voglio effettuare un controllo sulla lunghezza della stringa inserita (se è già convertito a numero, non posso!)
const userBirthYear = prompt(`Please,
 enter your year of birth in extended form`);
console.log("anno nascita user = ", userBirthYear, /* "lunghezza = "userBirthYear.length */);
console.log(userBirthYear.length);

/* if (typeof userBirthYear === "number" ){
    console-log("non è un numero!!!!")
}  */

if (userBirthYear.length < 4) {
    alert(`incorrect value.
    the year of birth must be expressed in 4 digits`);
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt 
}



//recupero data corrente:
const currentData = new Date;
// console.log (currentData); 

//estraggo solamente l'anno dalla data corrente
const currentYear = currentData.getFullYear();
console.log(currentYear);

/*ALTERNATIVA
const currentYear= (new Date).getFullYear();
console.log (currentYear); */

//ottengo l'età effettiva dell'utente sottraendo dall'anno corrente il dato inserito dall'utente
const userAge = currentYear - userBirthYear;
console.log(userAge);


/* calcolo prezzo senza sconti €/km */

const price = (userTravelWidth * .21);
console.log(price);


/* dichiaro priceList ma assegno il valore dentro le if/else */
let priceList

//condizioni  
//se utente minorenne : sconto 20%
//calc: x:price=%:100  

if (userAge < 18) {
    //price - price * 20 /100
    priceList = (price - price * .2);
    console.log("priceList miniorenne =", priceList);

    //se utente over65 : sconto 40%  
} else if (userAge >= 65) {

    priceList = (price - price * .4);
    console.log("priceList over65 =", priceList);

    /* tutti coloro che non sono nè minorenni nè over 65 */
} else {

    priceList = price
    console.log("userPrice 65>user>18=", priceList);
}

//a tutti aggiungo l'euro e tolgo i decimali in eccesso
//per fatrlo ho bisogno che la voariabile uscente abbia lo stesso nome per tutti gli if

userPrice = `${(priceList.toFixed(2))} €`;
console.log(userPrice);
alert(`the final price for your trip is ${(priceList.toFixed(2))} €. Have a nice trip!`);
