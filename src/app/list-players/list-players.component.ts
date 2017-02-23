import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Player } from '../shared/model/player';


@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {


  @Input('players') players: Observable<Player>;


  constructor() { }

  ngOnInit() {
  }

}
