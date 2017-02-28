import { Component, OnInit, Input } from '@angular/core';
import { League } from '../shared/model/league';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-leagues',
  templateUrl: './list-leagues.component.html',
  styleUrls: ['./list-leagues.component.css']
})
export class ListLeaguesComponent implements OnInit {

  @Input('leagues') leagues: Array<League>;

  constructor() { }

  ngOnInit() {
  }

}
