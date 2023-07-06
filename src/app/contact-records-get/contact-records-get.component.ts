import { Component,OnInit } from '@angular/core';

import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

//create interface
export interface Contact {
  id:number;
  name:string;
  mobile:any;
  email:string;
}

@Component({
  selector: 'app-contact-records-get',
  templateUrl: './contact-records-get.component.html',
  styleUrls: ['./contact-records-get.component.css']
})
export class ContactRecordsGetComponent  implements OnInit{
  allContactRecords:Contact[]=[];
  displayContactRecords:string[]=['id','name','mobile','email'];
  searchText:any;
  p:number=1;

  //paginator reflect page no. in URL
paginator(event:any){
  this.p=event;
  this.router.navigate(["contact-records-get"],{ queryParams: { pageno: this.p } })
  }
  constructor(private cont:ContactService, private router:Router){}
ngOnInit(): void {
  this.getAllContactRecords();
}
getAllContactRecords(){
  this.cont.getAll().subscribe((data)=>{
    this.allContactRecords=data;
   console.log("ContactService/Contact API Used i.e. http://localhost:3000/contactus");
   
    console.log(data)
  })
}
}
