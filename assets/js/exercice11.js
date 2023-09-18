//Demander à l'utilisateur la taille du tableau

var taille = parseInt(window.prompt('Saisissez la taille du tableau'));

//Creation du tableau vide

var tableau = [];

// Afficher le contenu du tableau et le remplir avec les valeurs utilisateurs dans la même fenêtre prompt
var message = "Contenu du tableau :\n";

for (var i = 0; i < taille; i++) {
    var valeur = window.prompt(message + "Entrez la valeur pour l'élément n° " + (i + 1) + " :");
    tableau.push(valeur);

    // Mettre à jour le message avec les valeurs saisies jusqu'à présent
    message += "Élément n° " + (i + 1) + " : " + tableau[i] + "\n";
}

 // Afficher le contenu du tableau sur la page HTML avec un saut de ligne entre chaque élément
 var resultatdiv = document.getElementById('resultat');
 for (var j = 0; j < tableau.length; j++) {
     var paragraphe = document.createElement('p');
     paragraphe.textContent = tableau[j];
     resultatdiv.appendChild(paragraphe);
 }