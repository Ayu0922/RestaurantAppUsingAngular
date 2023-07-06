import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { UpdateComponent } from '../update/update.component';
import { RestaurantService } from '../restaurant.service';
import {MatDialog} from '@angular/material/dialog';


// import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  searchText:any; //searchbar
  //paginations
p:number=1; 
pageNo:number=1;
  restaurantRecords:Restaurant={
    id:0,
    img:'',
    name:'',
    menu:'',
    price:'',
    owner:'',
    mobile:'',
    email:'',
    location:'',
  
    
  }

  constructor(private rs:RestaurantService,
              private route:ActivatedRoute,
              private router:Router,
              private dialog:MatDialog,
              ){}

              
  allRestaurants:Restaurant[]=[];
  ngOnInit():void{
this.route.paramMap.subscribe((params)=>{
  let id=Number(params.get('id'));
  this.pageNo=Number(params.get('p'));
  console.log(this.pageNo);
  
  this.getById(id)
})
  }
  //fetch data by ID 
  getById(id:any){
    this.rs.getbyId(id).subscribe((data:any)=>{
      this.restaurantRecords=data
   
   console.log(data);
   })
  }

  updateRecord(){
    this.rs.update(this.restaurantRecords).subscribe(()=>
    {
      this.router.navigate(['dashboard'],{ queryParams: { pageno: this.pageNo } });
      console.log("Record Updated Successfully !!!");
      console.log(this.restaurantRecords)
      
      const updateConfirm =this.dialog.open(UpdateComponent,{
        width: '380px',
       
      });
     console.log(updateConfirm)
      // alert("Record Updated Successfully !!!")
    })
  }
}
