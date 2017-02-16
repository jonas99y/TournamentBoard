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

    this.matchRef = fb.database().ref('match')

  }

  findAllMatches(): FirebaseListObservable<Match[]> {

    return <FirebaseListObservable<Match[]>>this.db.list(this.matchRef);
  }

  addMatch(match: Match) {
    this.matchRef.push(match);

  }


}
