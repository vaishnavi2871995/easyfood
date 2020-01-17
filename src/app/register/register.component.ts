import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userID:number=3;
  username: string = "";
  password: string = "";
  cnfpassword:string="";
  age:number;
  contact:number;
  msg: string = "";
  user:any;
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
  registerUser(){
    if(this.password == this.cnfpassword)
    { 
      this.user={"UserID":this.userID+1,"Username":this.username,"Password":this.password,"Age":this.age,"Contact":this.contact}
      this.msg=this.userService.registerUser(this.user);
    }
    else{
      this.msg="password and confirm password should match";
    }
  
  }

}
