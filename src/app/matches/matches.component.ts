import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Player } from '../Shared/Model/player';
import { Match } from '../Shared/Model/match';
import { MatchPlayerData } from '../Shared/Model/matchPlayerData';
import { PlayersService } from '../players.service';
import { MatchesService } from '../matches.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

export class MatchesComponent implements OnInit {

  public Players: FirebaseListObservable<Player[]>;
  

  constructor(
    public af: AngularFire,
    private router: Router,
    public formBuilder: FormBuilder,
    private playersService: PlayersService,
    private matchesService: MatchesService) {
    this.Players = playersService.findAllPlayers();

  }

 

  ngOnInit() {
  }

  
}
