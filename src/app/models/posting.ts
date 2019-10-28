export class Posting{

    id:number;
    user:number;
    description:string;
    category:string;
    location:string;
    initDate:number;
    endDate:number;

    constructor(id:number,u_id:number,description:string,category:string,
        location:string,init_date:number,end_date:number){
            this.id = id;
            this.id = id;
            this.description = description;
            this.category = category;
            this.location = location;
            this.initDate = init_date;
            this.endDate = end_date;
        }
}