import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { LeaguesService } from '../leagues.service';
import { Player } from '../Shared/Model/player';
import { League } from '../Shared/Model/league';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Input('league') league: League;

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
    console.log(this.league);
    let player = new Player(this.addPlayerForm.value.name, null);
    console.log(player);
    this.playersService.addPlayer(player);
    this.addPlayerForm.value.name = "";
    if (this.league != null) {
        this.leaguesService.addPlayerToLeague(this.league,player);
    }
  }
}
