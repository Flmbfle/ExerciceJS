// Génère un nombre aléatoire entre 1 et 100 (modifiable selon vos besoins)

var nombreMagique = Math.floor(Math.random() * 100) + 1;

// Fonction pour vérifier la saisie de l'utilisateur
function verif() {
    var saisie = document.getElementById("textBox1").value;
    var label1 = document.getElementById("label1");

    //Vérifie si la saisie est vide
    if (saisie === "") {
        label1.textContent = "Veuillez entrer un nombre.";
    } else {
        //Convertit automatiquelent la saisie en un nomber entier
        var nombreUtilisateur = parseInt(saisie);

        if (isNaN(nombreUtilisateur)) {
            label1.textContent = alert("Veuillez entrer un nombre valide.");
        } else {
            if (nombreUtilisateur === nombreMagique) {
                label1.textContent = alert("Félicitations ! Vous avez deviné le nombre magique.");
            } else if (nombreUtilisateur < nombreMagique) {
                label1.textContent = alert("Trop petit. Essayez encore.");
            } else {
                label1.textContent = alert("Trop grand. Essayez encore.");
            }
        }
    }
}





































function message ()
{
    alert("Natifs");
}