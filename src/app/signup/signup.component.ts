import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private autentifikacijaService:  AuthenticationService) { }

  ngOnInit() {
  }
  
  register(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.autentifikacijaService.registerTheUser(email, password);
 }
   
}
