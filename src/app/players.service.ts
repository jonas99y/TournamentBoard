import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {Player} from "./player";
import {AngularFireDatabase} from "angularfire2";

@Injectable()
export class PlayersService {

  constructor( private db:AngularFireDatabase) { }

findAllPlayers():Observable<Player[]> {
        return this.db.list('lessons')
            .do(console.log)
            .map(Player.fromJsonList);
    }

}
