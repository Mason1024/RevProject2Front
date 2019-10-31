import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing'
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = "http://ec2-18-221-114-64.us-east-2.compute.amazonaws.com:9000/";

  constructor(private http:HttpClient) { }

  // Create
  createUser(user:User):Promise<User> {
    let promise:Promise<User> = this.http.post<User>(`${this.baseUrl}users/`, user).toPromise();
    return promise;
  }

  // Read
  getUserById(id:number):Promise<User> {
    let promise:Promise<User> = this.http.get<User>(`${this.baseUrl}users/${id}/`).toPromise();
    return promise;
  }

  getAllUsers():Promise<User[]> {
    let promise:Promise<User[]> = this.http.get<User[]>(`${this.baseUrl}users/`).toPromise();
    return promise;
  }

  login(username:string, password:string):Promise<User> {
    let promise = this.http.post<User>(`${this.baseUrl}login`, {username, password}).toPromise();
    return promise;
  }

  // Update
  updateUser(user:User):Promise<User> {
    let promise:Promise<User> = this.http.put<User>(`${this.baseUrl}users/`, user).toPromise();
    return promise;
  }

  // Delete
  deleteUser(id:number):Promise<boolean> {
    let promise:Promise<boolean> = this.http.delete<boolean>(`${this.baseUrl}users/${id}/`).toPromise();
    return promise;
  }
}
