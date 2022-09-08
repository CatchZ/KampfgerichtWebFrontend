import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
/**
 * Service to retriev Data
 */
export class DataService {
  readonly ROOT_URL='https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) {}


  getTestData() {
   // return this.http.get<{ Id: number, Text: string }[]>(
     // '/assets/testData.json'
    //);
   //return this.http.get<{Id:number;Text:string}[]>();
  }
}
