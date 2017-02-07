export class Player {
    
    constructor (
        public $key:string,
        public name:string)
        {}

    static fromJsonList(array):Player[]{
        return array.map(Player.fromJson)
    }

    static fromJson($key,name):Player
    {
        return new Player($key,name)
    }
}
