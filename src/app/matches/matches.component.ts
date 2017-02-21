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
  public addMatchForm = this.formBuilder.group(
    {
      playerA: ["", Validators.required],
      playerB: ["", Validators.required],
      dateOfMatch: [this.getCurrentDate(),],
      playerAScoreReg: ["", Validators.required],
      playerBScoreReg: ["", Validators.required],
    }
  );

  constructor(
    public af: AngularFire,
    private router: Router,
    public formBuilder: FormBuilder,
    private playersService: PlayersService,
    private matchesService: MatchesService) {
    this.Players = playersService.findAllPlayers();
    // tslint:disable-next-line:quotemark
    console.log("hei");

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

  ngOnInit() {
  }

  addMatch(event) {
    console.log(this.addMatchForm.value);
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
      formData.dateOfMatch, playerA, playerB, null
    )
    this.matchesService.addMatch(newMatch);

  }
}
