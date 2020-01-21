import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from "../user-orders.service";
import { GenerateordernoService } from "../generateorderno.service";

@Component({
  selector: 'app-displayorder',
  templateUrl: './displayorder.component.html',
  styleUrls: ['./displayorder.component.css']
})
export class DisplayorderComponent implements OnInit {

  order:any[];
  orderNo:number=0;
  vendororders:any=[];
  bill:number=0;
  A:any;
  constructor(public userordersservice:UserOrdersService,public generateorderservice: GenerateordernoService) { }

  ngOnInit() {
    this.order=this.userordersservice.getOrder();
    for(var i=0;i<this.order.length;i++)
    {
      this.bill=this.bill+(this.order[i].quantity*this.order[i].price);
    }
    this.orderNo=this.generateorderservice.generateNO();
    //this.vendororders.push(this.orderNo,this.order);
    //this.userordersservice.venderOrders(this.vendororders);
   
    console.log(this.bill);
  }
  vendorOrder(){
    //this.vendororders.push(this.orderNo,this.order);
    var ord={
      orderid: this.orderNo,
      bill: this.bill,
      ords: this.order
      
    };
    console.log(ord);
    this.vendororders.unshift(ord);
    console.log(this.vendororders);
    this.userordersservice.venderOrders(this.vendororders);
  }
}
