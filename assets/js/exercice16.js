var contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut du formulaire

            // Réinitialisez les messages d'erreur précédents
            var errorElements = document.getElementsByClassName("error");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].textContent = "";
            }

            var societe = document.getElementById("societe").value;
            var personne = document.getElementById("personne").value;
            var codePostal = document.getElementById("codePostal").value;
            var ville = document.getElementById("ville").value;
            var email = document.getElementById("email").value;

            var isValid = true;

            if (societe.length < 1) {
                document.getElementById("societeError").textContent = "La société doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (personne.length < 1) {
                document.getElementById("personneError").textContent = "La personne à contacter doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (!/^\d{5}$/.test(codePostal)) {
                document.getElementById("codePostalError").textContent = "Le code postal doit comporter 5 caractères numériques.";
                isValid = false;
            }

            if (ville.length < 1) {
                document.getElementById("villeError").textContent = "La ville doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (email.indexOf("@") === -1) {
                document.getElementById("emailError").textContent = "L'adresse email doit contenir le caractère '@'.";
                isValid = false;
            }

            if (isValid) {
                // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire ici
                // contactForm.submit();
                alert("Formulaire soumis avec succès!");
            }
        });