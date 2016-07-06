// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern

let randomNumber;

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.

let i;

/*  boolean zum Abspeichern ob Spiel vorbei ist (gewonnen/verloren), 
 * falls over==true sollen keine neuen Listeneinträge für Versuche erstellt werden
*/

let over;
let progress;

/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */

$("#btn-start").on("click", function() { 

	over = false;
	i = 7;
	
	randomNumber = Math.floor(Math.random() * 100 + 1);
	
	$("#versuche").text("Restliche Versuche").append(
		$("<div/>", { 
			class: "progress" 
		}).append(
			$("<div/>", { 
				class: "progress-bar progress-bar-info", 
				role: "progressbar",
				style: "width: 100%",
				text: "7"
			})
		)
	);
	
	$("#try-list").empty();
	
});


/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */

$("#btn-check").on("click", function() {
	
	if (over === false) {
		
		let guessedNumber = $("#user-input").val();
		let message;
		
		if (guessedNumber > randomNumber ) {
			i--;
			message = "Du musst niedriger raten!";
		}

		else if (guessedNumber < randomNumber ) {
			i--;
			message = "Du musst höher raten!";
		}
			
		if ( i == 0 ) {
			message = "Du hast verloren!";
			over = true;
		}
		
		if (guessedNumber == randomNumber) {
			i--;
			message = "Gewonnen! Neues Spiel über Start.";
			over = true;
		}
		
		progress = Math.floor(i/7*100);
		
		$(".progress-bar").attr("style", "width: " + progress + "%").text(i);
		
		$("#try-list").append(
			$("<li/>", { 
				class: "list-group-item", 
				text: message 
			}).append(
				$("<span/>", { 
					class: "badge", 
					text: 7-i
				})
			)
		);
	}
	
});

