import { Component, OnInit } from '@angular/core';
import { AdminService } from "../admin.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username:string;
  password: string;
  status: boolean = false;
  msg:string;
  constructor(public adminService:AdminService ,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
  }
  public allOrders(){
    console.log(this.username);
    console.log(this.password);
    this.status=this.adminService.authenticateUser(this.username,this.password)
    
    if (this.status){
      console.log("success");
      this.msg = "Login Successful";
    
     this.router.navigate(['/adminorder']);
    }
    else{
      console.log("failed");
      this.msg = "Login Failed";
    }
  }

  public recharge(){
    console.log(this.username);
    console.log(this.password);
    this.status=this.adminService.authenticateUser(this.username,this.password)
    
    if (this.status){
      console.log("success");
      this.msg = "Login Successful";
    
     this.router.navigate(['/adminrecharge']);
    }
    else{
      console.log("failed");
      this.msg = "Login Failed";
    }

  }

}
