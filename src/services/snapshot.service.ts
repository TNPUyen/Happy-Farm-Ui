import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  constructor(public afs:AngularFirestore) { }
  
}
