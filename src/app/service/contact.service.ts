import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../module/contact'; 
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   //get all records
   getAll():Observable<Contact[]>{
    return this.http.get<Contact[]>("http://localhost:3000/contactus")
      }
//add records
create(payload:Contact):Observable<Contact[]>{
  return this.http.post<Contact[]>("http://localhost:3000/contactus",payload)
}
  constructor(private http:HttpClient) { }
}
