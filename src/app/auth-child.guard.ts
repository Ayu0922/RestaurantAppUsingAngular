import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private authService:AuthService,private router:Router){}
  canActivateChild(){
    if(this.authService.isUserLoggedIn()){
      return true;
    }
  
    this.router.navigate(['user-login'])
    return false;
   
  }
  }

