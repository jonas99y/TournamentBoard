import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from '../shared/model/league';
import { LeaguesService } from '../leagues.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-league-overview',
  templateUrl: './league-overview.component.html',
  styleUrls: ['./league-overview.component.css']
})
export class LeagueOverviewComponent implements OnInit {

  public CurrentLeague: FirebaseObjectObservable<League>;
  private sub: any;
  constructor(private route: ActivatedRoute, private leaguesService: LeaguesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.CurrentLeague = this.leaguesService.findSingelLeague(params['leagueKey']);
      this.CurrentLeague.subscribe(yo => console.log(yo));

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
