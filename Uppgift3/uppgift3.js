/*______________________________________________________________________________________________________
|                                                                                                       |
|       Program som frågar användaren efter ett tal (radien på en cirkel)                               |
|       Funktionen "circleOfLife" beräknar arean och omkretsen och                                      |
|       returnerar båda svaren i en array                                                               |
|______________________________________________________________________________________________________*/

let answer = prompt("Ange radien på din cirkel:");

// Loop som kollar att användarens inmatning är ett tal

let loop = true;
while(loop) {
  
    if (isNaN(answer) || answer === "" || answer === null) {
        alert("Försök igen!");
        answer = prompt("Ange radien på din cirkel:");
    }
    else {
        loop = false;
    }       
}

// Loop slut

alert(`Du angav: ${answer}
Arean blir: 
${circleOfLife(answer)[1].toFixed(2)}
Omkretsen blir: 
${circleOfLife(answer)[0].toFixed(2)}`);

// Här skapar jag min funktion

function circleOfLife(par){
    return [2 * Math.PI * par, Math.PI * (par * par)]
    // let circumference = 2 * Math.PI * par;
    // let area = Math.PI * (par * par);
    // return [circumference, area];    
}