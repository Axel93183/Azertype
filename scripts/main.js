/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu (et les variables qu'on aura à utiliser) et lance la boucle de jeu. 
 * 
 *********************************************************************************/

let inputEcriture = document.getElementById("inputEcriture")
//console.log(inputEcriture);

let btnValiderMot = document.getElementById("btnValiderMot")
//console.log(btnValiderMot);

let divZoneProposition = document.querySelector(".zoneProposition")
//console.log(divZoneProposition);

let spanScore = document.querySelector(".zoneScore span")
//console.log(spanScore);

let listeBtnRadio = document.querySelectorAll(".optionSource input")
//console.log(listeBtnRadio);

let btnEnvoyerMail = document.getElementById("btnEnvoyerMail")

let baliseNom = document.getElementById("nom")
let baliseEmail = document.getElementById("email")

//let sujet = ""
//let message = ""
//console.log(sujet, message);

/*btnValider.addEventListener("click", ()=>{
    compteur++
    //console.log("j’ai cliqué !")
    console.log(listeMots[compteur])
    //console.log(inputEcriture.value)
    afficherProposition();
})*/

lancerJeu();