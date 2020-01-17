import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password: string;
  status: boolean = false;
  msg:string;
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
  userLogin(){
    console.log(this.username);
    console.log(this.password);
    this.status=this.userService.authenticateUser(this.username,this.password)
    
    if (this.status){
      console.log("success");
      this.msg = "Login Successful";
    }
    else{
      console.log("failed");
      this.msg = "Login Failed";
    }
  }


}
