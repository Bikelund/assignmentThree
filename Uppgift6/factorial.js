/*__________________________________________________________________________
|                                                                           |
|       Program som räknar ut fakultet                                      |
|       Användaren får först skriva in ett valfritt tal mellan 1 och 1000   |
|       En while-loop hanterar inmatning som gjorts på fel sätt             |
|       Därefter görs en uträkning och resultatet visas på skärmen          |
|                                                                           |
|__________________________________________________________________________*/

// Maxtal
let maxNumber = 1000;

let userNumber = prompt("Beräkna fakultet!\nSkriv ett valfritt heltal:", "1 - " + maxNumber);

// Loop som kollar att användarens inmatning är korrekt
while(true) {
  
    // Om användarens inmatning är en string, tom string eller decimaltal, får hen försöka igen
    if (isNaN(userNumber) ||  userNumber === "" || Number.isInteger(+userNumber) === false) { 
        alert("Obs! Felaktig inmatning");
        userNumber = prompt("Skriv ett heltal mellan 1 och " + maxNumber);
    }
    // Om användarens tal är minus eller över maxtalet, får hen försöka igen
    else if (userNumber < 0 || maxNumber < userNumber) {
        alert("Obs! Talet måste vara mellan 1 och " + maxNumber);
        userNumber = prompt("Skriv ett nytt tal mellan 1 och " + maxNumber);
    }
    // Användaren kan avsluta programmet genom att trycka på avbryt
    else if (userNumber === null) {
        document.getElementById("theResult").innerHTML = "Tryck F5 för att beräkna fakultet!";
        break;
    }
    else {
        let factorialNumber = factorial(userNumber);
        // Om talet är ändligt kan resultatet visas på skärmen
        if (isFinite(factorialNumber)){
            setTimeout(function(){
                alert("Tack! Nu ska vi beräkna " + userNumber + "!");
                document.getElementById("theResult").innerHTML = (userNumber + "! = " + factorialNumber);
            }, 1000);
        break; 
        }
        // Om talet är oändligt kommer maxvärdet att ändras och användaren får skriva nytt tal
        else {
            alert(factorialNumber + "! Talet " + userNumber + " är för stort för att beräkna!");
            maxNumber = userNumber;
            userNumber = prompt("Skriv ett nytt tal mellan 1 och " + maxNumber);
        }
    }     
}
// Loop slut

/*______________________________________________
|                                               |
|   Rekursiv funktion som beräknar fakultet     |
|______________________________________________*/

function factorial(numb){
    if (numb == 0) // 0! = 1
        return 1;
    else
        return numb * factorial(--numb);
}