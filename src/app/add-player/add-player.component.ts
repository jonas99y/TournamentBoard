import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { LeaguesService } from '../leagues.service';
import { Player } from '../Shared/Model/player';
import { League } from '../Shared/Model/league';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Input('league') league: FirebaseObjectObservable<League>;

  @Output() playerAdded = new EventEmitter();
  public addPlayerForm = this.formBuilder.group(
    {
      name: ['', Validators.required]
    }
  );
  ngOnInit() {
  }

  constructor(public af: AngularFire,
    private router: Router,
    private playersService: PlayersService,
    public formBuilder: FormBuilder,
    public leaguesService: LeaguesService
  ) {
  };

  addPlayer(event) {
    const player = new Player(this.addPlayerForm.value.name, null);
    const newPlayer: FirebaseObjectObservable<Player>= this.playersService.addPlayer(player);
    this.playerAdded.emit(newPlayer);
  }
}
