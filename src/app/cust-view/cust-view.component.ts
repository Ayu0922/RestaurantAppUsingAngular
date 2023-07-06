import { Component,OnInit} from '@angular/core';
import { CustomerFeedback } from '../customer-feedback';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cust-view',
  templateUrl: './cust-view.component.html',
  styleUrls: ['./cust-view.component.css']
})
export class CustViewComponent implements OnInit{
viewFeedbackRecords:CustomerFeedback[]=[];
displayContactRecords:string[]=['id','name','email','mobile','location','menu','foodqty','service','clean','speed','rate'];
 searchText:any;
 p:number=1;

 paginator(event:any){
  this.p=event;
  this.router.navigate(["cust-view"],{ queryParams: { pageno: this.p } })
  }

constructor(private rs:RestaurantService,private router:Router){}
ngOnInit(): void {
  this.getAllFeedbackRecords();
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(`lat:${position.coords.latitude}, lan:${position.coords.longitude},accuracy:${position.coords.accuracy}`);
    
   })
}
getAllFeedbackRecords(){
  this.rs.getFeedback().subscribe((data)=>{
    this.viewFeedbackRecords=data;
  
    console.log(data)
  })
}
}
