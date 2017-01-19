import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class PlayersComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {
    af.database.list('/players').first().subscribe(players => {
      this.allPlayers = players;
    });

    console.log(this.players.first())
    this.players.first().subscribe(x => console.log(x[0].name));
  }
  newPlayerName: string;
  error: any;
  playerName: string;
  players: any[];
  allPlayers: any[];
  ngOnInit() {
  }

  filterPlayers(){
      this.players = this.allPlayers.filter((player: any, index: number): boolean => {
        return this.playerName == player.name;
      });
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.players.push({ name: formData.value.playerName, status: true });
    }
  }
}
