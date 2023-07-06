import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginFailedDialogComponent } from '../login-failed-dialog/login-failed-dialog.component';
import { LoginRestartJsonDialogComponent } from '../login-restart-json-dialog/login-restart-json-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
searchText:any;
  loginForm!:FormGroup
  changetype:boolean=true;
  visible:boolean=true;
  uname:string=''
  password:string=''
    constructor(private formBuilder: FormBuilder, private dialog:MatDialog,private http:HttpClient,private router:Router) { }
  
    ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        uname:[''],
        password:['']
      })
    }
    logIn(){
    
      this.http.get<any>("http://localhost:3000/userlogin").subscribe(res=>{
      const user = res.find((a:any)=>{
        localStorage.setItem('token',"getToken") //authService
        return a.uname === this.loginForm.value.uname && a.password === this.loginForm.value.password
      })
      if(user){
        // alert("You Have Login Successfully !!!");
        const loginConfirm =this.dialog.open( LoginDialogComponent,{
          width: '380px',
         
        });
        this.loginForm.reset();
        this.router.navigate(["user-dashboard"],{ queryParams: { pageno: 'p' }})
      }
      else{
        // alert("Login Failed !! Please Enter Valid Username & Password")
        const loginFailedConfirm =this.dialog.open( LoginFailedDialogComponent,{
          width: '390px',
         
        });
      }
    },err=>{
      // alert("Restart Your JSON Server !!!! ")
      const loginRestartJSONConfirm =this.dialog.open( LoginRestartJsonDialogComponent,{
        width: '380px',
       
      });
    })
    }
    viewpass(){
      this.visible=!this.visible;
      this.changetype=!this.changetype;
    }
}
