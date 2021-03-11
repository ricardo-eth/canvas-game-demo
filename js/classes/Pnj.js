let pnj = new Image(); // crée une nouvelle image

/***** Initialisation des variables globales du personnage non joueur *****/
let spriteSheetPnj="sprites/pnj.png"; //chemin de l'image servant de spritesheet
pnj.src = spriteSheetPnj; // donne le chemin de l'image servant de spritesheet

pnj.name = "ara";

pnj.collision = 0;

pnj.texte = "Bonjour tu es perdu ?";

/***** fonction pour animer un PNJ (appelée par la fonction animePnjs) *****/
function animePnj(pnjs, context, dir) {

	rencontre(pnjs, pnjs.texte); // appel de la fonction du fichier collision-pnj.js

}

function rencontre(pnj, textePnj) { // fonction gérant la collision avec un pnj 

	if (joueur.posX + joueur.largeur > pnj.posX2 && joueur.posX - tailleTuile < pnj.posX2 && joueur.posY + joueur.hauteur > pnj.posY2 && joueur.posY - tailleTuile < pnj.posY2) {
		console.log(pnj.name);

		if (pnj.collision == 0) {
			bulleTexte(pnj.texte, pnj.posX2, pnj.posY2); // affiche une "bulle" de dialogue
		}

		if (pnj==ennemi && pnj.collision == 0) { 

		} 

		pnj.collision += 1; // permettra de savoir ensuite qu'on a touché le pnj

		console.log(pnj.collision+" - pnj !");

	}
}