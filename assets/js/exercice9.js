
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
var str1= window.prompt("Saisissez une chaîne de mots");
var str2= window.prompt("Saisissez une seconde chaîne de mots");
var n= window.prompt('Saisissez un numéro')
function strtok(str1 , str2 , n){
    var mots = str1.split(str2);
    
    if (n - 1 >= 0 && n - 1 < mots.length) {
        // Retournez le nième mot.
        return mots[n - 1];
    } else {
        // Si le nième mot n'existe pas, retournez une chaîne vide.
        return "";
    }
}

var resultat = strtok(str1, str2, n);
resultat = document.getElementById('text').innerHTML ="Le nième mot est : " + resultat