import { Component ,OnInit,Inject} from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { ContactService } from '../service/contact.service';
import { Contact } from '../module/contact';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
export interface Order {
  id:number;
  img:string;
  name:string;
  menu:string;
  mobile:any;
  email:string;
  location:string
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  //to get location
  public show:boolean = false;
  public buttonName:any = 'Show Menu';
  location:any
  filterCategory:any;
  //for searchbar
  public searchTerm : string ='';
  searchKey:string="";
   searchText:any;
  //add paginator
p:number=1;

 //sort by id
key:string ='id';
reverse:boolean=false;
sort(key:any){
this.key =key;
this.reverse =!this.reverse;
}
  allRestaurants:Restaurant[]=[];
  // allOrders:Order[]=[];
  displayedColumns: string[] = ['id', 'img','name', 'menu', 'price','mobile','location','order now'];
 
  // contact us
contactUsRecords:Contact={
  id:0,
   name:'',
   mobile:'',
  email:''
  
}
  constructor(private restaurant:RestaurantService,
              private cont:ContactService,
              private router:Router,
              @Inject(DOCUMENT) 
              private document: Document){}

  ngOnInit():void{

    //call getLocation from restaurant service
// this.restaurant.getLocation().subscribe((res)=>{
//   console.log(res);
 
  
//   this.location=res;
// })

    this.getAllRestaurantOrders();
   //  this.dataSource.paginator = this.paginator
  //  if(!navigator.geolocation){
  //   console.log('location not support !!!')
  //    }
  //    navigator.geolocation.getCurrentPosition((position)=>{
  //     console.log(`lat:${position.coords.latitude}, lan:${position.coords.longitude},city:${position.coords.heading}`);
      
  //    })
   }
   //Scroll to top
   scrollToTop(): void {
    
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Close Menu";
    else
      this.buttonName = "Show Menu";
  }
   getAllRestaurantOrders(){
     this.restaurant.getAll().subscribe((data)=>{
       this.allRestaurants=data;
       console.log(this.allRestaurants)
      console.log("Restaurant API Used i.e. http://localhost:3000/restaurant");
      
     })
   }
  //  filter(category:string){
  //   this.filterCategory =this.allRestaurants
  //   .filter((a:any)=>{
  //     if(a.category == category || category == ''){
  //       return a;
  //     }
  //   })
  //   }
    //paginator reflect page no. in URL
paginator(event:any){
  this.p=event;
  this.router.navigate(["user-dashboard"],{ queryParams: { pageno: this.p } })
  }
   
//add contact us records
contactUs(){
  this.cont.create(this.contactUsRecords).subscribe((data)=>{
   this.router.navigate(["user-dashboard"])
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
// search(event:any){
//   this.searchTerm =(event.target as HTMLInputElement).value;
//   console.log(this.searchTerm);
//   this.restaurant.search.next(this.searchTerm);
// }
}
