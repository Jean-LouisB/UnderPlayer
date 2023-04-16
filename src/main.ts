import { Player } from "./player";
import { Group } from "./playerGroup";


// divers tests :
//initialisation de joueurs :
const fab = new Player('Fabrice Kopf')
const bruno = new Player('Bruno Lemarchand')
const cedric = new Player('Cédric Arnoult')
const xav = new Player('Xavier Alcaraz')

// Création du groupe et entrée en jeu des joueurs
const groupeJoueurs = new Group(fab, 'Les Castafiores')
groupeJoueurs.groupPlayers.push(bruno,cedric,xav)
//attribution du mot au hasard à chacun des joueurs :
groupeJoueurs.attributeWord()

//pour test affichage des mot de chacun :
groupeJoueurs.groupPlayers.map(joueur => console.log(joueur.playerName,"doit faire deviner:",joueur.PlayerWord)
 )

