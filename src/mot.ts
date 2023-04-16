export class Mot{
    private _mot: string =''
    
    constructor(){

    }

    public get mot(): string {
        return this._mot
    }
    public set mot(value: string) {
        this._mot = value
    }
}