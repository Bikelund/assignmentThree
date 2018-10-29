/*______________________________________________________________________________
|                                                                               |
|       Program som "kastar" 1000 tärningar och gör en                          |
|       frekvenstabell över förkomsten av ettor, tvåor, osv.                    |
|                                                                               |
|       Programmet består av 2 funktioner                                       |
|       Funktionen "randomDice" slumpar 1000 tal mellan 1 och 6                 |
|       och placerar dessa i en array                                           |
|       Funktionen "print" kollar hur många av varje tal som finns i listan     |
|       och skriver ut en tabell av dessa i konsolfönstret                      |
|                                                                               |
|______________________________________________________________________________*/

print();

function randomDice(){
    let manyDices = [];

    for (let i = 0; i < 1000; i++) {
        manyDices[i] = Math.ceil(Math.random() * 6);  
    }
    return manyDices;
}

function print(){
    let indexOfDice = [0,0,0,0,0,0];

    for (let i of randomDice()) {
        indexOfDice[randomDice()[i]-1]++;
    }

    console.log(`    Antal ettor     : ${indexOfDice[0]}
    Antal tvåor     : ${indexOfDice[1]}
    Antal treor     : ${indexOfDice[2]}
    Antal fyror     : ${indexOfDice[3]}
    Antal femmor    : ${indexOfDice[4]}
    Antal sexor     : ${indexOfDice[5]}
    Antal tärningar : ${indexOfDice[0] + indexOfDice[1] + indexOfDice[2] + indexOfDice[3] + indexOfDice[4] + indexOfDice[5]}`);
}
