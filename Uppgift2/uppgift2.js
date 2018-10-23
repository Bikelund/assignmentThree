/*__________________________________________________________________________
|                                                                           |
|    Funktion som räknar ut hypotenusans längd på en rätvinklig triangel    |
|    Hypotenusa = kvadratroten ur (katet-a^2 + katet-b^2)                   |
|    Svaret visas i konsolfönstret med 2 decimaler                          |
|__________________________________________________________________________*/

function hypotenusa(a, b){
    return Math.sqrt((a * a) + (b * b));
}

console.log(hypotenusa(5,4).toFixed(2)); 