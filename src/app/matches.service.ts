import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { Match } from "./Shared/Model/match";
import { AngularFireDatabase, FirebaseListObservable, FirebaseRef } from "angularfire2";

@Injectable()
export class MatchesService {


  private ref: firebase.database.Reference;
  private matchRef: firebase.database.Reference;
  constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) {

    this.ref = fb.database().ref();

    this.matchRef = fb.database().ref('matches')

  }

  findAllMatches(): FirebaseListObservable<Match[]> {

    return <FirebaseListObservable<Match[]>>this.db.list(this.matchRef);
  }

  addMatch(match: Match) {
    //get a push key, this is performed localy
    let newPushKey: string = this.matchRef.push().key;
    let playerAKey: string = match.playerA.playerKey;
    let playerBKey: string = match.playerB.playerKey;

    //use a transaction when leagues and points get implemented
    var updates = {};
    updates["/matches/" + newPushKey] = match;
    updates["/players/" + playerAKey + "/matches/" + newPushKey] = "value";
    updates["/players/" + playerBKey + "/matches/" + newPushKey] = "value";

    this.ref.update(updates);
    console.log(updates);
  }


}
