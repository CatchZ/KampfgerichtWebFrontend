import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
/**
 * Service to retriev Data
 */
export class DataService {
  constructor(private http: HttpClient) {}

  getTestData() {
   // return this.http.get<{ Id: number, Text: string }[]>(
     // '/assets/testData.json'
    //);
   return this.http.get<{Id:number;Text:string}[]>('/localhost:3000/content');
  }
}
