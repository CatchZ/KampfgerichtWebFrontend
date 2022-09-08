import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-kampfgericht-plan',
  templateUrl: './kampfgericht-plan.component.html',
  styleUrls: ['./kampfgericht-plan.component.css']
})
export class KampfgerichtPlanComponent implements OnInit {
  testData!  :Observable<{Id:number;Text:string}[]>;
  //injecting des Clients
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.testData= this.dataService.getTestData();
  }


  


}