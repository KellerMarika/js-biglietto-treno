/* DATI UTENTE */
//Km 
//il parseInt esclude eventuali stringhe aggiuntive e utilizzare il primo valore numenrico come valore di tipo number
const userTravelWidth = parseInt(prompt("inserire il numero di chilometri da percorrere"));
console.log("n km = ", userTravelWidth);
//anno nascita
const userBirthYear = parseInt(prompt("inserire il proprio anno di nascita"));
console.log("anno nascita user = ", userBirthYear);

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
alert(`the final price for your trip is ${(priceList.toFixed(2))} €. Have a nice trip!`)
