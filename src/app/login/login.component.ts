import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private route: Router) { }

  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  login():void{
    var result=this.userService.login(this.loginForm?.value.email!,this.loginForm.value.password! )
    console.log(this.loginForm.value);
    if(result){
      localStorage.setItem('token',"true");
      this.route.navigate(['product']);
    }
    else{
      this.route.navigate(['login']);
    }
  }
}
