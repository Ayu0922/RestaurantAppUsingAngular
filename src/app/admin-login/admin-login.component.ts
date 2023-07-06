import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginFailedDialogComponent } from '../login-failed-dialog/login-failed-dialog.component';
import { LoginRestartJsonDialogComponent } from '../login-restart-json-dialog/login-restart-json-dialog.component';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  searchText:any;
  loginForm!:FormGroup
  changetype:boolean=true;
  visible:boolean=true; //to show & hide password
  uname:string=''
  password:string=''


    constructor(private formBuilder: FormBuilder,
                private dialog:MatDialog,
                private http:HttpClient,
                private router:Router,
                private authService:AuthService) { }
  
    ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        uname:['',[Validators.required]],
        password:['',[Validators.required]]
      })
    }

    
    logIn(){
      // this.authService.isUserLoggedIn()
      this.http.get<any>("http://localhost:3000/login").subscribe(res=>{
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
       
        this.router.navigate(["dashboard"],{ queryParams: { pageno: 'p' } })
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
      console.log(err)
    })
    }
    viewpass(){
      this.visible=!this.visible;
      this.changetype=!this.changetype;
    }
}
