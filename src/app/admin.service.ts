import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admins:any=[
    { "UserID": 1, "UserName": "user1", "Password": "111","Age": "21","Contact": "11111"},
    { "UserID": 2, "UserName": "user2", "Password": "222","Age": "22","Contact": "22222" },
     { "UserID": 3, "UserName": "user3", "Password": "333","Age": "23","Contact": "33333" }
   
  ];

  status:Boolean;
  constructor() { }
  public authenticateUser(username:string,password:string):any{
    console.log(username);
    console.log(password);
    this.status=false;
    this.admins.forEach(user => {
      if(username == user.UserName && password == user.Password)
         this.status=true;
    });
    return this.status;

  }
  public registerUser(u:any): any {
    console.log(u);
    this.admins.push(u);
    return "Registered Successfully";
  }

}
