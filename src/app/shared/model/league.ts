import {LeaguePlayer} from "./LeaguePlayer"
import {LeagueTeam} from "./leagueTeam"

export class League {
    constructor(
        public name: string,
        public admins: {[userKey:string]:string},
        public matches: { [matchKey: string]: string },
        public players: {[playerKey:string]:LeaguePlayer},
        public teams: {[teamKey:string]:LeagueTeam}


    ) { }
}