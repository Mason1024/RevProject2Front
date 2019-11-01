import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser = new ReplaySubject <User>(null);
  currentUser$:Observable<User> = this.currentUser.asObservable();
  constructor() { }

  updateCurrentUser(user:User){
    this.currentUser.next(user);
  }
  nullCurrentUser(){
    this.currentUser.next(null);
  }

}
