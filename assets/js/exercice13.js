
// Initialisation du tableau
var valeurs = [];

// Boucle de saisie
while (true) {
  var valeurSaisie = window.prompt("Saisissez une valeur numérique (ou 0 pour terminer) :");
  var valeurNum = parseFloat(valeurSaisie); // Convertir en nombre

  // Vérifier si la saisie est un nombre
  if (!isNaN(valeurNum)) {
    // Ajouter la valeur au tableau
    valeurs.push(valeurNum);

    // Vérifier si l'utilisateur a entré 0 pour terminer
    if (valeurNum === 0) {
      break; // Sortir de la boucle
    }
  } else {
    window.alert("Veuillez saisir une valeur numérique valide.");
  }
}

// Calcul du nombre de valeurs saisies
var nbValeurs = valeurs.length;

// Calcul de la somme
var somme = 0;
for (var i = 0; i < nbValeurs; i++) {
  somme += valeurs[i];
}

// Calcul de la moyenne
var moyenne = somme / nbValeurs;

// Affichage des résultats
window.alert("Nombre de valeurs saisies : " + nbValeurs);
window.alert("Somme des valeurs : " + somme);
window.alert("Moyenne des valeurs : " + moyenne);
