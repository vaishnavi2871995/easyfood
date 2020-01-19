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
  A:any;
  constructor(public userordersservice:UserOrdersService,public generateorderservice: GenerateordernoService) { }

  ngOnInit() {
    this.order=this.userordersservice.getOrder();
    this.orderNo=this.generateorderservice.generateNO();
    //this.vendororders.push(this.orderNo,this.order);
    //this.userordersservice.venderOrders(this.vendororders);
  }
  vendorOrder(){
    //this.vendororders.push(this.orderNo,this.order);
    var ord={
      orderid: this.orderNo,
      ords: this.order
    };
    this.vendororders.unshift(ord);
    console.log(this.vendororders);
    this.userordersservice.venderOrders(this.vendororders);
  }
}
