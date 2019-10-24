import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = "http://ec2-18-221-114-64.us-east-2.compute.amazonaws.com:9000/";

  constructor(private http:HttpClient) { }

  getUserById(id:number):Promise<User> {
    let response:Promise<User> = this.http.get<User>(`${this.baseUrl}users/${id}/`).toPromise();
    return response;
  }

  getUserByUsername(username:string):Promise<User> {
    let response:Promise<User> = this.http.get<User>(`${this.baseUrl}users/${username}/`).toPromise();
    return response;
  }

  getAllUsers():Promise<User[]> {
    let response:Promise<User[]> = this.http.get<User[]>(`${this.baseUrl}users/`).toPromise();
    return response;
  }
}
