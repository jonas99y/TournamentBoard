import {MatchPlayerData} from "./MatchPlayerData"
export class Match{
    constructor(
        public date: string,
        public playerA: MatchPlayerData,
        public playerB: MatchPlayerData
       

    ){}
}