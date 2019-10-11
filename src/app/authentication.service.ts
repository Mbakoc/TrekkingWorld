import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string;

  constructor(private router: Router) { }

  registerTheUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      (response) => {
          this.router.navigate(['/home']);
          firebase.auth().currentUser.getIdToken()
          .then(
          (token: string) => this.token = token
         )
      }
   )
    .catch(
      (error) => console.log(error)
    )
  }
  logInUser(email:string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
       (response) => {
           this.router.navigate(['/home']);
           firebase.auth().currentUser.getIdToken()
           .then(
           (token: string) => this.token = token
          )
       }
    )
    .catch(
      (error) => console.log(error)
    )
  }
  returnToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    )
    return this.token;
  }
  registered(){
    return this.token != null;
  }
  signOutUser(){
    firebase.auth().signOut();
    this.token = null;
  }
}



