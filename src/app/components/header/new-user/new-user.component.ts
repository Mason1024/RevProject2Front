import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  username:string="";
  password:string="";
  confirmPassword:string="";
  email:string="";
  phone:string="";

  hasError:boolean=false;

  constructor(
    private currentUser:CurrentUserService,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {

  }

  validate() {
    // Make sure all fields are filled in
    if(this.username.length > 0 && 
      this.password.length > 0 && 
      this.confirmPassword.length > 0 && 
      (this.email.length > 0 || this.phone.length > 0)) {
        // Make sure passwords are equal
        if (this.password === this.confirmPassword) {
          let newUser = new User(0, this.username, this.password, this.email, this.phone);
          
          //Create user and assign to newUser
          this.userService.createUser(newUser).then(info => {
            newUser = info;
          }).catch (response => {
            console.log("Error");
          });
          
          // Check if user creation was successful
          if (newUser != null) {
            this.currentUser.updateCurrentUser(newUser);
            this.router.navigate(["userHub"]);
          }
        }
    }else{
      this.hasError=true;
    }
  }

  home(){
    this.router.navigate(["userHub"]);
  }
}

