import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kg-form',
  templateUrl: './kg-form.component.html',
  styleUrls: ['./kg-form.component.css']
})
export class KgFormComponent implements OnInit {
  // kg form wird damit der Host von Formkontroll und kriegt den startwert ''
  // legt fest unter welchen namen es später ans html gebunden werden kann
  date = new FormControl('');
  constructor(private http:HttpClient) { }


  onSubmit(){
   
    this.http.post('http://localhost:3000/api/game',this.date.value)
    .subscribe((result)=>{console.warn("result",result)})
    console.warn(this.date.value)
    const date = this.date.value

  

    
  }

  ngOnInit() {
  }

}