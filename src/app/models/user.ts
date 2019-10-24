import { Posting } from './posting';

export class User {
	u_id:number;
	username:string;
	password:string;
	email:string;
	phone_number:string;
	postings:Posting[]; // Array of post Ids

	constructor(u_id:number, username:string, password:string, email:string, phone_number:string, postings:Posting[]) {
		this.u_id = u_id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phone_number = phone_number;
		this.postings = postings;
	}

}