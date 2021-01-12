let a = 5; //Einen Wert geben                                 //Tschenrechner
let b = 3;
let c = 2;

// Rechenoperationen
console.log('a + b =', a + b);      // Addition
console.log('a - b =', a - b);      // Subtraktion
console.log('a * b =', a * b);      // Multiplikation
console.log('a / b =', a / b);      // Division
console.log('a % b =', a % b);      // Rest der Division
console.log('a**b =', a**b);        // Exponentiation
console.log('-a =', -a);            // Negation


// Operatorvorrang
console.log('a * b + c =', a * b + c);
console.log('a * (b + c) =', a * (b + c));

console.log('a * b**c =', a + b**c);
console.log('(a * b)**c=', (a + b)**c);

console.log('a + b % c =', a + b % c);
console.log('(a + b) % c =', (a + b) % c);

let firstName = "Paul" //String
let lastName = "Karl"
let fullName = firstName + " " + lastName
console.log("Ganzer Name:",/*Beistrich nicht vergessen!!! */fullName)

// Zusammengefasste Zuweisungsoperationen
console.log('a = '+ a +  ', b = '+ b)
a += b; //muss stehen
console.log('a += b => a = ' + a);
a -= b;
console.log('a -= b => a = ' + a);
a *= b;
console.log('a *= b => a = ' + a);
a /= b;
console.log('a /= b => a = ' + a);
a %= b;
console.log('a %= b => a = ' + a);
a **= b;
console.log('a **= b => a = ' + a);

console.log(" a = ", a -= b); //bleibt gespeichert

console.log("a =", a);

// Inkrement
console.log('++a = ', ++a); // 1 + a
console.log('a++ =', a++); //wird nacher in der nächsten Zeile dazugerechnet
console.log('a =', a);

// Dekrement
console.log('--a = ', --a);
console.log('a-- =', a--);
console.log('a =', a);

// Vergleichsoperatoren
let isEqual = a === b;
console.log('isEqual = (a === b) =', isEqual /*Equal = ist gleich */);


