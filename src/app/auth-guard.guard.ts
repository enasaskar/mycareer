import { UserService } from './shared/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 
})
export class AuthGuard implements CanActivate {
  bool : boolean;
  constructor(private userservive : UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this.userservive.isUserLoggedIn$.subscribe((b : boolean) => {this.bool = b});
    // console.log(this.bool);
    // return this.bool;
    return this.userservive.getIsUser();
  }
}
