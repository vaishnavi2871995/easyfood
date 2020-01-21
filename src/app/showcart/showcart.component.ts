import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from "../user-orders.service";
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
orders:any=[];
bill:number=0;
username:any;
amount:any;
id:any;
msg:any="";


  constructor(public userordersservice:UserOrdersService,public userService:UserService,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.orders=this.userordersservice.getOrder();
    this.id=this._router.snapshot.paramMap.get("id");
    for(var i=0;i<this.orders.length;i++)
    {
      this.bill=this.bill+(this.orders[i].quantity*this.orders[i].price);
    }
    console.log(this.bill);

  }
  public pay()
  {
    if(this.userService.payUser(this.id,this.amount))
    {
      this.msg="payment successfully done";
    }
    else{
      this.msg="payment failed";
    }
      
  }
  
//  public totalBill(){
//    for(var i=0;i<this.orders.length;i++)
//    {
//      this.bill=this.bill+(this.orders[i].quantity*this.orders[i].price);
//    }
//  }

  
}
