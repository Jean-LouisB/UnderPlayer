import { Player } from "./player"
import selectWord from "./selectWord";

export class Group {
 
    private _groupName: string

    private _groupAdmin: Player

    private _groupNbPlayer: number = 0

    private _groupPlayers: Array<Player> = []
    /**
 * Le groupe de joueur est administré par un joueur groupAdmin.
 * C'est lui qui valide l'entrée dans le groupe des autres joueurs.
 * Le groupe s'initialise avec le joueur admin de type Player et avec un nom de groupe de type string
 */
    constructor(groupAdmin: Player, groupName: string) {
        this._groupName = groupName
        this._groupAdmin = groupAdmin
        this._groupNbPlayer++
        this._groupPlayers.push(groupAdmin)
    }
    public get groupName(): string {
        return this._groupName
    }
    public set groupName(value: string) {
        this._groupName = value
    }
    public get groupAdmin(): Player {
        return this._groupAdmin
    }
    public set groupAdmin(value: Player) {
        this._groupAdmin = value
    }
    public get groupNbPlayer(): number {
        return this._groupNbPlayer
    }
    public set groupNbPlayer(value: number) {
        this._groupNbPlayer = value
    }
    public get groupPlayers(): Array<Player> {
        return this._groupPlayers
    }
    public set groupPlayers(value: Array<Player>) {
        this._groupPlayers = value
        this._groupNbPlayer=this.groupPlayers.length
    }
    attributeWord(){
        this._groupNbPlayer=this.groupPlayers.length // doit recalculer le nombre de joueur
        for (let i = 0 ; i < this._groupNbPlayer ; i++){
            let unMot = selectWord()
            this._groupPlayers[i].PlayerWord = unMot
        }
        
    }

}