import { Injectable } from '@angular/core';
import { UserOrdersService} from "./user-orders.service";
@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  users:any=[
    { "UserID": 1, "UserName": "user1", "Password": "111","Age": "21","Contact": "11111","wallet":1000},
    { "UserID": 2, "UserName": "user2", "Password": "222","Age": "22","Contact": "22222","walllet":1000 },
     { "UserID": 3, "UserName": "user3", "Password": "333","Age": "23","Contact": "33333","walllet":1000 }
   
  ];
 
  status:Boolean=false;
  st:Boolean=false;
  st1:boolean=false;
  constructor(public userorderservice:UserOrdersService) { }

  public authenticateUser(username:string,password:string):any{
    console.log(username);
    console.log(password);
    this.status=false;
    this.users.forEach(user => {
      if(username == user.UserName && password == user.Password)
         this.status=true;
         
    });
    return this.status;

  }
  public registerUser(u:any): any {
    console.log(u);
    this.users.push(u);
    return "Registered Successfully";
  }
  public rechargeUser(username:string,amount:number):any
  {
    this.users.forEach(user => {
      console.log(username);
      console.log(user.UserName);
      if(username==user.UserName){
        console.log("inside loop");
        user.wallet=user.wallet+amount;
         this.st=true;
      }
     
         
    });
    return this.st;

  }
  public payUser(username:any,amount:any):any
  {
    this.users.forEach(user => {
      if(username == user.UserName)
        user.wallet=user.wallet-amount;
         this.st1=true;
         
    });
    return this.st1;

  }

 
}
