import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
//wrapped einzele inputs zu einen Form um sie zentral auszuwerten
  loginForm = new FormGroup({
  //: weil wwrapped
  loginName : new FormControl('',Validators.required),
  loginPassword : new FormControl('',Validators.required)
  });
  
  constructor() { }

  onSubmit(){

    // on submit werden alle wete des Forms auf der Kosole ausgegeben
    console.warn(this.loginForm.value);
  }

  ngOnInit() {
  }

}