import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactRecordsGetComponent } from './contact-records-get/contact-records-get.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { CustomerFeedbackFormComponent } from './customer-feedback-form/customer-feedback-form.component';
import { CustViewComponent } from './cust-view/cust-view.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AuthGuard } from './auth.guard';
import { UserAuthGuard } from './user-auth.guard';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
  children: [
    { path: 'delete', component:DeleteComponent }
  ]
}, //using AuthGuard
  // {path:'add-restaurant',component:AddRestaurantComponent,canDeactivate:[CanDeactivateGuardService]},
  {path:'add-restaurant',component:AddRestaurantComponent},
  {path:'feedback',component:CustomerFeedbackFormComponent},
  {path:'edit/:id/:p',component:EditComponent},
  {path:'delete',component:DeleteComponent},
  {path:'home',component:HomeComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-dashboard',component:UserDashboardComponent,canActivate:[UserAuthGuard]},//using AuthGuard
  {path:'view-orders',component:ViewOrdersComponent},
  {path:'cust-view',component:CustViewComponent},
  {path:'add-order/:id',component:AddOrdersComponent},
  {path:'contact-records-get',component:ContactRecordsGetComponent},
  {path:'google-map',component:GoogleMapComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
