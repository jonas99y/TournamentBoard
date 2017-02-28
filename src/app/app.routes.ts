import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { PlayersComponent } from './players/players.component';
import { MatchesComponent } from './matches/matches.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueOverviewComponent } from './league-overview/league-overview.component';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
    { path: 'matches', component: MatchesComponent, canActivate: [AuthGuard] },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'leagues', component: LeaguesComponent, canActivate: [AuthGuard] },
    { path: 'league-overview/:leagueKey', component: LeagueOverviewComponent },
    { path: 'player-overview/:playerKey', component: PlayerOverviewComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);