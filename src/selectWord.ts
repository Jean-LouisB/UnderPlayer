import { liste } from "./wordList";
import { Mot } from "./mot";

const lengthOfListe : number =  liste.length
let aleaId : number = Math.round(Math.random()*lengthOfListe)
let elementJson = liste.find(mot => mot.id === aleaId)
const myWord = new Mot()
if(elementJson){
    myWord.mot = elementJson.content
}else{
    console.log('Erreur');
}
export default myWord
