/*______________________________________________________________________________________________________
|                                                                                                       |
|       Program som frågar användaren efter ett tal (radien på en glob)                                 |
|       Funktionen globe beräknar arean och omkretsen och                                               |
|       returnerar båda svaren i en array                                                               |
|______________________________________________________________________________________________________*/

let answer = prompt("Ange radien på din glob:");

// Loop som kollar att användarens inmatning är ett tal

let loop = true;
while(loop) {
  
    if (isNaN(answer) || answer === "" || answer === null) {
        alert("Försök igen!");
        answer = prompt("Ange radien på din glob:");
    }
    else {
        loop = false;
    }       
}

// Loop slut

alert(`Du angav: ${answer}
Volymen blir: 
${globe(answer)[0].toFixed(2)}
Arean blir: 
${globe(answer)[1].toFixed(2)}`);

// Här skapar jag min funktion

function globe(par){
    return [(4 * Math.PI * Math.pow(par,3)) / 3, (4 * Math.PI) * Math.pow(par,2)]
}