import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:User;

  constructor(private uService:CurrentUserService) { }

  ngOnInit() { // May need to switch to obversable method
    this.user = this.uService.getStaticUser();
  }

  hub(user:User):void {
      // Route to user-hub
  }

  logout(user:User):void {
    user = null;
    // Route to home
  }

  login():void {
    // Route to login
  }

  register():void {
    // Route to new-user
  }

}
