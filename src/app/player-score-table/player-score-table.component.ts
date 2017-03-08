import { Component, OnInit, Input } from '@angular/core';
import { TableDataEntity } from '../shared/model/tableDataEntity';
@Component({
  selector: 'app-player-score-table',
  templateUrl: './player-score-table.component.html',
  styleUrls: ['./player-score-table.component.css']
})
export class PlayerScoreTableComponent implements OnInit {


  @Input('tableData') tableData: Array<TableDataEntity>;

  ngOnInit() {
  }

}
