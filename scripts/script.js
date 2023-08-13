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
    spanScore.textContent = score + " / " + nombrePropositions;
    //console.log( "Vous avez trouvé " + score + " proposition(s) sur " + nombrePropositions);
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "divZoneProposition"
 * @param {string} motPropose : la proposition à afficher
 */
function afficherProposition(motPropose) {
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

function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error(`le nom ${nom} est trop court`)
    }
}

function validerEmail(email) {
    let emailRegex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegex.test(email)) {
        throw new Error(`L'email ${email} est invalide`)
    }
}

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

function gererFormulaire(scoreEmail) {
    try {
        let nomJoueur = baliseNom.value
        validerNom(nomJoueur)

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
    //let choix = choisirPhrasesOuMots();
    initAddEventListenerPopup()
    let score = 0 //Score de l'utilisateur lorsqu'il commence le jeu.
    let i = 0
    let listePropositions = listeMots
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

    btnValiderMot.addEventListener("click", () => {
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
            btnValiderMot.disabled = true
        }
    })
    
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            if (event.target.value === "1") {
                listePropositions = listeMots
                console.log(listePropositions[i]);
            } else {
                listePropositions = listePhrases
                //console.log(listePropositions[i]);
                console.log(listeBtnRadio[i].value);
            };
            afficherProposition(listePropositions[i])
        })
    }

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)
    })
    
    afficherResultat(score, i);
}
