import { Component, OnInit } from '@angular/core';
import { League } from '../shared/model/league';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

import { LeaguesService } from '../leagues.service';


@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  public addLeagueForm = this.formBuilder.group(
    {
      leagueName: ["", Validators.required],
      parentLeague: [""]

    }
  )

  public Leagues: FirebaseListObservable<League[]>
  constructor(private leaguesService: LeaguesService, private formBuilder: FormBuilder, public af: AngularFire) {

    this.Leagues = this.leaguesService.findAllLeagues();
  }
  ngOnInit() {
  }


  addLeague(event) {
    let formdata = this.addLeagueForm.value;
    let adminKey = this.af.auth.getAuth().uid;
    let newLeague: League = new League(
      formdata.leagueName,
      { [adminKey]:"value" },
      null,
      null,
      null,
      null);


    console.log(newLeague);
    this.leaguesService.addLeague(newLeague);


  }
}
