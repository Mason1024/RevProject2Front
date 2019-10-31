import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:User;

  constructor(
    private currentUser:CurrentUserService,
    private router:Router
    ) { }

  ngOnInit() { // May need to switch to obversable method
    this.currentUser.currentUser$.subscribe(data =>{ this.user = data});
  }

  // CurrentUserService.data.subscribe(data:User => {
  //   this.user = data;
  // })

  hub(user:User):void {
      // Route to user-hub
      this.router.navigate(["userHub"]);
  }

  market(user:User):void{
    // Route to marketplace
    this.router.navigate(["market"])
  }

  logout(user:User):void {
    this.currentUser.nullCurrentUser();
    this.router.navigate(["home"]);
  }

  login():void {
    // Route to login
    this.router.navigate(["login"]);
  }

  register():void {
    // Route to new-user
    this.router.navigate(["newUser"])
  }

}
