/*
 JavaScript Grundlagen: Schlaufen
 */


// Mit for-Schlaufen kann man etwas mehrmals machen. Im folgenden Beispiel durchlaufen wir den folgenden Code-Block
// 5 mal. Der Teil der for-Anweisung ist die Initialisierung, hier definieren wir i und setzen den Wert auf 0. Dann
// folgt die Abbruchbedingung: solange dieser Wert 'true' ist, wird die Schlaufe durchlaufen. Am Schluss folgt noch
// die Anweisung, was in jedem Durchlauf zu machen ist: mit i++ wird i jedesmal um 1 erhöht.
for (var i = 0; i < 5; i++) {
  console.log('for-1', i)
}

// Weil es so schön war, gleich nochmals. Beachte, dass i jetzt nicht mehr deklariert werden muss, wir haben das oben
// ja schon getan. Nun zählen wir zur Abwechslung von 10 auf 0, in Schritten von 2 runter.
for (i = 10; i >= 0; i = i - 2) {
  console.log('for-2', i);
}

// Machmal braucht man keinen Zähler oder man weiss nicht, wie oft eine Schlaufe durchlaufen werden soll. Hier kommen
// while- und do-while Schlaufen zum Einsatz.
// Wie while-Schlaufe wird solange durchlaufen, wie ihr Argument 'true' ist.
var n = 1;
while (n < 50) {
  n = n + n;
  console.log('while', n);
}

// Bei der While-Schlaufe werden die folgenden Anweisungen nur duchlaufen, wenn die Bedingung wahr ist. Wenn man aber
// will, dass der Anweisungsblock mindestens einmal durchlaufen wird, verwendet man do-while:

// In diesem Beispiel gibt es eine Konsolen-Ausgabe, obwohl die Bedingung von Anfang an falsch ist
n = 60;
do {
  n = n + 1;
  console.log('do while', n);
} while (n < 50);

// Würde man while verwenden, gäbe es keine Ausgabe, der Block würde nie durchlaufen:
while (n < 50) {
  console.log('Das siehst Du nicht!');
}

// Oft möchte man durch alle Elemente eines Arrays gehen und diese ausgeben / auswerten. Dazu gibt es verschiedene
// Möglichkeiten, hier die beiden gebräuchlichsten:
var arr = [2, 4, 6, 8, 10];

// mit for: man erzeugt eine for-Schlaufe, welche von [0] bis [Anzahl Elemente im Array - 1] zählt. Auf die einzelnen
// Elemente des Arrays greift man dann mit der Zählervariable zu.
for (var x = 0; x < arr.length; x++) {
  console.log('Array mit for', arr[x]);
}

// mit forEach: damit iteriert man durch das Array und hat Zugriff auf jedes einzelne Element, welches man bearbeiten
// oder ausgeben kann. Man hat hier aber keine Zählervariable zur Verfügung. Als Parameter von forEach dient eine Funktion,
// welche die ganze Logik enthält.
arr.forEach(function (e) {
  console.log('Array mit forEach', e);
});