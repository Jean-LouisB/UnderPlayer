export class Mot{
    private _mot: string =''
    /**
     * Pour le moment inutile
     * 
     */
    constructor(){

    }

    public get mot(): string {
        return this._mot
    }
    public set mot(value: string) {
        this._mot = value
    }
}