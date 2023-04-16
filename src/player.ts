export class Player {
    private _playerName: string
    private _playerScore: number = 0
    private _PlayerWord: string=''

/**
 * Le joueur contient un nom de type string et un mot défini dans le groupe de joueur par la méthode attribute.
 */
    constructor(playerName: string) {
        this._playerName = playerName
    }

    public get PlayerWord(): string {
        return this._PlayerWord
    }
    public set PlayerWord(value: string) {
        this._PlayerWord = value
    }

    public get playerScore(): number {
        return this._playerScore
    }
    public set playerScore(value: number) {
        this._playerScore++
    }

    public get playerName(): string {
        return this._playerName
    }
    public set playerName(value: string) {
        this._playerName = value
    }



}