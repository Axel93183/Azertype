Étape 1 : 

# nettoyez le projet

# Votre première étape consiste à supprimer les éléments qui seront modifiés dans notre projet :

# mettez en commentaire toutes les méthodes qui utilisent prompt ;

# mettez à jour la fonction lancerJeu pour qu’elle ne fasse plus appel à ces fonctions. 

# Vous devez également désactiver temporairement le choix entre la liste des phrases et la liste des mots, de manière à utiliser systématiquement la liste des mots  :

# mettez à jour la fonction lancerJeu, et commentez ce qui concerne la variable listePhrases. 

Étape 2 : gérez le clic sur le bouton “Valider”
À ce stade, le projet n’est plus fonctionnel, il n’est plus possible de jouer. Vous devez donc reconstruire ce que vous avez commenté à la première étape, en interagissant directement avec la page HTML.

Votre première étape est de pouvoir réagir au clic sur le bouton “Envoyer” :

Dans la fonction lancerJeu, récupérez le bouton de validation et écoutez l’événement click en utilisant la méthode addEventListener.

#DONE- Testez que cela fonctionne avec un console.log(“j’ai cliqué !”).

#DONE- Récupérez la balise inputEcriture et placez-la dans une variable. 

#DONE- Dans l’addEventListener, faites un console.log avec la valeur contenue dans cette balise.

#DONE- Pour accéder à la valeur contenue dans la balise inputEcriture, utilisez la propriété value. 

#DONE- Testez en écrivant quelque chose dans le champ, et en vérifiant que la valeur apparaît bien lorsque vous cliquez sur Envoyer. 

Étape 3 : affichez les mots que l’utilisateur doit recopier
À ce stade, vous savez comment récupérer le mot que l’utilisateur a écrit, mais vous n’affichez pas encore le mot qu’il devra recopier. Pour réaliser cette mise à jour du code HTML :

#DONE- à l’extérieur du addEventListener, créez une variable i qui servira de compteur. 

#DONE- Dans l’addEventListener, ajoutez 1 à i à chaque fois que l’utilisateur clique sur le bouton Envoyer ; 

#DONE- ajoutez un console.log qui va afficher le mot numéro i du tableau listeMots ;

créez une fonction afficherProposition, qui va prendre en paramètre le mot à afficher, et afficher ce mot dans la div zoneProposition ;  

utilisez cette fonction pour afficher les mots à proposer. 

Après ces opérations, vous devriez voir apparaître les mots un par un après avoir réalisé ces opérations. 
Cependant, vous remarquerez peut-être que le mot “undefined” s’affiche lorsqu’il n’y a plus de mots disponibles dans le tableau. 

Pour régler ce problème :

ajoutez un test dans l’addEventListener. Si le mot numéro i du tableau vaut undefined, 
écrivez le message “Le jeu est fini” à la place du mot, et 
désactivez le bouton de validation. 
Pour désactiver ce bouton, mettez la propriété disabled de ce bouton à true ; 

à chaque fois que l’utilisateur clique sur Valider, videz le champ inputEcriture. 

Étape 4 : gérez le score
Il nous reste une dernière étape : gérer le score de l’utilisateur.

Dans l’addEventListener, comparez ce qu’a écrit l’utilisateur et le mot proposé. Si ces deux mots sont identiques, augmentez le score. 

Dans tous les cas, mettez à jour le score en appelant la fonction de mise à jour du score avec les bons paramètres. 