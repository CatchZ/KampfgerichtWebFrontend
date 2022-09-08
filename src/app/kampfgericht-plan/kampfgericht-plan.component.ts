import { Component, OnInit } from '@angular/core';
//import { DataService} from '../data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kampfgericht-plan',
  templateUrl: './kampfgericht-plan.component.html',
  styleUrls: ['./kampfgericht-plan.component.css'],
})
export class KampfgerichtPlanComponent implements OnInit {
  testData!: Observable<{ Id: number; Text: string }[]>;
  posts: any;
  //injecting des Clients
  readonly ROOT_URL = 'http://localhost:3000/content/json';
  constructor(private http: HttpClient) {}

  getPosts() {
   this.posts= this.http.get<{ Id: number; Text: string }[]>(this.ROOT_URL);
    //return this.http.get<{Id:number;Text:string}[]>();
  }
  ngOnInit(): void {
    // this.posts = this.dataService.getTestData();
    // this.testData= this.dataService.getTestData();
  }
}
