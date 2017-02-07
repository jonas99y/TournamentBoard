import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {Player} from "./player";
import {AngularFireDatabase, FirebaseListObservable, FirebaseRef} from "angularfire2";

@Injectable()
export class PlayersService {

  sdkDb:any;

  constructor( private db:AngularFireDatabase) { 
    // this.sdkDb = db.
  }

findAllPlayers():Observable<Player[]> {
        return this.db.list('lessons')
            .do(console.log)
            .map(Player.fromJsonList);
    }


// createNewPlayer(lesson:any): Observable<any> {

//         const lessonToSave = Object.assign({}, lesson, {courseId});

//         const newLessonKey = this.sdkDb.child('lessons').push().key;

//         let dataToSave = {};

//         dataToSave["lessons/" + newLessonKey] = lessonToSave;
//         dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;


//         return this.firebaseUpdate(dataToSave);
//     }

}
