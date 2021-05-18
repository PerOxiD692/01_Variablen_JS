/***** Variablen 01 *******/

// Das ist ein Zeilen-Kommentar

/**
 *  Block-Kommentar
 */

// Ausgabe
//console.log("Hallo Welt!");
//console.log(FirstName); 

// Deklaration + Wertzuweisung + Ausgabe
/*
let firstName; // Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
console.log(firstName); // Ausgabe
let familyName = "Mustermann";  // Deklaration + Wertzuweisung
console.log(familyName); // Ausgabe
console.log(firstName + " " + familyName);
*/

// Deklaration + Wertzuweisung II
/*
let firstName, familyName;
firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Nachnamen eingeben");
console.log("Hallo, " + firstName + " " + familyName + "!");
*/

// Java Script ist eine untypisierte Sprache! | untyped
/*
let test; // Deklaration
test = "hi"; // sting
test = 2; // number
test = true; // boolean
console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/


/***** Variablen 02 *******/
/*
//Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung | Assignment
let date = new Date();
let year = date.getFullYear();
ageJohn = 25;
ageMark = 30;

// Operation (Differenz)
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;
console.log("Aktuelles Jahr: " + year);
console.log("Geburtsjahr John: " + birthYearJohn);
console.log("Geburtsjahr John: " + birthYearMark);
*/


/***** Variablen 02 *******/
let ageJohn, ageMark;
ageJohn = 25;
ageMark = 30;

//Operation (Vergleich / Test)
let isJohnOlder = (ageJohn > ageMark);
console.log("John ist älter: " + isJohnOlder);