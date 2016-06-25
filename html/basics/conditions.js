/*
 JavaScript Grundlagen: Verzweigungen
 */

// if: prüft, ob eine Bedingung wahr (true) ist: wenn dem so, dann wird der folgende Funktionsblock ausgeführt, sonst
// nicht:
var x = 5;
if (x > 3) {
  console.log('sichtbar: 5 > 3');
}
if (x < 5) {
  console.log('nicht sichtbar: 5 < 5');
}

// Mit else kann ein Funktionsblock definiert werden, welcher ausgeführt wird, wenn die Bedingung im if nicht wahr ist:
if (x < 5) {
  console.log('nicht sichtbar, da false');
}
else {
  console.log('sichtbar: else');
}

// Mehrere Bedingungen können mit else if aneinander gefügt werden, sobald der erste Vergleich true ist, werden die
// folgenden nicht mehr ausgeführt
if (x < 1) {
  console.log('x ist kleiner 1');
}
else if (x < 3) {
  console.log('x ist kleiner 3');
}
else if (x < 6) {
  console.log('x ist kleiner 6');
}
else if (x < 10) {
  // nicht mehr sichtbar, wenn x = 5 !!
  console.log('x ist kleiner 10');
}
else {
  console.log('x ist zu gross');
}

// Wenn auf mehrere Werte getestet werden soll, dann verwendet man anstelle if/else if besser das switch Statement:
switch(x) {
  case 1:
    console.log('ist 1');
    break;

  case 2:
  case 3:
  case 4:
    console.log('ist zwischen 2 und 4');
    break; // das break beendet den case-Block. Wird break weggelassen, wird das Programm auf der nächsten Zeile weiter
           // ausgeführt!

  case 5:
    console.log('ist 5');
    break;

  default:
    console.log('ist irgendwas');
    break;
}