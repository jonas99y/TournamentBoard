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
    this.players = af.database.list('/players');
    console.log(this.players.first())
  }
  newPlayerName: string;
  error: any;
  players: FirebaseListObservable<any[]>;
  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {

      this.players.push({ name: formData.value.playerName, status: true });

    }
  }

}
