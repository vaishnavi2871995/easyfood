import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-adminrecharge',
  templateUrl: './adminrecharge.component.html',
  styleUrls: ['./adminrecharge.component.css']
})
export class AdminrechargeComponent implements OnInit {
  id:any;
  amount:any;
  status:boolean;
  msg:string="";
  constructor(public userService:UserService,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
  }
  recharge()
  {
    this.status=this.userService.rechargeUser(this.id,this.amount)
    
    if (this.status){
      console.log("success");
      this.msg = "recharge Successful";
    }
    else{
      console.log("failed");
      this.msg = "invalid ID";
    }
  }
}
