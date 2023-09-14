
//Exercice 1

var x = window.prompt("Saisissez une valeur pour x");
var y = window.prompt("Saisissez une valeur pour y");

function cube(x , x , x){
    return x * x * x;
}
var resultatcube = cube(x , x , x); // Appeler la fonction produit avec les valeurs x , x et x.
var cube = document.getElementById('cube').innerHTML ="Le cube de " + x + " est égal à " + resultatcube

function produit(x, y) {
    return x * y;
}

var resultat = produit(x, y); // Appeler la fonction produit avec les valeurs x et y.
var produit = document.getElementById('produit').innerHTML ="Le produit de " + x + " * " + y + " est égal à " + resultat

function afficheImg(image){
    var img = document.getElementById("papillon")
    img.setAttribute ("src","assets/img/papillon.jpg")
}
afficheImg()

//Exercice 2

function strtok(str1, str2, n) {
    // Divisez la chaîne str1 en une liste de mots en utilisant str2 comme séparateur.
    var mots = str1.split(str2);

    // Vérifiez si le nième mot existe dans la liste.
    if (n - 1 >= 0 && n - 1 < mots.length) {
        // Retournez le nième mot.
        return mots[n-1];
    } else {
        // Si le nième mot n'existe pas, retournez une chaîne vide.
        return "";
    }
}

// Demandez à l'utilisateur d'entrer les valeurs des paramètres.
var str1 = prompt("Entrez la chaîne str1 :");
var str2 = prompt("Entrez le caractère de séparation str2 :");
var n = parseInt(prompt("Entrez la valeur de n :"));

// Appelez la fonction strtok avec les valeurs entrées par l'utilisateur.
var resultat = strtok(str1, str2, n);

// Récupérez l'élément HTML où vous voulez afficher le résultat.
var textElement = document.getElementById("text");

// Affichez le résultat.
if (resultat !== "") {
    textElement.innerHTML = "Le " + n + " ème mot est : " + resultat;
} else {
    textElement.innerHTML = "Le " + n + "ème mot(s) n'existe pas.";
}