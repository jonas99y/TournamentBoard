import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from "rxjs/Rx";
import { League } from '../shared/model/league';
import { TableDataEntity } from '../shared/model/tableDataEntity';
import { Player } from '../shared/model/player';
import { Match } from '../shared/model/match';
import { LeaguesService } from '../leagues.service';
import { PlayersService } from '../players.service';
import { ScoreTableService } from '../score-table.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-league-overview',
  templateUrl: './league-overview.component.html',
  styleUrls: ['./league-overview.component.css']
})
export class LeagueOverviewComponent implements OnInit {

  public Players: Array<FirebaseObjectObservable<Player>>;
  public CurrentLeague: FirebaseObjectObservable<League>;
  public TableData: Array<TableDataEntity>;

  private sub: any;
  constructor(private route: ActivatedRoute,
    private leaguesService: LeaguesService,
    private playersService: PlayersService,
    private scoreTableService: ScoreTableService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.CurrentLeague = this.leaguesService.findSingelLeague(params['leagueKey']);
    });
    this.CurrentLeague.subscribe(x => { this.Players = this.playersService.findAllPlayersInLeague(x); });
    this.TableData = this.scoreTableService.getTableData(this.CurrentLeague.$ref.child("players"));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  handlePlayerAdded(player: FirebaseObjectObservable<Player>) {
    this.leaguesService.addPlayerToLeague(this.CurrentLeague.$ref.key, player.$ref.key);
  }
  handleMatchAdded(match: FirebaseObjectObservable<Match>) {
    //may handle something
  }

}
