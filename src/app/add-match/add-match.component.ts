import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { LeaguesService } from '../leagues.service';
import { MatchesService } from '../matches.service';
import { Player } from '../Shared/Model/player';
import { League } from '../Shared/Model/league';
import { Match } from '../Shared/Model/match';
import { MatchPlayerData } from '../Shared/Model/matchPlayerData';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  @Input('league') league: FirebaseObjectObservable<League>;
  @Input('players') players: FirebaseListObservable<Player>;
  @Output('matchAdded') matchAdded = new EventEmitter();

  public addMatchForm = this.formBuilder.group(
    {
      playerA: ["", Validators.required],
      playerB: ["", Validators.required],
      dateOfMatch: [this.getCurrentDate(),],
      playerAScoreReg: ["", Validators.required],
      playerBScoreReg: ["", Validators.required],
    }
  );


  constructor(public formBuilder: FormBuilder, public matchesService: MatchesService, public leaguesService: LeaguesService) { }

  ngOnInit() {
  }

  addMatch(event) {
    console.log("we should add a match now")
    let formData = this.addMatchForm.value;
    let playerA: MatchPlayerData = new MatchPlayerData(
      formData.playerA,
      formData.playerAScoreReg,
      formData.playerAScoreReg,
      formData.playerAScoreReg,
    );
    let playerB: MatchPlayerData = new MatchPlayerData(
      formData.playerB,
      formData.playerBScoreReg,
      formData.playerBScoreReg,
      formData.playerBScoreReg,

    );
    let newMatch: Match = new Match(
      formData.dateOfMatch, playerA, playerB
    );
    this.leaguesService.addMatchToLeague(this.league.$ref.key, newMatch);

  }

  private getCurrentDate(): string {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let dds: string = dd + "";
    let mms: string = mm + "";
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dds = '0' + dd;
    }
    if (mm < 10) {
      mms = '0' + mm;
    }
    return yyyy + '-' + mms + '-' + dds;
  }

}
