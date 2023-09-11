/*Entrez le Nom/Prénom*/
var reponse1 = window.prompt("Saisissez votre Nom :");
var reponse2 = window.prompt("Saisissez votre Prénom :");
window.alert("Bonjour, " + reponse1 + " " + reponse2);

/*Demande un Nombre a l'utilisateur puis calcule le produit*/
var reponse3 = window.prompt("Saisissez un nombre :");
var reponse4 = window.prompt("Saisissez un second nombre :");
window.alert("Le produit des deux nombes est : " + reponse3 * reponse4);

/*Demande la température en °C et convertie en °F*/
var reponse5 = window.prompt("Quelle est la température en °C ?");
F = (reponse5*9/5) + 32
window.alert("La température est de : " + F + "°F");