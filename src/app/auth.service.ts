import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
session:any;
  constructor() { }

  isUserLoggedIn(){
    // return true;
    return !!localStorage.getItem('token');
  }
}
