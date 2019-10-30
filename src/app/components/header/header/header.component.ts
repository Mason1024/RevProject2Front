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
    private uService:CurrentUserService,
    private router:Router
    ) { }

  ngOnInit() { // May need to switch to obversable method
    this.user = this.uService.getStaticUser();
  }

  hub(user:User):void {
      // Route to user-hub
  }

  logout(user:User):void {
    user = null;
    this.router.navigate(["home"]);
  }

  login():void {
    // Route to login
  }

  register():void {
    // Route to new-user
  }

}
