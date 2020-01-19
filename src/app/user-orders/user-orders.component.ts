import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from "../user-orders.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
breakfast:any=[];
lunch:any=[];
dinner:any=[];
cart:any=[];

  constructor(public userordersservice:UserOrdersService,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
  this.breakfast = this.userordersservice.getBreakfast();
  this.lunch=this.userordersservice.getLunch();
  this.dinner=this.userordersservice.getDinner();
  }
  // retrieveItems(items):any
  // {
  //   this.cart=items.checkList;
  //   this.cart.push(items.checkList);
  // }
  Addcart()
  {
    this.userordersservice.insertOrder(this.cart);
    this.router.navigate(['/showcart']);

  }

  insertOrder(bf,quanitity)
  { 
    bf.quantity=quanitity;
    console.log(bf.item);
    console.log(quanitity);
    console.log(bf.quantity);
   // A={bf,q};
    this.cart.push(bf);
   // this.userordersservice.insertOrder(this.cart);
  }

}
