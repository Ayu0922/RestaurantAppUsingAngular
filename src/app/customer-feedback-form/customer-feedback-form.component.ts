import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomerFeedback } from '../customer-feedback';
import { RestaurantService } from '../restaurant.service';
import { CustFeedbackDialogComponent } from '../cust-feedback-dialog/cust-feedback-dialog.component';
@Component({
  selector: 'app-customer-feedback-form',
  templateUrl: './customer-feedback-form.component.html',
  styleUrls: ['./customer-feedback-form.component.css']
})
export class CustomerFeedbackFormComponent implements OnInit{
  customerFeedbackRecord!:FormGroup
 
  customerFeedback:CustomerFeedback={
  id:0,
  name: '',
  menu: '',
  mobile: '',
  email: '',
  location: '',
  foodqty:'',
  service:'',
  clean:'',
  speed:'',
  rate:''

}
constructor(private rs:RestaurantService,
            private router:Router,
            private dialog:MatDialog,){}

            addFeedback(){
              this.rs.addFeedback(this.customerFeedback).subscribe((data)=>{
            this.router.navigate(["user-dashboard"])
            const addConfirm =this.dialog.open( CustFeedbackDialogComponent ,{
              width: '420px',
             
            });
            // alert("One Record Added Successfully !!!!!!")
            console.log("Your Feedback is Added Successfully !!!!!!")
            console.log(data)
              })
            }
            ngOnInit(): void {
              navigator.geolocation.getCurrentPosition((position)=>{
                console.log(`lat:${position.coords.latitude}, lan:${position.coords.longitude},accuracy:${position.coords.accuracy}`);
                
               })
            }
}
