import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posting } from '../models/posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  baseUrl:string = "http://ec2-18-221-114-64.us-east-2.compute.amazonaws.com:9000/";

  constructor(private http:HttpClient) { }

  getPostingById(id:number):Promise<Posting>{
    let response:Promise<Posting> = this.http.get<Posting>(`${this.baseUrl}postings/${id}`).toPromise();
    return response;
  }

  getAllPostingsByUserId(id:number):Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/allbyuser/${id}`).toPromise();
    return response;  
  }

  getAllPostingsByCategory(category:string):Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/allbycategory/${category}`).toPromise();
    return response
  }

  getAllPostingsByEndingSoonest():Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/ending`).toPromise();
    return response;  
  }

  getNewestByRange(lowInd:number,upInd:number):Promise<Posting[]>{
    let response:Promise<Posting[]> = this.http.get<Posting[]>(`${this.baseUrl}postings/range/${lowInd}/${upInd}`).toPromise();
    return response;  
  }

  getAllPostings():Promise<any>{
    let response:Promise<any> = this.http.get(`${this.baseUrl}postings`).toPromise();
    return response;  
  }
  
  createPosting(posting:Posting):Promise<Posting>{
    let response:Promise<Posting> = this.http.post<Posting>(`${this.baseUrl}postings`,posting).toPromise();
    return response;
  }

  updatePosting(posting:Posting):Promise<Posting>{
    let response:Promise<Posting> = this.http.put<Posting>(`${this.baseUrl}postings,`,posting).toPromise();
    return response;
  }

  deletePosting(id:number):Promise<boolean>{
    let response:Promise<boolean> = this.http.delete<boolean>(`${this.baseUrl}postings/${id}`).toPromise();
    return response;
  }
}
