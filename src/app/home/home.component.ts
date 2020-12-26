import { NumberSymbol } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {SnapshotService} from '../../services/snapshot.service'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  totalAngularPackages:any;
  status: string;
  constructor(private http:HttpClient,private ss:SnapshotService,private afs:AngularFirestore) { }

  ngOnInit(): void {
     
    // this.http.post('http://localhost:6969/api/getData','').subscribe(data => {
    //   this.totalAngularPackages =data ;
      this.afs.collection("users-HPF").doc("HP").snapshotChanges().subscribe(doc=>{
        this.totalAngularPackages=doc.payload.data();
        console.log(this.totalAngularPackages);
        if(this.totalAngularPackages.humid < 60){
          this.status = "The humidity is low. Plants are being watered"
        }else if(this.totalAngularPackages.humid >= 60 && this.totalAngularPackages.humid <= 70){
          this.status = "Everthing is normal now"
        }else(
          this.status = "Warning!!! The humidity is too high"
        )
      })

      let button = <HTMLElement>document.body.querySelector(".btn");

      
      button.addEventListener("click", () => {
        this.status = "The plants are being watered"
      })
      // button.removeEventListener("click", () => {
      //   this.status = "hello"
      // })
  }
}
  
  
  


