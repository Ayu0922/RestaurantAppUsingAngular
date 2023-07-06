import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{
  searchText:any;
  restaurantRecord!:FormGroup
 
restaurantRecords:Restaurant={
  id: 0,
  img: '',
  name: '',
  menu: '',
  price: '',
  owner: '',
  mobile: '',
  email: '',
  location: '',
  // custname:'',
  // custmobile:'',
  // custemail:'',
  // custlocation:'',
}
//add tooltip
positionOptions: TooltipPosition[] = ['below'];
position = new FormControl(this.positionOptions[0]);

constructor(private rs:RestaurantService,
            private router:Router,
             private dialog:MatDialog
          ){}

addRecords(){
  this.rs.create(this.restaurantRecords).subscribe((data)=>{
this.router.navigate(["dashboard"])
const addConfirm =this.dialog.open(AddDialogComponent ,{
  width: '380px',
 
});
// alert("One Record Added Successfully !!!!!!")
console.log("One Record Added Successfully !!!!!!")
console.log(data)
  })
}
ngOnInit(): void {
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(`lat:${position.coords.latitude}, lan:${position.coords.longitude},accuracy:${position.coords.accuracy}`);
    
   })
}

}
