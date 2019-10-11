import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  signupForm: FormGroup; 

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(null, Validators.required),
      'textarea': new FormControl(null,Validators.required)
    });
  }
  onPosalji(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  
  latitude = 45.2671;
  longitude = 19.8335;

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

}
