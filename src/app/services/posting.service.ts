import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posting } from '../models/posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  baseUrl:string = "http://ec2-18-221-114-64.us-east-2.compute.amazonaws.com:9000/";

  constructor(private http:HttpClient) { }

  getPostingById(id:number):Promise<Posting>{
    let response:Promise<Posting> = this.http.get<Posting>(`${this.baseUrl}postings/${id}/`).toPromise();
    return response;
  }

  getAllPostingsByUserId(id:number):Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/allbyuser/${id}/`).toPromise();
    return response;  
  }

  getAllPostingsByEndingSoonest():Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/ending/`).toPromise();
    return response;  
  }

  getNewestByRange(lowInd:number,upInd:number):Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/range/${lowInd}/${upInd}`).toPromise();
    return response;  
  }

  getAllPostings():Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/`).toPromise();
    return response;  
  }
  
  createPosting(posting:Posting):Promise<Posting>{
    let request:Promise<Posting> = this.http.post<Posting>(`${this.baseUrl}posting/`,posting).toPromise();
    return request;
  }

  updatePosting(posting:Posting):Promise<Posting>{
    let request:Promise<Posting> = this.http.put<Posting>(`${this.baseUrl}posting/,`,posting).toPromise();
    return request;
  }

  deletePosting(id:number):Promise<boolean>{
    let request:Promise<boolean> = this.http.delete<boolean>(`${this.baseUrl}posting/${id}`).toPromise();
    return request;
  }
}
