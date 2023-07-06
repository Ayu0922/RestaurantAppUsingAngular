import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';
// import { PickerInteractionMode } from 'igniteui-angular';
import { MAT_DATE_FORMATS } from '@angular/material/core';
   
// export const MY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY'
//   },
// };
// import { getOrder } from '../get-orders';
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
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css'],
  // providers: [
  //   { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  // ]
})
export class AddOrdersComponent implements OnInit{
  searchText:any;
  restaurantOrderRecord!:FormGroup
//timepicker
// public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
// public format = 'hh:mm tt';
// public date: Date = new Date();

  allRestaurants:Restaurant[]=[];
  // displayedColumns: string[] = ['id', 'img','name', 'menu', 'price'];
allRestaurant:Restaurant={
  id: 0,
  img: '',
  name: '',
  menu: '',
  price: '',
  mobile: '',
  email: '',
  location: '',
  owner: '', 
  
}
  restaurantOrderRecords:getOrder={
 id:0,
  custname:'',
  custmobile:'',
  custemail:'',
  custlocation:'',
  img: '',
  name: '',
  menu: '',
  price: '',
  mobile: '',
  email: '',
  location: '',
  owner: '',
  date:'',
  time:''

}



//add tooltip
positionOptions: TooltipPosition[] = ['below'];
position = new FormControl(this.positionOptions[0]);

constructor(private rs:RestaurantService,
            private router:Router,
            private dialog:MatDialog,
            private route:ActivatedRoute ,
            private fb:FormBuilder){}
id:any
orderRecords(){
  //add customer details 
  let payload = {
    id:this.restaurantOrderRecords.id,
    custname: this.restaurantOrderRecords.custname,
    custmobile:this.restaurantOrderRecords.custmobile,
  custemail:this.restaurantOrderRecords.custemail,
  custlocation:this.restaurantOrderRecords.custlocation,
  date:this.restaurantOrderRecords.date,
  time:this.restaurantOrderRecords.time,

  name: this.allRestaurant.name,
  menu: this.allRestaurant.menu,
  price: this.allRestaurant.price,
  mobile: this.allRestaurant.mobile,
  email: this.allRestaurant.email,
  location:this.allRestaurant.location,
  img:this.allRestaurant.img
  }
  // var dateToDB=moment(date).formate("YYYY-MM-DD")
  console.log(this.restaurantOrderRecords.custname);
  
  console.log(payload);

  
  this.rs.createOrder(payload).subscribe((data)=>{
  this.router.navigate(["feedback"])
  const orderConfirm =this.dialog.open( OrderDialogComponent,{
    width: '400px',
   
  });
  // alert("Your Order Placed Successfully !!!!!!")
  console.log("One Record Added Successfully !!!!!!")
  console.log(data)
  
  })
  
  
}
ngOnInit(): void {
  console.log("getOrder API Used :- http://localhost:3000/getOrders");
  console.log(moment);
  // MY_DATE_FORMATS.display.dateInput=this.restaurantOrderRecords.date;
//display order by getting ID
  this.route.paramMap.subscribe((params)=>{
    let id=Number(params.get('id'));
    this.getById(id)
  })
}

 date:any;
// getLocaleDateFormat(){
//   moment(this.date).format('dd MM yyyy')
//   console.log(this.date);
//   console.log(moment);
  
// }
getById(id:any){
  this.rs.getbyId(id).subscribe((data:any)=>{
    this.allRestaurant=data
 
 console.log(data);
 })
 navigator.geolocation.getCurrentPosition((position)=>{
  console.log(`lat:${position.coords.latitude}, lan:${position.coords.longitude},accuracy:${position.coords.accuracy}`);
  
 })
}

}
