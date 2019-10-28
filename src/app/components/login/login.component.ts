import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_username:string;
  login_password:string;

  constructor(
    private loginService:LoginService,
    private currentUser:CurrentUserService,
    private router:Router,
    private regModal:NgbModal
  ) { }

  ngOnInit() {
  }

  validate():void{

    this.loginService.validate(this.login_username,this.login_password).subscribe(
      resp=>{
        let respJSON = JSON.parse(resp.body);
        if(resp.status == 202){
          //user successfully logged in
          let newUser = new User();
          newUser.$u_id = respJSON["u_id"];
          newUser.$username = respJSON["username"];
          newUser.$password = respJSON["password"];
          newUser.$email = respJSON["email"];
          newUser.$phone_number = respJSON["phone_number"];
          newUser.$postings = respJSON["postings"];
          this.currentUser.setUser(newUser);
        }
        this.router.navigate(["home"]);
      },
      err=>{
        console.log("Error, failed login");
      }
    );
  }

  register(){
    //unimplemented
    //const modalRef = this.regModal.open(RegisterComponent);
    console.log("Error");
  }
}
