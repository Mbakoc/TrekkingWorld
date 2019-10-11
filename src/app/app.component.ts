import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TrekkingWorld';

  constructor (private authenticationService: AuthenticationService,
              private router:Router){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCiE15ebsTtp0o5CfTtTXAfRcEETx-01i0",
      authDomain: "trekkingf-84b29.firebaseapp.com",
      projectId: "trekkingf-84b29"

    });
  } 
  signOut(){
    this.authenticationService.signOutUser();
    this.router.navigate(['/signin']);
  }
 
}
