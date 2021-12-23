import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[] = ["NAME: Sumaiya S","REGISTER NO: 1919102165","DEPARTMENT: CSE"]
  info2: string[] = ["NAME: VijaySreeRam","REGISTER NO:1919102134","DEPARTMENT: ECE"]
  info3: string[] = ["NAME: SWETHA","REGITER NO: 191910235","MECH"]

  getInfo1():string[]{
    return this.info1

  }
  getInfo2():string[]{
    return this.info2

  }
  getInfo3():string[]{
    return this.info3

  }

  addInfo(info: any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1


  }

  constructor() { }
}
