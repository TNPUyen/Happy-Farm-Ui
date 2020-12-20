import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {SnapshotService} from '../../services/snapshot.service'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalAngularPackages:any;
  constructor(private http:HttpClient,private ss:SnapshotService,private afs:AngularFirestore) { }
  ngOnInit(): void {
     
    // this.http.post('http://localhost:6969/api/getData','').subscribe(data => {
    //   this.totalAngularPackages =data ;
      this.afs.collection("users-HPF").doc("HP").snapshotChanges().subscribe(doc=>{
        this.totalAngularPackages=doc.payload.data();
        console.log(this.totalAngularPackages);
      })
    
  }
}
  
  
  


