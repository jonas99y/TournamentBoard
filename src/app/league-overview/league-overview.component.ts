import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from "rxjs/Rx";
import { League } from '../shared/model/league';
import { Player } from '../shared/model/player';
import { LeaguesService } from '../leagues.service';
import { PlayersService } from '../players.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-league-overview',
  templateUrl: './league-overview.component.html',
  styleUrls: ['./league-overview.component.css']
})
export class LeagueOverviewComponent implements OnInit {

  public Players: Observable<Player>;
  public CurrentLeague: FirebaseObjectObservable<League>;
  private sub: any;
  constructor(private route: ActivatedRoute, private leaguesService: LeaguesService, private playersService: PlayersService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.CurrentLeague = this.leaguesService.findSingelLeague(params['leagueKey']);
    });
    // this.CurrentLeague.subscribe(x => console.log(x));
    // this.CurrentLeague.subscribe(x => { return this.playersService.findAllPlayersInLeague(x).subscribe(y => console.log(y)) });

    this.CurrentLeague.subscribe(x => this.Players = this.playersService.findAllPlayersInLeague(x));
    this.CurrentLeague.subscribe(x => this.playersService.findAllPlayersInLeague(x).subscribe(y=> console.log("hier"+y)));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
