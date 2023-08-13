/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nombrePropositions : le nombre de mots/phrases proposés à l'utilisateur
 */
function afficherResultat(score, nombrePropositions) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    //console.log(spanScore);
    // Ecriture du texte dans le span
    spanScore.textContent = score + " / " + nombrePropositions;
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "divZoneProposition"
 * @param {string} motPropose : la proposition à afficher
 */
function afficherProposition(motPropose) {
    let divZoneProposition = document.querySelector(".zoneProposition")
    //console.log(divZoneProposition);
    divZoneProposition.innerText = motPropose;
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}+?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score de ${score} sur le site d'Azertype !`
    location.href = mailto
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @throws {Error}
 */
function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error(`le nom ${nom} est trop court`)
    }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @throws {Error}
 */
function validerEmail(email) {
    let emailRegex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegex.test(email)) {
        throw new Error(`L'email ${email} est invalide`)
    }
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre. 
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs. 
 * @param {string} message 
 */
function afficherMessageErreur(message) {

    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {

        let divPopup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"

        divPopup.append(spanErreurMessage)
    }

    spanErreurMessage.innerText = message

}

/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 * @param {string} scoreEmail 
 */
function gererFormulaire(scoreEmail) {
    try {
        let baliseNom = document.getElementById("nom")
        let nomJoueur = baliseNom.value
        validerNom(nomJoueur)

        let baliseEmail = document.getElementById("email")
        let emailDestination = baliseEmail.value
        validerEmail(emailDestination)

        afficherMessageErreur("")

        afficherEmail(nomJoueur, emailDestination, scoreEmail);

    } catch (error) {
        afficherMessageErreur(error.message)
    }
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    //Initialisations du jeu
    initAddEventListenerPopup()
    let score = 0 //Score de l'utilisateur lorsqu'il commence le jeu.
    let i = 0
    let listePropositions = listeMots
    let btnValider = document.getElementById("btnValider")
    //console.log(btnValider);
    let inputEcriture = document.getElementById("inputEcriture")
    //console.log(inputEcriture);
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    //console.log(listeBtnRadio);

    //Réinitialise le bouton radio "checked" au rechargement de la page 
    document.addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < listeBtnRadio.length; i++) {
            if (i === 0) {
                listeBtnRadio[i].checked = true;
            } else {
                listeBtnRadio[i].checked = false;
            }
        }
    })

    afficherProposition(listePropositions[i]);

    // Gestion de l'événement click du bouton "valider"
    btnValider.addEventListener("click", () => {
        if (inputEcriture.value === listePropositions[i]) {
            score++
        }
        i++;
        afficherResultat(score, i);
        inputEcriture.value = ""
        if (listePropositions[i] !== undefined) {
            afficherProposition(listePropositions[i]);
        } else {
            afficherProposition("le jeu est fini")
            btnValider.disabled = true
        }
    })

    // Gestion de l'événement change sur les boutons radios. 
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            // Si le bouton "mots" est sélectionné, la listeMots s'affiche. 
            if (event.target.value === "1") {
                listePropositions = listeMots
            } else {
                listePropositions = listePhrases
            };
            afficherProposition(listePropositions[i])//L'affichage se fait instantanément la liste choisie
        })
    }
    // Gestion de l'événement submit sur le formulaire de partage. 
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)
    })

    afficherResultat(score, i);
}
