import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Restaurant} from './restaurant'
import { Order } from './order';
import { getOrder } from './get-orders';
import{Observable} from 'rxjs';
import { CustomerFeedback } from './customer-feedback';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public search =new BehaviorSubject<string>(""); //act as both Observable & Emitteer

  searchText:any;
  constructor(private http:HttpClient) { }

 
//get customer feedback
getFeedback():Observable<CustomerFeedback[]>{
  return this.http.get<CustomerFeedback[]>("http://localhost:3000/feedback")
}
//customer feedback records
addFeedback(payload:CustomerFeedback):Observable<CustomerFeedback[]>{
  return this.http.post<CustomerFeedback[]>("http://localhost:3000/feedback",payload)
}
 //get all user order records
 getAllUserOrders():Observable<Order[]>{
  return this.http.get<Order[]>("http://localhost:3000/order")
    }
      //add Ordered records
  createOrder(payload:any):Observable<getOrder[]>{
    return this.http.post<getOrder[]>("http://localhost:3000/getOrders",payload)
  }
  //add Ordered records
  viewOrderedRecords():Observable<getOrder[]>{
    return this.http.get<getOrder[]>("http://localhost:3000/getOrders")
  }


  //get all restaurant records
  getAll():Observable<Restaurant[]>{
return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants")
  }
  //add records
  create(payload:Restaurant):Observable<Restaurant[]>{
    return this.http.post<Restaurant[]>("http://localhost:3000/Restaurants",payload)
  }
  

  //get records by id
  getbyId(id:number):Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(`http://localhost:3000/Restaurants/${id}`);
  }

  //update or edit record
  update(payload:Restaurant):Observable<Restaurant[]>{
    return this.http.put<Restaurant[]>(`http://localhost:3000/Restaurants/${payload.id}`,payload);
  }

  //delete records
  delete(id:number){
    return this.http.delete(`http://localhost:3000/Restaurants/${id}`);
  }

  //for location
  getLocation(){
    return this.http.get('https://ipapi.co/json/')
  }
}
