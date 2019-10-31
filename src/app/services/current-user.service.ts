import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { }

  private currentUser = new BehaviorSubject(undefined);
  private observeCurrentUser = this.currentUser.asObservable();

  setUser(newUser:User){
    this.currentUser.next(newUser);
  }

  getStaticUser(){
    return this.currentUser.getValue();
  }

  getUser(){
    return this.observeCurrentUser;
  }
}
