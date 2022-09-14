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
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}