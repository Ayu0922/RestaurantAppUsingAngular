import { Component,Inject,OnInit} from '@angular/core';
// import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { ContactService } from '../service/contact.service';
import { Contact } from '../module/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
export interface Restaurant {
  id:number;
  img:string;
  name:string;
  owner:string;
  mobile:any;
  email:string;
  location:string
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  windowScrolled!: boolean;
  searchText:any;
  dataSource: any;
  editMode:any;
//  @ViewChild(MatPaginator) paginator : MatPaginator | undefined
allRestaurants:Restaurant[]=[];

displayedColumns: string[] = ['id', 'img','name','menu','price', 'owner', 'mobile','email','location','action'];
//add paginator
p:number=1;

// contact us
contactUsRecords:Contact={
  id:0,
   name:'',
   mobile:'',
  email:''
  
}
 //paginator reflect page no. in URL
paginator(event:any){
this.p=event;
this.router.navigate(["dashboard"],{ queryParams: { pageno: this.p } })
}
constructor(private restaurant:RestaurantService,
            public dialog: MatDialog,
            private cont:ContactService,
            private router:Router,
            @Inject(DOCUMENT) 
            private document: Document,
            private location:Location,public route: ActivatedRoute)
            {
              this.route.queryParams.subscribe(params => {
                this.p = params['pageno'];
            });
            }


ngOnInit():void{
 this.getAllRestaurant();
 if(!navigator.geolocation){
console.log('location not support !!!')
 }
 navigator.geolocation.getCurrentPosition((position)=>{
  console.log(`lat:${position.coords.latitude}, lan:${position.coords.longitude},accuracy:${position.coords.accuracy}`);
  
 })
//  this.dataSource.paginator = this.paginator

}
//Scroll Top
scrollToTop(): void {
  return this.document.body.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start'
  });
}

//get all restaurant in table format
getAllRestaurant(){
  this.restaurant.getAll().subscribe((data)=>{
    this.allRestaurants=data;
    console.log(this.allRestaurants)
    console.log("Restaurant API Used i.e. http://localhost:3000/restaurant");
    
  })
}

 //go back to previous page
goBack() {
  this.location.back();
}

//delete one record
deleteRecord(id:number){
const deleteConfirm =this.dialog.open(DeleteComponent,{
  width: '350px',
  data:{id}
});
deleteConfirm.afterClosed().subscribe((res)=>{
if(res){
this.allRestaurants =this.allRestaurants.filter((_)=>_.id !==id)
}
})
}

//add contact us records
contactUs(){
  this.cont.create(this.contactUsRecords).subscribe((data)=>{
   this.router.navigate(["dashboard"])
alert("Thanks For Connecting Us !!!");
console.log(data)


  })
}
//contact us form reset
resetForm(){
  this.contactUsRecords.name='';
  this.contactUsRecords.email='';
  this.contactUsRecords.mobile='';
  
}

//sort by id
key:string ='id';
reverse:boolean=false;
sort(key:any){
this.key =key;
this.reverse =!this.reverse;
}
}
