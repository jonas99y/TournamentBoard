import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { Match } from "./Shared/Model/match";
import { League } from "./Shared/Model/league";
import { AngularFireDatabase, FirebaseListObservable, FirebaseRef } from "angularfire2";
@Injectable()
export class LeaguesService {

  private ref: firebase.database.Reference;
  private leagueRef: firebase.database.Reference;
  constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) {

    this.ref = fb.database().ref();

    this.leagueRef = fb.database().ref('leagues')

  }

  findAllLeagues(): FirebaseListObservable<League[]> {

    return <FirebaseListObservable<League[]>>this.db.list(this.leagueRef);
  }

  addLeague(league: League) {
    //get a push key, this is performed localy
    let newPushKey: string = this.leagueRef.push().key;
    // let playerAKey: string = match.playerA.playerKey;
    // let playerBKey: string = match.playerB.playerKey;

    var updates = {};
    updates["/leagues/" + newPushKey] = league;
   

    this.ref.update(updates);
    console.log(updates);
  }

}
