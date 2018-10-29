/*__________________________________________________________________________
|                                                                           |
|       Program som räknar ut fakultet                                      |
|       Användaren får först skriva in ett valfritt tal mellan 1 och 1000   |
|       En while-loop hanterar inmatning som gjorts på fel sätt             |
|       Därefter görs en uträkning och resultatet visas på skärmen          |
|                                                                           |
|__________________________________________________________________________*/

let userNumber = prompt("Beräkna fakultet!\nSkriv ett valfritt heltal:", "1 - 1000");

// Loop som kollar att användarens inmatning är korrekt

while(true) {
  
    // Om användarens inmatning är en string eller tom string får hen försöka igen
    if (isNaN(userNumber) ||  userNumber === "") { 
        alert("Oj, något gick fel!");
        userNumber = prompt("Skriv ett heltal i siffror:");
    }
    // Om användarens inmatning är lägre än 0 och högre än 1000 får hen skriva ett nytt tal
    else if (userNumber < 0 || userNumber > 1000) {
        alert("Obs! Talet måste vara mellan 1 och 1000!")
        userNumber = prompt("Skriv ett nytt tal:");
    }
    // Användaren kan avsluta programmet genom att trycka på avbryt
    else if (userNumber === null) { 
        alert("Avslutar");
        document.getElementById("theResult").innerHTML = "Tryck F5 för att beräkna fakultet!";
        break;
    }
    // Här anropar jag min funktion och utskriften sker på skärmen
    else {
        setTimeout(function(){
            alert("Tack! Nu ska vi beräkna " + userNumber + "!");
            document.getElementById("theResult").innerHTML = (userNumber + "! = " + factorial(userNumber));
        }, 1000);
        break; 
    }     
}

// Loop slut

// Rekursiv funktion som beräknar fakultet

function factorial(numb){
    if (numb == 0) // 0! = 1
        return 1;
    else
        return numb * factorial(--numb);
}