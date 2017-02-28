import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/model/player';
import { FirebaseObjectObservable } from 'angularfire2';
import { PlayersService } from '../players.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.css']
})
export class PlayerOverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private playerService:PlayersService) { }
  private sub: any;
  public CurrentPlayer: FirebaseObjectObservable<Player>;

 ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.CurrentPlayer = this.playerService.findPlayerAfterKey(params['playerKey']);
    });
    // this.CurrentLeague.subscribe(x => { this.Players = this.playersService.findAllPlayersInLeague(x) });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
