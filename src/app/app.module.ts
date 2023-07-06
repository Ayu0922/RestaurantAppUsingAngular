import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTabsModule} from '@angular/material/tabs';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { ContactRecordsGetComponent } from './contact-records-get/contact-records-get.component';
import { UpdateComponent } from './update/update.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginFailedDialogComponent } from './login-failed-dialog/login-failed-dialog.component';
import { LoginRestartJsonDialogComponent } from './login-restart-json-dialog/login-restart-json-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { CustomerFeedbackFormComponent } from './customer-feedback-form/customer-feedback-form.component';
import { CustFeedbackDialogComponent } from './cust-feedback-dialog/cust-feedback-dialog.component';
import { CustViewComponent } from './cust-view/cust-view.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
// import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map/google-map.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';  
// import { MatTimepickerModule } from 'mat-timepicker';
import { 
	IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterPipe } from './pipe/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddRestaurantComponent,
    EditComponent,
    DeleteComponent,
    HomeComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserDashboardComponent,
    ContactRecordsGetComponent,
    UpdateComponent,
    AddOrdersComponent,
              ViewOrdersComponent,
              LoginDialogComponent,
              LoginFailedDialogComponent,
              LoginRestartJsonDialogComponent,
              AddDialogComponent,
              PagenotfoundComponent,
              HeaderComponent,
              OrderDialogComponent,
              CustomerFeedbackFormComponent,
              CustFeedbackDialogComponent,
              CustViewComponent,
              GoogleMapComponent,
              LogoutComponent,
              SidebarComponent,
              FilterPipe
  ],
  imports: [
    BrowserModule,
    ToastrModule,
    //AgmCoreModule ,
    GoogleMapsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatRadioModule,
    MatNativeDateModule,
    IgxTimePickerModule,
    IgxInputGroupModule,
    IgxIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,  
    MatDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSidenavModule,
    // Ng2SearchPipeModule
    // Ng2OrderModule,
    // OrderModule
     
   
  ],
  providers: [AuthGuard,CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
