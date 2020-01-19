import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from "../user-orders.service";


@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
orders:any=[];
bill:number=0;


  constructor(public userordersservice:UserOrdersService) { }

  ngOnInit() {
    this.orders=this.userordersservice.getOrder();
    for(var i=0;i<this.orders.length;i++)
    {
      this.bill=this.bill+(this.orders[i].quantity*this.orders[i].price);
    }
  }
  
//  public totalBill(){
//    for(var i=0;i<this.orders.length;i++)
//    {
//      this.bill=this.bill+(this.orders[i].quantity*this.orders[i].price);
//    }
//  }

  
}
