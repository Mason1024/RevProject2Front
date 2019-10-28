import { Posting } from './posting';

export class User {
	id:number;
	username:string;
	password:string;
	email:string;
	phoneNumber:string;
	postings:Posting[]; // Array of post Ids

	constructor(id:number, username:string, password:string, email:string, phone_number:string, postings:Posting[]) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phoneNumber = phone_number;
		this.postings = postings;
	}

	public set postings(value: Posting[]) {
		this.postings = value;
    }
}