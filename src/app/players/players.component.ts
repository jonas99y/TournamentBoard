import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import {PlayersService} from '../players.service';
import {Player} from '../player';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
 })
export class PlayersComponent implements OnInit {
  players$: Observable<Player[]>;
  constructor(public af: AngularFire, private router: Router, private playersService: PlayersService) {
    this.players$ = playersService.findAllPlayers();
};
  ngOnInit(){
  }

  onSubmit(formData) {
    // this.players$.({name:formData.value.playerName, status:false});
  }
}
