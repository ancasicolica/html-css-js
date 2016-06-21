/**
 * Beispiel für Buttons. Starte das Studium dieser Datei auf der Zeile, welche mit $(document).ready
 * beginnt
 **/

/*
 * Diese Funktion soll ausgeführt werden, wenn der "Primary" Button gedrückt wird
 */
function primaryHandler() {
  // Setze den Text
  $('#result').text('primary');
}


/*
 * Was, wenn viele Funktionen praktisch dasselbe machen und sich nur in wenig unterscheiden?
 *
 * Wir übergeben den Unterschied als Parameter und generieren daraus gleich eine neue Funktion, die
 * dann direkt als Handler verwendet werden kann
 */
function createHandler(result) {
  // Beachte: der Parameter result ist hier in der ganzen Funktion (im ganzen "Scope") gültig

  // Mit dieser Anweisung wird eine neue Funktion dem Aufrufer zurück gegeben, unser Handler
  return function() {
    // Diese Aktion kennen wir von vorhin - 'result' wurde im Aufrufer definiert
    // Da 'result' je nach Aufruf einen anderen Wert hat, bauen wir die Konsolen-Ausgabe zusammen:
    console.log(result + ' wurde geclickt!');
    $('#result').text(result);
  }
}


// Initialisierung
$(document).ready(function() {
  // Diese Funktion wird ausgeführt, wenn die Seite fertig geladen wurde

  // Nun registrieren wir die "Handler" für die Tastendrücke, das sind Funktionen, welche
  // aufgerufen werden, wenn der entsprechende Button gedrückt wird

  // Beim Handler für den "Default" Button definieren wir die Funktion gleich als Parameter
  // der click-Funktion
  $('#default').click(function() {
    // Normale Log ausgabe
    // Schau in die Konsole des Browsers um das zu sehen!
    console.log('Default wurde geclickt!');

    // Setze den Text innerhalb des Tags mit der ID 'result'
    $('#result').text('default');
  });

  // Beim "Primary" Button verwenden wir die Funktion, welche wir oben definiert haben.
  // So kann eine Funktion an mehreren Orten benutzt werden (sofern sie überall das gleiche
  // macht), der Code muss nur einmal geschrieben werden. Das macht den Code hier auch etwas
  // lesbarer
  $('#primary').click(primaryHandler); // Achte: ohne Klammer nach dem Funktionsnamen, sonst ist es ein Aufruf!

  // Nun wird es für das Verständnis etwas schwieriger, für die Anwendung aber einfacher:
  $('#success').click(createHandler('success'));
  $('#info').click(createHandler('info'));
  $('#warning').click(createHandler('warning'));
  $('#danger').click(createHandler('danger'));

});