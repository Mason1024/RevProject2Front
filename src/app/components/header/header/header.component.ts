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
      
  }

  logout(user:User):void {

  }

  login():void {

  }

  register():void {

  }

}
