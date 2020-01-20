import { Injectable } from '@angular/core';
@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class UserOrdersService {
  breakfast:any=[{"item":"Upma","price":25,"quantity":0},
  {"item":"Poha","price":20,"quantity":0},
  {"item":"Idli","price":25,"quantity":0}];
  Lunch:any=[{"item":"Thali","price":50,"quantity":0},
  {"item":"Combo","price":30,"quantity":0},
  {"item":"Frice","price":40,"quantity":0}];
  Dinner:any=[{"item":"Thali","price":50,"quantity":0},
  {"item":"Combo","price":30,"quantity":0}
  ];
  vendororders:any=[];
  orders:any=[];
totalBill:any;
user:any;


  constructor() { }

  public getBreakfast():any{
    return this.breakfast;
  }
  public getLunch():any{
    return this.Lunch;
  }
  public getDinner():any{
    return this.Dinner;
  }

  public addBill(bill:any)
  {
    this.totalBill=bill;

  }
  public insertOrder(userorder:any)
  {
    this.orders=userorder;
  }

  public getOrder():any
  {
    return this.orders;
  }
  public addBreakfast(obj:any)
  {
    this.breakfast.push(obj);
  }
  public addLunch(obj:any)
  {
    this.Lunch.push(obj);
  }
  public addDinner(obj:any)
  {
    this.Dinner.push(obj);
  }
  public setUser(user:any)
  {
    this.user=user;
  }
  public venderOrders(o:any){
    console.log(o);
    this.vendororders.unshift(o);
    console.log(this.vendororders);
  }
  public getVendorOrders(){
    return this.vendororders;
  }
}
