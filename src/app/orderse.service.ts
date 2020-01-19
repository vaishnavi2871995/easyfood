import { Injectable } from '@angular/core';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class OrderseService {
 
order:any=[
  {"orderNo":1111 ,"items":130},
  {"orderNo":2222 ,"items":50},
  {"orderNo":3333 ,"items":130}];

  constructor() {}
      public getOrders():any{
      return this.order;
    }
   
}
