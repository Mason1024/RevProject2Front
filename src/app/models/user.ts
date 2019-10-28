import { Posting } from './posting';

export class User {
	u_id:number;
	username:string;
	password:string;
	email:string;
	phone_number:string;
	postings:Posting[]; // Array of post Ids

	constructor(){}

	public setAll(newUser:User):void{
			this.$u_id = newUser.$u_id;
			this.$username = newUser.$username;
			this.$password = newUser.$password;
			this.$email = newUser.$email;
			this.$phone_number = newUser.$phone_number;
			this.$postings = newUser.$postings;
	}

	 //userID
	 public get $u_id(): number {
		return this.u_id;
	}

	public set $u_id(value: number) {
		this.u_id = value;
	}

    //username
	public get $username(): string {
		return this.username;
	}

	public set $username(value: string) {
		this.username = value;
	}

    //password
	public get $password(): string {
		return this.password;
	}

	public set $password(value: string) {
		this.password = value;
	}

    //email
	public get $email(): string {
		return this.email;
	}

	public set $email(value: string) {
		this.email = value;
    }

	//phone number
	public get $phone_number(): string {
		return this.phone_number;
	}

	public set $phone_number(value: string) {
		this.phone_number = value;
	}
	
	
    //Postings
	public get $postings(): Posting[] {
		return this.postings;
	}

	public set $postings(value: Posting[]) {
		this.postings = value;
    }
}