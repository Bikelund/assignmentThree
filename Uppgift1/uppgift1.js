// Här skapar jag ett objekt av konstruktorn Address

let nickLaurAddress = new Address("Brommabågen 9", "168 76", "Bromma");

// Här skapar jag 2 objekt av konstruktorn Person

let nicklas = new Person("Nicklas Barklund", "nicklas@gmail.com", "0763507512", nickLaurAddress);
let laura   = new Person("Laura Kantti", "laura@gmail.com", "0763507513", nickLaurAddress);

nicklas.print();

/*_________________________
|                          |
|   Objektkonstruktorer    |
|_________________________*/

function Person(name, mail, cellphone, address){
    this.name       = name;
    this.mail       = mail;
    this.cellphone  = cellphone;
    this.address    = address;
    this.print      = function(){ // Metod som skriver ut namn och adress
        console.log(`        ${this.name}

        ${this.address.street} 
        ${this.address.zipcode} ${this.address.state}`);
    }
}

function Address(street, zipcode, state){
    this.street     = street;
    this.zipcode    = zipcode;
    this.state      = state;
}