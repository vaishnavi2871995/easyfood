import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ShowcartComponent } from './showcart/showcart.component';
import { DisplayorderComponent } from './displayorder/displayorder.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorordersComponent } from './vendororders/vendororders.component';
import { ItemavailableComponent } from "./itemavailable/itemavailable.component";
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminordersComponent } from "./adminorders/adminorders.component";
import {  AdminrechargeComponent} from "./adminrecharge/adminrecharge.component";


const routes: Routes = [
  {path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'userOrder/:id',component:UserOrdersComponent},
{path:'showcart/:id',component:ShowcartComponent},
{path:'displayorder',component:DisplayorderComponent},
{path:'vendorlogin',component:VendorloginComponent},
{path:'vendororder',component:VendorordersComponent},
{path:'itemavailable',component:ItemavailableComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'adminorder',component:AdminordersComponent},
{path:'adminrecharge',component:AdminrechargeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
