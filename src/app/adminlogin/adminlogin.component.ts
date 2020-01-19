import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
  constructor(public userService:UserService,public router:Router,public _router:ActivatedRoute) { }

  ngOnInit() {
  }
  userLogin(){
    console.log(this.username);
    console.log(this.password);
    this.status=this.userService.authenticateUser(this.username,this.password)
    
    if (this.status){
      console.log("success");
      this.msg = "Login Successful";
    
     this.router.navigate(['/userOrder']);
    }
    else{
      console.log("failed");
      this.msg = "Login Failed";
    }
  }

}
