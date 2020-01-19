import { Component, OnInit } from '@angular/core';
import { VendorService } from "../vendor.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
  username:string;
  password: string;
  status: boolean = false;
  msg:string;
  constructor(public vendorservice:VendorService,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
  }
  userLogin(){
    console.log(this.username);
    console.log(this.password);
    this.status=this.vendorservice.authenticateUser(this.username,this.password)
    
    if (this.status){
      console.log("success");
      this.msg = "Login Successful";
    
     this.router.navigate(['/vendororder']);
    }
    else{
      console.log("failed");
      this.msg = "Login Failed";
    }
  }

}
