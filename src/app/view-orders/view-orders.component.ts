import { Component,OnInit} from '@angular/core';
// import { getOrder } from '../get-orders';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
export interface getOrder {
  id:number;
  custname:string;
  custmobile:any;
  custemail:string;
  custlocation:string;
  img:string;
  name:string;
  menu:string;
  price:any;
  owner:string;
  mobile:any;
  email:string;
  location:string;
  date:any;
  time:any;
  
}
@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit{
  allRestaurant:Restaurant[]=[]
  viewAllOrederRecords:getOrder[]=[]
  displayContactRecords:string[]=['id','img','name','menu','price','mobile','location','custname','custmobile','custemail','custlocation','date','time'];
  searchText:any;
  p:number=1;
  date: (new () => Date) | any
  time:any;
  //paginator reflect page no. in URL
paginator(event:any){
  this.p=event;
  this.router.navigate(["view-orders"],{ queryParams: { pageno: this.p } })
  }
constructor(private router:Router,private rs:RestaurantService){}
ngOnInit(): void {
  this.getAllOrderRecords();
}
getAllOrderRecords(){
  this.rs.viewOrderedRecords().subscribe((data)=>{
    this.viewAllOrederRecords=data;
    this.allRestaurant=data;
    console.log(data)
  })
}
}
