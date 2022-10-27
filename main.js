/* DATI UTENTE */


//KM.............................................................
const userTravelWidth = parseInt(prompt(`Please,
enter the number of kilometers you wish to travel`));
console.log("n km = ", userTravelWidth, typeof userTravelWidth);


if (isNaN(userTravelWidth)) {
    alert("please, enter a correct value");
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt

//se valore <1
}else if (userTravelWidth < 1) {
    alert("this trip is too short! please, try again");
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt
}


//ANNO DI NACITA....................................................... 
//Qui rimuovo il parseint perchè voglio effettuare un controllo sulla lunghezza della stringa inserita (se è già convertito a numero, non posso!)
let userBirthYear = prompt(`Please,
enter your year of birth in extended form`);
console.log(` userBirthYear.length = ${userBirthYear.length};  userBirthYear typeoff = ${userBirthYear.typeoff}`);

if (userBirthYear.length < 4) {
    alert(`incorrect value.
    the year of birth must be expressed in 4 digits`);
    //dovrebbe rimandare all'inizio del ciclo riaprendo il prompt 

//se il valore è >=4 allora converto in numero col parseInt e poi controllo che sia davvero un numero    
} else {
    userBirthYear = parseInt(userBirthYear);
    console.log(`userBirthYear con parseINt typeoff= ${userBirthYear.typeoff}`);
}

if ((userTravelWidth.typeoff===undefined) || isNaN(userTravelWidth)) {
    alert("please, enter a correct value");
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



//PREZZO...................................................

/* calcolo prezzo base €/km */

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
