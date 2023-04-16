import { liste } from "./wordList";

/**
 * 
 * Cette fonction permet de choisir un mot au hasard dans le fichier
 * Elle retourne un mot de type string
 */
function selectWord() {
    
    const lengthOfListe: number = liste.length
    //tirage aléatoire d'un ID
    let aleaId: number = Math.round(Math.random() * lengthOfListe)
    //retour du mot selon l'ID et instanciation de l'objet Mot 
    let elementJson = liste.find(mot => mot.id === aleaId)
    let myWord: string
    if (elementJson) {
        myWord = elementJson.content
        return myWord
    } else {
        console.log('Erreur');
        return ''
    }

}

export default selectWord
