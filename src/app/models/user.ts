import { Posting } from './posting';

export class User {
	id:number;
	username:string;
	password:string;
	email:string;
	phoneNumber:string;

	constructor(id:number, username:string, password:string, email:string, phoneNumber:string) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	toString():string{
		return `ID[${this.id}], Username[${this.username}], Email[${this.email}], Phone[${this.phoneNumber}]`;
	}
}