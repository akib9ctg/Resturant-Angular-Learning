import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(email: string, password: string):boolean{
    if(email=='admin' && password =='admin'){
      return true;
    }
    else{
      return false;
    }
  }
  IsLoggedIn():boolean{
    return localStorage.getItem('token')=='true'?true: false;
  }
}
