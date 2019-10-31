import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { CurrentUserService } from '../../../services/current-user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

/**
 * @title Login
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(
    private loginService:LoginService,
    private currentUser:CurrentUserService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  home():void {
    this.router.navigate(["home"]);
  }

  validate():void{

    this.loginService.validate(this.username,this.password).subscribe(
      resp=>{
        let respJSON = JSON.parse(resp.body);
        if(resp.status == 200){
          //user successfully logged in
          let newUser = new User(respJSON["id"], respJSON["username"], respJSON["password"], respJSON["email"], respJSON["phoneNumber"]);
          this.currentUser.updateCurrentUser(newUser);
          this.router.navigate(["userHub"]);
        }
      },
      err=>{
        console.log("Error, failed login");
      }
    );
  }
}
