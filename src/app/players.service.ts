import { Injectable, Inject } from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {Player} from "./player";
import {AngularFireDatabase, FirebaseListObservable, FirebaseRef} from "angularfire2";

@Injectable()
export class PlayersService {


  private ref: firebase.database.Reference;
  private playerRef: firebase.database.Reference;
  constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) { 
    
    this.ref = fb.database().ref();
    
    this.playerRef = fb.database().ref('players')
    
  }

  findAllPlayers(): FirebaseListObservable<Player[]> {
    
    return <FirebaseListObservable<Player[]>> this.db.list(this.playerRef);
  }
  
    addPlayer(player:Player){
      this.playerRef.push(player);
     
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
