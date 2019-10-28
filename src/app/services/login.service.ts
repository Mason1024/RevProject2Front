import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string = "http://ec2-18-221-114-64.us-east-2.compute.amazonaws.com:9000";

  constructor(private httpClient:HttpClient) { }

  validate(username:string, password:string){
    return this.httpClient.post(this.url, {username,password}, {responseType:"text", observe:"response"});
  }

}
