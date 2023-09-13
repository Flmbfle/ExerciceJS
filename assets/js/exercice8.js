console.log("Exercice 1 Saisie")
var i = 0;

do
{
    i++

    var prenom = window.prompt("Saisissez le prénom N°"+ i + " ou Clic sur Annuler pour arrêter la saisie.");
}while(prenom!="")

console.log("Exercice 2 - Entiers inférieurs à N")
/*Ecrire un programme qui affiche les nombres inférieurs à N.*/
var nb = window.prompt("Entrez un nombre");

// Vérifie si nb est un nombre valide
if (!isNaN(nb) && nb !== null) {
    nb = parseInt(nb); // Convertit nb en un entier
    for (var i = nb; i >= 0; i--) {
        alert(i);
    }
} else {
    alert("Vous n'avez pas saisi un nombre valide.");
}

// Pour i de 0 à N
//     ecrire i
// FinPour

/*Exercice 3 Moyenne*/
// Ecrire un programme qui demande à l'utilisateur de saisir des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).
//
i=1 
var somme = 0;
var saisie;
var moyenne;

do {
    saisie = window.prompt("Entre la note  n°"+i +" (tapez 0 pour annuler)");
    if (saisie === "0") {
        break; // Sortir de la boucle si l'utilisateur tape "0"
    }
    if (saisie !== "") {
        somme = somme + parseFloat(saisie);
        i++;
    }
} while (true);

if (i > 3) { // Vérifier si au moins 1 note a été saisie pour éviter une division par zéro
    moyenne = somme / (i - 1);
    alert("La somme vaut : " + somme + " La moyenne vaut : " + moyenne);
} else {
    alert("Aucune note valide saisie.");
}

/*Exercice 4 - Multiples*/

// Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.
var x =window.prompt("Saisissez un nombre");
var n =window.prompt("Saisiseez un second nombre");
var m = 0 ;

for (m = 0 ; m <= n ; m++){
    resultat = x * m;
    alert(+m + "x" +x + "=" + resultat)
}

/*Exercice 5*/ 
var voyelles = "aeiouy"; //Voyelles
var nbvoyelles = 0;      //Initialisation du Nb de voyelles à 0
var mot = window.prompt("Saisissez un mot");
for (var i = 0 ; i < mot.length; i++) {
    if (voyelles.indexOf(mot.substring(i, i + 1)) != -1) {
        nbvoyelles++;
    }
}
alert("Le mot " + mot + " contient " +nbvoyelles + " voyelles.");


