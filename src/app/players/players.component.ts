import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
 })
export class PlayersComponent implements OnInit {
  players$: FirebaseListObservable<any>;
  constructor(public af: AngularFire, private router: Router) {
    this.players$ = af.database.list('players');
};
  ngOnInit(){
  }

  onSubmit(formData) {
    this.players$.push({name:formData.value.playerName, status:false});
  }
}
