import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { CarlistingComponent } from './carlisting/carlisting.component';
import { FooterComponent } from './footer/footer.component';
import { CardetailComponent } from './carlisting/cardetail.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login.component';
import { UserService } from './services/user.service';
import { RegisterSucessComponent } from './user/register-sucess.component';
import { AddtocartComponent } from './carlisting/addtocart.component';
import { ForgotpasswordComponent } from './user/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { UsercarlistingComponent } from './user/usercarlisting.component';
import { CarAcceptComponent } from './carlisting/car-accept.component';
import { AddcarbyuserComponent } from './user/addcarbyuser.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {DataTableModule} from 'angular-6-datatable';
import { EditcarbyuserComponent } from './user/editcarbyuser.component';
import { DeletecarbyuserComponent } from './user/deletecarbyuser.component';
import { UserprofileComponent } from './user/userprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { CarrejectComponent } from './carlisting/carreject.component';
// import file for loader
import { NgxSpinnerModule } from 'ngx-spinner';
import { VerifyregisteremailComponent } from './user/verifyregisteremail.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { DataTablesModule } from 'angular-datatables';
import { OrderhistoryComponent } from './user/orderhistory.component';
import { ImageuploadComponent } from './user/imageupload.component';
import { CarFilterPipe } from './search/car-filter.pipe';

const appRoutes: Routes = [
 // { path: 'home', component: HomeComponent},
 { path: 'user', component: UserComponent },
  { path: 'carlisting', component: CarlistingComponent},
  { path: 'cardetail/:id', component: CardetailComponent},
  { path: 'user', component: UserComponent},
  { path: 'registerSucess', component: RegisterSucessComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addtocart', component: AddtocartComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'home', component: HomeComponent},
  { path: 'usercarlisting', component: UsercarlistingComponent, canActivate: [AuthGuard]},
  { path: 'caraccept', component: CarAcceptComponent},
  { path: 'addcarbyuser', component: AddcarbyuserComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'changepassword', component: ChangepasswordComponent},
  { path: 'carreject', component: CarrejectComponent},
  { path: 'verfiyemail/:email', component: VerifyregisteremailComponent},
  { path: 'carsearch', component: SearchComponent},
   { path: 'orders', component: OrderhistoryComponent},
   { path: 'imageupload/:regid', component: ImageuploadComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CarlistingComponent,
    FooterComponent,
    CardetailComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegisterSucessComponent,
    AddtocartComponent,
    ForgotpasswordComponent,
    HomeComponent,
    UsercarlistingComponent,
    CarAcceptComponent,
    AddcarbyuserComponent,
    ConfirmEqualValidatorDirective,
    AboutusComponent,
    ContactusComponent,
    EditcarbyuserComponent,
    DeletecarbyuserComponent,
    UserprofileComponent,
    ChangepasswordComponent,
    CarrejectComponent,
    VerifyregisteremailComponent,
    SearchComponent,
    OrderhistoryComponent,
    ImageuploadComponent,
    CarFilterPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule ,
     NgxSpinnerModule, // for loader
     DataTablesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
