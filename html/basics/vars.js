/*
 JavaScript Grundlagen: Datentypen & Variablen

 Folgende grundlegenden Datentypen solltest Du kennen:
 - Nummern (Zahlen)
 - Strings (Zeichenketten)
 - Arrays
 - Objekte
 - Funktionen

 Variablen werden mit dem Schlüsselwort "var" deklariert (siehe unten), dabei ist es in JavaScript (im Gegensatz zu
 anderen Programmiersprachen) unwichtig, welcher Datentyp der Variablen zugewiesen wird. Mann kann einer einmal
 deklarierten Variablen sogar später einen anderen Datentyp zuweisen, doch das ist nicht unbedingt schön!

 Variablen-Namen dürfen aus  Buchstaben (gross/klein), Zahlen und ein paar wenigen Sonderzeichen (wie $_) bestehen. Sie
 düfen aber nicht mit einer Zahl anfangen. Gängige Praxis ist, dass Variablen mit einem kleinen Buchstaben beginnen
 und, wenn sie aus mehreren Wörtern bestehen, diese dann jeweils wieder gross geschrieben werden.

 Gute Beispiele:
 x, abc1, dasIstEineVariable

 Nicht gut:
 1abc, X, DasIst_Eine_Variable

 */

// *** Nummern *********************************************************************************************************
var x = 5;
var y = -2;
var test = 1000;

// Mit diesen Variablen kann man nun rechnen:
var resultat = x + y + test;
console.log('Addition:', resultat);

// *** Strings *********************************************************************************************************
// Zeichenketten werden in Hochkomma (') angegeben. Man kann auch " verwenden, doch gewisse Leute sehen das nicht so
// gerne. Gewöhne Dir gleich ' an.
var text1 = 'das';
var text2 = 'ist';
var text3 = 'super';

// Hängt man diese nun zusammen, dann sieht das komisch aus
var textResultat = text1 + text2 + text3;
console.log('Text 1:', textResultat);

// Die Leerzeichen fehlen, die fügen wir in der Konsolen-Ausgabe nun gleich direkt hinzu
console.log('Text 2:', text1 + ' ' + text2 + ' ' + text3);

// Was passiert, wenn man anstelle eines Strings eine Zahl dazu nimmt? Dazu muss man zwei Fälle unterscheiden:
// 1) Eine Zahl wird einem String hinzugefügt: die Zahl wird in einen String umgewandelt und dementsprechend angefügt.
// 2) Ein String wird einer Zahl hinzugefügt: bis der String in Erscheinung tritt, handelt es sich beim Datentyp um
//    eine Zahl!

// Vergleiche die beiden Ausgaben unten, damit Du den Unterschied siehst
console.log('String vor Zahl:', text3 + x + y);
console.log('Zahl vor String:', x + y + text3);

// *** Arrays **********************************************************************************************************
// Arrays fassen mehrere Werte in eine Variable, Du kannst ein Array auch als Liste mit mehreren Elementen betrachten.

// Die Werte 8, 4 und 2 sind in einem Array, diese werden hier direkt bei der Initialisierung zugewiesen:
var array1 = [8, 4, 2];

// Zugreifen kann man auf die Werte, indem man sie mit dem index referenziert, dieser beginnt bei 0, nicht bei 1!
console.log('Array Werte:', array1[0], array1[1], array1[2]);

// Was, wenn ich einen Wert hinzufügen will? mit push() geht das einfach:
array1.push(99);
console.log('Array nach push:', array1);

// Daneben gibt es noch ganz viele andere Funktionen auf Arrays, schau auch hier nach:
// https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Array
// Beispiele:
console.log('Umgekehrtes Array', array1.reverse());
console.log('Länge des Arrays:', array1.length);

// Ausser Zahlen können natürlich alle anderen Datentypen in einem Array drin sein, selbst weitere Arrays. Man sollte
// jedoch verschiedene Datentypen in einem Array nicht mischen, das kann sonst zu einem ziemlichen Chaos führen.
// => Ein Array sollte optimalerweise alles Daten des gleichen Typs haben

// *** Objekte *********************************************************************************************************
// Lies den Abschnitt in Deinem Buch zu den Objekt-Grundlagen, diese Theorie sparen wir uns hier. Wir machen gleich
// mal ein Objekt mit mehreren Eigenschaften:
var obj1 = {
  titel: 'das ist ein Text',
  zaehler: 4,
  daten: [1, 5, 3, 1, 4]
};
console.log('Objekt', obj1);

// Wie greife ich nun auf diese Sachen wieder zu? Ganz einfach:
console.log('Der Zähler hat den Wert', obj1.zaehler);

// *** Funktionen ******************************************************************************************************
// Nicht in jeder Programmiersprache würde man eine Funktion als Datentyp bezeichnen, in JavaScript trifft dies aber
// durchaus zu. Eine Funktion kann man wie folgt deklarieren:
var funct1 = function (x) {
  return x * 2; // Gibt das Resultat dem Aufrufer zurück
};

console.log('Funktionsaufruf 1:', funct1(5));

// So kann man auch ein Array mit Objekten machen. Der Erste Eintrag enthält eine gleich definierte Funktion, beim
// zweiten Eintrag verwenden wir die oben definierte funct1:
var array2 = [
  function (x) {
    return x / 2
  },
  funct1
];

console.log('Funktionsaufruf 2:', array2[1](10));

// Oder wir fügen dem obigen Objekt noch eine Funktion hinzu:
obj1.increment = function (x) {
  return ++x;
};
console.log('Objekt increment:', obj1.increment(3));

// In einem Objekt deklariert:
var obj2 = {
  test: 2,
  funktion: function (x) {
    return x + 2;
  },
  funktion2: funct1
};
// Das sieht nun so aus:
console.log(obj2);