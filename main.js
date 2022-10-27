/* DATI UTENTE */
//Km 
//il parseInt esclude eventuali stringhe aggiuntive e utilizzare il primo valore numenrico come valore di tipo number
const userTravelWidth = parseInt (prompt("inserire il numero di chilometri da percorrere"));
console.log("n km = ", userTravelWidth);
//anno nascita
const userBirthYear= parseInt (prompt("inserire il proprio anno di nascita"));
console.log("anno nascita user = ", userBirthYear);

//recupero data corrente:
const currentData= new Date;
// console.log (currentData); 

//estraggo solamente l'anno dalla data corrente
const currentYear = currentData.getFullYear();
console.log(currentYear);

/*ALTERNATIVA
const currentYear= (new Date).getFullYear();
console.log (currentYear); */

//ottengo l'età effettiva dell'utente sottraendo dall'anno corrente il dato inserito dall'utente
const userAge = currentYear-userBirthYear;
console.log(userAge);


/* calcolo prezzo senza sconti €/km */

const price = (userTravelWidth * .21)
console.log(price)

/* const userPrice = `${firstPrice} €`
console.log(userPrice)
 */


//condizioni
//se utente minorenne : sconto 20%
 if (userAge<18){
    console.log("user minorenne");

}else if (userAge>=65){
    console.log("user over 65");
//se utente over65 : sconto 40%    
}else{
    console.log("user non ne ha voglia")
}
 

//a tutti aggiungo l'euro e tolgo i decimali in eccesso
//per fatrlo ho bisogno che la voariabile uscente abbia lo stesso nome per tutti gli if
