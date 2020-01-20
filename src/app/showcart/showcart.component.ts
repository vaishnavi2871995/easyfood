import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from "../user-orders.service";
import { UserService } from '../user.service';

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


  constructor(public userordersservice:UserOrdersService,public userService:UserService) { }

  ngOnInit() {
    this.orders=this.userordersservice.getOrder();
    for(var i=0;i<this.orders.length;i++)
    {
      this.bill=this.bill+(this.orders[i].quantity*this.orders[i].price);
    }
    console.log(this.bill);

  }
  public pay(username,amount)
  {
      
  }
  
//  public totalBill(){
//    for(var i=0;i<this.orders.length;i++)
//    {
//      this.bill=this.bill+(this.orders[i].quantity*this.orders[i].price);
//    }
//  }

  
}
