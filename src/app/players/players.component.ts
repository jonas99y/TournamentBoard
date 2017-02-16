import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Player } from '../Shared/Model/player';
import { FormBuilder, Validators } from '@angular/forms'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  allPlayers: FirebaseListObservable<Player[]>;

  public addPlayerForm = this.formBuilder.group(
    {
      name: ["",Validators.required]
    }
  );

  constructor(public af: AngularFire, private router: Router, private playersService: PlayersService, public formBuilder: FormBuilder) {
    this.allPlayers = playersService.findAllPlayers();
    this.allPlayers.subscribe(snapshot => { console.log(snapshot); });
  };

  ngOnInit() {
  }

  addPlayer(event) {
    let player = new Player(this.addPlayerForm.value.name, null)
    this.playersService.addPlayer(player)
    this.addPlayerForm.value.name="";
  }
}
