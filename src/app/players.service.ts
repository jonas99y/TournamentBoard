import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, Subscriber } from "rxjs/Rx";
import { Player } from "./Shared/Model/player";
import { League } from "./Shared/Model/league";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef } from "angularfire2";

@Injectable()
export class PlayersService {


  private ref: firebase.database.Reference;
  private playerRef: firebase.database.Reference;
  constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) {

    this.ref = fb.database().ref();

    this.playerRef = fb.database().ref('players');

  }

  findAllPlayers(): FirebaseListObservable<Player[]> {

    const players: FirebaseListObservable<Player[]> =
      <FirebaseListObservable<Player[]>>this.db.list(this.playerRef);
    return players;
  }

  findPlayerAfterKey(key: string): FirebaseObjectObservable<Player> {
    let foundPlayer: FirebaseObjectObservable<Player> = <FirebaseObjectObservable<Player>>this.db.object(this.playerRef + "/" + key);
    return foundPlayer;
  }
  findAllPlayersInLeague(league: League): Array<FirebaseObjectObservable<Player>> {
    let players: Array<FirebaseObjectObservable<Player>> = new Array<FirebaseObjectObservable<Player>>();
    let player;
    for (player in league.players) {
      players.push(this.findPlayerAfterKey(player));
    }
    return players;
  }
  addPlayer(player: Player): FirebaseObjectObservable<Player> {
    let newPushKey: string = this.playerRef.push().key;
    let updates = {};
    updates["/players/" + newPushKey] = player;

    this.ref.update(updates);
    return this.findPlayerAfterKey(newPushKey);

  }


}
