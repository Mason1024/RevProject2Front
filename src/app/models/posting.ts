import { User } from "./user";

export class Posting{

    id:number;
    user:User;
    description:string;
    category:string;
    location:string;
    initDate:number;
    endDate:number;
    title:string;
    img:string;

    constructor(id:number,user:User,description:string,category:string,
        location:string,initDate:number,endDate:number, title:string, img:string){
            this.id = id;
            this.user = user;
            this.description = description;
            this.category = category;
            this.location = location;
            this.initDate = initDate;
            this.endDate = endDate;
            this.title = title;
            this.img = img
        }
}