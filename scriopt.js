
//  Recuperation de  tous les boutons WhatsApp
let boutons = document.querySelectorAll(".btn-whatsapp");

// Parcourir tous les boutons
boutons.forEach(function (bouton) {

    // Detecter le clic du client
    bouton.addEventListener("click", function () {

        // Recuperer les informations du vetement
        let nom = bouton.dataset.nom;
        let prix = Number(bouton.dataset.prix);

        // mon numero WhatsApp
        let numero = "221782201216";

        // Construiricton du message 
        let message = `Bonjour, je souhaite commander ce vêtement.

Produit : ${nom}
Prix : ${prix.toLocaleString("fr-FR")} FCFA

Est-il disponible ?

Merci !`;

        //  Encodage du message pour WhatsApp
        let messageEncode = encodeURIComponent(message);

        //  Construction du  lien WhatsApp
        let lien = `https://wa.me/${numero}?text=${messageEncode}`;

        // permet d'ouvrir WhatsApp
        window.open(lien, "_blank");

    });

});
