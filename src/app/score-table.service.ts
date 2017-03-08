import { Injectable } from '@angular/core';
import { TableDataEntity } from './shared/model/tableDataEntity';
import { PlayersService } from './players.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef } from "angularfire2";

@Injectable()
export class ScoreTableService {

  constructor(private db: AngularFireDatabase, private playersService: PlayersService) { }


  public getTableData(ref: firebase.database.Reference): Array<TableDataEntity> {
    const entities: Array<TableDataEntity> = []
    console.log(ref);
    if (ref.key == "players") {
      this.db.list(ref).subscribe(x => x.forEach(y => {
        const entity = new TableDataEntity();
        entity.matches = y.matchesCount;
        entity.points = y.points;
        this.playersService.findPlayerAfterKey(y.$key).subscribe(z => entity.name = z.name);

        entities.push(entity);
      }
      ));
    }

    return entities;
  }
}
