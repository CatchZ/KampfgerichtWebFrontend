import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getTestData(){
    return this.http.get<{Id:number;Text:string}[]>('http://localhost:3000/content');
  }
}