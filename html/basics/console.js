/*
 Auf der Konsole kann man Ausgaben machen, welche im Browser dann im Hintergrund (eben in der Konsole...) erscheinen.
 Benutze die Konsole um Ausgaben zu machen, welche Dir bei der Fehlersuche hilfreich sein könnten - vermeide es aber,
 zu viele Ausgaben auszugeben, denn sonst siehst Du vor lauter Ausgaben das Problem nicht mehr.

 Im Programm erkannte Fehler sollten immer augegeben werden.
 */

// Normaler Text
console.log('Normaler Text');

// Man kann mehrere Ausgaben hintereinander ausgeben, getrennt mit einem Komma

// Ein paar Variablen definieren (ohne tieferen Sinn...)
var obj = {
  a: 1,
  b: 'text',
  c: [{a: 2, b: 'b'}, {a: 3, b: 'c'}]
};
var nb = 5;
var arr = [1, 2, 6, 33, 42, 64];

// und dann ausgeben
console.log(obj);
console.log(arr);
console.log('Objekt', obj);
console.log('Mehrere Werte', obj, arr, nb);


// Warnungen: wenn etwas nicht so gut ist, aber noch zu keinem Fehler führt, dann kann man das in der Console als
// Warnung hervor heben:
console.warn('Dies ist eine Warnung');

// Fehler: wenn was schief läuft, dann gibt man einen error aus. Wenn ein dazugehöriger Wert vorhanden ist, gib ihn
// auch gleich auf der selben Zeile aus, das hilft:
console.error('Mit dem Array stimmt was nicht', arr);

// Infos benutze ich nicht oft, sehen aber auch nett aus:
console.info('Das ist eine Info');

// Man kann mit der console auch die Ausführungszeit eines Programmteils messen:
console.time('time-1'); // Gib hier einen Namen, denselben verwendest Du dann bei timeEnd(), siehe unten!
for (var i = 0; i < 4; i++) {
  console.time('time-2');
  for (var t = 0; t < 1000; t++) {

  }
  console.timeEnd('time-2');
}
console.timeEnd('time-1');

// Eine 'Luxusausgabe', stellt Werte als Tabelle dar (solange sie als Tabelle darstellbar sind). Sparsam verwenden,
// wird nicht überall unterstützt, für die Fehlersuche kann es aber praktisch sein:
console.table(obj.c);

// Konsolen-Ausgaben können auch gruppiert werden. Das macht im Beispiel unten nur wenig Sinn, wenn man aber später
// mehrere Funktionen aufruft, kann das unter Umständen in der Darstellung helfen:
console.log('Das ist die Grund-Ebene');
console.group('Ein optionaler Titel für diese Ebene');
console.log('Ebene 2');
console.group();
console.log('Ebene 3');
console.warn('Mehr auf Ebene 3');
console.groupEnd();
console.log('Zurück auf Ebene 2');
console.groupEnd();
console.log('Zurück auf die Grundebene');

// Ganz am Schluss noch: Man kann auch nur dann etwas ausgeben, wenn eine Bedingung NICHT erfüllt ist. Der Browser
// stoppt die Ausführung an diesem Programmpunkt, deshalb nur für das Abfangen von kritischen Fehlern verwenden:
console.assert(nb < 4, 'das wird ausgegeben');
console.assert(nb > 4, 'das wird nicht ausgegeben');
