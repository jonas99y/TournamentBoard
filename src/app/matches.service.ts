import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { Match } from "./Shared/Model/match";
import { MatchPlayerData } from './Shared/Model/matchPlayerData';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef } from "angularfire2";

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

  findSingleMatch(matchKey: string): FirebaseObjectObservable<Match> {
    return this.db.object(this.matchRef.child(matchKey));
  }

  addMatch(match: Match): FirebaseObjectObservable<Match> {
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
    return this.findSingleMatch(newPushKey);
  }

  getPoints(pointsA: MatchPlayerData, pointsB: MatchPlayerData): [number, number] {
    let tuple: [number, number];
    if (pointsA.ScoreReg > pointsB.ScoreReg)
      tuple = [3, 0];
    else if (pointsA.ScoreReg < pointsB.ScoreReg)
      tuple = [0, 3];
    else if (pointsA.ScoreOver > pointsB.ScoreOver)
      tuple = [2, 0];
    else if (pointsB.ScoreOver > pointsA.ScoreOver)
      tuple = [0, 2];
    else if (pointsA.ScorePenalties > pointsB.ScorePenalties)
      tuple = [2, 0];
    else if (pointsA.ScorePenalties < pointsB.ScorePenalties)
      tuple = [0, 2];
    else
      tuple = [1, 1];

    console.log(tuple);
    return tuple;

  }

}
