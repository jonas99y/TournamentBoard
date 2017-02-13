export class Player {

constructor(
    public name:string,
    public authKey?:string
){ }
    // constructor (
    //     public $key:string,
    //     public name:string,
    //     public leagues:any,
    //     public authKey: string = null)
    //     {}

    // static fromJsonList(array):Player[]{
    //     return array.map(Player.fromJson)
    // }

    // static fromJson($key,name,leagues):Player
    // {
    //     return new Player($key, name, leagues)
    // }
}
