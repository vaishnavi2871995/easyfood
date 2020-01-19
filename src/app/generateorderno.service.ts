import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateordernoService {
orderNO:number=0;

  constructor() { }
  generateNO():any{
    return ++this.orderNO;
  }
}
