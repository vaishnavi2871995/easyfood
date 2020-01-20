import { Component, OnInit } from '@angular/core';
import { VendorService } from "../vendor.service";
import { UserOrdersService } from "../user-orders.service";
@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit {

  orders:any=[];
  orderArray:any=[];
  orderID:any;
  orderBill:any;
  totalCollection:number=0;
  constructor(public vendorservice:VendorService,public userordersservice:UserOrdersService) { 
   

  }

  ngOnInit() {
    this.orders=this.userordersservice.getVendorOrders();
    console.log(this.orders);

    this.orders.forEach(order => {     
      console.log(this.orderBill);
      order.forEach(o => {
        this.orderID=o.orderid;
        this.orderBill=o.bill;
        console.log(this.orderID);
        console.log(this.orderBill);
        this.orderArray.push({"orderID":this.orderID,"bill":this.orderBill});
        this.totalCollection=this.totalCollection+this.orderBill;
      });
    });
  }
  

}
