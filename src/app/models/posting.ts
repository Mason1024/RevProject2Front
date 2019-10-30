import { User } from "./user";

export class Posting{

    id:number;
    user:User;
    title:string;
    description:string;
    category:string;
    location:string;
    initDate:number;
    endDate:number;

    constructor(id:number,user:User,description:string,title:string,category:string,
        location:string,initDate:number,endDate:number){
            this.id = id;
            this.user = user;
            this.title = title;
            this.description = description;
            this.category = category;
            this.location = location;
            this.initDate = initDate;
            this.endDate = endDate;
        }
}