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
    this.matches = af.database.list('/matches');

  }
  newPlayerName: string;
  error: any;
  players: FirebaseListObservable<any[]>;
  matches: FirebaseListObservable<any[]>;
  ngOnInit() {
  }

  onSubmit(formData) {
    this.matches.push({ PlayerA: 'KanEVC-q8YUM3T6NO7T' });


  }

}
