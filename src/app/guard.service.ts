import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate { 
  canActivate;

  constructor( private authenticationService: AuthenticationService) { }

  canActive( route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authenticationService.registered()
  }
}
