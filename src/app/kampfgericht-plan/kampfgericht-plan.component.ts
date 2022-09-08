import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kampfgericht-plan',
  templateUrl: './kampfgericht-plan.component.html',
  styleUrls: ['./kampfgericht-plan.component.css']
})
export class KampfgerichtPlanComponent implements OnInit {

  //injecting des Clients
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}