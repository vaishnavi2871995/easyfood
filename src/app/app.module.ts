import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { OrdersComponent } from './orders/orders.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
//import { orders } from "./orderse.service";
import { UserOrdersService } from "./user-orders.service";
import { ShowcartComponent } from './showcart/showcart.component';
import { DisplayorderComponent } from './displayorder/displayorder.component';
import { GenerateordernoComponent } from './generateorderno/generateorderno.component';
import { GenerateordernoService } from "./generateorderno.service";
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorService } from "./vendor.service";
import { VendorordersComponent } from './vendororders/vendororders.component';
import { ItemavailableComponent } from './itemavailable/itemavailable.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    UserOrdersComponent,
    ShowcartComponent,
    DisplayorderComponent,
    GenerateordernoComponent,
    VendorloginComponent,
    VendorordersComponent,
    ItemavailableComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [UserService,UserOrdersService,GenerateordernoService,VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
