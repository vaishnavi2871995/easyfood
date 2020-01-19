import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from "../user-orders.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-itemavailable',
  templateUrl: './itemavailable.component.html',
  styleUrls: ['./itemavailable.component.css']
})
export class ItemavailableComponent implements OnInit {
  breakfast:any=[];
  lunch:any=[];
  dinner:any=[];
  status:boolean=false;
  item:any;
  price:any;
  type:any=["breakfast","lunch","dinner"];
  val:any;
  obj:any;
  constructor(public userordersservice:UserOrdersService,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.breakfast = this.userordersservice.getBreakfast();
    this.lunch=this.userordersservice.getLunch();
    this.dinner=this.userordersservice.getDinner();
  }
 
  onSave(){
    if (this.val == "breakfast")
       this.userordersservice.addBreakfast(this.obj);
    else if(this.val == "lunch")
    this.userordersservice.addLunch(this.obj);
    else if(this.val == "dinner")
    this.userordersservice.addDinner(this.obj);
    else
    console.log(this.val);
  }
  onclick(){
    this.status=true;

  }
  selectType(val: any) {
   this.val=val;
   this.obj={"item":this.item,"price":this.price,"quantity":0}
   
}

}
