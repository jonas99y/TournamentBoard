import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
@Component({
  selector: 'app-player-score-table',
  templateUrl: './player-score-table.component.html',
  styleUrls: ['./player-score-table.component.css']
})
export class PlayerScoreTableComponent implements OnInit {

  private gridOptions: GridOptions;
  constructor() {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [
      {
        headerName: 'Player',
        field: 'player'
      },
      {
        headerName: 'Score',
        field: 'score'
      }
    ];
    this.gridOptions.rowData = [
      { player: "Jonas", score: "100" },
      { player: "Sepli", score: "13" },
      { player: "Adrian", score: "78" }

    ]
  }

  ngOnInit() {
  }

}
