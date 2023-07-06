import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<AddRestaurantComponent>{
  CanDeactivate(component:AddRestaurantComponent,
                currentRouter:ActivatedRouteSnapshot,
                currentState:RouterStateSnapshot,
                nextState:RouterStateSnapshot)
  {
return true;
  }
 
  constructor() { }
  canDeactivate(component:AddRestaurantComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
}
