import { Component, OnInit } from '@angular/core';
import { VendorService } from "../vendor.service";
import { UserOrdersService } from "../user-orders.service";

@Component({
  selector: 'app-vendororders',
  templateUrl: './vendororders.component.html',
  styleUrls: ['./vendororders.component.css']
})
export class VendorordersComponent implements OnInit {
vendororders:any=[];
  constructor(public vendorservice:VendorService,public userordersservice:UserOrdersService) { }

  ngOnInit() {
    this.vendororders=this.userordersservice.getVendorOrders();
  }


}
