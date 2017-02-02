import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {
    this.players = af.database.list('/players');
    this.matches = af.database.list('matches');

  }
  newPlayerName: string;
  error: any;
  date:any;
  players: FirebaseListObservable<any[]>;
  matches: FirebaseListObservable<any[]>;
  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(formData.value);
    console.log(this.date);
    this.matches.push({
      PlayerA: formData.value.playerA,
      PlayerB: formData.value.playerB,
      ScoreA : formData.value.scoreA,
      ScoreB: formData.value.scoreB,
      Date: this.date });


  }

}
