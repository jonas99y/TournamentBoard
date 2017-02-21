import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { PlayersComponent } from './players/players.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { MatchesComponent } from './matches/matches.component';
import {PlayersService} from './players.service';
import {MatchesService} from './matches.service';
import {LeaguesService} from './leagues.service';


import {DatepickerModule } from 'angular2-material-datepicker';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueOverviewComponent } from './league-overview/league-overview.component';
import { AddPlayerComponent } from './add-player/add-player.component';




export const firebaseConfig = {
  apiKey: "AIzaSyBxCfbYoG0PeGT78XxiQlB8NFjMsQYpZus",
  authDomain: "tournamentboard-ef914.firebaseapp.com",
  databaseURL: "https://tournamentboard-ef914.firebaseio.com",
  storageBucket: "tournamentboard-ef914.appspot.com",
  messagingSenderId: "1028458045785"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    PlayersComponent,
    MatchesComponent,
    LeaguesComponent,
    LeagueOverviewComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    DatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    PlayersService,
    MatchesService,
    LeaguesService
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
