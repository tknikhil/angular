import { Injectable } from '@angular/core';

@Injectable()
export class UserserviceService {
  user:any;

  setUser(newUser){
    this.user=newUser;
  }
  getUser():any{
    return this.user;
  }
  constructor() { }
}
